import { Config } from "tailwindcss"

export const colors = {
  white: "var(--white)",
  black: "var(--black)",
  textHeadings: "var(--text-headings)",
  textBody: "var(--text-body)",
  textDisabled: "var(--text-disabled)",
  icon: {
    default: "var(--icon-default)",
  },
  switch: {
    primary: "--var(--switch-primary)",
  },
  check: {
    border: "var(--check-border)",
    tick: "var(--check-tick)",
    layout: "var(--check-layout)",
    default: "var(--check-default)",
    disabled: "var(--check-disabled)",
  },
  button: {
    default: "var(--button-default)",
    hover: "var(--button-hover)",
    focused: "var(--button-focused)",
    disabled: "var(--button-disabled)",
  },

  border: {
    layout: "var(--border-layout)",
    active: "var(--border-active)",
  },

  input: {
    header: "var(--input-header)",
    filled: "var(--input-filled)",
    empty: "var(--input-empty)",
    disabledFill: "var(--input-disabled-fill)",
    disabled: "var(--input-disabled)",
    error: "var(--input-error)",
  },
}

export const base: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      boxShadow: {
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "shadow-sm": "0px 1.445px 2.891px 0px rgba(0, 0, 0, 0.05)",
        shadow:
          "0px 1.445px 2.891px 0px rgba(0, 0, 0, 0.06), 0px 1.445px 4.336px 0px rgba(0, 0, 0, 0.10)",
        "shadow-md":
          "0px 2.891px 5.781px -1.445px rgba(0, 0, 0, 0.06), 0px 5.781px 8.672px -1.445px rgba(0, 0, 0, 0.10)",
        "shadow-lg":
          "0px 5.781px 8.672px -2.891px rgba(0, 0, 0, 0.05), 0px 14.453px 21.68px -4.336px rgba(0, 0, 0, 0.10)",
        "shadow-xl":
          "0px 14.453px 14.453px -7.227px rgba(0, 0, 0, 0.04), 0px 28.906px 36.133px -7.227px rgba(0, 0, 0, 0.10)",
        "shadow-2xl": "0px 36.133px 72.266px -17.344px rgba(0, 0, 0, 0.25)",
        "shadow-": "0px 2.891px 5.781px 0px rgba(0, 0, 0, 0.06) inset",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
        base: "4px",
        none: "0px",
        sm: "2px",
        lg: "8px",
        "2xl": "16px",
        full: "9999px",
      },

      keyframes: {
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      padding: {
        base: "16px",
        s8: "0.5rem",
        s16: "1rem",
      },
    },
  },
}

export default base
