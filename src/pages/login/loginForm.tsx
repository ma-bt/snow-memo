import { useState } from "react"
import { Button } from "../../components/button/Button"
import Checkbox from "../../components/checkbox/checkbox"
import Input from "../../components/input/input"
import useAuth from "../../hooks/useAuth"

export function LoginForm() {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState({
    email: false,
    password: false,
  })

  const handleSubmit = () => {
    if (email === "admin@admin.com" && password === "admin") {
      setError({
        email: false,
        password: false,
      })
      login(email, password)
    } else {
      if (email !== "admin@admin.com") {
        setError((prev) => ({
          ...prev,
          email: true,
        }))
      } else {
        setError((prev) => ({
          ...prev,
          email: false,
        }))
      }
      if (password !== "admin") {
        setError((prev) => ({
          ...prev,
          password: true,
        }))
      } else {
        setError((prev) => ({
          ...prev,
          password: false,
        }))
      }
    }
  }
  return (
    <div className="w-full max-w-[390px] flex flex-col gap-12">
      <div className="text-center flex flex-col gap-[15px]">
        <h2 className="text-input-filled font-bold ">
          Sign in to <span className="font-[700]">SnowMemo</span>
        </h2>
        <p className="text-[14px] text-input-header">
          Please sign in to SnowMemo using email & password received in your
          email.
        </p>
      </div>

      <form className="flex flex-col gap-9">
        <div className="flex flex-col gap-8">
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            errorText={error.email ? "Wrong email" : undefined}
          />
          <div className="flex flex-col gap-4">
            <Input
              label="Password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              errorText={error.password ? "Wrong password" : undefined}
            />
            <div className="flex w-full justify-between">
              <Checkbox label="Remember me" />
              <h6 className="text-button-default">Forgot password</h6>
            </div>
          </div>
        </div>
        <Button
          type="button"
          variant="solid"
          className="w-full"
          size="sm"
          onClick={handleSubmit}
        >
          Sign in
        </Button>
      </form>
    </div>
  )
}
