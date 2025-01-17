import { Link } from "@tanstack/react-router"
import Icon from "../../components/icon/Icon"
import { Button } from "../../components/button/Button"

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center pt-20">
      <Link to="/dashboard/">
        <Button
          variant="ghost"
          trailIcon={
            <Icon icon="ArrowRight" className="text-interactive-primary" />
          }
        >
          Go To Home
        </Button>
      </Link>
    </div>
  )
}

export default PageNotFound
