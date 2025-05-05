import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const formFields = [
  {
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    icon: "/user.jpeg",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    icon: "/user.jpeg",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
    icon: "/mail.svg",
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "Phone Number",
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "Your Message",
  },
];

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
  terms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

const About = ({ formRef }) => {
  const [submittedName, setSubmittedName] = useState("");

  return (
    <div
      id="about"
      className="relative max-w-7xl mx-auto px-4 md:px-8 mt-10 pb-20"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-bold text-gray-800">About us</h3>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Machinery Designed
            <br />
            To Exceed Expectations.
          </h2>
          <p className="mt-4 text-gray-600">
            Since 1994, Vihan has been a trusted machinery partner for many
            pipe-making plants. Vihan offers a range of machinery products, such
            as PVC pipe bending, pipe packaging, cutter series, and more. Vihan
            provides you smart pipe production that is reliable in every
            rotation.
          </p>

          <Link to="/send-message" className="mt-6 flex justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="px-6 py-2 bg-[#004b93] text-white hover:text-black text-sm font-semibold rounded shadow-md"
            >
              Know More
            </motion.button>
          </Link>
        </div>

        <div ref={formRef} className="relative">
          <div className="md:absolute md:-top-40 md:right-0 w-full md:w-[400px] bg-white shadow-xl rounded-xl p-6 md:p-8 z-10">
            <h4 className="text-md font-semibold text-gray-800 mb-1">
              Send a message
            </h4>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Connect with us
            </h3>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
                terms: false,
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Form data submitted:", values);
                setSubmittedName(values.firstName);
                resetForm();
                setTimeout(() => setSubmittedName(""), 4000);
              }}
            >
              {({ errors, touched }) => (
                <Form className="space-y-4">
                  {/* First & Last Name Side-by-side */}
                  <div className="flex gap-4">
                    {[formFields[0], formFields[1]].map((field) => (
                      <div key={field.name} className="w-1/2">
                        <div className="relative">
                          {field.icon && (
                            <img
                              src={field.icon}
                              alt={`${field.name} icon`}
                              className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 opacity-70"
                            />
                          )}
                          <Field
                            type="text"
                            name={field.name}
                            placeholder={field.placeholder}
                            className={`w-full border p-3 pr-10 rounded bg-gray-100 ${
                              errors[field.name] && touched[field.name]
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                        </div>
                        <ErrorMessage
                          name={field.name}
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Rest of the fields */}
                  {formFields.slice(2).map((field) => (
                    <div key={field.name}>
                      {field.type === "textarea" ? (
                        <Field
                          as="textarea"
                          name={field.name}
                          placeholder={field.placeholder}
                          rows="4"
                          className={`w-full border p-3 rounded bg-gray-100 ${
                            errors[field.name] && touched[field.name]
                              ? "border-red-500"
                              : ""
                          }`}
                        />
                      ) : (
                        <div className="relative">
                          {field.icon && (
                            <img
                              src={field.icon}
                              alt={`${field.name} icon`}
                              className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 opacity-70"
                            />
                          )}
                          <Field
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            className={`w-full border p-3 pr-10 rounded bg-gray-100 ${
                              errors[field.name] && touched[field.name]
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                        </div>
                      )}
                      <ErrorMessage
                        name={field.name}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  ))}

                  <div className="flex items-center gap-2">
                    <Field type="checkbox" name="terms" />
                    <label className="text-sm text-gray-600">
                      I agree to the terms of service.
                    </label>
                  </div>
                  <ErrorMessage
                    name="terms"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#004b93] text-white font-bold py-3 rounded"
                  >
                    Get a quote
                  </button>

                  {submittedName && (
                    <div className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded text-center">
                      Hi {submittedName}, Thank you for your message!
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
