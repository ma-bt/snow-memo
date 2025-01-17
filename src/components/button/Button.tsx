import * as React from "react"
import { cn } from "../../utils/cn"
import { button, ButtonVariantProps } from "./styles/button.style"

export interface ButtonProps
  extends ButtonVariantProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If added, the button will show an icon before the button's label.
   */
  leadingIcon?: React.ReactNode

  /**
   * If added, the button will show an icon after the button's label.
   */
  trailIcon?: React.ReactElement

  /**
   * If true, the button will be disabled.
   */
  isDisabled?: boolean

  /**
   * If true, the button will show loader.
   */
  isLoading?: boolean

  /**
   * Id required for easier testing using Cypress and Jest.
   * See More: {@link https://docs.cypress.io/guides/references/best-practices#Selecting-Elements}
   */
  testid?: string

  /**
   * Add text while in the loading state.
   */
  loadingText?: string
  variant?: "solid" | "secondary" | "ghost"
  shade?: "primary" | "danger" | "info" | "light"
  size?: "sm" | "md" | "lg" | "xl" | "elg"
  width?: "fit" | "full"

  as?: keyof JSX.IntrinsicElements | React.ElementType
}

/**
 * This Button component is a reusable React component that provides a customizable button with different variants, sizes, icons, and loading states.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as: Component = "button",
      className,
      variant,
      shade = "primary",
      width,
      size,
      leadingIcon,
      isLoading = false,
      isDisabled = false,
      trailIcon,
      loadingText = "Loading",
      children,
      testid,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const styles = React.useMemo(
      () => button({ size, variant, width, shade, className }),
      [className, shade, size, variant, width],
    )

    return (
      <Component
        className={cn(styles, "cursor-pointer select-none")}
        ref={ref}
        data-testid={testid ?? children?.toString()}
        disabled={isDisabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            {/* Loader icon could go here */}
            {loadingText}
          </>
        ) : (
          <>
            {leadingIcon}
            {children}
            {trailIcon}
          </>
        )}
      </Component>
    )
  },
)

Button.displayName = "SnowMemo.Button"

export { Button }
