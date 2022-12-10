import {useEffect} from "react"
import {useNavigate} from "react-router"

const UserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/503")
  })

  return(
    <div>
      
    </div>
  )
}
export default UserDashboard
