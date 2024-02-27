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
