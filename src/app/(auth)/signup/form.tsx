'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegisterSchema } from '@/schemas/authSchemas';
import { motion } from 'framer-motion';
import GoogleIcon from '@/assets/google.svg';
import Link from 'next/link';
import { useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    try {
      setFormError(null);
      console.log('Form data', values);
    } catch (error) {
      setFormError('An error occurred. Please try again.');
      console.error(error);
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
        {({ isSubmitting }) => (
          <Form
            className="form-box mb-6 mt-8 space-y-3 text-gray-800"
            aria-label="Sign-up Form"
          >
            {/* Name */}
            <div className="input-box">
              <Field
                id="name"
                name="name"
                type="name"
                placeholder=" "
                aria-required="true"
                className="input-field"
                required
              />
              <ErrorMessage
                name="name"
                component="span"
                className="error-mss"
              />
              <label htmlFor="name" className="input-label">
                Name
              </label>
            </div>
            {/* Email */}
            <div className="input-box">
              <Field
                id="email"
                name="email"
                type="email"
                placeholder=" "
                aria-required="true"
                className="input-field"
                required
              />
              <ErrorMessage
                name="email"
                component="span"
                className="error-mss"
              />
              <label htmlFor="email" className="input-label">
                Email
              </label>
            </div>
            {/* Password */}
            <div className="input-box">
              <Field
                id="password"
                name="password"
                type="password"
                placeholder=" "
                aria-required="true"
                className="input-field"
                required
              />
              <ErrorMessage
                name="password"
                component="span"
                className="error-mss"
              />
              <label htmlFor="password" className="input-label">
                Password
              </label>
            </div>
            {formError && (
              <p className="error-mss" role="alert">
                {formError}
              </p>
            )}
            {/* Submit button */}
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-btn max-h-14 w-full rounded bg-secondary3 py-2.5 text-white transition-all duration-300 ease-in-out hover:bg-[#b93333] ${
                  isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </button>
              <button
                type="submit"
                className={`} flex max-h-14 w-full items-center justify-center gap-4 rounded border-2 border-gray-200 bg-transparent py-2.5`}
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
          <Link href="/login" className="font-medium underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpForm;
