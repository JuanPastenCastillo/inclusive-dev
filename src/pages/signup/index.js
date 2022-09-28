import React from "react"
import { SignupWrapper, Img, RightSignup, LeftSignup } from "./styles/Signup.js"
import LoginImage from "../../assets/images/LoginImage.png"
import Breadcrumbs from "../../components/ui/breadcrumbs/Breadcrumbs.js"
import { H1, H4 } from "../../components/ui/heading_body_text/HeaderFonts.js"
import { Caption } from "../../components/ui/heading_body_text/DesktopMobileFonts.js"
import { HyperlinkM } from "../../components/ui/hyperlink/HyperlinkFonts.js"
import {
  FacebookLoginBtn,
  GoogleLoginBtn
} from "../../components/ui/buttons/login/LoginBtns.js"
import SignupForm from "./SignupForm.js"

const Signup = () => {
  return (
    <SignupWrapper>
      <LeftSignup>
        <Img
          src={LoginImage}
          alt="People with one flag in their hand: one of them have one prosthetic leg, the other is in wheelchair and the third one it looks like is blind and have a dog in their other hand."
        />
        <p>Connect to community based and recreational services</p>
      </LeftSignup>

      <RightSignup>
        <Breadcrumbs whichDisplay={[["Sign up", ""]]} />
        <H1>Join Inclusive</H1>
        <div>
          <H4>Have already an account? </H4>
          <HyperlinkM to="/login">Log in</HyperlinkM>
        </div>
        <div>
          <GoogleLoginBtn />
          <FacebookLoginBtn />
        </div>
        <div>
          <Caption>or</Caption>
        </div>

        <div>
          <SignupForm />
        </div>
      </RightSignup>
    </SignupWrapper>
  )
}

export default Signup
