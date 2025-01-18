import { format } from "date-fns"
import { FormEvent, useEffect, useState } from "react"
import { Button } from "../../components/button/Button"
import Input from "../../components/input/input"
import { Textarea } from "../../components/input/text-area"
import { MemoData } from "./type"

type MemoFormProps = {
  onSave: (data: MemoData) => void
  data: { id: string; title: string; memo: string; reminderDate?: string }[] // Memo list
  selectedId: string
  edit: boolean
  handleCancel: () => void
}

const MemoForm = ({
  onSave,
  data,
  selectedId,
  edit,
  handleCancel,
}: MemoFormProps) => {
  // States to handle memo fields
  const [title, setTitle] = useState<string>("")
  const [memo, setMemo] = useState<string>("")
  const [reminderDate, setReminderDate] = useState<string>("")
  const [error, setError] = useState({ title: false, memo: false })

  // Update form fields when a memo is selected for editing
  // todo: need to work on Update
  const selectedMemo = data.find((item) => item.id === selectedId)
  useEffect(() => {
    if (selectedMemo) {
      setTitle(selectedMemo.title)
      setMemo(selectedMemo.memo)
      setReminderDate(selectedMemo.reminderDate || "")
    } else {
      setTitle("")
      setMemo("")
      setReminderDate("")
    }
  }, [selectedId, data])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const formattedReminderDate =
      reminderDate && format(new Date(reminderDate), "yyyy-MM-dd HH:mm")
    const currentDateTime = format(Date.now(), "yyyy-MM-dd HH:mm")

    if (!title.trim()) {
      alert("Title is required!")
      setError((prev) => ({ ...prev, title: true }))
      return
    }
    if (formattedReminderDate && formattedReminderDate <= currentDateTime) {
      alert("Reminder should be set for a future date.")
      return
    }

    try {
      onSave({
        id: selectedId || Date.now().toString(),
        title,
        memo,
        reminderDate: formattedReminderDate || "",
      })

      setTitle("")
      setMemo("")
      setReminderDate("")
    } catch (err) {
      console.error("Error During Submission:", err)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 col-span-8 border border-[#E3E4E4] p-4 rounded-s-sm"
    >
      {/* Title Input */}
      <Input
        size="sm"
        value={title}
        className="max-w-md"
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value)
          setError((prev) => ({ ...prev, title: false })) // Clear error on change
        }}
        errorText={error.title ? "Title is required" : undefined}
      />

      {/* Memo Textarea */}
      <Textarea
        className="max-w-lg"
        value={memo}
        placeholder="Memo"
        onChange={(e) => setMemo(e.target.value)}
      />

      {/* Reminder Date Input */}
      <Input
        label="Remainder"
        size="sm"
        className="max-w-md"
        type="datetime-local"
        value={reminderDate}
        onChange={(e) => setReminderDate(e.target.value)}
        placeholder="Reminder"
      />

      <div className="flex gap-5">
        {/* Submit Button */}
        <Button type="submit">Submit</Button>
        {edit && <Button onClick={handleCancel}>Cancel</Button>}
      </div>
    </form>
  )
}

export default MemoForm
