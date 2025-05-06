import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const contactDetails = [
  {
    icon: "📍",
    label: "Address",
    value:
      "Block No. 22B, Near Claris Pharmaceuticals, Sarkhej - Bavla Highway,Ahmedabad: 382213, Gujarat,  India",
  },
  { icon: "📧", label: "Email", value: "sales@vihanindia.com" },
  { icon: "📱", label: "Phone", value: "+91-9099032638" },
];

const formFields = [
  { name: "name", type: "text", placeholder: "Your Name" },
  { name: "email", type: "email", placeholder: "Your Email Address" },
  { name: "message", type: "textarea", placeholder: "Your Message", rows: 4 },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export default function SendMessagePage() {
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    console.log("Submitted:", values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold text-[#0F3E3D]">Get in Touch</h2>
      </div>

      <div className="w-full h-[350px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13713.988590282504!2d76.62986740000001!3d30.76062345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1746076036005!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          <h3 className="text-2xl font-semibold text-[#0F3E3D] mb-4">
            Contact Information
          </h3>
          <ul className="space-y-3 text-gray-700">
            {contactDetails.map((item, index) => (
              <li key={index}>
                {item.icon} <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-4">
              {formFields.map((field) => (
                <div key={field.name}>
                  <Field
                    as={field.type === "textarea" ? "textarea" : "input"}
                    name={field.name}
                    type={field.type !== "textarea" ? field.type : undefined}
                    rows={field.rows}
                    placeholder={field.placeholder}
                    className="border p-3 w-full rounded-md"
                  />
                  <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="mt-4 w-full bg-white text-black border border-[#004b93] shadow-[0_0_10px_#004b93] font-semibold py-3 rounded-md hover:bg-[#004b93] hover:text-white transition-all"
              >
                Send Message
              </button>
            </Form>
          </Formik>
        </div>
      </div>

      <div className="text-center pb-10">
        <button
          onClick={() => navigate("/")}
          className="bg-white text-black border border-[#004b93] shadow-[0_0_10px_#004b93] px-6 py-2 rounded hover:bg-[#004b93] hover:text-white transition text-sm"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
