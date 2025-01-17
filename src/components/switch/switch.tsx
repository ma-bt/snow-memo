import * as RadixSwitch from "@radix-ui/react-switch"
import React from "react"
import { cn } from "../../utils/cn"

interface SwitchProps extends RadixSwitch.SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  label?: string
  subLabel?: string
  description?: string
  badge?: React.ReactNode
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ label, subLabel, description, badge, className, ...props }, ref) => {
    const id = React.useId()

    return (
      <div className="flex items-start gap-2">
        <div className="p-0.5">
          <RadixSwitch.Root
            className={cn(
              "inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-x-2 border-y-[3px] border-text-disabled transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-text-disabled disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-switch-primary data-[state=unchecked]:bg-text-disabled",
              className,
            )}
            {...props}
            id={props.id || id}
            ref={ref}
          >
            <RadixSwitch.Thumb
              className={cn(
                "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
              )}
            />
          </RadixSwitch.Root>
        </div>

        {(label || subLabel || badge || description) && (
          <div className="flex flex-col gap-1 justify-center">
            <span>
              <label
                className="text-lg font-medium hover:cursor-pointer"
                htmlFor={props.id || id}
              >
                {label}
                <span className="text-sm inline-block ml-2 text-input-filled leading-normal font-normal">
                  {subLabel}
                </span>
              </label>
              <span className="ml-2">{badge}</span>
            </span>
            <span className="text-sm leading-normal text-input-filled">
              {description}
            </span>
          </div>
        )}
      </div>
    )
  },
)

Switch.displayName = "Switch"

export { Switch }
