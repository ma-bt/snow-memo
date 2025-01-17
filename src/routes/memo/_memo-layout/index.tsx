import { createFileRoute } from "@tanstack/react-router"
import Memo from "../../../pages/memo"

export const Route = createFileRoute("/memo/_memo-layout/")({
  component: () => {
    return <Memo />
  },
})
