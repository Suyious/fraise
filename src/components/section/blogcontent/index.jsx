import "./styles.css"

const BlogContent = ({type, value}) => {

  const typeToClass = (type) => {
    switch(type){
      case "head":
        return "blog_content_heading";
      case "para":
        return "blog_content_paragraph";
      case "quote":
        return "blog_content_quote";
      case "image":
        return "blog_content_image";
      case "code":
        return "blog_content_code";
      default:
        return "";
    }
  }

  const TypeElement = ({ children, type }) => {
    switch(type){
      case "head":
        return <h1>{children}</h1>;
      case "para":
        return <p>{children}</p>;
      case "quote":
        return <blockquote>{children}</blockquote>;
      case "image":
        return <figure>
          <img src={children}/>
          <figcaption>Here goes the caption</figcaption>
        </figure>;
      case "code":
        return <code>{children}</code>;
      default:
        return "";
    }
  }

  return(
    <div className="blog_content_main">
      <TypeElement type={type}>{value}</TypeElement>
    </div>
  )
}
export default BlogContent
