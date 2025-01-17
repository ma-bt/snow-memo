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
        icon: "HomeLine",
      },
      {
        name: "Dashboard",
        path: "/dashboard/",
        isHref: false,
        icon: "Building05",
      },
      {
        name: "Tab2",
        path: "/dashboard/tab2",
        isHref: false,
        icon: "BankNote01",
      },
      {
        name: "Tab3",
        path: "/dashboard/tab3",
        isHref: false,
        icon: "Hand",
      },
      {
        name: "Tab4",
        path: "/dashboard/tab4",
        isHref: false,
        icon: "Annotation",
      },
      {
        name: "Tab5",
        path: "/dashboard/tab5",
        isHref: false,
        icon: "UserSquare",
      },
      {
        name: "Tab6",
        path: "/dashboard/tab6",
        isHref: false,
        icon: "Settings01",
      },
    ],
  },
]
