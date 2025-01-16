import { ErrorMessage, Field } from 'formik';
import { ChangeEvent } from 'react';

interface AuthFormProps {
  id: string;
  name: string;
  label: string;
  type: string;
  setFormError: (error: string | null) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const AuthFormField: React.FC<AuthFormProps> = ({
  label,
  name,
  type,
  setFormError,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="auth-field">
      <Field
        id={name}
        name={name}
        type={type}
        placeholder=" "
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFormError(null);
          handleChange(e);
        }}
        onBlur={handleBlur}
        aria-required="true"
      />
      <ErrorMessage name={name} component="span" className="text-red-600" />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default AuthFormField;
