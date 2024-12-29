import { ErrorMessage, Field } from 'formik';
import { ChangeEvent } from 'react';

interface AccountFormProps {
  label?: string;
  name: string;
  type: string | number;
  placeholder: string;
  setFormError: (error: string | null) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const AccountFormField: React.FC<AccountFormProps> = ({
  label,
  name,
  type,
  placeholder,
  setFormError,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="flex-1 space-y-2">
      {label && (
        <label htmlFor={name} className="block font-medium text-gray-800">
          {label}
        </label>
      )}

      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFormError(null);
          handleChange(e);
        }}
        onBlur={handleBlur}
        className="input-field w-full rounded border-none bg-secondary px-4 py-2.5 text-gray-500 outline-none"
      />
      <ErrorMessage name={name} component="span" className="h-4 text-red-600" />
    </div>
  );
};

export default AccountFormField;
