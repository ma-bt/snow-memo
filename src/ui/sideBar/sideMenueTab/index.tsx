import { Link } from "@tanstack/react-router"
import Icon, { IconType } from "../../../components/icon/Icon"
import { cn } from "../../../utils/cn"

interface ITab {
  name: string
  path?: string
  icon?: string
  active?: boolean
  isHref?: boolean
}

const SideMenuTab = ({ path, icon, active, isHref }: ITab) => (
  <Link
    params={{}}
    key={path}
    className={cn(
      "flex items-center justify-center h-12 w-12 gap-2 cursor-pointer hover:bg-border-active group",
      {
        "bg-border-active border-b-border-active rounded": active,
      },
    )}
    to={path}
    {...(isHref && { href: path, target: "_blank" })}
  >
    {/* toolTip example */}

    <div>
      <Icon
        icon={icon as IconType}
        className={cn("stroke-input-header group-hover:stroke-white", {
          "stroke-white": active
        })}
        size="md"
      />
    </div>
  </Link>
)

export default SideMenuTab
