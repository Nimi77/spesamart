import { ErrorMessage, Field } from 'formik';
import { ChangeEvent } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string | boolean;
  setFormError: (error: string | null) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  value,
  setFormError,
  handleChange,
  handleBlur,
  isRequired = false,
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
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (setFormError) setFormError(null);
          handleChange(e);
        }}
        onBlur={handleBlur}
        className="input-field w-full rounded border-none bg-secondary px-4 py-2.5 text-sm outline-none"
        required={isRequired}
        aria-required={isRequired}
      />
      <ErrorMessage
        name={name}
        component="p"
        className="mt-1 text-sm text-red-600"
      />
    </div>
  );
};

export default FormField;
