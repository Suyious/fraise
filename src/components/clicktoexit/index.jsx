import "./styles.css"

const ClickToExit = ({onClick}) => {
  return(
    <div onClick={onClick} className="click_to_exit"/>
  )
}
export default ClickToExit
