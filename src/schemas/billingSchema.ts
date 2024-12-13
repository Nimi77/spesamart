import * as Yup from "yup";

export const BillingSchema = Yup.object({
  name: Yup.string()
    .min(6, "Name must be at least 6 characters")
    .required("Name is required"),
  company_name: Yup.string().optional(),
  street_address: Yup.string().required("Street Address is required"),
  apartment: Yup.string().optional(),
  city: Yup.string().required("Town/City details is required"),
  phone_number: Yup.number().required("Phone Number is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});
