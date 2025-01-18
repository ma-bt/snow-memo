import { IconType } from "../../../components/icon/Icon"

interface ISideBarRoutes {
  header: string
  links: { name: string; path: string; isHref?: boolean; icon: IconType }[]
}
export const SideBarRoutes: ISideBarRoutes[] = [
  {
    header: "",
    links: [
      {
        name: "Tab1",
        path: "/memo/",
        isHref: false,
        icon: "StickerSquare",
      },
      
      {
        name: "Tab2",
        path: "/memo/tab4",
        isHref: false,
        icon: "Annotation",
      },
      {
        name: "Tab2",
        path: "/memo/tab5",
        isHref: false,
        icon: "UserSquare",
      },
      {
        name: "Tab4",
        path: "/memo/tab6",
        isHref: false,
        icon: "Settings01",
      },
    ],
  },
]
