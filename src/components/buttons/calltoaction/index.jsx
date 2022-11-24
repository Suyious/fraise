import "./style.css";

const CallToActionButton = ({children, onClick=() => {}}) => {
  return(
    <div onClick={onClick} className="call_to_action_main">
      {children}
    </div>
  )
}
export default CallToActionButton
