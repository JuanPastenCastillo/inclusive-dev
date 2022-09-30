import React, { useState, useContext } from "react"
import { Navigate } from "react-router-dom"
import { ButtonMedium } from "../../components/ui/buttons/general"
import {
  CaptionSignUp,
  DisplayErrorComponent,
  Form,
  H4_EMAIL_SIGNUP,
  H4_PASSWORD_SIGNUP,
  InputEmail,
  InputPassword,
  StyleInputFirst,
  StyleInputSecond,
  TermsAndServices
} from "./styles/SignupForm"
import { Caption } from "../../components/ui/heading_body_text/DesktopMobileFonts"
import { HyperlinkXS } from "../../components/ui/hyperlink/HyperlinkFonts"
import { LoginCtx } from "../../context/LoginCtx"
import EmailIcon from "../../assets/Icons/EmailIcon.png"
import LockIcon from "../../assets/Icons/LockIcon.png"
import EyeIcon from "../../assets/Icons/EyeIcon.png"
import { Img } from "./styles/SignupForm"
import { ExclamationSvg } from "../../assets/Icons"

const LOGIN_URL = "https://jsonplaceholder.typicode.com/posts"

const SignupForm = () => {
  const { setIsLogin, setWhoIsLogin } = useContext(LoginCtx)
  const [email, setEmail] = useState({
    value: "",
    hasError: false,
    touched: false
  })
  const [password, setPassword] = useState({
    value: "",
    hasError: false,
    touched: false
  })

  const [passwordReveal, setPasswordReveal] = useState(false)
  const [success, setSuccess] = useState(false)
  const [emailAlreadyRegistered, setEmailAlreadyRegistered] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // console.log("values:", email)

      const fetching = await fetch(LOGIN_URL, {
        method: "POST",
        body: JSON.stringify({
          email: `${email}`
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      
     // console.log('fetching:', fetching)

      if (fetching.ok !== true) {
        throw new Error("Something happend")
      }

      const toJson = await fetching.json()
     // console.log("toJson:", toJson)

      let keyToPush = `INCLUSIVE_ACCOUNT_${email.value}`
     // console.log("keyToPush:", keyToPush)

      let isUserAlreayCreated = localStorage.getItem(keyToPush)
     // console.log("isUserAlreayCreated:", isUserAlreayCreated)

      if (isUserAlreayCreated === null) {
        let valueToAdd = {
          isLogin: true,
          "Speech-Therapists-saved": []
        }
        localStorage.setItem(keyToPush, JSON.stringify(valueToAdd))
      }

      if (isUserAlreayCreated) {
        // ?TODO This is the log in logic
        // let parseDataUser = JSON.parse(localStorage.getItem(keyToPush))
        // parseDataUser.isLogin = true
        // localStorage.setItem(keyToPush, JSON.stringify(parseDataUser))

        setEmailAlreadyRegistered("This email is already registered. Want to")

        throw new Error("Email already used")
      }

      setEmailAlreadyRegistered("")
      setWhoIsLogin(keyToPush)
      setIsLogin(true)
      setSuccess(true)
    } catch (error) {
     console.log("error:", error)

      // if (!error?.response) {
      //   setErrMsg("No server response")
      // } else if (error.response?.status === 400) {
      //   setErrMsg("Missing Username or Password")
      // } else if (error.response?.status === 401) {
      //   setErrMsg("Unauthorized")
      // } else {
      //   setErrMsg("Login Failed")
      // }

      // errRef.current.focus()
    }
  }

  const onChangeEmail = (e) => {
    const inputValue = e.target.value.trim().toLowerCase()
    let emailHasError = false

    if (
      !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        inputValue
      )
    ) {
      emailHasError = true
    }

    setEmail((prevState) => ({
      ...prevState,
      value: e.target.value,
      hasError: emailHasError
    }))
    setEmailAlreadyRegistered("")
  }

  const handleFocusEmail = () => {
    setEmail((prevState) => ({
      ...prevState,
      touched: true
    }))
  }

  const onChangePassword = (e) => {
    const inputValue = e.target.value.trim().toLowerCase()
    let passwordHasError = false

    if (/[a-zA-Z0-9]{8,}/.test(inputValue)) {
      passwordHasError = true
    }

    setPassword((prevState) => ({
      ...prevState,
      value: e.target.value,
      hasError: passwordHasError
    }))
    setEmailAlreadyRegistered("")
  }

  const handleFocusPassword = () => {
    setPassword((prevState) => ({
      ...prevState,
      touched: true
    }))
  }

  const showPassword = () => {
    setPasswordReveal(!passwordReveal)
  }

  return (
    <>
      <section>
        {success && <Navigate to="/" replace={true} />}

        <Form onSubmit={handleSubmit}>
          <H4_EMAIL_SIGNUP
            displayRedEmail={{
              emailAlreadyRegistered,
              hasError: email.hasError,
              hasTouched: email.touched
            }}
          >
            Email
          </H4_EMAIL_SIGNUP>

          <StyleInputFirst
            customMargin={{
              emailAlreadyRegistered,
              hasError: email.hasError,
              hasTouched: email.touched
            }}
          >
            <Img src={EmailIcon} alt="Email icon" className="EmailIconSF" />
            <InputEmail
              value={email.value}
              type="email"
              required
              onChange={onChangeEmail}
              onBlur={handleFocusEmail}
              id="email"
              className="InputFirstSF"
              autocomplete="off"
              whichOutline={{
                emailAlreadyRegistered,
                hasError: email.hasError,
                hasTouched: email.touched
              }}
            />
            {email.touched && email.hasError && (
              <Caption className={`CaptionInRedSF DisplayErrorFirst`}>
                It should be a valid email address!
              </Caption>
            )}
            {emailAlreadyRegistered !== "" && (
              <DisplayErrorComponent className="CaptionInRedSF DisplayErrorFirst">
                <ExclamationSvg />

                <Caption>
                  {emailAlreadyRegistered}{" "}
                  <HyperlinkXS to="/login">log in?</HyperlinkXS>
                </Caption>
              </DisplayErrorComponent>
            )}
          </StyleInputFirst>

          {password.touched && password.hasError ? (
            <H4_PASSWORD_SIGNUP>Password</H4_PASSWORD_SIGNUP>
          ) : (
            <H4_PASSWORD_SIGNUP
              className={`${password.touched ? "CaptionInRedSF" : ""}`}
            >
              Password
            </H4_PASSWORD_SIGNUP>
          )}

          <StyleInputSecond>
            <Img src={LockIcon} alt="Key icon" className="lockIconSF" />
            <Img
              src={EyeIcon}
              alt="Eye icon"
              className="eyeIconSF"
              onClick={showPassword}
            />

            <InputPassword
              value={password.value}
              type={passwordReveal ? "text" : "password"}
              required
              onChange={onChangePassword}
              onBlur={handleFocusPassword}
              id="password"
              className="InputSecondSF"
              whichOutline={{
                hasError: password.hasError,
                hasTouched: password.touched
              }}
            />
            {password.touched && password.hasError ? (
              <CaptionSignUp className="DisplayErrorSecond">
                Password must include at least 8 characters
              </CaptionSignUp>
            ) : (
              <CaptionSignUp
                className={`${password.touched ? "CaptionInRedSF" : ""}`}
              >
                Password must include at least 8 characters
              </CaptionSignUp>
            )}
          </StyleInputSecond>

          <TermsAndServices>
            <Caption>
              By signing up, you agree to our{" "}
              <HyperlinkXS to="/work-in-progress">
                Terms of Service{" "}
              </HyperlinkXS>{" "}
              and{" "}
              <HyperlinkXS to="/work-in-progress">Privacy Policy</HyperlinkXS>{" "}
            </Caption>
          </TermsAndServices>

          <div>
            <ButtonMedium>Sign up</ButtonMedium>
          </div>
        </Form>
      </section>
    </>
  )
}

export default SignupForm
