import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formFields = [
  {
    name: "name",
    type: "text",
    placeholder: "Your name",
    icon: "/user.jpeg",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
    icon: "/mail.svg",
    invertIcon: true,
  },
  {
    name: "help",
    type: "select",
    placeholder: "How can we help you",
    options: ["Consulting", "Data Services"],
  },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  help: Yup.string().required("Please select a topic"),
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
          <h3 className="text-sm font-bold text-gray-800 ">About us </h3>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Plastic Pipes Are <br />
            Built For Durability.
          </h2>
          <p className="mt-4 text-gray-600">
            Since 1994, Vihan has been a trusted pipe solution partner for many
            households and building infrastructure. Vihan offers a range of
            products, such as PVC pipe bending, pipe packaging, cutter series,
            and more. Vihan provides your infrastructure smart pipe solutions
            that never crack under pressure.
          </p>
        </div>

        <div ref={formRef} className="relative">
          <div className="md:absolute md:-top-40 md:right-0 w-full md:w-[400px] bg-white shadow-xl rounded-xl p-6 md:p-8 z-10">
            <h4 className="text-md font-semibold text-gray-800 mb-1">
              Send a message
            </h4>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Request a call back
            </h3>

            <Formik
              initialValues={{ name: "", email: "", help: "", terms: false }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Form data submitted:", values);
                setSubmittedName(values.name);
                resetForm();
                setTimeout(() => setSubmittedName(""), 4000);
              }}
            >
              {({ errors, touched }) => (
                <Form className="space-y-4">
                  {formFields.map((field) => (
                    <div key={field.name}>
                      {field.type === "select" ? (
                        <Field
                          as="select"
                          name={field.name}
                          className={`w-full border p-3 rounded bg-gray-100 ${
                            errors[field.name] && touched[field.name]
                              ? "border-red-500"
                              : ""
                          }`}
                        >
                          <option value="">{field.placeholder}</option>
                          {field.options.map((option, index) => (
                            <option key={index} value={option.toLowerCase()}>
                              {option}
                            </option>
                          ))}
                        </Field>
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
                    className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded"
                  >
                    Get a quote
                  </button>

                  {submittedName && (
                    <div className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded text-center">
                      Hi {submittedName}, Thank you for your email
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
