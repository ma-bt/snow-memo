import { useState } from "react"
import { Button } from "../../components/button/Button"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import MemoDes from "./memo-des"
import MemoForm from "./memo-form"
import MemoTitleList from "./memo-title-list"
import Reminder from "./Remainder"
import { MemoData } from "./type"

const Memo = () => {
  //States to handle Memo
  const [memoId, setMemoId] = useState<string>("")
  const [add, setAdd] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)

  const [memos, setMemos] = useLocalStorage<MemoData[]>("memos", [])

  const handleSaveMemo = (newMemo: MemoData) => {
    setMemos((prevMemos) => {
      const memoIndex = prevMemos.findIndex((memo) => memo.id === newMemo.id)
      if (memoIndex > -1) {
        // Update existing memo
        const updatedMemos = [...prevMemos]
        updatedMemos[memoIndex] = newMemo
        return updatedMemos
      }
      // Add new memo
      return [...prevMemos, newMemo]
    })
    setAdd(false)
    setEdit(false)
  }

  /* Delete Existing Memo */
  const handleDeleteMemo = (id: string) => {
    setMemos((prevMemos) =>
      prevMemos.filter((memo: MemoData) => memo.id !== id),
    )
  }
  /* handle Delete all */
  const handleDeleteAll = () => {
    setMemos([])
    localStorage.removeItem("memos")
  }

  /* Edit Memo */
  const handleEditMemo = () => {
    setEdit(true)
  }

  /* set Memo Active */
  const onMemoClick = (e: string) => {
    setMemoId(e)
    setAdd(false)
  }

  /* Add Memo */
  const onAddClick = () => {
    setAdd(true)
    setMemoId("")
  }

  /* Cancel Editing Memo */
  const handleCancel = () => {
    setAdd(false)
    setEdit(false)
  }

  return (
    <div className="relative w-full border-b border-[#E3E4E4] ">
      <p className="text-heading-1 font-semibold  border-b border-[#E3E4E4] pb-2">
        <span className="px-5 pb-1">MEMO</span>
      </p>

      <div className="grid  grid-cols-12  grid-flow-col gap-2  px-6 py-5">
        <div className="col-span-4 flex flex-col gap-2 ">
          <div className="flex gap-3">
            <Button size="sm" width="full" onClick={onAddClick}>
              + ADD
            </Button>
            <Button
              variant="secondary"
              shade="primary"
              size="sm"
              width="full"
              onClick={handleDeleteAll}
            >
              Delete All
            </Button>
          </div>

          <MemoTitleList
            data={memos}
            onMemoClick={onMemoClick}
            selectedId={memoId}
          />
        </div>
        {add || edit ? (
          <MemoForm
            onSave={handleSaveMemo}
            data={memos}
            selectedId={memoId}
            edit={edit}
            handleCancel={handleCancel}
          />
        ) : (
          <MemoDes
            data={memos}
            selectedId={memoId}
            handleDelete={handleDeleteMemo}
            handleEdit={handleEditMemo}
          />
        )}
      </div>
      <Reminder memos={memos} />
    </div>
  )
}

export default Memo
