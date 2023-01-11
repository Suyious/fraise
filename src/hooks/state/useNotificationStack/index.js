import {useState} from "react";

const useNotificationStack = () => {

  const [notificationStack, setNotificationStack] = useState([]);

  const pushNotificationStack = (title, description) => {
    let notif_id = Date.now();
    setNotificationStack((prev) => [ ...prev, { title, description, id: notif_id, visible: true } ]);
    return notif_id;
  }

  const popNotificationStack = ( notif_id ) => {
    setNotificationStack((prev) => prev.filter(n => n.id !== notif_id));
  }

  const editNotificationStack = ( title, description, notif_id ) => {
    setNotificationStack((prev) => prev.map((elem) => {
      if(elem.id === notif_id) return {
        title, description, id: notif_id, visible: true
      }
      return elem;
    }))
  }

  const hideNotificationStack = ( notif_id ) => {
    setNotificationStack((prev) => prev.map(n => {
      if(n.id === notif_id){
        return { ...n, visible: false };
      }
      return n;
    }));
  }

  return [notificationStack, pushNotificationStack, popNotificationStack, editNotificationStack, hideNotificationStack];
}
export default useNotificationStack
