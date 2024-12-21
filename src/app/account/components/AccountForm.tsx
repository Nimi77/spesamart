'use client';

import { AccountDetailsSchema } from '@/schemas/accountSchema';
import FormField from './FormField';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import Swal from 'sweetalert2';

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  current_password: string;
  new_password: string;
  confirm_password: string;
}

const AcccountForm = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: (nextState?: Partial<FormValues>) => void;
    },
  ) => {
    try {
      console.log('Submitting values: ', values);

      await Swal.fire({
        title: 'Success!',
        text: 'Your account details have been updated.',
        icon: 'success',
        position: 'top-end',
        timer: 3000,
        showConfirmButton: false,
      });

      resetForm({
        ...values,
        current_password: '',
        new_password: '',
        confirm_password: '',
      });
    } catch (error) {
      console.error('Error updating account details: ', error);

      await Swal.fire({
        title: 'Error',
        text: 'There was an issue updating your account details. Please try again.',
        icon: 'error',
        position: 'top-end',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        current_password: '',
        new_password: '',
        confirm_password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={AccountDetailsSchema}
    >
      {({ isSubmitting, handleChange, handleBlur, resetForm }) => (
        <div className="profile-details">
          <h2 className="text-base font-medium text-orange-red">
            Edit Your Profile
          </h2>
          <Form className="w-full">
            <fieldset disabled={isSubmitting}>
              <legend className="sr-only">Account Details Form</legend>
              <div className="account-info-details mb-4 mt-6 space-y-4">
                <div className="flex w-full flex-col gap-6 md:flex-row">
                  <FormField
                    label="First Name"
                    name="first_name"
                    type="text"
                    placeholder="Md"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFormError={setFormError}
                  />
                  <FormField
                    label="Last Name"
                    name="last_name"
                    type="text"
                    placeholder="Rimal"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFormError={setFormError}
                  />
                </div>
                <div className="flex flex-col gap-6 md:flex-row">
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="rimalll@gmail.com"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFormError={setFormError}
                  />
                  <FormField
                    label="Address"
                    name="address"
                    type="text"
                    placeholder="Kingston 524, United State"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFormError={setFormError}
                  />
                </div>

                <div className="password-change">
                  <label className="block font-medium text-gray-800">
                    Password Changes
                  </label>
                  <div className="space-y-2">
                    <FormField
                      name="current_password"
                      type="password"
                      placeholder="Current Password"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFormError={setFormError}
                    />
                    <FormField
                      name="new_password"
                      type="password"
                      placeholder="New Password"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFormError={setFormError}
                    />
                    <FormField
                      name="confirm_password"
                      type="password"
                      placeholder="Confirm New Password"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFormError={setFormError}
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Error Message */}
            {formError && (
              <span className="text-sm text-red-600">{formError}</span>
            )}

            {/* Buttons */}
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded bg-transparent p-4 px-6 py-2"
                onClick={() => resetForm()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded bg-secondary3 px-6 py-2 text-white hover:bg-active"
              >
                {isSubmitting ? 'Saving' : 'Save Changes'}
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AcccountForm;
