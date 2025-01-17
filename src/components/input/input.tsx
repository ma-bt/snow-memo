import { BaseInput } from "./components/base-input"
import { EmailInput } from "./components/email-input"
import { PasswordInput } from "./components/password-input"
import { SearchInput } from "./components/search-input"
import { InputProps } from "./input.types"

const InputTypes = {
  email: "email",
  password: "password",
  text: "text",
  search: "search",
} as const

export const Input: React.FC<InputProps> = ({ type, onChange, ...props }) => {
  switch (type) {
    case InputTypes.password:
      return <PasswordInput onChange={onChange} {...props} type="password" />

    case InputTypes.email:
      return <EmailInput onChange={onChange} {...props} type="email" />
    case InputTypes.search:
      return <SearchInput onChange={onChange} {...props} type="text" />

    default:
      return <BaseInput onChange={onChange} {...props} type={type} />
  }
}

export default Input

export * from "./input.types"
