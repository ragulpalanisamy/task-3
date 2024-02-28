import React from 'react';

interface FormInputProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    pattern: string;
    required: boolean;
}
const FormInput = ({ id, label, type, placeholder, pattern, required }: FormInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="input-field"
        placeholder={placeholder}
        pattern={pattern}
        required={required}
      />
    </div>
  );
};

export default FormInput;
