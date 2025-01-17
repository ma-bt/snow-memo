import * as React from "react"
import { tv, VariantProps } from "tailwind-variants"
import * as icons from "untitledui-js"

const IconsVariants = tv({
  base: "text-icon-primary",
  variants: {
    size: {
      xs: "size-3",
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
      xl: "size-8",
    },
  },
})

export type IconType = keyof typeof icons

export interface IconProps
  extends Partial<icons.SVGComponentProps>,
    VariantProps<typeof IconsVariants> {
  /**
   * Id required for easier testing using cyprees and jest
   * See More: {@link https://docs.cypress.io/guides/references/best-practices#Selecting-Elements}
   */
  testid?: string

  /**
   * The icon component to render. Pass a string belonging to untitledui-js.
   */
  icon?: IconType

  /**
   * Custom SVG Icon. Pass a svg as children
   */
  children?: React.ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
}

export const Icon: React.FC<IconProps> = ({
  size = "md",
  icon,
  testid,
  children,
  className,
  ...props
}: IconProps) => {
  // If children is defined, svg element is only passed here.
  if (children) {
    return (
      <div data-testid={testid} className={IconsVariants({ size })}>
        {children}
      </div>
    )
  }

  if (typeof icon !== "string" && typeof icon !== "undefined") {
    icon as unknown as React.ReactElement
  }
  // if icon is defined as string then render it.
  if (icon) {
    const ResimatorIcon = icons[icon as IconType] as (
      props: Partial<icons.SVGComponentProps>,
    ) => JSX.Element
    if (!ResimatorIcon) {
      console.error(`Icon "${icon}" not found in icons object`)
      return null
    }
    return (
      <ResimatorIcon
        data-testid={testid}
        {...props}
        className={IconsVariants({ size, className })}
      />
    )
  }

  // If nothing works render a fallback svg
  return (
    <icons.HelpCircle
      data-testid={testid}
      {...props}
      className={IconsVariants({ size })}
    />
  )
}

export default Icon
