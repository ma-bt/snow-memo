import * as React from "react"

import { cn } from "../../../../utils/cn"
import Icon from "../../../icon/Icon"
import { InputProps } from "../../input.types"
import { BaseInput } from "../base-input"

export const PasswordInput: React.FC<InputProps> = ({
  type,
  leadingIcon,
  testid,
  leadingIconClassName,
  ...props
}) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const handleChange = () => {
    setIsVisible(!isVisible)
  }

  const getPasswordType = (
    inputType: InputProps["type"],
  ): InputProps["type"] => {
    if (inputType === "password") {
      if (isVisible) {
        return "text"
      }
      return "password"
    }
    return inputType
  }

  return (
    <BaseInput
      testid={testid}
      type={getPasswordType(type)}
      leadingIconClassName={cn("text-[#667085]", leadingIconClassName)}
      leadingIcon={leadingIcon}
      trailElement={
        <PasswordIcon
          testid="trail-icon"
          isVisible={isVisible}
          handleChange={handleChange}
        />
      }
      {...props}
    />
  )
}

export default PasswordInput

PasswordInput.displayName = "PasswordInput"

export const PasswordIcon = ({
  isVisible,
  handleChange,
  testid,
}: {
  isVisible: boolean
  handleChange: () => void
  testid?: string
}) => (
  <div
    className="focus:outline-none pr-3"
    onKeyDown={handleChange}
    role="button"
    tabIndex={0}
    onClick={handleChange}
  >
    <Icon
      className="text-icon-default transition ease-in-out"
      icon={isVisible ? "EyeOff" : "Eye"}
      testid={testid as string}
    />
  </div>
)
