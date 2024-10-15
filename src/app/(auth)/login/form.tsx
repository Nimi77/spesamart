"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from "@/schemas/authSchemas";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import "../form.css";

interface FormValuesProps {
  email: string;
  password: string;
}

const LoginForm = () => {
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
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form-box space-y-5 mt-10" aria-label="Login Form">
            {/* Email */}
            <div className="input-box">
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                aria-required="true"
                className="input-field"
              />
              <ErrorMessage
                name="email"
                component="div"
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
                placeholder="Password"
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
            <div className="flex items-center justify-start gap-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-btn ${
                  isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {isSubmitting ? "Logging In..." : "Log In"}
              </button>
              <Link href="" className="font-medium text-orange-red">
                Forgot Password
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
}
export default LoginForm;