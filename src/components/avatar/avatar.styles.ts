import { tv, VariantProps } from "tailwind-variants"

export const container = tv({
  base: [
    "rounded-full overflow-hidden bg-surface-muted flex items-center justify-center",
  ],
  variants: {
    size: {
      "16": "w-4 h-4 text-[0.625]",
      "20": "w-5 h-5 text-[0.625]",
      "24": "w-6 h-6 text-xs",
      "32": "w-8 h-8 text-base",
      "40": "w-10 h-10 text-xl",
      "44": "w-11 h-11 text-xl",
      "48": "w-12 h-12 text-2xl",
      "64": "w-16 h-16 text-3xl",
    },
    type: {
      circle: "rounded-full",
      square: "rounded-sm",
    },
  },
  compoundVariants: [
    { size: "16", type: "square", className: "rounded-sm" },
    { size: "20", type: "square", className: "rounded-[2.5px]" },
    { size: "24", type: "square", className: "rounded-[12px]" },
    { size: "32", type: "square", className: "rounded-[12px]" },
    { size: "40", type: "square", className: "rounded-[12px]" },
    { size: "44", type: "square", className: "rounded-[12px]" },
    { size: "48", type: "square", className: "rounded-md" },
    { size: "64", type: "square", className: "rounded-lg" },
  ],
  defaultVariants: {
    size: "20",
  },
})

export const icon = tv({
  base: ["w-full h-full"],
  variants: {
    size: {
      "16": "p-0.5",
      "20": "p-1",
      "24": "p-1",
      "32": "p-1",
      "40": "p-1",
      "44": "p-1",
      "48": "p-2",
      "64": "p-2.5",
    },
  },
  defaultVariants: {
    size: "20",
  },
})

export type AvatarContainerVariantProps = VariantProps<typeof container>

export const indicator = tv({
  base: ["w-4 h-4 rounded-full right-0 bottom-0 absolute"],
  variants: {
    size: {
      "16": "w-1 h-1 outline-1",
      "20": "w-[0.3125rem] h-[0.3125rem] outline-2",
      "24": "w-1.5 h-1.5 outline-2",
      "32": "w-2 h-2 outline-2",
      "40": "w-2.5 h-2.5 outline-[2.5px]",
      "44": "w-0 h-0",
      "48": "w-3 h-3 outline-3",
      "64": "w-4 h-4 outline-4",
    },

    type: {
      default: "outline-surface-layout outline",
      glow: "outline",
    },
  },
  defaultVariants: {
    tone: "primary",
    size: "20",
    type: "default",
  },
})

export type IndicatorVariantProps = VariantProps<typeof indicator>
