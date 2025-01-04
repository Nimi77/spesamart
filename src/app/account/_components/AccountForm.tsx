'use client';

import { AccountDetailsSchema } from '@/schemas/accountSchema';
import { showNotification } from '@/utilis/showNotification';
import FormField from './FormField';
import { Form, Formik } from 'formik';
import { useState } from 'react';

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
      setSubmitting(true);
      console.log('Submitting values: ', values);

      await showNotification({
        icon: 'success',
        title: 'Your account details have been updated.',
        position: 'top-end',
      });

      resetForm({
        ...values,
        current_password: '',
        new_password: '',
        confirm_password: '',
      });
    } catch (error) {
      console.error('Error updating account details: ', error);
      await showNotification({
        icon: 'error',
        title: 'Account Update Failed',
        titleText:
          'There was an issue updating your account details. Please try again.',
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
          <h2 className="text-lg font-medium text-orange-red">
            Edit Your Profile
          </h2>
          <Form className="my-6 w-full">
            <fieldset disabled={isSubmitting} className="mb-4">
              <legend className="sr-only">Account Details Form</legend>
              <div className="account-info-details space-y-4">
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

            {/* error mss */}
            {formError && <span className="text-red-600">{formError}</span>}

            {/* buttons */}
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                disabled={isSubmitting}
                className="rounded bg-transparent p-4 px-6 py-2 outline-none hover:bg-[rgba(211,47,47,0.1)] hover:text-gray-50"
                onClick={() => resetForm()}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded bg-secondary3 px-6 py-2 text-white outline-none hover:bg-active ${
                  isSubmitting
                    ? 'cursor-not-allowed bg-active'
                    : 'cursor-pointer'
                }`}
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
