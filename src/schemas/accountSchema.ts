import * as Yup from 'yup';

export const AccountDetailsSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  address: Yup.string().required('Address is required'),
  current_password: Yup.string()
    .required('Current Password is required')
    .min(6, 'Password must be at least 6 characters'),
  new_password: Yup.string()
    .required('New Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('new_password')], 'Passwords must match')
    .nullable()
    .required('Confirm Password is required'),
});
