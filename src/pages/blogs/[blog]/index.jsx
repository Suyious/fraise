import {ReactComponent as SaveIcon} from "../../../assets/icons/save.svg";
import BlogContent from "../../../components/section/blogcontent";
import "./styles.css";
import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router";
import Navigation from "../../../components/navigation";
import NavLinks from "../../../components/section/navlinks";
import useGetBlog from "../../../hooks/query/useGetBlog";
import { timeAgo } from "../../../utils/dateFormat";
import { Link } from "react-router-dom";

const Blog = () => {

  const {blog: blog_id} = useParams();
  const { isLoading, data} = useGetBlog(blog_id);

  const blog = isLoading ? {} : data.data.blog;

  const bodyRef = useRef(null);
  const [navPrefer, setNavPrefer] = useState("primary");

  const scrollListener = () => {
    if(window.scrollY >= bodyRef.current.offsetTop){
      setNavPrefer("secondary");
    } else {
      setNavPrefer("primary");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [])


  return (
    <div className="blog">

      <Navigation preference={navPrefer}>
        <NavLinks/>
      </Navigation>

      <div className="blog_banner">
        <div className="blog_banner_image_container">
          {!isLoading && blog.image && <img className="blog_banner_image" src={blog.image} alt="banner for the blog" /> }
        </div>
        <div className="blog_banner_wrapper blog_width">
          <div className="blog_banner_data_card">
            <div className="blog_banner_tags">
              {!isLoading && blog.tags.map((tag, i) => <div className="blog_banner_tag" key={i}>{tag}</div>)}
            </div>
            <div className="blog_banner_title">
              <h1>{!isLoading && blog.title}</h1>
            </div>
            <div className="blog_banner_subtitle">
              <h3>{!isLoading && blog.description}</h3>
            </div>
            <div className="blog_banner_author">
              <div className="blog_banner_author_wrapper">
                {!isLoading && <Link to={ `/user/${blog.author._id}` }>
                  <div className="blog_banner_author_avatar">
                    <img className="blog_banner_author_avatar_image" src={blog.author.avatar.url} alt="" />
                  </div>
                </Link>}
                <div className="blog_banner_author_text">
                  <div className="blog_banner_author_name">{ !isLoading && <Link to={ `/user/${blog.author._id}` }>{blog.author.name}</Link>  }</div>
                  <div className="blog_banner_publish_date">{ !isLoading && timeAgo(blog.createdAt) }</div>
                </div>
              </div>
              <div className={ `blog_banner_blog_save ${false && saved}` }>
                Save
                <SaveIcon/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={bodyRef} className="blog_body blog_width">
        { !isLoading && blog.body.map((b, i) => (
            <BlogContent key={i} type={b.type} value={b.value} />
        ))}
      </div>

    </div>
  )
}

export default Blog;
