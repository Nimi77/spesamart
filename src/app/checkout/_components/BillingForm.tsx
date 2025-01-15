import useCartStore, { BillingFormData } from '@/hooks/cartStore';
import { BillingSchema } from '@/schemas/billingSchema';
import { Formik, Form } from 'formik';
import FormField from './FormField';

interface BillingDetailsFormProps {
  onValidationChange: (isValid: boolean) => void;
}

const BillingDetailsForm = ({
  onValidationChange,
}: BillingDetailsFormProps) => {
  const { setFormData, formData } = useCartStore();

  const initialValues: BillingFormData = formData || {
    name: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    city: '',
    phoneNumber: '',
    email: '',
    saveInfo: true,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BillingSchema}
      validateOnMount
      validateOnChange
      validateOnBlur
      onSubmit={(values) => {
        setFormData(values);
      }}
    >
      {({ values, errors, touched, isValid, handleChange, handleBlur }) => {
        onValidationChange(isValid);

        return (
          <div className="billing-details w-full">
            <h1 className="mb-4 text-lg font-medium">Billing Details</h1>
            <Form aria-label="Billing details form">
              <fieldset className="space-y-4">
                <legend className="sr-only">Billing Form</legend>

                <FormField
                  label="Name"
                  name="name"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.name}
                  isRequired
                  error={touched.name && errors.name}
                />
                <FormField
                  label="Company Name (optional)"
                  name="companyName"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.companyName}
                  error={touched.companyName && errors.companyName}
                />
                <FormField
                  label="Street Address"
                  name="streetAddress"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.streetAddress}
                  isRequired
                  error={touched.streetAddress && errors.streetAddress}
                />
                <FormField
                  label="Apartment, floor etc. (optional)"
                  name="apartment"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.apartment}
                  error={touched.apartment && errors.apartment}
                />
                <FormField
                  label="Town/City"
                  name="city"
                  type="text"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.city}
                  isRequired
                  error={touched.city && errors.city}
                />
                <FormField
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.phoneNumber}
                  isRequired
                  error={touched.phoneNumber && errors.phoneNumber}
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.email}
                  isRequired
                  error={touched.email && errors.email}
                />
              </fieldset>

              {/* save info checkbox */}
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  name="saveInfo"
                  id="saveInfo"
                  checked={values.saveInfo}
                  onChange={handleChange}
                  className="rounded border-gray-500 text-red-600 checked:bg-red-600"
                />
                <label htmlFor="saveInfo" className="text-gray-800">
                  Save this information for faster check-out next time
                </label>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default BillingDetailsForm;
