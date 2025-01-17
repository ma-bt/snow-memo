import { ScrollRestoration, createRootRoute } from "@tanstack/react-router"
import PageNotFound from "../pages/page-not-found"
import RootLayout from "../layouts/RootLayout"
import Authenticated from "../layouts/Authenticated"
import { AuthProvider } from "../context/AuthContext"

declare module "@tanstack/react-router" {
  interface StaticDataRouteOption {
    pageName?: string
    goBack?: boolean
  }
}

export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
      <Authenticated>
        <ScrollRestoration />
        <RootLayout />
      </Authenticated>
    </AuthProvider>
  ),
  notFoundComponent: () => <PageNotFound />,
})
