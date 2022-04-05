import * as React from 'react'
import { BoldIcon, ItalicIcon, LinkIcon, ListIcon } from '@/components/icons'
import { browserEnv } from '@/env/browser'
import { classNames } from '@/lib/classnames'
import { getSuggestionData, handleUploadImages } from '@/lib/editor'
import { Switch } from '@headlessui/react'
import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize'
import getCaretCoordinates from 'textarea-caret'
import TextareaMarkdown, { TextareaMarkdownRef } from 'textarea-markdown-editor'
import MarkdownPreview from './markDownPreview'
import Suggestion, { suggestionReducer, SuggestionResult } from './suggestion'

type MarkdownEditorProps = {
  label?: string
  value: string
  onChange: (value: string) => void
  onTriggerSubmit?: () => void
} & Omit<
  TextareaAutosizeProps,
  'value' | 'onChange' | 'onKeyDown' | 'onInput' | 'onPaste' | 'onDrop'
>

const TOOLBAR_ITEMS = [
  {
    commandTrigger: 'bold',
    icon: <BoldIcon className="w-4 h-4" />,
    name: 'Bold',
  },
  {
    commandTrigger: 'italic',
    icon: <ItalicIcon className="w-4 h-4" />,
    name: 'Italic',
  },
  {
    commandTrigger: 'unordered-list',
    icon: <ListIcon className="w-4 h-4" />,
    name: 'Unordered List',
  },
  {
    commandTrigger: 'link',
    icon: <LinkIcon className="w-4 h-4" />,
    name: 'Link',
  },
]

export function MarkdownEditor({
  label,
  value,
  minRows = 15,
  onChange,
  onTriggerSubmit,
  ...rest
}: MarkdownEditorProps) {
  const textareaMarkdownRef = React.useRef<TextareaMarkdownRef>(null)
  const [showPreview, setShowPreview] = React.useState(false)
  const [suggestionState, suggestionDispatch] = React.useReducer(
    suggestionReducer,
    {
      isOpen: false,
      type: null,
      position: null,
      triggerIdx: null,
      query: '',
    }
  )

  function closeSuggestion() {
    suggestionDispatch({ type: 'close' })
  }

  return (
    <div>
      {label && <label className="block mb-2 font-semibold">{label}</label>}
      <div>
        <div className="flex items-center justify-between gap-4 px-4 py-px border rounded bg-primary">
          <div className="flex gap-2 -ml-2">
            {TOOLBAR_ITEMS.map((toolbarItem) => (
              <button
                key={toolbarItem.commandTrigger}
                type="button"
                onClick={() => {
                  textareaMarkdownRef.current?.trigger(
                    toolbarItem.commandTrigger
                  )
                }}
                className={classNames(
                  'rounded inline-flex items-center justify-center h-8 w-8 disabled:opacity-50 disabled:cursor-default focus:border focus-ring',
                  !showPreview && 'transition-colors hover:text-blue'
                )}
                disabled={showPreview}
                title={toolbarItem.name}
              >
                {toolbarItem.icon}
              </button>
            ))}
          </div>

          <Switch.Group as="div" className="flex items-center">
            <Switch
              checked={showPreview}
              onChange={(value) => {
                if (value === false) {
                  textareaMarkdownRef.current?.focus()
                }
                setShowPreview(value)
              }}
              className={classNames(
                showPreview ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-700',
                'relative inline-flex flex-shrink-0 items-center h-[18px] w-8 rounded-full transition-colors ease-in-out duration-200 focus-ring'
              )}
            >
              <span
                className={classNames(
                  showPreview ? 'translate-x-4' : 'translate-x-0.5',
                  'inline-block w-3.5 h-3.5 transform bg-white dark:bg-gray-100 rounded-full transition-transform ease-in-out duration-200'
                )}
              />
            </Switch>
            <Switch.Label
              as="span"
              className="ml-2 text-xs cursor-pointer select-none"
            >
              Preview
            </Switch.Label>
          </Switch.Group>
        </div>

        <div className={classNames('mt-2 relative', showPreview && 'sr-only')}>
          <TextareaMarkdown.Wrapper
            ref={textareaMarkdownRef}
            commands={[
              {
                name: 'indent',
                enable: false,
              },
            ]}
          >
            <TextareaAutosize
              {...rest}
              value={value}
              onChange={(event) => {
                onChange(event.target.value)

                const { keystrokeTriggered, triggerIdx, type, query } =
                  getSuggestionData(event.currentTarget)

                if (!keystrokeTriggered) {
                  if (suggestionState.isOpen) {
                    closeSuggestion()
                  }
                  return
                }

                if (suggestionState.isOpen) {
                  suggestionDispatch({ type: 'updateQuery', payload: query })
                } else {
                  const coords = getCaretCoordinates(
                    event.currentTarget,
                    triggerIdx + 1
                  )
                  suggestionDispatch({
                    type: 'open',
                    payload: {
                      type,
                      position: {
                        top: coords.top + coords.height,
                        left: coords.left,
                      },
                      triggerIdx,
                      query,
                    },
                  })
                }
              }}
              onKeyDown={(event) => {
                const { code, metaKey } = event
                if (code === 'Enter' && metaKey) {
                  onTriggerSubmit?.()
                }
              }}
              onPaste={(event) => {
                if (browserEnv.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD) {
                  const filesArray = Array.from(event.clipboardData.files)

                  if (filesArray.length === 0) {
                    return
                  }

                  const imageFiles = filesArray.filter((file) =>
                    /image/i.test(file.type)
                  )

                  if (imageFiles.length === 0) {
                    return
                  }

                  event.preventDefault()

                  handleUploadImages(event.currentTarget, imageFiles)
                }
              }}
              onDrop={(event) => {
                if (browserEnv.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD) {
                  const filesArray = Array.from(event.dataTransfer.files)

                  if (filesArray.length === 0) {
                    return
                  }

                  const imageFiles = filesArray.filter((file) =>
                    /image/i.test(file.type)
                  )

                  if (imageFiles.length === 0) {
                    return
                  }

                  event.preventDefault()

                  handleUploadImages(event.currentTarget, imageFiles)
                }
              }}
              className="block w-full rounded shadow-sm bg-secondary border-secondary focus-ring"
              minRows={minRows}
            />
          </TextareaMarkdown.Wrapper>

          <Suggestion
            state={suggestionState}
            onSelect={(suggestionResult: SuggestionResult) => {
              const preSuggestion = value.slice(0, suggestionState.triggerIdx!)
              const postSuggestion = value.slice(
                textareaMarkdownRef.current?.selectionStart
              )

              let suggestionInsertion = ''

              if (suggestionState.type === 'mention') {
                suggestionInsertion = `[${suggestionResult.label}](/profile/${suggestionResult.value})`
              }

              if (suggestionState.type === 'emoji') {
                suggestionInsertion = suggestionResult.value
              }

              const newEditorValue = `${preSuggestion}${suggestionInsertion} ${postSuggestion}`

              onChange(newEditorValue)
              closeSuggestion()

              setTimeout(() => {
                const caretPosition =
                  newEditorValue.length - postSuggestion.length

                textareaMarkdownRef.current?.focus()
                textareaMarkdownRef.current?.setSelectionRange(
                  caretPosition,
                  caretPosition
                )
              }, 0)
            }}
            onClose={closeSuggestion}
          />
        </div>

        {showPreview && <MarkdownPreview markdown={value} />}
      </div>
    </div>
  )
}
