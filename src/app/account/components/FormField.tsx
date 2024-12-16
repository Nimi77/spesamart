import { ErrorMessage, Field } from "formik";
import { ChangeEvent } from "react";

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
    <div className="space-y-2 flex-1">
      {label && (
        <label htmlFor={name} className="block text-gray-800 font-medium">
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
        className="input-field bg-secondary text-gray-500 py-2.5 px-4 text-sm rounded border-none outline-none w-full"
      />
      <ErrorMessage name={name} component="span" className="text-red-600 h-4" />
    </div>
  );
};

export default AccountFormField;
