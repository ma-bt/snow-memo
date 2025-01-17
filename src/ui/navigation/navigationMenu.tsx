import { useRef } from "react"
import {
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu as RadixNavigationMenu,
} from "../../components/tabs/tabs"

import { menuItems } from "./menuItems"
import { NavigationItem } from "./navigationItem"

export function NavigationMenu() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative w-full border-b border-[#E3E4E4]">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />

      <div className="absolute left-0 top-0 bottom-0 z-20"></div>

      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
        <RadixNavigationMenu className="relative w-full">
          <NavigationMenuList className="flex w-max px-12 space-x-4">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.label} className="flex-shrink-0">
                <NavigationItem {...item} />
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </RadixNavigationMenu>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <div className="absolute right-0 top-0 bottom-0 z-20"></div>
    </div>
  )
}
