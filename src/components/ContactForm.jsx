import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import "./hero.css";

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
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-start"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Contact Form (Left Side) */}
        <motion.div
          className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 border w-full md:w-[42%]"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-black mb-6">
            Connect With Us
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

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                
                  className=" custom-quote-button w-full bg-[#004b93] text-white font-semibold py-3 rounded-lg border border-blue-600 hover:bg-white hover:text-black "
                >
                  Get a Quote
                </motion.button>

                {submittedName && (
                  <p className="text-green-600 font-medium mt-4">
                    Thanks {submittedName}, for your response. We will get in
                    touch.
                  </p>
                )}
              </Form>
            )}
          </Formik>
        </motion.div>

        {/* Right Side: Text + Contact Cards */}
        <motion.div className="md:w-1/2 flex flex-col gap-6" variants={fadeIn}>
          <div className="text-center md:text-left mb-4">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
              Get in touch
            </p>
            <h2 className="text-4xl font-extrabold text-gray-800 leading-snug">
              We'd love to hear from you.
            </h2>
            <p className="text-gray-600 text-lg mt-2">
              We are here to answer any question you may have.
            </p>
          </div>

          <ContactCard
            icon={<FiMapPin />}
            title="Our Address"
            text="Block No. 22B, Near Claris Pharmaceuticals,
Sarkhej - Bavla Highway, Ahmedabad, Gujarat"
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
            delay={0.6}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
