import { uploadFile } from '@/lib/uploadFile'
import DOMPurify from 'isomorphic-dompurify'
import { marked } from 'marked'
import toast from 'react-hot-toast'
import { Cursor } from 'textarea-markdown-editor'
import type { ResData } from '@/lib/uploadFile'

export function markdownToHtml(markdown: string) {
  return DOMPurify.sanitize(marked.parse(markdown, { breaks: true }))
}

function replacePlaceholder(
  cursor: Cursor,
  placeholder: string,
  replaceWith: string
) {
  cursor.setText(cursor.getText().replace(placeholder, replaceWith))
}

export function handleUploadFiles(
  textareaEl: HTMLTextAreaElement,
  files: File[]
) {
  const cursor = new Cursor(textareaEl)
  const currentLineNumber = cursor.getCurrentPosition().lineNumber

  files.forEach(async (file, idx) => {
    const placeholder = `![Uploading ${file.name}...]()`

    cursor.spliceContent(Cursor.raw`${placeholder}${Cursor.$}`, {
      startLineNumber: currentLineNumber + idx,
    })

    try {
      const uploadedFile: ResData = await uploadFile(file)

      //after succesfully receive the data populate and put it in the UI
      const replaceWith = uploadedFile.isImg
        ? `<img width="${
            uploadedFile.dpi! >= 144
              ? Math.round(uploadedFile.width! / 2)
              : uploadedFile.width
          }" alt="${uploadedFile.originalFilename}" src="${uploadedFile.url}">`
        : `<a href="#" target="_blank">Click to Download the file${uploadedFile.originalFilename}</a>`

      replacePlaceholder(cursor, placeholder, replaceWith)
    } catch (error: any) {
      console.log(error)
      replacePlaceholder(cursor, placeholder, '')
      toast.error(`Error uploading image: ${error.message}`)
    }
  })
}

export function getSuggestionData(textareaEl: HTMLTextAreaElement): {
  keystrokeTriggered: boolean
  triggerIdx: number
  type: 'mention' | 'emoji'
  query: string
} {
  const positionIndex = textareaEl.selectionStart
  const textBeforeCaret = textareaEl.value.slice(0, positionIndex)

  const tokens = textBeforeCaret.split(/\s/)
  const lastToken = tokens[tokens.length - 1]

  const triggerIdx = textBeforeCaret.endsWith(lastToken)
    ? textBeforeCaret.length - lastToken.length
    : -1

  const maybeTrigger = textBeforeCaret[triggerIdx]
  const mentionKeystrokeTriggered = maybeTrigger === '@'
  const emojiKeystrokeTriggered = maybeTrigger === ':'
  const keystrokeTriggered =
    mentionKeystrokeTriggered || emojiKeystrokeTriggered
  const type = mentionKeystrokeTriggered ? 'mention' : 'emoji'

  const query = textBeforeCaret.slice(triggerIdx + 1)

  return {
    keystrokeTriggered,
    triggerIdx,
    type,
    query,
  }
}
