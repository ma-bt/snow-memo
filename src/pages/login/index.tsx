import { LoginForm } from "./loginForm"
const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      

      {/* Right Panel */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 relative">
        {/* <LanguageSelector /> */}
        <LoginForm />
      </div>
    </div>
  )
}
export default Login
