import { MemoData } from "./type"

interface IMemoTitleProps {
  data: MemoData[]
  onMemoClick: (id: string) => void
  selectedId: string
}

const MemoTitleList = ({ data, onMemoClick, selectedId }: IMemoTitleProps) => {
  return (
    <div className="bg-slate-200  rounded-s-sm  ">
      {data?.map((e, index) => {
        return (
          <div
            key={e.id}
            className={`text-sm text-wrap text-black py-3 px-4 hover:bg-slate-300 cursor-pointer ${e.id === selectedId && "bg-slate-300"}`}
            onClick={() => onMemoClick(e.id)}
          >
            {index + 1}. {e.title}
          </div>
        )
      })}
    </div>
  )
}

export default MemoTitleList
