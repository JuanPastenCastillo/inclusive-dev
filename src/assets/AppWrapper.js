import styled from "styled-components"

const AppWrapper = styled.div`
  outline: 2px red solid;
  display: grid;
  place-items: center;
  /* place-self: center; */
  /* align-self: center; */
  height: 100vh;

  div {
    outline: 1px black solid;
    border-radius: 8px;
    padding: 2rem;
  }

  div > h1 {
    margin-bottom: 35px;
  }

  div > h2 {
    margin-bottom: 20px;
  }

  & > div > a {
    
    font-weight: bolder;

    text-align: center;
    margin:auto;
    width:100%;
  }
`

export default AppWrapper
