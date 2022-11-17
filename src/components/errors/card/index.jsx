import "./style.css"
import {ReactComponent as MailIcon} from "../../../assets/icons/mail.svg"

const ErrorCard = ({ message }) => {
  return(
    <div className="errorbox">
      <div className="error_icon left">
        <MailIcon/>
      </div>
      <div className="errormessage_box">
        {message}
      </div>
    </div>
  )
}
export default ErrorCard
