import React, { useState, ChangeEvent, FocusEvent, FC } from "react";

// Define prop types using TypeScript interface
interface InputFieldProps {
  label?: string;
  icon?: React.ElementType; // Icon component
  showPassword?: boolean;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
}

const InputField: FC<InputFieldProps> = ({
  label,
  showPassword = false,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder = "",
  name = "",
}) => {

  const [toggle, setToggle] = useState<boolean>(false);
  const inputType = showPassword && toggle ? "text" : type;

  return (
    <div className="mb-1">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}

      {/* Input Container */}
      <div className="relative flex  w-full h-8 border-2 border-gray-200 rounded-lg ">
        {/* Left Icon */}
        

        {/* Input Field */}
        <input
          id={name}
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full  "pl-4" ${showPassword ? "pr-12" : "pr-4"} w-full h-full px-2 rounded-lg `}
          placeholder={placeholder}
          aria-label={label || placeholder}
        />

        {/* Toggle Password Visibility */}
        {showPassword && (
          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label={toggle ? "Hide password" : "Show password"}
          >
            {toggle ?  <img src="/svg/eye.svg" alt="google-icon" className="size-6 " /> :  <img src="/svg/slaceEye.svg" alt="google-icon" className="size-6 " />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
