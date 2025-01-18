import { MemoData } from "./type"

interface IMemoTitleProps {
  data: MemoData[]
  onMemoClick: (id: string) => void
  selectedId: string
}

const MemoTitleList = ({ data, onMemoClick, selectedId }: IMemoTitleProps) => {
  return (
    <div className="bg-slate-200  rounded-s-sm  min-h-36 ">
      {data?.length > 0 ? (
        data?.map((e, index) => {
          return (
            <div
              key={e.id}
              className={`text-sm text-wrap text-black py-3 px-4 hover:bg-slate-300 cursor-pointer ${e.id === selectedId && "bg-slate-300"} border-b border-slate-300 `}
              onClick={() => onMemoClick(e.id)}
            >
              {index + 1}. {e.title}
            </div>
          )
        })
      ) : (
        <p className="flex justify-center h-full items-center font-medium">
          No Data Available
        </p>
      )}
    </div>
  )
}

export default MemoTitleList
