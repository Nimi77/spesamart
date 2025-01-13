import { useQuery, useMutation, useQueryClient } from 'react-query';
import { showNotification } from '@/utilis/showNotification';
import { AccountDetailsSchema } from '@/schemas/accountSchema';
import FormField from './FormField';
import { Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import axios from 'axios';

interface FormValues {
  userId?: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// fetch account details
const fetchAccountDetails = async (): Promise<Partial<FormValues>> => {
  const { data } = await axios.get('/api/account/details');
  return data;
};

// updating account details
const updateAccountDetails = async (formData: FormValues): Promise<void> => {
  await axios.post('/api/account/update', formData);
};

const AccountForm = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  // fetch user details
  const { data: accountDetails, isLoading } = useQuery(
    ['accountDetails'],
    fetchAccountDetails,
  );

  // Mutation for updating user details
  const mutation = useMutation(updateAccountDetails, {
    onSuccess: () => {
      queryClient.invalidateQueries(['accountDetails']);
      showNotification({
        icon: 'success',
        title: 'Your account details have been updated successfully.',
        position: 'top-end',
      });
    },
    onError: () => {
      showNotification({
        icon: 'error',
        title: 'Update Failed',
        titleText:
          'There was an error updating your profile. Please try again.',
        position: 'top-end',
      });
    },
  });

  const initialValues: FormValues = {
    userId: accountDetails?.userId || '',
    firstName: accountDetails?.firstName || '',
    lastName: accountDetails?.lastName || '',
    email: accountDetails?.email || '',
    address: accountDetails?.address || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>,
  ) => {
    try {
      await mutation.mutateAsync(values);
      setSubmitting(false);
      resetForm({
        values: {
          ...values,
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        },
      });
    } catch (error) {
      setFormError(
        error instanceof Error ? error.message : 'An unknown error occurred.',
      );
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={AccountDetailsSchema}
      enableReinitialize
    >
      {({ isSubmitting, handleChange, handleBlur, resetForm }) => (
        <div className="profile-details">
          <h2 className="mb-6 text-lg font-medium text-orange-red">
            Edit Your Profile
          </h2>
          <Form className="w-full">
            <fieldset disabled={isSubmitting} className="mb-4">
              <legend className="sr-only">Account Details Form</legend>
              <div className="account-info-details space-y-4">
                <div className="flex w-full flex-col gap-6 md:flex-row">
                  <FormField
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Md"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFormError={setFormError}
                    className={`${isLoading ? 'animate-pulse' : ''}`}
                  />
                  <FormField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Rimal"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFormError={setFormError}
                    className={`${isLoading ? 'animate-pulse' : ''}`}
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
                    className={`${isLoading ? 'animate-pulse' : ''}`}
                  />
                  <FormField
                    label="Address"
                    name="address"
                    type="text"
                    placeholder="Kingston 524, United States"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    setFormError={setFormError}
                    className={`${isLoading ? 'animate-pulse' : ''}`}
                  />
                </div>

                <div className="password-change">
                  <label className="block font-medium text-gray-800">
                    Password Changes
                  </label>
                  <div className="flex flex-col gap-4 pt-2">
                    <FormField
                      name="currentPassword"
                      type="password"
                      placeholder="Current Password"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFormError={setFormError}
                    />
                    <FormField
                      name="newPassword"
                      type="password"
                      placeholder="New Password"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      setFormError={setFormError}
                    />
                    <FormField
                      name="confirmPassword"
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

            {/* Error message */}
            {formError && <span className="text-red-600">{formError}</span>}

            {/* Buttons */}
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                disabled={isSubmitting}
                className="rounded bg-transparent p-4 px-6 py-2 outline-none hover:bg-[rgba(211,47,47,0.3)] hover:text-gray-100"
                onClick={() => resetForm()}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || isLoading}
                aria-busy={isLoading}
                className={`h-10 w-32 rounded bg-secondary3 text-white outline-none hover:bg-active ${
                  isSubmitting || isLoading
                    ? 'cursor-not-allowed bg-active'
                    : 'cursor-pointer'
                }`}
              >
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AccountForm;
