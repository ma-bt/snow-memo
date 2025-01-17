import MainLogo from "../../assets/resimatorLogo.png"
import { LoginForm } from "./loginForm"
const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex max-w-[500px] w-[500px] pl-[60px] pr-[39.4px] bg-blue-900 p-12 flex-col justify-between relative">
        <div>
          <img className="p-2" height={242} width={242} src={MainLogo} />

          <div className="flex flex-col gap-4">
            <h3 className=" text-white">Effortlessly Manage Your Property</h3>
            <p className="text-heading-lg text-white ">
              Add, Buy, or Rent with Ease!
            </p>
          </div>
        </div>

        <div className="text-white text-[13px]">
          © 2024 SnowMemo. All rights reserved.
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 relative">
        {/* <LanguageSelector /> */}
        <LoginForm />
      </div>
    </div>
  )
}
export default Login
