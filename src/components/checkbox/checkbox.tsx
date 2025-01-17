import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import React from "react"
import { tv, VariantProps } from "tailwind-variants"

import { cn } from "../../utils/cn"
import Icon from "../icon/Icon"

const checkbox = tv({
  base: [
    "flex items-center justify-center text-check-tick text-[1.67px]  transition-all",
    "data-[state=checked]:bg-check-layout data-[state=checked]:border data-[state=checked]:border-check-border data-[state=checked]::after:scale-[1.5]",
    "data-[state=unchecked]:border-[1px] data-[state=unchecked]:border-check-default outline-none",
    "data-[state=unchecked]:bg-white",
    "disabled:bg-check-disabled disabled:cursor-not-allowed ",
    "focus-within:ring-1 focus-within:border-check-border",
    "hover:ring-1 hover:border-check-border ",
  ],
  variants: {
    size: {
      sm: "h-4 w-4 rounded-[4px]",
      lg: "h-5 w-5 rounded-[6px]",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

type CheckboxPrimitiveProps = React.ComponentProps<
  typeof CheckboxPrimitive.Root
>

export interface CheckboxProps
  extends CheckboxPrimitiveProps,
    VariantProps<typeof checkbox> {
  /**
   * Size of the checkbox
   */
  size?: "sm" | "lg"

  /**
   * Label text to display next to the checkbox
   */
  label?: string

  /**
   * Unique id for label
   */
  id?: string

  /**
   *   Whether the checkbox is indeterminate state
   */
  isIndeterminate?: boolean

  /**
   * Whether the checkbox is currently checked
   */
  checked?: boolean

  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean

  /**
   * Id required for easier testing using cypress and jest
   * See More: {@link https://docs.cypress.io/guides/references/best-practices#Selecting-Elements}
   */
  testid?: string
  /**
   * Add background color for the checkbox
   */
  backGroundColor?: string | number
}

const iconSize = {
  sm: "xs",
  md: "sm",
  lg: "lg",
} as const

export const Checkbox = ({
  size = "sm",
  label,
  className,
  disabled,
  isIndeterminate,
  id,
  backGroundColor,
  testid,
  checked,
  ...props
}: CheckboxProps) => (
  <div
    className={cn("flex items-center gap-2", {
      "gap-0 justify-center": !label,
    })}
  >
    <CheckboxPrimitive.Root
      id={id}
      data-testid={testid}
      disabled={disabled}
      className={cn(checkbox({ className, size }))}
      checked={isIndeterminate || checked}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={"text-icon-onColor"}
        style={{
          background: backGroundColor,
        }}
      >
        <Icon
          testid="checkid"
          icon={isIndeterminate ? "Minus" : "Check"}
          className="text-icon-onColor"
          size={iconSize[size]}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {label ? (
      <label
        className={cn(
          "text-link-small text-input-header font-medium cursor-pointer",
          {
            "text-button-disabled cursor-not-allowed font-medium": disabled,
          },
        )}
        htmlFor={id}
      >
        {label}
      </label>
    ) : null}
  </div>
)

export default Checkbox
