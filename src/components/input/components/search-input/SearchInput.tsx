import * as React from "react"

import { cn } from "../../../../utils/cn"
import Icon from "../../../icon/Icon"
import { InputProps } from "../../input.types"
import { BaseInput } from "../base-input"

const showXButton = (value: unknown, defaultValue: unknown) => {
  if (value && value !== "") return true
  if (typeof value === "undefined" && defaultValue) return true
  return false
}

export const SearchInput: React.FC<InputProps> = ({
  type,
  leadingIcon,
  onClear,
  value,
  onChange,
  leadingIconClassName,
  defaultValue,
  ...props
}) => (
  <BaseInput
    type={type}
    defaultValue={defaultValue}
    value={value}
    onChange={onChange}
    trailElement={
      showXButton(value, defaultValue) && (
        <Icon
          onClick={() => onClear?.()}
          className="text-[#667085] cursor-pointer mr-3"
          icon="X"
          testid="trail-icon"
        />
      )
    }
    leadingIconClassName={cn("text-[#667085]", leadingIconClassName)}
    leadingIcon={leadingIcon || "SearchMD"}
    {...props}
  />
)

export default SearchInput

SearchInput.displayName = "SearchInput"
