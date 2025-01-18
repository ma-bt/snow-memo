import { useMatches } from "@tanstack/react-router"
import { useEffect, useState } from "react"

import { SideBarRoutes } from "./menuItems"
import SideMenuTab from "./sideMenueTab"

import MainLogo from "../../assets/snowMemo.svg"

const SideBar = () => {
  const matches = useMatches()
  const [activePath, setActivePath] = useState("")

  useEffect(() => {
    setActivePath(matches[matches.length - 1].pathname)
  }, [JSON.stringify(matches)])

  return (
    <div
      className={`border-r w-[81px] pt-[5px] pb-[34px] min-w-[81px] border-[#E3E4E4] flex flex-col gap-2 items-center fixed left-0 top-0 bottom-0 z-10 bg-surface-layout`}
    >
      <img
        src={MainLogo}
        style={{
          padding: "3.17px",
          maxWidth: "44.83px",

          height: "44.83px",
        }}
        alt="brand"
      />
      {SideBarRoutes.map((item) => (
        <div className="flex flex-col gap-2" key={JSON.stringify(item)}>
          {item.links.map((link) => {
            return (
              <SideMenuTab
                key={JSON.stringify(link)}
                path={link.path}
                name={link.name}
                icon={link.icon}
                active={activePath === link.path}
                isHref={link.isHref}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default SideBar
