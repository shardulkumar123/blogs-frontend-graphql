import { ITextArea, ITextInput } from "@/interfaces";
import { Controller } from "react-hook-form";

const TextArea = ({
  name,
  required,
  defaultValue,
  readOnly,
  handleInputChange,
  placeholder,
  control,
  onFocus,
  onBlur,
  onWheel,
  disabled,
  maxLength,
  onKeyDown,
  onKeyUp,
  inputRef,
  autocomplete,
  rows,
}: ITextArea) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <textarea
          className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder={placeholder}
          required={required}
          value={value || ""} // Ensure value is not undefined
          readOnly={readOnly}
          onChange={(e) => {
            onChange(e.target.value);
            if (handleInputChange) handleInputChange(e.target.value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          onWheel={onWheel}
          disabled={disabled}
          maxLength={maxLength}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          ref={inputRef}
          autoComplete={autocomplete}
          rows={rows}
        />
      )}
    />
  );
};

export default TextArea;
