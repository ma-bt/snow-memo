import { useEffect } from "react"
import { differenceInMilliseconds } from "date-fns"

export interface IMemoData {
  title: string
  memo: string
  reminderDate: string
  id: string
}
export default function Reminder({ memos }: { memos: IMemoData[] }) {
  useEffect(() => {
    if (memos && memos.length > 0) {
      const reminders =
        memos && memos.filter((memo: IMemoData) => memo.reminderDate)
      reminders.forEach((memo: IMemoData) => {
        const timeLeft = differenceInMilliseconds(
          new Date(memo.reminderDate),
          new Date(),
        )
        if (timeLeft > 0) {
          setTimeout(() => {
            alert(`Reminder: ${memo.title}`)
          }, timeLeft)
        }
      })
    }
  }, [memos])

  return null
}
