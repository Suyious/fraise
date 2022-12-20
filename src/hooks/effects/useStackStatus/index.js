import {useEffect, useState} from "react";

const useStackImageUploadStatus = (isLoading, setStack) => {

  const [image_notif_id, setImage_notif_id] = useState(undefined);

  useEffect(() => {
    if(isLoading) {
      let notif_id = Date.now();
      setImage_notif_id(notif_id);
      setStack((prev) => [ ...prev, {
        title: "Uploading Image!",
        description: "Please continue writing while the upload proceeds.",
        id: notif_id
      } ]);
    } else {
      if(image_notif_id) {
        setStack((prev) => prev.map((elem) => {
          if(elem.id === image_notif_id) return {
            title: "Upload Complete",
            description: "Image is now uploaded.",
            id: image_notif_id
          }
          return elem;
        }))
        setTimeout(() => {
          setStack((prev) => prev.filter(elem => elem.id !== image_notif_id))
        }, 2000)
      }
    }
  }, [isLoading])
}
export default useStackImageUploadStatus
