import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Sdp from "./components/team/SDP/Sdp";
import Aws from "./components/team/AWS/Aws";
import DetailBlog from "./components/detailBlog/DetailBlog";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
         <Route  path='/courses' element={<CourseHome/>} />
          <Route  path='/solutions' element={<Team/>} />
          <Route  path='/solutions/sdp' element={<Aws/>} />
          <Route  path='/solutions/aws' element={<Sdp/>} />
          <Route  path='/pricing' element={<Pricing/>} />
          <Route  path='/journal' element={<Blog/>} />
          <Route  path='/journal/:id' element={<DetailBlog/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
