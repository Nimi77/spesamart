'use client';

import useCartStore, { BillingFormData } from '@/hooks/cartStore';
import { Formik, Form } from 'formik';
import { BillingSchema } from '@/schemas/billingSchema';
import FormField from './FormField';

interface BillingDetailsFormProps {
  onValidationChange: (isValid: boolean) => void;
}

const BillingDetailsForm = ({
  onValidationChange,
}: BillingDetailsFormProps) => {
  const { setFormData, formData } = useCartStore();

  const initialValues: BillingFormData = formData || {
    name: '',
    company_name: '',
    street_address: '',
    apartment: '',
    city: '',
    phone_number: '',
    email: '',
    save_info: true,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BillingSchema}
      validateOnMount
      validateOnChange
      validateOnBlur
      onSubmit={(values) => {
        setFormData(values);
      }}
    >
      {({ values, errors, touched, isValid, handleChange, handleBlur }) => {
        onValidationChange(isValid);

        return (
          <div className="billing-details md:w-11/20 w-full">
            <h1 className="mb-4 text-lg font-medium">Billing Details</h1>
            <Form aria-label="Billing details form">
              <fieldset className="space-y-4">
                <legend className="sr-only">Billing Form</legend>

                <FormField
                  label="Name"
                  name="name"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.name}
                  isRequired
                  error={touched.name && errors.name}
                />
                <FormField
                  label="Company Name (optional)"
                  name="company_name"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.company_name}
                  error={touched.company_name && errors.company_name}
                />
                <FormField
                  label="Street Address"
                  name="street_address"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.street_address}
                  isRequired
                  error={touched.street_address && errors.street_address}
                />
                <FormField
                  label="Apartment, floor etc. (optional)"
                  name="apartment"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.apartment}
                  error={touched.apartment && errors.apartment}
                />
                <FormField
                  label="Town/City"
                  name="city"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.city}
                  isRequired
                  error={touched.city && errors.city}
                />
                <FormField
                  label="Phone Number"
                  name="phone_number"
                  type="tel"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.phone_number}
                  isRequired
                  error={touched.phone_number && errors.phone_number}
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.email}
                  isRequired
                  error={touched.email && errors.email}
                />
              </fieldset>

              {/* save info checkbox */}
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="save_info"
                  id="save_info"
                  checked={values.save_info}
                  onChange={handleChange}
                  className="rounded border-gray-500 text-red-600 checked:bg-red-600"
                />
                <label htmlFor="save_info" className="text-gray-800">
                  Save this information for faster check-out next time
                </label>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default BillingDetailsForm;
