import * as Yup from "yup";
import { errorMessage } from "@/constants/errorMessages";

export const Post_Validation = Yup.object().shape({
  title: Yup.string().required(errorMessage.title),
  body: Yup.string().required(errorMessage.content),
});
