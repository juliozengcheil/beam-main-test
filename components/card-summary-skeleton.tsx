import { classNames } from '@/lib/classnames'

type CardSummarySkeletonProps = {
  hideAuthor?: boolean
}

export function CardSummarySkeleton({ hideAuthor }: CardSummarySkeletonProps) {
  return (
    <div className="animate-pulse">
      <div className="w-80 h-64 bg-gray-200 rounded dark:bg-gray-700" />
    </div>
  )
}
