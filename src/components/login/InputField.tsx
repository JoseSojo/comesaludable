import React, { forwardRef, ReactNode } from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  rightElement?: ReactNode;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, type, placeholder, value, onChange, icon, rightElement, error }, ref) => {
    return (
      <div className="form-control mb-4">
        <label htmlFor={id} className="label">
          <span className="label-text font-medium">{label}</span>
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={id}
            type={type}
            className={`input input-bordered w-full ${
              icon ? 'pl-10' : ''
            } ${error ? 'input-error' : ''}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {rightElement}
        </div>
        {error && <div className="text-sm text-error mt-1">{error}</div>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;