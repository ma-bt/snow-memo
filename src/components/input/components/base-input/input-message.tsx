import { cn } from "../../../../utils/cn"
import Icon from "../../../icon/Icon"

interface MessageProps {
  errorText: string | undefined
  helperText: string | undefined
  isDisabled?: boolean
}

const Message = ({ errorText, helperText, isDisabled }: MessageProps) => {
  if (errorText) {
    return (
      <div className="text-input-error flex gap-2 items-center text-[10px]">
        <Icon className="text-input-error" size="sm" icon="InfoCircle" />
        {errorText}
      </div>
    )
  }
  if (helperText) {
    return (
      <div
        className={cn("text-input-header text-[10px] flex gap-1 items-center", {
          "text-disabled cursor-not-allowed": isDisabled,
        })}
      >
        <Icon className="text-input-header" size="xs" icon="InfoCircle" />
        {helperText}
      </div>
    )
  }
  return null
}

export { Message }
