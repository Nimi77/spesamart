'use client';

import { showNotification } from '@/utilis/showNotification';
import { LoginSchema } from '@/schemas/authSchemas';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { motion } from 'framer-motion';
import AuthFormField from '../field';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import Link from 'next/link';

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (
    data: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    try {
      setSubmitting(true);
      setFormError(null);

      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (response?.ok) {
        router.push('/cart');
        showNotification({
          icon: 'success',
          title: 'Logged In',
        });
      } else if (response?.error) {
        setFormError(response.error || 'Invalid credentials');
      }
    } catch (error) {
      setFormError('An error occurred. Please try again.');
      console.error('Login Error:', error);
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
      <div className="form-heading mb-10">
        <h2>Log in to SpesaMart</h2>
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
        {({ isSubmitting, handleChange, handleBlur }) => (
          <Form className="form-box" aria-label="Login Form">
            <fieldset disabled={isSubmitting}>
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
            {/* submit button and external link */}
            <div className="mt-4 flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded bg-secondary3 px-9 py-2 text-white transition-all duration-300 ease-in-out hover:bg-active focus:outline-none ${
                  isSubmitting
                    ? 'cursor-not-allowed bg-active'
                    : 'cursor-pointer'
                }`}
              >
                {isSubmitting ? 'Logging In...' : 'Log In'}
              </button>
              <Link
                href=""
                className="font-medium text-orangeRed hover:underline"
              >
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
