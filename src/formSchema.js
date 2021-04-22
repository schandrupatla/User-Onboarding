// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(3, "username must be 3 chars long"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
 password: yup
    .string()
    .min(8, "password must be 8 chars long")
    .required("email is required"),
  terms_of_service: yup.boolean(),

});
