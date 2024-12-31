'use client';

import { RegisterSchema } from '@/schemas/authSchemas';
import { showNotification } from '@/utilis/showNotification';
import GoogleIcon from '@/assets/google-icon.svg';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
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

const SignUpForm = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (
    data: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
  ) => {
    try {
      setSubmitting(true);
      setFormError(null);

      // submitting the signup form
      await axios.post('/api/signup', data);
      showNotification({
        icon: 'success',
        title: 'Account created successfully!',
      });

      // the user is signed in after account creation
      const callback = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (callback?.ok) {
        setSubmitting(false);
        router.push('/cart');
        router.refresh();

        showNotification({
          icon: 'success',
          title: 'Logged In',
        });
      } else if (callback?.error) {
        showNotification({
          icon: 'error',
          title: 'Oops! Something went wrong',
          titleText: callback.error,
        });
      }
    } catch (error) {
      console.error(error);
      setFormError('An error occurred. Please try again.');
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
      <div className="form-heading text-gray">
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
          <Form
            className="form-box mb-6 mt-8 space-y-3 text-gray-800"
            aria-label="Sign-up Form"
          >
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
            {formError && (
              <p className="text-red-600" role="alert">
                {formError}
              </p>
            )}
            {/* Submit button */}
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex max-h-14 w-full items-center justify-center rounded bg-secondary3 py-2.5 text-white transition-all duration-300 ease-in-out hover:bg-[#b93333] focus:outline-none ${
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
                type="submit"
                className={`flex max-h-14 w-full items-center justify-center gap-4 rounded border-2 border-gray-200 bg-transparent py-2.5 hover:shadow-inner`}
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

export default SignUpForm;
