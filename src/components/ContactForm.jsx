import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactForm = () => {
  const [submittedName, setSubmittedName] = useState("");

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 border w-full md:w-1/2"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
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
              <Form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formFields.map((field) => (
                    <div key={field.name}>
                      <Field
                        name={field.name}
                        placeholder={field.placeholder}
                        type={field.type}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder:text-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none placeholder:text-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                  {errors.message && touched.message && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#004b93] text-white font-semibold py-3 rounded-lg border border-blue-600 hover:bg-white hover:text-black transition duration-300"
                >
                  Get a quote
                </button>

                {submittedName && (
                  <p className="text-green-600 font-medium mt-4">
                    Thanks {submittedName}, for your response. We will get in touch.
                  </p>
                )}
              </Form>
            )}
          </Formik>
        </motion.div>

        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={fadeIn}
        >
          <p className="text-sm font-semibold text-blue-700 mb-2 uppercase tracking-wide">
            Get in touch
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-snug">
            We'd love to hear from you.
          </h2>
          <p className="text-gray-600 text-lg">
            We are here to answer any question you may have. As a partner of
            corporates, Vihan has more than 9,000 offices of all sizes and all
            potential of session.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
