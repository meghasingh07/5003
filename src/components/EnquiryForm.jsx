import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  address: Yup.string().required("Required"),
  enquiryNumber: Yup.string().required("Required"),
  enquiryDate: Yup.string().required("Required"),
  handler: Yup.string().required("Required"),
  productCategory: Yup.string().required("Required"),
});

const radioOptions = {
  customerStatus: ["Existing", "New"],
  prospect: ["Low", "Medium", "High"],
  offer: ["Yes", "No"],
  thankyou: ["Yes", "No"],
};

const productCategories = ["Series", "Other"];

const EnquiryForm = () => {
  const [formStatus, setFormStatus] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <div className="relative bg-white/80 backdrop-blur-md text-black shadow-xl p-10 max-w-5xl mx-auto rounded-2xl border border-gray-200">
        <div className="absolute top-0 right-0 w-14 h-14 bg-blue-100 rotate-45 translate-x-6 -translate-y-6 shadow-inner z-10 border-t border-r border-white"></div>

        <motion.h2
          className="text-3xl font-semibold text-center mb-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ENQUIRY FORM
        </motion.h2>

        <Formik
          initialValues={{
            fileType: "",
            fullName: "",
            phone: "",
            email: "",
            company: "",
            address: "",
            enquiryNumber: "",
            enquiryDate: "",
            customerStatus: "",
            handler: "",
            prospect: "",
            productCategory: "",
            details: "",
            file: "",
            offer: "",
            thankyou: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form submitted", values);
            setFormStatus("success");
            setTimeout(() => {
              setFormStatus(null);
              resetForm();
            }, 3000);
          }}
        >
          <Form className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Customer Details</h3>
              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">
                  Visiting Card File Type
                </label>
                <Field
                  as="select"
                  name="fileType"
                  className="border rounded-md px-4 py-2 w-full"
                >
                  <option value="">Select file type</option>
                  <option value="pdf">PDF</option>
                  <option value="image">Image</option>
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {[
                  { name: "fullName", label: "Full Name" },
                  { name: "phone", label: "Phone" },
                  { name: "email", label: "Email" },
                  { name: "company", label: "Company (Optional)" },
                ].map(({ name, label }) => (
                  <div key={name}>
                    <Field
                      type="text"
                      name={name}
                      placeholder={label}
                      className="w-full border rounded-md px-4 py-2 text-sm"
                    />
                    <ErrorMessage
                      name={name}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}
                <div className="md:col-span-2">
                  <Field
                    name="address"
                    as="textarea"
                    placeholder="Address"
                    className="border px-4 py-2 w-full h-24 rounded-md"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="border p-4 space-y-4 rounded-lg bg-white/60"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  name="enquiryNumber"
                  placeholder="Enquiry Number"
                  className="border rounded-md px-4 py-2 w-full"
                />
                <Field
                  type="date"
                  name="enquiryDate"
                  className="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="bg-[#004b93] text-white font-bold text-center py-2 rounded">
                Exhibition Name
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <label className="text-sm">Customer status:</label>
                  {radioOptions.customerStatus.map((status) => (
                    <label key={status} className="flex items-center gap-1">
                      <Field type="radio" name="customerStatus" value={status} />
                      {status}
                    </label>
                  ))}
                </div>
                <Field
                  name="handler"
                  placeholder="Handled By"
                  className="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="flex gap-6 flex-wrap items-center">
                <label>Enquiry Prospect:</label>
                {radioOptions.prospect.map((level) => (
                  <label key={level} className="flex items-center gap-1">
                    <Field type="radio" name="prospect" value={level} /> {level}
                  </label>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg mb-2">
                PRODUCT CATEGORY AND ENQUIRY DETAILS
              </h3>
              <div className="space-y-4">
                <Field
                  as="select"
                  name="productCategory"
                  className="w-full border rounded-md px-4 py-2"
                >
                  <option value="">Select your Product Category</option>
                  {productCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Field>
                <Field
                  name="details"
                  as="textarea"
                  placeholder="Add Details here..."
                  className="w-full border rounded-md px-4 py-2 h-24"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm mb-1">
                      Attach Supporting Document (if any)
                    </label>
                    <input
                      type="file"
                      name="file"
                      className="border rounded-md px-2 py-1 w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Offer Received</label>
                    <div className="flex gap-3">
                      {radioOptions.offer.map((opt) => (
                        <label key={opt} className="flex items-center gap-1">
                          <Field type="radio" name="offer" value={opt} /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Thank You Sent</label>
                    <div className="flex gap-3">
                      {radioOptions.thankyou.map((opt) => (
                        <label key={opt} className="flex items-center gap-1">
                          <Field type="radio" name="thankyou" value={opt} /> {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {formStatus === "success" && (
              <div className="text-green-600 text-center text-sm font-medium">
                Thank you for your enquiry! We will get in touch shortly.
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#004b93] text-white px-6 py-2 mt-6 border border-blue-600 hover:bg-white hover:text-black hover:border-blue-600 transition duration-300 rounded-lg"
              >
                SUBMIT
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EnquiryForm;
