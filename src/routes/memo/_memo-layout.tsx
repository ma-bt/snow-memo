import { createFileRoute } from "@tanstack/react-router"
import MainLayout from "../../layouts/MainLayout"

export const Route = createFileRoute("/memo/_memo-layout")({
  component: () => {
    return <MainLayout />
  },
})
