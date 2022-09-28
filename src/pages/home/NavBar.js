import { useContext } from "react"
import { Link } from "react-router-dom"
import {
  LoginComponent,
  Logo,
  NavBarStyled,
  NavigationLinks
} from "./styles/NavBar"
import { H2 } from "../../components/ui/heading_body_text/HeaderFonts"
import { BtnSmall } from "../../components/ui/buttons/general/ButtonStyled"
import {
  Caption,
  P
} from "../../components/ui/heading_body_text/DesktopMobileFonts"
import { LoginCtx } from "../../context/LoginCtx"

const NavBar = () => {

  const { isLogin,setIsLogin, whoIsLogin } = useContext(LoginCtx)

  const logoutHandler = () => {
    let dataAccount = JSON.parse(localStorage.getItem(whoIsLogin))
    dataAccount.isLogin = false

    localStorage.setItem(whoIsLogin, JSON.stringify(dataAccount))
    console.log(localStorage.getItem(whoIsLogin))

    setIsLogin(false)
  }

  return (
    <NavBarStyled>
      <Logo>
        <Link to="/">
          {" "}
          <H2 bold logo>
            {" "}
            Inclusive
          </H2>
        </Link>
      </Logo>

      <NavigationLinks>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/SNT">Guide to services</Link>
        </li>
        <li>
          <Link to="/ORG">Resource directory</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </NavigationLinks>

      {isLogin === true ? (
        <LoginComponent>
          <BtnSmall>My account</BtnSmall>
          <Caption bold onClick={logoutHandler}>Log out</Caption>
        </LoginComponent>
      ) : (
        <LoginComponent>
          <Link to="/signup">
            <BtnSmall>Sign up</BtnSmall>
          </Link>
          <Link to="/login">
            <P>Log in</P>
          </Link>
        </LoginComponent>
      )}

    </NavBarStyled>
  )
}

export default NavBar
