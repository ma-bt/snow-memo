import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
  base: [
    "inline-flex items-center justify-center gap-x-2 group font-semibold",
    "text-sm rounded-lg",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-1",
    "disabled:opacity-50  disabled:cursor-not-allowed",
  ],
  variants: {
    variant: {
      solid: "",
      secondary: "",
      ghost: "",
    },
    shade: {
      primary: "",
      danger: "",
      info: "",
      light: "",
    },
    size: {
      // xs: "h-7 py-1 px-2 rounded-lg ",
      sm: "h-9 py-1 px-2 rounded-lg text-sm",
      md: "h-10 py-2 px-4 rounded-lg",
      lg: "h-11 py-3 px-4 rounded-lg",
      xl: "h-12 py-3 px-4 rounded-lg",
      elg: "h-15 py-3 px-4 rounded-lg",
    },
    width: {
      fit: "w-fit",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "solid",
    shade: "primary",
    width: "fit",
    size: "md",
  },
  compoundVariants: [
    {
      variant: "solid",
      shade: "primary",
      className: "bg-button-default text-white hover:bg-button-hover",
    },
    {
      variant: "secondary",
      shade: "primary",
      className: "border border-border-layout hover:bg-input-disabled-fill",
    },
    {
      variant: "ghost",
      shade: "primary",
      className:
        "hover:bg-interactive-primary/10 hover:text-interactive-primary text-interactive-primary p-0 h-auto",
    },
  ],
})

export type ButtonVariantProps = VariantProps<typeof button>

export { button }
