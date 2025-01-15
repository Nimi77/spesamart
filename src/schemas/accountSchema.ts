import * as Yup from 'yup';

export const AccountDetailsSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  address: Yup.string().required('Address is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  currentPassword: Yup.string()
    .required('Current Password is required')
    .min(6, 'Password must be at least 6 characters'),
  newPassword: Yup.string()
    .required('New Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .nullable()
    .required('Confirm Password is required'),
});
