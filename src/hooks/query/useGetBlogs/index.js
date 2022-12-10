import {useQuery} from "react-query";
import axios from "../../../utils/axios";

const useGetBlogs = () => {
  return useQuery('blogs',() => {
    return axios.get('/blogs');
  });
}
export default useGetBlogs
