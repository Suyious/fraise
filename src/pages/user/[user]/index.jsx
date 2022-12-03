import {useEffect} from "react"
import {useNavigate} from "react-router"

const UserDashboard = () => {

  useEffect(() => {
    const navigate = useNavigate();
    navigate("/")
  })

  return(
    <div>
      
    </div>
  )
}
export default UserDashboard
