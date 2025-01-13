'use client';

import { RegisterSchema } from '@/schemas/authSchemas';
import { showNotification } from '@/utilis/showNotification';
import GoogleIcon from '@/assets/google-icon.svg';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Formik, Form } from 'formik';
import AuthFormField from '../field';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (
    data: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      setSubmitting(true);
      setFormError(null);

      const response = await axios.post('/api/signup', data);
      showNotification({
        icon: 'success',
        title: response.data.message || 'Account created successfully!',
      });

      resetForm();
      setTimeout(() => {
        router.push('/auth/login');
      }, 2000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.error ||
          'An unexpected error occurred. Please try again.';
        setFormError(errorMessage);
      } else {
        setFormError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="form-container"
    >
      <div className="form-heading">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
      </div>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, handleBlur }) => (
          <Form className="form-box mb-6 mt-8" aria-label="Register Form">
            <fieldset disabled={isSubmitting}>
              {/* Name */}
              <AuthFormField
                id="name"
                name="name"
                label="Name"
                type="text"
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFormError={setFormError}
              />
              {/* Email */}
              <AuthFormField
                id="email"
                name="email"
                label="Email"
                type="email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFormError={setFormError}
              />
              {/* Password */}
              <AuthFormField
                id="password"
                name="password"
                label="Password"
                type="password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFormError={setFormError}
              />
            </fieldset>

            {formError && (
              <p className="text-red-600" role="alert">
                {formError}
              </p>
            )}
            {/* Submit button */}
            <div className="mt-4 flex flex-col gap-3">
              <button
                disabled={isSubmitting}
                className={`flex max-h-14 w-full items-center justify-center rounded bg-secondary3 py-2 text-white transition-all duration-300 ease-in-out hover:bg-active focus:outline-none ${
                  isSubmitting
                    ? 'cursor-not-allowed bg-active'
                    : 'cursor-pointer'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
              <button
                className={`flex max-h-14 w-full items-center justify-center gap-4 rounded border-2 border-gray-200 bg-transparent py-2 hover:bg-neutral-100 focus:shadow-inner`}
              >
                <span>
                  <GoogleIcon />
                </span>
                Sign up with google
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="flex items-center justify-around">
        <p className="text-gray-800">
          Already have an account?{' '}
          <Link href="/auth/login" className="font-medium underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default RegisterForm;
