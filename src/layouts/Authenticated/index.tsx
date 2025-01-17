import { useRouterState } from "@tanstack/react-router"
import { FC, ReactNode, useEffect, useState } from "react"
import Icon from "../../components/icon/Icon"
import useAuth from "../../hooks/useAuth"
import Login from "../../pages/login"

interface AuthenticatedProps {
  children: ReactNode
}

/**
 * A layout component that wraps authenticated routes and handles authentication logic.
 *
 * @component
 * @example
 * // Usage
 * <Authenticated>
 *   <Dashboard />
 * </Authenticated>
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered.
 * @returns {ReactNode} The rendered component.
 */
const Authenticated: FC<AuthenticatedProps> = (props: {
  children: React.ReactNode
}) => {
  const { children } = props
  const auth = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouterState()
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null,
  )
  useEffect(() => {
    if (
      !auth.isAuthenticated &&
      router.location.pathname !== requestedLocation
    ) {
      setRequestedLocation(router.location.pathname)
    }
    setIsLoading(false)
  }, [auth.isAuthenticated, router.location.pathname])

  if (isLoading)
    return (
      <div className="h-screen justify-items-center w-screen content-center">
        <Icon className="animate-spin" icon="Circle" />
      </div>
    )

  if (!auth.isAuthenticated) {
    return <Login />
  }

  return <>{children}</>
}

export default Authenticated
