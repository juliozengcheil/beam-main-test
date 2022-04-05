import * as React from 'react'
import { useQuery } from 'react-query'
import { trpc } from '@/lib/trpc'
import { matchSorter } from 'match-sorter'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { ItemOptions, useItemList } from 'use-item-list'
import { classNames } from '@/lib/classnames'

type SuggestionPosition = {
  top: number
  left: number
}

type SuggestionType = 'mention' | 'emoji'

type SuggestionState = {
  isOpen: boolean
  type: SuggestionType | null
  position: SuggestionPosition | null
  triggerIdx: number | null
  query: string
}

export type SuggestionResult = {
  label: string
  value: string
}

type SuggestionActionType =
  | {
      type: 'open'
      payload: {
        type: SuggestionType
        position: SuggestionPosition
        triggerIdx: number
        query: string
      }
    }
  | { type: 'close' }
  | { type: 'updateQuery'; payload: string }

export function suggestionReducer(
  state: SuggestionState,
  action: SuggestionActionType
) {
  switch (action.type) {
    case 'open':
      return {
        isOpen: true,
        type: action.payload.type,
        position: action.payload.position,
        triggerIdx: action.payload.triggerIdx,
        query: action.payload.query,
      }
    case 'close':
      return {
        isOpen: false,
        type: null,
        position: null,
        triggerIdx: null,
        query: '',
      }
    case 'updateQuery':
      return { ...state, query: action.payload }
    default:
      throw new Error()
  }
}

export default function Suggestion({
  state,
  onSelect,
  onClose,
}: {
  state: SuggestionState
  onSelect: (suggestionResult: SuggestionResult) => void
  onClose: () => void
}) {
  const isMentionType = state.type === 'mention'
  const isEmojiType = state.type === 'emoji'

  const emojiListQuery = useQuery(
    'emojiList',
    async () => {
      const gemoji = (await import('gemoji')).gemoji
      return gemoji
    },
    {
      enabled: state.isOpen && isEmojiType,
      staleTime: Infinity,
    }
  )

  const mentionListQuery = trpc.useQuery(['user.mentionList'], {
    enabled: state.isOpen && isMentionType,
    staleTime: 5 * 60 * 1000,
  })

  let suggestionList: SuggestionResult[] = []

  if (isMentionType && mentionListQuery.data) {
    suggestionList = matchSorter(mentionListQuery.data, state.query, {
      keys: ['name'],
    })
      .slice(0, 5)
      .map((item) => ({ label: item.name!, value: item.id }))
  }

  if (isEmojiType && emojiListQuery.data) {
    suggestionList = matchSorter(emojiListQuery.data, state.query, {
      keys: ['names', 'tags'],
      threshold: matchSorter.rankings.STARTS_WITH,
    })
      .slice(0, 5)
      .map((item) => ({
        label: `${item.emoji} ${item.names[0]}`,
        value: item.emoji,
      }))
  }

  if (!state.isOpen || !state.position || suggestionList.length === 0) {
    return null
  }

  return (
    <SuggestionList
      suggestionList={suggestionList}
      position={state.position}
      onSelect={onSelect}
      onClose={onClose}
    />
  )
}

function SuggestionList({
  suggestionList,
  position,
  onSelect,
  onClose,
}: {
  suggestionList: SuggestionResult[]
  position: SuggestionPosition
  onSelect: (suggestionResult: SuggestionResult) => void
  onClose: () => void
}) {
  const ref = useDetectClickOutside({ onTriggered: onClose })

  const { moveHighlightedItem, selectHighlightedItem, useItem } = useItemList({
    onSelect: (item) => {
      onSelect(item.value)
    },
  })

  React.useEffect(() => {
    function handleKeydownEvent(event: KeyboardEvent) {
      const { code } = event

      const preventDefaultCodes = ['ArrowUp', 'ArrowDown', 'Enter', 'Tab']

      if (preventDefaultCodes.includes(code)) {
        event.preventDefault()
      }

      if (code === 'ArrowUp') {
        moveHighlightedItem(-1)
      }

      if (code === 'ArrowDown') {
        moveHighlightedItem(1)
      }

      if (code === 'Enter' || code === 'Tab') {
        selectHighlightedItem()
      }
    }

    document.addEventListener('keydown', handleKeydownEvent)
    return () => {
      document.removeEventListener('keydown', handleKeydownEvent)
    }
  }, [moveHighlightedItem, selectHighlightedItem])

  return (
    <div
      ref={ref}
      className="absolute w-56 max-h-[286px] border rounded shadow-lg bg-primary overflow-y-auto"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <ul role="listbox" className="divide-y divide-primary">
        {suggestionList.map((suggestionResult) => (
          <SuggestionResult
            key={suggestionResult.value}
            useItem={useItem}
            suggestionResult={suggestionResult}
          />
        ))}
      </ul>
    </div>
  )
}

function SuggestionResult({
  useItem,
  suggestionResult,
}: {
  useItem: ({ ref, text, value, disabled }: ItemOptions) => {
    id: string
    index: number
    highlight: () => void
    select: () => void
    selected: any
    useHighlighted: () => Boolean
  }
  suggestionResult: SuggestionResult
}) {
  const ref = React.useRef<HTMLLIElement>(null)
  const { id, index, highlight, select, useHighlighted } = useItem({
    ref,
    value: suggestionResult,
  })
  const highlighted = useHighlighted()

  return (
    <li
      ref={ref}
      id={id}
      onMouseEnter={highlight}
      onClick={select}
      role="option"
      aria-selected={highlighted ? 'true' : 'false'}
      className={classNames(
        'px-4 py-2 text-sm text-left transition-colors cursor-pointer ',
        highlighted ? 'bg-blue-600 text-white' : 'text-primary'
      )}
    >
      {suggestionResult.label}
    </li>
  )
}
