import { HtmlView } from '@/components/html-view'
import { markdownToHtml } from '@/lib/editor'

export default function MarkdownPreview({ markdown }: { markdown: string }) {
  return (
    <div className="pb-6 mt-8 border-b">
      {markdown ? (
        <HtmlView html={markdownToHtml(markdown)} />
      ) : (
        <p>Nothing to preview</p>
      )}
    </div>
  )
}
