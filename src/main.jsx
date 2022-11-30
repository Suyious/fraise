import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages'
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Blogs from "./pages/blogs";
import BlogCreate from "./pages/blogs/create";
import Blog from "./pages/blogs/[blog]";
import EditProfile from "./pages/user/edit";
import NotFound from "./components/errors/notfound";
import ComingSoon from "./components/errors/comingsoon";

// const Maintenance = () => <ComingSoon message="We are porting fraise from heroku to render. This might take 24 hours."/>

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
    errorElement: <NotFound/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "/signup", element: <SignUp/> },
      { path: "/login", element: <Login/> },
      { path: "/blogs", element: <Blogs/>},
      { path: "/blogs/:blog", element: <Blog/>},
      { path: "/user/edit", element: <EditProfile/>},
      { path: "/user/:user", element: <ComingSoon/>},
    ]
  }, {
    path: "/blogs/create",
    element: <BlogCreate/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router}/>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  </React.StrictMode>,
)
