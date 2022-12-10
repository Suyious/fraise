import {useQuery} from "react-query"
import axios from "../../../utils/axios"

const useGetBlog = (blog_id) => {
  return useQuery(["blog", blog_id], () => {
    return axios.get(`blogs/${blog_id}`)
  })
}

export default useGetBlog
