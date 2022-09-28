import * as Yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

export const basicSchema = Yup.object().shape({
  email: Yup.string().email("Please enter a valid email").required("Required"),

  age: Yup.number().positive().integer().required("Required"),

  password: Yup.string()
    .min(5)
    .matches(
      passwordRules,
      "min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit"
    )
    .required("Required"),

  passConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Required")
})

