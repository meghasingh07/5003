import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const formFields = [
  { name: "firstName", placeholder: "First name", type: "text" },
  { name: "lastName", placeholder: "Last name", type: "text" },
  { name: "email", placeholder: "Email", type: "email" },
  { name: "phone", placeholder: "Phone number", type: "tel" },
];

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const ContactForm = () => {
  const [submittedName, setSubmittedName] = useState("");

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center">
        <div className="bg-white shadow-xl rounded-xl p-8 md:p-10 border">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Connect with us
          </h2>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, { resetForm }) => {
              setSubmittedName(values.firstName);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formFields.map((field) => (
                    <div key={field.name}>
                      <Field
                        name={field.name}
                        placeholder={field.placeholder}
                        type={field.type}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder:text-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                      {errors[field.name] && touched[field.name] && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors[field.name]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Your message"
                    rows="5"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none placeholder:text-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {errors.message && touched.message && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#004b93] text-black font-semibold py-3 rounded-md hover:text-amber-50 transition"
                >
                  Get a quote
                </button>

                {submittedName && (
                  <p className="text-green-600 font-medium mt-4">
                    Thanks {submittedName}, for your response we will get in
                    touch.
                  </p>
                )}
              </Form>
            )}
          </Formik>
        </div>

        <div>
          <p className="text-sm font-semibold text-black mb-2">Get in touch</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            We'd love to hear from you.
          </h2>
          <p className="text-gray-600 text-lg">
            We are here to answer any question you may have. As a partner of
            corporates, Vihan has more than 9,000 offices of all sizes and all
            potential of session.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
