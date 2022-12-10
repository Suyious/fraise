import "./style.css"
import {Link} from "react-router-dom"
import LoadingBlogCard from "../../loading/blogcard"
import useGetUser from "../../../../hooks/query/useGetUser"

const NoFoundBlogs = () => {

  const { isLoading, data } = useGetUser();

  return(
    <div className="blog_card_no_blog">
      <div className="blog_card_no_blog_illus">
        <LoadingBlogCard/>
        <div className="blog_card_no_blog_section">
          <h3>Be the first to add a Blog</h3>
          {!isLoading && data.data.user === null ? 
            <>
              <p>Sign up to start writing</p>
              <Link to="/signup">
              <div className="direct_link primary"> signup </div>
            </Link>
            </>
          :
          <>
          <Link to="/signup">
            <div className="direct_link primary bigger">
              Start Writing
            </div>
          </Link>
          </>
          }
        </div>
      </div>
    </div>
  )
}
export default NoFoundBlogs
