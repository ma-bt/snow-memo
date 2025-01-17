import { NavigationMenuLink } from "../../components/tabs/tabs"
import { cn } from "../../utils/cn"

interface NavigationItemProps {
  label?: string
  value: string
  isActive?: boolean
}

export function NavigationItem({
  label,
  value,
  isActive,
}: NavigationItemProps) {
  return (
    <NavigationMenuLink
      // href={value}
      defaultValue={value}
      className={cn(
        "group inline-flex  h-12 w-max items-center justify-center px-4 text-sm font-medium transition-colors hover:text-border-active focus:outline-none disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "text-border-active border-b-2 border-border-active"
          : "text-input-disabled",
      )}
    >
      <span>{label}</span>
    </NavigationMenuLink>
  )
}
