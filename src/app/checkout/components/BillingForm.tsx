"use client";

import { Field, Form, Formik } from "formik";
import FormField from "./FormField";
import { useState } from "react";
import { BillingSchema } from "@/schemas/billingSchema";
import Swal from "sweetalert2";

interface BillingFormValues {
  name: string;
  company_name?: string;
  street_address: string;
  apartment?: string;
  city: string;
  phone_number: string;
  email: string;
}

const BillingDetailsForm = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (values: BillingFormValues) => {
    try {
      console.log("Submitting values: ", values);

    // saving billing info to localStorage for future autofill
    localStorage.setItem("billingDetails", JSON.stringify(values));

      await Swal.fire({
        title: "Order Submitted",
        text: "Your order has been placed successfully!",
        icon: "success",
        position: "top-end",
        timer: 3000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Error updating account details: ", error);

      await Swal.fire({
        title: "Error",
        text: "There was an issue submitting your order.",
        icon: "error",
        position: "top-end",
      });
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        company_name: "",
        street_address: "",
        apartment: "",
        city: "",
        phone_number: "",
        email: "",
        save_info: true,
      }}
      onSubmit={handleSubmit}
      validationSchema={BillingSchema}
    >
      {({ isSubmitting, handleChange, handleBlur }) => (
        <div className="billing-details">
          <h2 className="text-lg font-semibold mb-4">Billing Details</h2>
          <Form className="max-w-lg">
            <fieldset disabled={isSubmitting}>
              <legend className="sr-only">Billing Form</legend>
              <div className="space-y-4 mt-6 mb-4">
                <FormField
                  label="Name"
                  name="Name"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFormError={setFormError}
                  isRequired
                />
                <FormField
                  label="Company Name"
                  name="companyName"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFormError={setFormError}
                />
                <FormField
                  label="Street Address"
                  name="address"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFormError={setFormError}
                  isRequired
                />
                <FormField
                  label="Apartment. floor etc. (optional)"
                  name="apartment"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFormError={setFormError}
                />
                <FormField
                  label="Town/City"
                  name="city"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFormError={setFormError}
                  isRequired
                />
                <FormField
                  label="PhoneNumber"
                  name="phone_number"
                  type="number"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFormError={setFormError}
                  isRequired
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFormError={setFormError}
                  isRequired
                />
              </div>
            </fieldset>

            {/* error and success message  */}
            {formError || (
              <span className="text-sm text-red-600">{formError}</span>
            )}

            {/* checkbox */}
            <div className="flex items-center gap-2">
              <Field
                type="checkbox"
                name="save_info"
                className="border-gray-500 rounded checked:bg-red-600 checked:text-white"
              />
              <label htmlFor="save_info" className="text-sm text-gray-800">
                Save this information for faster check-out next time
              </label>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default BillingDetailsForm;
