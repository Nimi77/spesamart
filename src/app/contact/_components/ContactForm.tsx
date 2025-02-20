'use client';

import { ContactFormSchema } from '@/schemas/contactSchema';
import { showNotification } from '@/utilis/showNotification';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ChangeEvent, useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: (nextState?: Partial<FormValues>) => void;
    },
  ) => {
    try {
      setSubmitting(true);

      await showNotification({
        icon: 'success',
        title: 'Message Sent!',
        titleText:
          'Thank you for contacting us. We will get back to you shortly.',
        position: 'top-end',
      });

      resetForm();
    } catch (error) {
      console.error('Error sending message: ', error);

      showNotification({
        icon: 'error',
        title: 'Message Not Sent',
        titleText:
          'There was an issue sending your message. Please try again later.',
        position: 'top-end',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      {({ isSubmitting, handleChange, handleBlur }) => (
        <div className="w-full rounded bg-white p-4 shadow md:p-6">
          <Form aria-label="Contact form">
            <fieldset disabled={isSubmitting} className="mb-4">
              <div className="contact-details flex w-full flex-col gap-4 md:flex-row">
                <div className="name">
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setFormError(null);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    className="w-full rounded border-none bg-secondary px-4 py-2.5 text-gray-800 outline-none placeholder:text-gray-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="h-4 text-red-600"
                  />
                </div>
                <div className="email">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setFormError(null);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    className="w-full rounded border-none bg-secondary px-4 py-2.5 text-gray-800 outline-none placeholder:text-gray-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="h-4 text-red-600"
                  />
                </div>
                <div className="phone-no">
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Your Phone Number"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setFormError(null);
                      handleChange(e);
                    }}
                    onBlur={handleBlur}
                    className="w-full rounded bg-secondary px-4 py-2.5 text-gray-800 outline-none placeholder:text-gray-500"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="span"
                    className="h-4 text-red-600"
                  />
                </div>
              </div>
              <Field
                id="message"
                name="message"
                as="textarea"
                placeholder="Your Message"
                className="mt-4 h-52 w-full rounded bg-secondary px-4 py-2.5 text-gray-800 outline-none placeholder:text-gray-500"
              />
            </fieldset>

            {/* Error Message */}
            {formError && <span className="text-red-600">{formError}</span>}

            <div className="flex items-center justify-end">
              <button
                className={`rounded bg-secondary3 px-6 py-2 text-white hover:bg-active focus:outline-none ${
                  isSubmitting
                    ? 'cursor-not-allowed bg-active'
                    : 'cursor-pointer'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
