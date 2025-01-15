import * as Yup from 'yup';

export const BillingSchema = Yup.object({
  name: Yup.string()
    .min(6, 'Name must be at least 6 characters')
    .required('Name is required'),
  companyName: Yup.string().optional(),
  streetAddress: Yup.string().required('Street Address is required'),
  apartment: Yup.string().optional(),
  city: Yup.string().required('Town/City details is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(10, 'Phone number must be at least 10 digits')
    .max(11, 'Phone number must be at most 11 digits')
    .required('Phone number is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
});
