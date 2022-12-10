import {useMutation, useQueryClient} from "react-query";
import {Link, useNavigate} from "react-router-dom";
import {ReactComponent as Hamburger} from "../../../assets/icons/hamburger.svg";
import {ReactComponent as NavDown} from "../../../assets/icons/navdownopen.svg";
import useGetUser from "../../../hooks/query/useGetUser";
import axios from "../../../utils/axios";
import Dropdown from "../../dropdown";

const NavLinks = () => {

  const { isLoading, data } = useGetUser();

  const queryClient = useQueryClient();
  const {isLoading: isLoggingOut, mutate} = useMutation(() => {
    return axios.post('logout');
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('me');
    }
  })

  const Loggedinlinks = () => {

    const navigate = useNavigate();

    const logout = () => {
      mutate(undefined, {
        onSuccess: () => {
          navigate("/");
        }
      });
    }

    return (
      <>
        {/* <!---MEANT FOR MOBILE RESPONSIVENESS---> */}
        <div className="mobile">
          <Dropdown visible={
            <li className="nav_link"><Hamburger/></li>
            }>
            <li className="nav_link"><Link to={ "/user/" + data.data.user._id}>dashboard</Link></li>
            <li className="nav_link"><Link to="/user/edit">profile</Link></li>
            <li className="nav_link" onClick={mutate}>{isLoggingOut ? <span>loading</span> : <span>logout</span> }</li>
          </Dropdown>
        </div>
        <div className="desktop">
          <Dropdown visible={
            <li className="nav_link">
              account <NavDown/>
              </li> }>
            <li className="nav_link"><Link to={ "/user/" + data.data.user._id}>dashboard</Link></li>
            <li className="nav_link"><Link to="/user/edit">profile</Link></li>
            <li className="nav_link" onClick={logout}>{isLoggingOut ? <span>loading</span> : <span>logout</span> }</li>
          </Dropdown>
        </div>
        <Link to="/blogs/create">
          <li className="nav_link primary bigger">
            Start Writing
          </li>
        </Link>
      </>
    )}

  const Loggedoutlinks = () => {
    return (
      <>
        <Link to="/login">
          <li className="nav_link">
            login
          </li>
        </Link>
        <Link to="/signup">
          <li className="nav_link primary">
            signup
          </li>
        </Link></>
    )}

  // const location = useLocation();
  // if(location.pathname.search(/\/blogs\/create\/?$/) === 0) {
  //   return (
  //     <BlogCreateLinks/>
  //   )
  // }
  return <>
    <Link to="/blogs">
      <li className="nav_link">
        blogs
      </li>
    </Link>
    { !isLoading ? 
        data.data.user === null ? <Loggedoutlinks/> : <Loggedinlinks/>
        : <Loggedoutlinks/> }
  </>
}

export default NavLinks;
