import { Button } from "../../components/button/Button"

interface IMemoDesProps {
  data: { id: string; title: string; memo: string }[]
  selectedId: string
  handleDelete: (id: string) => void
  handleEdit: (id: string) => void
}
const MemoDes = ({
  data,
  selectedId,
  handleDelete,
  handleEdit,
}: IMemoDesProps) => {
  const value = data?.find((memo) => memo.id === selectedId)
  console.log(value)
  return (
    <div className=" flex justify-between flex-col col-span-8 border border-[#E3E4E4] p-4 rounded-s-sm min-h-72">
      <div>{value?.memo}</div>

      {value?.memo && (
        <div className="flex gap-5">
          <Button
            className="min-w-28 flex "
            size="sm"
            onClick={() => handleEdit(selectedId)}
          >
            Edit
          </Button>
          <Button
            className="min-w-28 flex "
            size="sm"
            variant="secondary"
            onClick={() => handleDelete(selectedId)}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  )
}

export default MemoDes
