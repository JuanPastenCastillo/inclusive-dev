import styled from "styled-components"
import WorkInProgress from "../../../assets/images/workInProgressBg.webp"

export const WIP_CONTAINER = styled.div`
  height: 100vh;

  background-image: url(${WorkInProgress});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: left;
  

  div {
    background: hsl(243.1, 36.1%, 42.4%, 0.38);
    border-radius: 16px;
    backdrop-filter: blur(6.6px);
    -webkit-backdrop-filter: blur(6.6px);
    outline: 1px solid hsl(30.3, 97.9%, 81%, 0.11);
    
    padding: 3rem;
    transform: rotate(-30deg);
    margin-top: 23px;
    margin-left: -33px;

    /* padding: 20rem; */
    text-align: center;
    font-size: 4rem;
    

    &> p {
      margin: 0;
    }
    
    &> a:hover {
      text-decoration-color: hsl(15.9, 70.8%, 81.2%);
      color: hsl(15.9, 70.8%, 81.2%);
    }
    
    * {
      color: snow;
    }
  }
`
