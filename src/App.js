import AppWrapper from "./assets/AppWrapper.js"
import { Routes, Route } from "react-router-dom"
import HomeIndex from "./pages/home"
import About from "./pages/about"
import ORG from "./pages/ORG"
import Blog from "./pages/blog"
import SNT from "./pages/SNT"
import Login from "./pages/login"
import WorkInProgress from "./pages/work-in-progress/index.js"
import NotFound from "./pages/404/index.js"
import NavBar from "./pages/home/NavBar.js"
import Signup from "./pages/signup/index.js"
import { LoginCtxProvider } from "./context/LoginCtx.js"



function App() {
  
  
  
  
  return (
    <AppWrapper>
      <LoginCtxProvider>
        
        <NavBar />
        
        
        
        
        
        <Routes>
          <Route path="/" element={<HomeIndex />} />
          <Route path="about" element={<About />} />
          <Route path="SNT" element={<SNT />} />
          <Route path="ORG" element={<ORG />} />
          <Route path="blog" element={<Blog />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="work-in-progress" element={<WorkInProgress />} />{" "}
          {/* Not used anymore */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <div className="FooterProvisional">
          <p>Footer</p>
        </div>
      </LoginCtxProvider>
      
      
      
    </AppWrapper>
  )
}

export default App
