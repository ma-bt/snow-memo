import { createRouter, RouterProvider } from "@tanstack/react-router"
import "./App.css"
import { routeTree } from "./routeTree.gen"

const router = createRouter({ routeTree, notFoundMode: "root" })

function App() {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
