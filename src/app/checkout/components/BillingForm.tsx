'use client';

import { BillingSchema } from '@/schemas/billingSchema';
import { Form, Field, Formik, FormikHelpers } from 'formik';
import FormField from './FormField';
import { useState, useEffect } from 'react';
import useCartStore, { BillingFormData } from '@/stores/cartStore';

const BillingDetailsForm = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const { setFormData, getSavedBillingDetails } = useCartStore();
  const [initialValues, setInitialValues] = useState<BillingFormData>({
    name: '',
    company_name: '',
    street_address: '',
    apartment: '',
    city: '',
    phone_number: '',
    email: '',
    save_info: true,
  });

  useEffect(() => {
    const savedDetails = getSavedBillingDetails();
    if (savedDetails) {
      setInitialValues(savedDetails);
    }
  }, [getSavedBillingDetails]);

  const handleSubmit = async (
    values: BillingFormData,
    { setSubmitting }: FormikHelpers<BillingFormData>,
  ) => {
    try {
      setFormData(values);
      setSubmitting(false);
    } catch (error) {
      console.error('Error updating billing details: ', error);
      setFormError('There was an issue saving your billing details.');
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={BillingSchema}
      enableReinitialize
    >
      {({ isSubmitting, handleChange, handleBlur, values }) => (
        <div className="billing-details w-full md:w-1/2">
          <h1 className="mb-4 text-lg font-medium">Billing Details</h1>
          <Form className="space-y-4">
            <fieldset disabled={isSubmitting}>
              <legend className="sr-only">Billing Form</legend>
              <FormField
                label="Name"
                name="name"
                type="text"
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFormError={setFormError}
                isRequired
                value={values.name}
              />
              <FormField
                label="Company Name"
                name="company_name"
                type="text"
                value={values.company_name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFormError={setFormError}
              />
              <FormField
                label="Street Address"
                name="street_address"
                type="text"
                value={values.street_address}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFormError={setFormError}
                isRequired
              />
              <FormField
                label="Apartment, floor etc. (optional)"
                name="apartment"
                type="text"
                value={values.apartment}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFormError={setFormError}
              />
              <FormField
                label="Town/City"
                name="city"
                type="text"
                value={values.city}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFormError={setFormError}
                isRequired
              />
              <FormField
                label="Phone Number"
                name="phone_number"
                type="tel"
                value={values.phone_number}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFormError={setFormError}
                isRequired
              />
              <FormField
                label="Email Address"
                name="email"
                type="email"
                value={values.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFormError={setFormError}
                isRequired
              />
            </fieldset>

            {formError && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {formError}
              </p>
            )}

            <div className="flex items-center gap-2">
              <Field
                type="checkbox"
                name="save_info"
                id="save_info"
                className="rounded border-gray-500 checked:bg-red-600 checked:text-white"
              />
              <label htmlFor="save_info" className="text-gray-800">
                Save this information for faster check-out next time
              </label>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default BillingDetailsForm;
