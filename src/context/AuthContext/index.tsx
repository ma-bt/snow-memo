import { useNavigate } from "@tanstack/react-router"
import { createContext, FC, ReactNode, useEffect, useState } from "react"

interface AuthState {
  isAuthenticated: boolean
  user: { email: string } | null
}

interface AuthContextValue extends AuthState {
  login: (email: string, password: string) => void
  logout: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const AuthContext = createContext<AuthContextValue>({
  ...initialAuthState,
  login: () => {},
  logout: () => {},
})

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<AuthState>(initialAuthState)
  const navigate = useNavigate()

  useEffect(() => {
    const savedEmail = localStorage.getItem("email")
    const savedPassword = localStorage.getItem("password")

    if (savedEmail && savedPassword) {
      setState({
        isAuthenticated: true,
        user: { email: savedEmail },
      })
      navigate({ to: "/memo" })
    }
  }, [])

  const login = (email: string, password: string) => {
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

    setState({
      isAuthenticated: true,
      user: { email },
    })

    navigate({ to: "/memo" })
  }

  const logout = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("password")

    setState({
      isAuthenticated: false,
      user: null,
    })

    navigate({ to: "/auth/login" })
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
