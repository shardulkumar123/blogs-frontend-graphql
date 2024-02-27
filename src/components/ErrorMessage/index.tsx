import { IErrorValidationMessage } from "@/interfaces";

const ErroValidationMessage = ({ errorMessage }: IErrorValidationMessage) => {
  return <span className="text-red-500 text-sm ">{errorMessage}</span>;
};

export default ErroValidationMessage;
