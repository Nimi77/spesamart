import * as Yup from 'yup';

export const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone_number: Yup.string()
    .matches(/^\d+$/, 'Phone number must contain only numbers')
    .min(11, 'Phone number is required')
    .max(11, 'Phone number is required')
    .required('Phone number is required'),
  message: Yup.string()
    .required('Message is required')
    .max(500, 'Message must be 500 characters or less'),
});
