import  FacebookIcon  from "../../../../assets/Icons/FacebookIcon.jpg"
import  GoogleIcon  from "../../../../assets/Icons/GoogleIcon.png"
import  EmailIcon  from "../../../../assets/Icons/EmailIcon.png"
import { LoginBtnsStyled } from "./LoginBtnsStyled.js"

export const FacebookLoginBtn = () => {
  return (
    <LoginBtnsStyled facebook>
      <img src={FacebookIcon} alt="Facebook logo icon"/>
      <p >Sign up with Facebook</p>
    </LoginBtnsStyled>
  )
}

export const GoogleLoginBtn = () => {
  return (
    <LoginBtnsStyled google>
      <img src={GoogleIcon} alt="Google logo icon"/>
      <p >Sign up with Google</p>
    </LoginBtnsStyled>
  )
}

export const EmailLoginBtn = () => {
  return (
    <LoginBtnsStyled >
      <img src={EmailIcon} alt="Email logo icon"/>
      <p >Sign up with Email</p>
    </LoginBtnsStyled>
  )
}


