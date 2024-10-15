"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterSchema } from "@/schemas/authSchemas";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import "../form.css";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      setFormError(null);
      console.log("Form data", values);
    } catch (error) {
      setFormError("An error occurred. Please try again.");
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
      <div className="heading">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
      </div>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            className="form-box space-y-5 mt-10 mb-6"
            aria-label="Sign-up Form"
          >
            {/* Name */}
            <div className="input-box">
              <Field
                id="name"
                name="name"
                type="name"
                placeholder="name"
                aria-required="true"
              />
              <ErrorMessage name="name" component="div" className="error-mss" />
              <label htmlFor="name">Name</label>
            </div>
            {/* Email */}
            <div className="input-box">
              <Field
                id="email"
                name="email"
                type="email"
                aria-required="true"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-mss"
              />
              <label htmlFor="email">Email</label>
            </div>
            {/* Password */}
            <div className="input-box">
              <Field
                id="password"
                name="password"
                type="password"
                aria-required="true"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-mss"
              />
              <label htmlFor="password">Password</label>
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
                className={`w-full submit-btn ${
                  isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>
              <button
                type="submit"
                className={`w-full bg-transparent border-customColor border-2 submit-btn
              }`}
              >
                Sign up with Google
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="flex items-center justify-around">
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="font-medium underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpForm;