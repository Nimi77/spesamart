import { Field } from 'formik';
import { ChangeEvent } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string | boolean | null;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  error?: string | false;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  value,
  handleChange,
  handleBlur,
  isRequired = false,
  error,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-gray-500">
        {label}
        {isRequired && <span className="text-red-600">*</span>}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        value={typeof value === 'boolean' ? '' : value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`input-field w-full rounded border-none bg-secondary px-4 py-2.5 outline-none ${
          error ? 'border-red-500' : ''
        }`}
        required={isRequired}
        aria-required={isRequired}
      />
      {error && <p className="mt-1 text-red-600">{error}</p>}
    </div>
  );
};

export default FormField;
