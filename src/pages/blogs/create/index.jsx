import React, {useEffect, useRef, useState} from "react"
import "./styles.css"
import {ReactComponent as PlusIcon} from "../../../assets/icons/plus.svg"
import {ReactComponent as EditIcon} from "../../../assets/icons/edit.svg"
import {ReactComponent as TrashIcon} from "../../../assets/icons/delete.svg"
import BlogContentEdit from "../../../components/section/blogcontentedit"
import Editable from "../../../components/inputs/editableElements"
import {useMutation, useQuery} from "react-query"
import axios from "../../../utils/axios"
import Navigation from "../../../components/navigation"
import parseError from "../../../utils/parseError"
import {useNavigate} from "react-router"

const BlogCreate = () => {
  
  const navigate = useNavigate();
  const title = useRef(null);
  const description = useRef(null);
  const [tags, setTags] = useState([]);
  const [banner, setBanner] = useState(null);
  const [body, setBody] = useState([{
    id: Date.now(),
    type: "para",
    value: "",
  }]);

  const [tagInput, setTagInput] = useState("");
  const addTag = (e) => {
    e.preventDefault();
    if(tagInput !== ""){
      setTags((p) => [...p, tagInput]);
      setTagInput("");
    }
  };
  const removeTag = (key) => {
    setTags((p) => p.filter((_, i) => i !== key));
  }

  const addBanner = (e) => {
    setBanner(URL.createObjectURL(e.target.files[0]));
  }
  const removeBanner = () => {
    setBanner(null);
  }

  const addToBody = (index) => {
    if(index === body.length - 1) {
      setBody((p) => [...p, {
        id: Date.now(),
        type: "para",
        value: "",
      }])
    } else {
      setBody((p) => [
        ...p.slice(0, index + 1),
        { id: Date.now(), type: "para", value: "" },
        ...p.slice(index + 1)
    ])
    }
  }

  const editBody = (key, edit) => {
    setBody((p) => p.map((section, i) => {
      if( i === key ) return edit;
      return section;
    }))
  }

  const removeFromBody = ( key ) => {
    if(body.length === 1) return;
    setBody((p) => p.filter((_, i) => i !== key));
  }

  const { isLoading, data } = useQuery('me', () => {
    return axios.get('/me');
  })

  const { isLoading: isPublishing, mutate: mutatePublish } = useMutation((body) => {
    const config = {
      headers: { "Content-Type": "application/json", withCredentials: true },
    };
    return axios.post('/blogs/create', body, config)
  }, {
    onError: (err) => {
      console.log(parseError(err));
    }
  })

  // TODO:
  // [ ] image has a local URI
  // [ ] error display
  // [ ] implement draft
  // [ ] save to local storage
  // [ ] implement update draft
  // [ ] implement publish drafted
  // [ ] create blog/create/:blogid to edit drafts

  const publish = (to_draft = false) => {

    if(title.current.innerText.trim().length === 0) {
      console.log("title empty");
      return;
    }

    if(body.length === 1 && body[0].value.trim().length === 0) {
      console.log("blog has no content");
      return;
    }

    const blog_body = {
      title: title.current.innerText.trim(),
      tags: tags,
      image: banner,
      body: body.map(({type, value}) => ({ type, value: value.trim()} ))
    };

    if(to_draft){
      blog_body.draft = true;
    }

    mutatePublish( blog_body, {
      onSuccess: (data) => {
        console.log(data.data.blog);
        navigate(`/blogs/${data.data.blog._id}`);
      }
    })
  }

  const BlogCreateLinks = () => {
    return <>
        <li onClick={() => publish(true)} className="nav_link secondary bigger">
          {isPublishing ? "loading": "Save as Draft"}
        </li>
        <li onClick={() => publish()} className="nav_link primary bigger">
          {isPublishing ? "Loading" : "Publish" }
        </li>
      </>
  }

  const bodyRef = useRef(null);
  const [navPrefer, setNavPrefer] = useState("primary");

  const scrollListener = (e) => {
    console.log(e);
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

  return(
    <div className="blog blog_create_variant">

      <Navigation preference={navPrefer}>
        <BlogCreateLinks/>
      </Navigation>

      <div className="blog_banner blog_create_variant">
        {banner && 
          <div className="blog_banner_image_container blog_create_variant">
            <img className="blog_banner_image" src={banner} alt="banner for the blog" />
          </div>}

        <div className="blog_banner_wrapper blog_width">
          <div className="blog_banner_data_card">
            <div className="blog_banner_tags blog_create_variant">
              { tags.map((tag, i) => (
                  <div className="blog_banner_tag blog_create_variant" key={i}>
                    {tag}
                    <div onClick={() => removeTag(i)} className="blog_banner_create_tag_delete"><TrashIcon/></div>
                  </div>
              ))}
                <form onSubmit={addTag} className="blog_create_tags_input">
                  <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="Add Tags"/>
                  <div onClick={addTag} className="blog_create_tags_svg"><PlusIcon/></div>
                </form>
            </div>
            <div className="blog_banner_title blog_create_variant">
              <Editable input_ref={title} placeholder="Add your Blog Title"/>
            </div>
            <div className="blog_banner_subtitle blog_create_variant">
              <Editable input_ref={description} type="text" placeholder="Add your Blog Description"/>
            </div>
            <div className="blog_banner_author blog_create_variant">
              <div className="blog_banner_author_wrapper">
                <div className="blog_banner_author_avatar">
                  {!isLoading && <img className="blog_banner_author_avatar_image" src={data.data.user.avatar.url} alt="" /> }
                </div>
                <div className="blog_banner_author_text">
                  <div className="blog_banner_author_name blog_create_variant">
                    {isLoading ? "loading": data.data.user.name }
                  </div>
                  <div className="blog_banner_author_pseudonym">
                    <Editable type="text" placeholder="Insert Pseudonym"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog_create_banner_edit_container">
            <label className="blog_create_banner_edit_label" htmlFor="input-background">Edit Background
              <div className="blog_create_edit_svg"><EditIcon/></div>
            </label>
            {banner && <div onClick={removeBanner} className="blog_create_edit_delete_svg"><TrashIcon/></div> }
            <input onChange={addBanner} className="blog_create_background_input_file" id="input-background" type="file" accept=".jpg, .jpeg, .png"/>
          </div>
        </div>

      </div>

      <div ref={bodyRef} className="blog_body blog_width blog_create_variant">
        {body.map((section, index) => (
            <BlogContentEdit type={section.type} value={section.value} key={section.id} id={section.id} setContent={(b) => editBody(index, b)} addContent={() => addToBody(index)} removeContent={() => removeFromBody(index)}/>
        ))}
      </div>

    </div>
  )
}
export default BlogCreate
