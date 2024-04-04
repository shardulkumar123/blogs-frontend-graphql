import * as Yup from "yup";
import { errorMessage } from "@/constants/errorMessages";

export const LOGIN_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .required(errorMessage.email)
    .matches(/^\S.*/, errorMessage.firstCharacter)
    .email(errorMessage.validEmail)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+\w+$/, errorMessage.validEmail),
  password: Yup.string()
    .required(errorMessage.requiredPassword)
    .max(12, errorMessage.passwordLength)
    .matches(/^\S.*/, errorMessage.firstCharacter),
});

export const SIGNUP_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required(errorMessage.firstname),
  lastName: Yup.string().required(errorMessage.lastname),
  email: Yup.string()
    .required(errorMessage.email)
    .matches(/^\S.*/, errorMessage.firstCharacter)
    .email(errorMessage.validEmail)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+\w+$/, errorMessage.validEmail),
  password: Yup.string()
    .required(errorMessage.requiredPassword)
    .max(12, errorMessage.passwordLength)
    .matches(/^\S.*/, errorMessage.firstCharacter),
});
