import axios from "../../../utils/axios";
import {useMutation} from "react-query";
import parseError from "../../../utils/parseError";

const useImageUpload = () => {
  return useMutation(async (body) => {
    const config = {
      headers: { "Content-Type": "application/json", withCredentials: true },
    };
    return await axios.post('/blogs/create/upload', body, config)
      .catch(function (error) {
        console.log(error.toJSON());
      });

  }, {
    onError: (err) => {
      console.log("Error: ", parseError(err));
    }
  })
}

export default useImageUpload;
