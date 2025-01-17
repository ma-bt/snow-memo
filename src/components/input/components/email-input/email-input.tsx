import * as React from "react"

import { cn } from "../../../../utils/cn"
import { InputProps } from "../../input.types"
import { BaseInput } from "../base-input"

export const EmailInput: React.FC<InputProps> = ({
  type,
  leadingIcon,
  testid,
  leadingIconClassName,
  ...props
}) => (
  <BaseInput
    type={type}
    testid={testid}
    leadingIconClassName={cn("text-icon-primary", leadingIconClassName)}
    leadingIcon={leadingIcon}
    {...props}
  />
)

export default EmailInput

EmailInput.displayName = "EmailInput"
