import React, {useEffect} from "react"
import HeroImage from "./HeroImage.js"
import "./Provisional.css"

const HomeIndex = () => {
  
  
  useEffect(() => {
    console.log("Render ones");
    window.scrollTo(0, 0);
  },[])
  
  
  return (
    <>
      <HeroImage />
      
      
      
      

      <h2 className="H2ContentProvisional" id="MainContent">
        Main Content
      </h2>
      
      
    </>
  )
}

export default HomeIndex
