import styled from "styled-components"
import NotFoundImage from "../../../assets/images/notFound.webp"

const NotFoundContainer = styled.div`
  background-image: url(${NotFoundImage});
  height:100vh;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  div {
    background: hsl(199.1, 56.4%, 15.3%, 0.38);
    border-radius: 8px;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    
    padding:2rem;
    margin-bottom: 5%;
    
    font-size: 8rem;
    text-align: center;
    
    & > p {
      margin: 0;
      margin-bottom: 6rem;
    }
    
    & > *{
      font-size: 8rem;
      color:snow;
      text-decoration: none;
    }
    
    & > a{
      text-decoration: underline;
    }
    
    & > a:hover{
      text-decoration-color: hsl(7.4, 65.3%, 66.1%);
      color:hsl(7.4, 65.3%, 66.1%);
    }
    
    
    
  }
  
  
`

export default NotFoundContainer
