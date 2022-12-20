import {useEffect, useRef, useState} from "react"
import {useNavigate} from "react-router"
import {ReactComponent as TrashIcon} from "../../../assets/icons/delete.svg"
import {ReactComponent as EditIcon} from "../../../assets/icons/edit.svg"
import {ReactComponent as PlusIcon} from "../../../assets/icons/plus.svg"
import Editable from "../../../components/inputs/editableElements"
import ModalFloatingStack from "../../../components/modals/stack"
import Navigation from "../../../components/navigation"
import BlogContentEdit from "../../../components/section/blogcontentedit"
import useStackImageUploadStatus from "../../../hooks/effects/useStackStatus"
import useBlogCreate from "../../../hooks/mutation/useBlogCreate"
import useImageUpload from "../../../hooks/mutation/useImageUpload"
import useGetUser from "../../../hooks/query/useGetUser"
import "./styles.css"

const BlogCreate = () => {
  
  const navigate = useNavigate();

  const [notificationStack, setNotificationStack] = useState([]);

  // blog content states and refs
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

  const { isLoading: isUploading, mutate: mutateUpload } = useImageUpload();

  const addBanner = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setBanner(reader.result);
      mutateUpload({ image: reader.result }, {
        onSuccess: (data) => {
          if(data){
            setBanner(data.data?.body.image.url);
          } else {
            console.log("Image Upload Failed: file may be too large");
            setBanner(null);
          }
        }, onError: () => {
          setBanner(null);
        }
      })
    }
    reader.readAsDataURL(e.target.files[0])
  }
  const removeBanner = () => {
    setBanner(null);
  }

  useStackImageUploadStatus(isUploading, setNotificationStack);

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

  // query user data
  const { isLoading, data } = useGetUser()

  // mutation for publish
  const { isLoading: isPublishing, mutate: mutatePublish } = useBlogCreate();

  // TODO:
  // [X] image has a local URI
  // [X] error display stack
  // [X] implement draft
  // [ ] implement update draft
  // [ ] implement publish drafted
  // [ ] create blog/create/:blogid to edit drafts
  // [ ] save to local storage

  const publish = (to_draft = false) => {

    if(notificationStack.length > 0) {
      return;
    }

    if(title.current.innerText.trim().length === 0) {
      let notif_id = Date.now();
      setNotificationStack((prev) => [ ...prev, { title: "Title Empty!", description: "Please provide a title for the blog.", id: notif_id } ]);
      setTimeout(() => {
        setNotificationStack((prev) => prev.filter(n => n.id !== notif_id));
      }, 2000)
      return;
    }

    // implement check if blog content is empty

    const blog_body = {
      title: title.current.innerText.trim(),
      description: description.current.innerText.trim(),
      tags: tags,
      image: banner,
      body: body.map(({type, value}) => ({ type, value: value }))
    };

    if(to_draft){
      blog_body.draft = true;
    }

    mutatePublish( blog_body, {
      onSuccess: (data) => {
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

  return(
    <div className="blog blog_create_variant">

      <Navigation preference={navPrefer}>
        <BlogCreateLinks/>
      </Navigation>

    { notificationStack.length > 0 && <ModalFloatingStack elements={notificationStack} setElement={setNotificationStack}/> }

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
        { body.map((section, index) => (
          <BlogContentEdit 
            type={section.type}
            value={section.value}
            key={section.id}
            id={section.id} 
            setContent={(b) => editBody(index, b)} addContent={() => addToBody(index)}
            removeContent={() => removeFromBody(index)} 
            stack={notificationStack} 
            setStack={setNotificationStack}
          />
        )) }
    </div>

    </div>
  )
}
export default BlogCreate
