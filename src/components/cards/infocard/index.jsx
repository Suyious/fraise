import {Link} from "react-router-dom";
import "./styles.css"
import { timeAgo } from "../../../utils/dateFormat";

const temp = {
  author: { name: "Terry Ward" },
  createdAt: Date("10-10-2021"),
  title: "Is Switzerland the only place worth travelling right now?",
  tags: ["Travel", "World"],
  excerpt: "I flew from Tampa to Zurich via Dulles International Airport (IAD) on United Airlines at the end of January and as has been the",
  image:
  "https://images.unsplash.com/photo-1602008672365-f4c4244c8034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
  body: [  ]
}

const Infocard = ({blog = temp}) => {
  return (
    <div className="infocard_main">
      <ul className="infocard_tags">
        {blog.tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
      <Link to={`/blogs/${blog._id}`}>
        <h2 className="infocard_title">{blog.title}</h2>
      </Link>
      <p className="infocard_description">{blog.description ? blog.description.length > 150?  blog.description.slice(0, 150) + "...": blog.description : "No Description provided"}</p>
      <span className="infocard_timestamp">{ timeAgo(blog.createdAt) }</span>
      <div className="infocard_bottom">
        <div className="infocard_bottom_left">
          <Link to={ `/user/${blog.author._id}` }>
            <div className="infocard_bottom_avatar">
              <img className="infocard_bottom_avatar_image" src={blog.author.avatar.url} alt="" />
            </div>
          </Link>
          <Link to={ `/user/${blog.author._id}` }>
            <span>{blog.author.name}</span>
          </Link>
        </div>
        <Link to={`/blogs/${blog._id}`}><div className="infocard_bottom_right">Read Blog</div></Link>
      </div>
    </div>
  )
}

export default Infocard
