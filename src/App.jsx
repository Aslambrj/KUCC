import "./App.css";
import QnaSection from "./pages/QNA/QnaSection";
import Members from "./pages/member/Members";
import GallerySection from "./pages/gallery/GallerySection";
import Profile from "./pages/profile/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import MemberInfo from "./pages/member/MemberInfo";
import Events from "./pages/event/Events";
import MainLayout from "./layout/MainLayout";
// import ViewEvent from "./pages/event/ViewEvent";
import BlogSection from "./pages/insight/BlogSection";     // ← insight
import Login from "./pages/login&signup/Login";
import Signup from "./pages/login&signup/Signup";
import About from "./pages/about/About";
import CreateBlog from "./pages/insight/CreateBlog";       // ← insight
import Partners from "./pages/partners/Partners";
import Update from "./pages/updates/Update";  // 👈 Import
import LastEventGallary from "./pages/event/lastEventGallary";
import EventRegistration from "./pages/event/EventRegistration";

import MindTheHackForm from "./pages/mind/MindTheHackForm";



const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/updates", element: <Update /> },  // 👈 Add this
      { path: "/events", element: <Events /> },
      { path: "/blog", element: <BlogSection /> },
      { path: "/blog/create", element: <CreateBlog /> },
      { path: "/members", element: <Members /> },
      { path: "/qna", element: <QnaSection /> },
      { path: "/gallery", element: <GallerySection /> },
      { path: "/profile", element: <Profile /> },
      { path: "/memberinfo/:id", element: <MemberInfo /> },
      // { path: "/viewevent", element: <ViewEvent /> },
      { path: "/partners", element: <Partners /> },
      { path: "/lastEventGallary", element: <LastEventGallary /> },
      { path: "/event-registration", element: <EventRegistration /> },
      
      { path: "/mind-the-hack", element: <MindTheHackForm /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
