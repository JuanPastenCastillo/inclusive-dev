import React, { useRef, useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
// import axios from "../../api/axios"
// import AuthContext from "../../context/AuthProvider"




// const LOGIN_URL = "/auth"
const LOGIN_URL = "https://jsonplaceholder.typicode.com/posts"



const Login = () => {
  
  return <>login</>
  
  // const { setAuth, setDataToUse } = useContext(AuthContext)
  // const userRef = useRef()
  // const errRef = useRef()

  // const [user, setUser] = useState("")
  // const [pwd, setPwd] = useState("")
  // const [errMsg, setErrMsg] = useState("")
  // const [success, setSuccess] = useState(false)

  // useEffect(() => {
  //   userRef.current.focus()
  // }, [])

  // useEffect(() => {
  //   setErrMsg("")
  // }, [user, pwd])

  // useEffect(() => {
  //   if (success) {
  //     setAuth({ success })
  //   }
  // }, [success])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   /* Here you have to send data to the backend */

  //   try {
  //     const response = await axios.post(
  //       LOGIN_URL,
  //       JSON.stringify({ user, pwd }),
  //       {
  //         headers: { "Content-type": "application/json" },
  //         withCredentials: true
  //       }
  //     )

  //     console.log(JSON.stringify(response?.data))
  //     console.log(JSON.stringify(response))

  //     // const accessToken = response?.data?.accessToken
  //     // const roles = response?.data?.roles
  //     // setAuth({ user, pwd, roles, accessToken })

  //     setDataToUse({ user })
  //     setUser("")
  //     setPwd("")
  //     setSuccess(true)
  //   } catch (error) {
  //     if (!error?.response) {
  //       setErrMsg("No server response")
  //     } else if (error.response?.status === 400) {
  //       setErrMsg("Missing Username or Password")
  //     } else if (error.response?.status === 401) {
  //       setErrMsg("Unauthorized")
  //     } else {
  //       setErrMsg("Login Failed")
  //     }

  //     errRef.current.focus()
  //   }
  // }
  

  // return (
  //   <>
  //     {success ? (
  //       <section>
  //         <h1>You are logged in! {user}</h1>
  //         <br />
  //         <p>
  //           <Link to="/">Go to Home</Link>
  //         </p>
  //       </section>
  //     ) : (
  //       <section>
  //         <p
  //           ref={errRef}
  //           className={errMsg ? "errmsg" : "offfscreen"}
  //           aria-live="assertive"
  //         >
  //           {errMsg}
  //         </p>
  //         <h1>Sign in</h1>
  //         <form onSubmit={handleSubmit}>
  //           <label htmlFor="username">Username:</label>
  //           <input
  //             autoComplete="off"
  //             id="username"
  //             onChange={(e) => setUser(e.target.value)}
  //             ref={userRef}
  //             required
  //             type="text"
  //             value={user}
  //           />

  //           <label htmlFor="password">Password:</label>
  //           <input
  //             type="password"
  //             id="password"
  //             onChange={(e) => {
  //               setPwd(e.target.value)
  //             }}
  //             value={pwd}
  //             required
  //           />
  //           <button>Sign in</button>
  //         </form>

  //         <p>
  //           Need and Account? <br />
  //           {/* Router link here */}
  //           <span>
  //             <a href="">Sing up</a>
  //           </span>
  //         </p>
  //       </section>
  //     )}
  //   </>
  // )
}

export default Login


/* 
!FH

Input field error: https://www.figma.com/file/ZCckK3QpHGP3ES02EDRHXF/Design-Team?node-id=2923%3A69170


*/


/* 
import React, { useRef, useState, useEffect, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "../../api/axios"
import { ButtonMedium } from "../../components/ui/buttons/general"
import { H4 } from "../../components/ui/heading_body_text/HeaderFonts"
import AuthContext from "../../context/AuthProvider"
import { Form, Img, StyleInput, TermsAndServices } from "./styles/SignupForm"
import EmailIcon from "../../assets/Icons/EmailIcon.png"
import lockIcon from "../../assets/Icons/lockIcon.png"
import eyeIcon from "../../assets/Icons/eyeIcon.png"
import { Caption } from "../../components/ui/heading_body_text/DesktopMobileFonts"
import { HyperlinkXS } from "../../components/ui/hyperlink/HyperlinkFonts"
import FormInput from "./FormInput.js"

/* Wait for this URL work again */
// const LOGIN_URL = "/auth"
// const LOGIN_URL = "https://jsonplaceholder.typicode.com/posts"

// const SignupForm = () => {
//   // const { setAuth, setDataToUse } = useContext(AuthContext)
//   // const userRef = useRef()
//   // const errRef = useRef()

//   // const [focused, setFocused] = useState(false)
//   const [values, setValues] = useState({
//     email: "",
//     password: ""
//   })
//   const [success, setSuccess] = useState(false)

//   // const [user, setUser] = useState("")
//   // const [pwd, setPwd] = useState("")
//   // const [errMsg, setErrMsg] = useState("")
  

//   const inputs = [
//     {
//       id: 1,
//       name: "email",
//       type: "email",
//       errorMessage: "It should be a valid email address!",
//       label: "Email",
//       required: true
//     },
//     {
//       id: 2,
//       name: "password",
//       type: "password",
//       errorMessage: "Password must include at least 8 characters",
//       label: "Password",
//       pattern: `[a-zA-Z0-9]{8,}`,
//       required: true
//     }
//   ]


//   const handleSubmit = async (e) => {
//     e.preventDefault()
    
    

//     /* Here you have to send data to the backend */

//     /* // ? TODO:
//      1) Here change things to make a localStorageData 
//         https://youtu.be/uutiLsX5kFE
//      2) After that, check when the user charge the page forr the first time is there is a cached data to recognice it in the nav bar
//     */

//     try {
//       // *Change this for a raw fetch
//       // const response = await axios.post(
//       //   LOGIN_URL,
//       //   JSON.stringify({ user: values.user, pwd: values.pwd }),
//       //   {
//       //     headers: { "Content-type": "application/json" },
//       //     withCredentials: true
//       //   }
//       // )

//       // console.log((response?.data))
      
//       console.log("submited. Inside try")

//       // const dataToSave = response?.data.user

//       // window.localStorage.setItem("INCLUSIVE_ACOUNT", dataToSave)
//       // console.log(JSON.stringify(response))

//       // const accessToken = response?.data?.accessToken
//       // const roles = response?.data?.roles
//       // setAuth({ user, pwd, roles, accessToken })

//       // setDataToUse({ user: values.user })
//       // setValues.email("")
//       // setValues.password("")
//       // setAuth(true)
//       // setDataToUse(true)
//       // setSuccess(true)
//     } catch (error) {
//       console.log('error:', error)
      
//       // if (!error?.response) {
//       //   setErrMsg("No server response")
//       // } else if (error.response?.status === 400) {
//       //   setErrMsg("Missing Username or Password")
//       // } else if (error.response?.status === 401) {
//       //   setErrMsg("Unauthorized")
//       // } else {
//       //   setErrMsg("Login Failed")
//       // }

//       // errRef.current.focus()
//     }
//   }

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value })
//   }

