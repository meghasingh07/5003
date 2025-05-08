import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import "./hero.css";

// Form fields for the form
const formFields = [
  { name: "firstName", placeholder: "First name", type: "text" },
  { name: "lastName", placeholder: "Last name", type: "text" },
  { name: "email", placeholder: "Email", type: "email" },
  { name: "phone", placeholder: "Phone number", type: "tel" },
];

// Yup validation schema for the form
const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

// Motion variants for fadeIn animation
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ContactCard component for address, email, phone info
const ContactCard = ({ icon, title, text, delay }) => (
  <motion.div
    className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500 flex items-start gap-4"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="text-3xl text-blue-600">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  </motion.div>
);

const ContactForm = () => {
  const [submittedName, setSubmittedName] = useState("");

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-10 px-6">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 text-center mb-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Contact Us
      </motion.h2>

      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Form Section */}
        <motion.div
          className="w-full bg-white shadow-2xl rounded-2xl p-4 md:p-6 border transition-all duration-500"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Connect With Us</h2>

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
              <Form className="space-y-4 w-full">
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
                    rows="3"
                    className="w-full border min-h-[100px] max-h-[150px] border-gray-300 rounded-lg px-4 py-3 resize-none placeholder:text-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                  {errors.message && touched.message && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </div>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="custom-quote-button w-full bg-[#004b93] text-white font-semibold py-3 rounded-lg border border-blue-600 hover:bg-white hover:text-black transition-all"
                >
                  Get a Quote
                </motion.button>

                {submittedName && (
                  <p className="text-green-600 font-medium mt-6 text-center">
                    Thanks {submittedName}, we’ll be in touch shortly.
                  </p>
                )}
              </Form>
            )}
          </Formik>
        </motion.div>

        {/* Address Section with contact cards */}
        <motion.div
          className="w-full flex flex-col gap-6 mt-4"
          variants={fadeIn}
        >
          <ContactCard
            icon={<FiMapPin />}
            title="Our Address"
            text="Block No. 22B, Near Claris Pharmaceuticals, Sarkhej - Bavla Highway, Ahmedabad, Gujarat"
            delay={0.2}
          />
          <ContactCard
            icon={<FiMail />}
            title="Email"
            text="sales@vihanindia.com"
            delay={0.4}
          />
          <ContactCard
            icon={<FiPhone />}
            title="Phone"
            text="91-9099032638"
            delay={0.5}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
