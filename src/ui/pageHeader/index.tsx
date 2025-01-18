import { Avatar } from "../../components/avatar"
import { Button } from "../../components/button/Button"
import Icon from "../../components/icon/Icon"
import Input from "../../components/input/input"
import useAuth from "../../hooks/useAuth"

const PageHeader = () => {
  const { logout } = useAuth()
  return (
    <div
      className={"right-0 fixed z-40"}
      style={{
        left: "81px",
        transition: "left 0.3s ease",
      }}
    >
      <div
        id="navbar"
        className="h-[55px] w-full top-0 right-0 px-4 flex justify-between items-center border-b border-[#E3E4E4] z-20 bg-surface-layout"
      >
        <Button
          leadingIcon={<Icon icon="Menu01" className="text-[#636968]" />}
          variant="secondary"
          className="w-9 h-[32px] px-[10px] py-[8px] rounded-[6px]"
        />

        <div className="flex gap-4 items-center">
          <Input type="search" placeholder="Search" size="sm" />
          <Icon
            icon="BellRinging02"
            className="text-[#7E8299] h-[20px] w-[22px]"
          />
          <div onClick={logout}>
            <Avatar
              type="circle"
              size="44"
              image="https://img.freepik.com/free-vector/woman-green-with-blue-hair_24877-81805.jpg?t=st=1737082632~exp=1737086232~hmac=a40cc478ff2ef1ebb5c9415c18d536c031e55ea8596818fb5dccf095300ec79a&w=740"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PageHeader
