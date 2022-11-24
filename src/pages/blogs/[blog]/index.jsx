import BlogContent from "../../../components/section/blogcontent";
import "./styles.css"
import {ReactComponent as SaveIcon} from "../../../assets/icons/save.svg"

const Blog = () => {

  const blog = {
    title: "Is Switzerland the only place worth travelling right now?",
    description: "This is the description of the blog",
    tags: ["Science", "Tech"],
    image: "https://images.unsplash.com/photo-1668767483967-cc2325edafbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    body: [{
      type: "head",
      value: "This is some content"
    }, {
      type: "para",
      value: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    }, {
      type: "para",
      value: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
    }, {
      type: "quote",
      value: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
    }, {
      type: "para",
      value: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way."
    }, {
      type: "para",
      value: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.

It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline`
    }, {
      type: "image",
      value: "https://images.unsplash.com/photo-1668700431222-2e3a2b821a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
    }, {
      type: "para",
      value: `When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.

But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.
`
    }, {
      type: "code",
      value: `const typeToClass = (type) => {
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
  }`
    }]
  }

  return (
    <div className="blog">

      <div className="blog_banner">
        <div className="blog_banner_image_container">
          <img className="blog_banner_image" src={blog.image} alt="banner for the blog" />
        </div>
        <div className="blog_banner_wrapper blog_width">
          <div className="blog_banner_data_card">
            <div className="blog_banner_tags">
              { blog.tags.map((tag, i) => <div className="blog_banner_tag" key={i}>{tag}</div>)}
            </div>
            <div className="blog_banner_title">
              <h1>{blog.title}</h1>
            </div>
            <div className="blog_banner_subtitle">
              <h3>{blog.description}</h3>
            </div>
            <div className="blog_banner_author">
              <div className="blog_banner_author_wrapper">
                <div className="blog_banner_author_avatar"> </div>
                <div className="blog_banner_author_text">
                  <div className="blog_banner_author_name">Paul Gustavo</div>
                  <div className="blog_banner_publish_date">5h ago</div>
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

      <div className="blog_body blog_width">
        {blog.body.map((b, i) => (
            <BlogContent key={i} type={b.type} value={b.value} />
        ))}
      </div>

    </div>
  )
}

export default Blog;
