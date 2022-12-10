import axios from "../../../utils/axios";
import { useQuery } from "react-query";

const useGetUser = () => {
  return useQuery('me', () => {
    return axios.get('/me');
  })
}

export default useGetUser
