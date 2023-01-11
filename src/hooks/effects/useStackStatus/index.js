import {useEffect, useState} from "react";

const useStackImageUploadStatus = (isLoading, pushStack, popStack, editStack) => {

  const [image_notif_id, setImage_notif_id] = useState(undefined);

  useEffect(() => {
    if(isLoading) {
      let notif_id = pushStack("Uploading Image!", "Please continue writing while the upload proceeds.")
      setImage_notif_id(notif_id);
    } else {
      if(image_notif_id) {
        editStack("Upload Complete", "Image is now uploaded.", image_notif_id);
        setTimeout(() => {
          popStack(image_notif_id);
        }, 2000)
      }
    }
  }, [isLoading])
}
export default useStackImageUploadStatus
