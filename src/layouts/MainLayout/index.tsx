import { Outlet } from "@tanstack/react-router"

import PageHeader from "../../ui/pageHeader"
import SideBar from "../../ui/sideBar"

const MainLayout = () => {
  return (
    <>
      <PageHeader />
      <SideBar />
      <div
        className="overflow-auto"
        style={{
          transition: "padding-left 0.3s",
          paddingTop: "65px",
          paddingLeft: "81px",
        }}
      >
        <div className="text-primary">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
