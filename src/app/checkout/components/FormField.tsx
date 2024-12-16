import { ErrorMessage, Field } from "formik";
import { ChangeEvent } from "react";

interface FormFieldProps {
  label: string;
  name: string;
  type: string | number;
  setFormError: (error: string | null) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  isRequired = false,
  setFormError,
  handleChange,
  handleBlur,
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
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFormError(null);
          handleChange(e);
        }}
        onBlur={handleBlur}
        className="input-field bg-secondary py-2.5 px-4 text-sm rounded border-none outline-none w-full"
      />
      <ErrorMessage
        name={name}
        component="span"
        className="text-red-600 mt-1"
      />
    </div>
  );
};

export default FormField;
