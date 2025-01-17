import * as React from "react"
import { tv, VariantProps } from "tailwind-variants"

import { cn } from "../../../../utils/cn"
import { InputProps } from "../../input.types"
import { IconElements } from "./input-icon-elements"
import { Message } from "./input-message"

export const containerCss = tv({
  base: [],

  variants: {
    size: {
      sm: "h-9",
      md: "h-10",
      lg: "h-11 ",
      "x-sm": "h-8",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

type BaseInputProps = InputProps & VariantProps<typeof containerCss>

export const BaseInput: React.FC<BaseInputProps> = ({
  leadingIcon,
  trailIcon,
  className,
  errorText,
  helperText,
  label = "",
  isRequired,
  isDisabled,
  isInvalid,
  trailElement,
  leadingElement,
  isLoading,
  loadingIcon,
  loaderPosition,
  size,
  trailIconClassName,
  leadingIconClassName,
  loadingIconClassName,
  type,
  inputClassName,
  ...props
}) => (
  <div className="flex flex-col gap-[6px]">
    {label && (
      <span className="text-caption font-medium ">
        {isRequired ? `${label} *` : label}
      </span>
    )}
    <div className="flex flex-col gap-2">
      <div
        className={cn(
          containerCss({ size, className }),
          [
            "group",
            "flex items-center w-full border text-input-filled rounded-md",
            "border border-input ",
            "focus-visible:outline-none focus-within:ring-1 focus-within:ring-border-ring focus-within:ring-offset-1",
            "hover:border-active hover:focus-within:none",
            "transition-all duration-100",
          ],
          {
            "border text-input-filled": isInvalid || errorText,
            "bg-input-disabled-fil cursor-not-allowed": isDisabled,
          },
        )}
      >
        <IconElements
          testId={props.testid}
          showLoader={loaderPosition === "left" || loaderPosition === "both"}
          className={cn("", {
            "pl-3":
              leadingIcon ||
              (isLoading &&
                (loaderPosition === "left" || loaderPosition === "both")),
            "pointer-events-none": isDisabled,
            "h-full": true,
          })}
          element={leadingElement}
          icon={leadingIcon}
          loadingIconClassName={loadingIconClassName}
          iconClassName={leadingIconClassName}
          isLoading={isLoading}
          loadingIcon={loadingIcon}
        />

        <input
          disabled={isDisabled}
          type={type}
          data-testid={props.testid}
          {...props}
          className={cn(
            "border-none w-full pl-[14px] pr-[16px] rounded-md",
            "text-input font-normal text-filled",
            "focus:border-none focus:outline-none focus-visible:border-none h-full bg-transparent",
            {
              "bg-surface-disabled cursor-not-allowed text-input-disabled":
                isDisabled,
              "group-hover:border-layout": !isDisabled,
            },
            {
              "[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none":
                type === "number",
            },
            inputClassName,
          )}
        />

        <IconElements
          testId={props.testid}
          showLoader={
            loaderPosition
              ? loaderPosition === "right" || loaderPosition === "both"
              : isLoading
          }
          className={cn("", {
            "pr-3":
              trailIcon ||
              (isLoading && !loaderPosition) ||
              (isLoading &&
                loaderPosition &&
                (loaderPosition === "right" || loaderPosition === "both")),
            "pointer-events-none": isDisabled,
          })}
          element={trailElement}
          icon={trailIcon}
          iconClassName={trailIconClassName}
          loadingIconClassName={loadingIconClassName}
          isLoading={isLoading}
          loadingIcon={loadingIcon}
        />
      </div>

      <Message
        errorText={errorText}
        isDisabled={isDisabled}
        helperText={helperText}
      />
    </div>
  </div>
)

BaseInput.displayName = "BaseInput"
export default BaseInput
