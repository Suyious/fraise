import { useMutation } from "react-query";
import axios from "../../../utils/axios";
import parseError from "../../../utils/parseError";

const useBlogCreate = () => {
  return useMutation((body) => {
    const config = {
      headers: { "Content-Type": "application/json", withCredentials: true },
    };
    return axios.post('/blogs/create', body, config)
  }, {
    onError: (err) => {
      console.log(parseError(err));
    }
  })
}

export default useBlogCreate;
