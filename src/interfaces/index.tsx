export interface ITextInput {
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange?: () => void;
  onFocus?: () => void;
  type?: string;
  onWheel?: () => void;
  control: any;
  name: string;
  disabled?: boolean;
  prefix?: any;
  // error?: FieldError
  className?: string;
  handleInputChange?: any;
  maxLength?: number;
  onKeyDown?: any;
  inputRef?: any;
  onKeyUp?: any;
  autocomplete?: string;
  readOnly?: any;
  onBlur?: any;
  defaultValue?: any;
  suffix?: any;
}
export interface ITextArea {
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange?: () => void;
  onFocus?: () => void;
  rows: number;
  onWheel?: () => void;
  control: any;
  name: string;
  disabled?: boolean;
  prefix?: any;
  // error?: FieldError
  className?: string;
  handleInputChange?: any;
  maxLength?: number;
  onKeyDown?: any;
  inputRef?: any;
  onKeyUp?: any;
  autocomplete?: string;
  readOnly?: any;
  onBlur?: any;
  defaultValue?: any;
  suffix?: any;
}

export interface IButton {
  name: string;
  label: string;
  type: string;
  value?: string;
}

export interface IErrorValidationMessage {
  errorMessage: string | undefined;
}

export interface ILoginFormData {
  email: string;
  password: string;
}
export interface ISignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface IPostFormData {
  title: string;
  body: string;
}
