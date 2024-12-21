'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LoginSchema } from '@/schemas/authSchemas';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface FormValuesProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (
    values: FormValuesProps,
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
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="form-container"
    >
      <div className="form-heading">
        <h2>Log in to Buyo</h2>
        <p>Enter your details below</p>
      </div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form-box mt-10 space-y-4" aria-label="Login Form">
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
            <div className="input-box">
              <Field
                id="password"
                name="password"
                type="password"
                placeholder=" "
                aria-required="true"
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
            {/* submit button and external link */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded bg-secondary3 px-10 py-2.5 text-white transition-all duration-300 ease-in-out hover:bg-[#b93333] ${
                  isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                {isSubmitting ? 'Logging In...' : 'Log In'}
              </button>
              <Link href="/" className="text-orange-red hover:underline">
                Forgot Password?
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default LoginForm;