//   return (
//     <>
//       <section>
//         {/* <p
//           ref={errRef}
//           aria-live="assertive"
//         >
//         </p> */}

//         {success && <Navigate to="/" replace={true} />}

//         <Form onSubmit={handleSubmit}>
//           {inputs.map((input) => (
//             <FormInput
//               key={input.id}
//               {...input}
//               value={values[input.name]}
//               onChange={onChange}
//             />
//           ))}

//           {/* <H4>Email</H4>


//           <StyleInput>
//             <Img src={EmailIcon} alt="Email icon" className="EmailIconSF" />
//             <input
//               value={values[inputs[0].name]}
//               type="email"
//               required
//               ref={userRef}
//               onChange={onChange}
//               onBlur={handleFocus}
//               id="email"
//               className="InputFirstSF"
//               focused={focused.toString()}
//             />
//             {<span>{inputs[0].errorMessage}</span>}
            
//           </StyleInput>

//           <H4>Password</H4>

//           <StyleInput>
//             <Img src={lockIcon} alt="Key icon" className="lockIconSF" />
//             <Img src={eyeIcon} alt="Eye icon" className="eyeIconSF" />
//             <input
//               type="password"
//               id="password"
//               onChange={onChange}
//               value={values[inputs[1].name]}
//               required
//               className="InputSecondSF"
//             />
//             {<span>{inputs[0].errorMessage}</span>}
//             <Caption>Password must include at least 8 characters</Caption>
//           </StyleInput> */}

//           <TermsAndServices>
//             <Caption>
//               By signing up, you agree to our{" "}
//               <HyperlinkXS to="/work-in-progress">
//                 Terms of Service{" "}
//               </HyperlinkXS>{" "}
//               and{" "}
//               <HyperlinkXS to="/work-in-progress">Privacy Policy</HyperlinkXS>{" "}
//             </Caption>
//           </TermsAndServices>

//           <div>
//             <ButtonMedium>Sign up</ButtonMedium>
//           </div>
//         </Form>
//       </section>
//     </>
//   )
// }

// export default SignupForm


/* !FH

Input field error: https://www.figma.com/file/ZCckK3QpHGP3ES02EDRHXF/Design-Team?node-id=2923%3A69170


*/




