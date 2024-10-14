"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from "@/schemas/authSchemas";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import styles from "./form.module.css";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (
    values: LoginFormValues,
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
      className={styles.formContainer}
    >
      <div className={styles.heading}>
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
            <div className={styles.inputBox}>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                aria-required="true"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.errorMessage}
              />
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
            </div>
            {/* Password */}
            <div className={styles.inputBox}>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                aria-required="true"
                className={styles.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.errorMessage}
              />
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
            </div>
            {formError && (
              <p className={styles.errorMessage} role="alert">
                {formError}
              </p>
            )}
            {/* Submit button */}
            <div className="flex items-center justify-start gap-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitButton} ${
                  isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {isSubmitting ? "Logging In..." : "Log In"}
              </button>
              <Link href="" className={styles.errorMessage}>
                Forgot Password
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
}