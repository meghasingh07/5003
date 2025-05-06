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
    <div className="bg-white text-black py-10 px-6 max-w-5xl mx-auto">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-center mb-10"
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
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">
              Customer Details
            </h3>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">
                Visiting Card File Type
              </label>
              <Field
                as="select"
                name="fileType"
                className="border px-4 py-2 w-full"
              >
                <option value="">Select file type</option>
                <option value="pdf">PDF</option>
                <option value="image">Image</option>
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Full Name
                </label>
                <Field
                  name="fullName"
                  className="border px-3 py-2 w-full"
                  placeholder="Full Name"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Phone</label>
                <Field
                  name="phone"
                  className="border px-3 py-2 w-full"
                  placeholder="Phone"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <Field
                  name="email"
                  className="border px-3 py-2 w-full"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Company (Optional)
                </label>
                <Field
                  name="company"
                  className="border px-3 py-2 w-full"
                  placeholder="Company"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-medium">
                  Address
                </label>
                <Field
                  name="address"
                  as="textarea"
                  className="border px-3 py-2 w-full h-24"
                  placeholder="Address"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
          </div>

          <div className="border p-4 space-y-4 rounded bg-gray-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Field
                  name="enquiryNumber"
                  placeholder="Enquiry Number"
                  className="border px-3 py-2 w-full"
                />
                <ErrorMessage
                  name="enquiryNumber"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <Field
                  type="date"
                  name="enquiryDate"
                  className="border px-3 py-2 w-full"
                />
                <ErrorMessage
                  name="enquiryDate"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="bg-[#186784] text-white font-bold text-center py-2">
              Exhibition Name
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <label className="text-sm">Customer status:</label>
                {radioOptions.customerStatus.map((status) => (
                  <label key={status} className="flex items-center gap-1">
                    <Field type="radio" name="customerStatus" value={status} />{" "}
                    {status}
                  </label>
                ))}
              </div>
              <div>
                <Field
                  name="handler"
                  placeholder="Handled By"
                  className="border px-3 py-2 w-full"
                />
                <ErrorMessage
                  name="handler"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="flex gap-6 flex-wrap items-center">
              <label>Enquiry Prospect:</label>
              {radioOptions.prospect.map((level) => (
                <label key={level} className="flex items-center gap-1">
                  <Field type="radio" name="prospect" value={level} /> {level}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">
              PRODUCT CATEGORY AND ENQUIRY DETAILS
            </h3>

            <div className="space-y-4">
              <div>
                <Field
                  as="select"
                  name="productCategory"
                  className="w-full border px-4 py-2"
                >
                  <option value="">Select your Product Category</option>
                  {productCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="productCategory"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <Field
                name="details"
                as="textarea"
                placeholder="Add Details here..."
                className="w-full border px-3 py-2 h-24"
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-1">
                    Attach Supporting Document (if any)
                  </label>
                  <input
                    type="file"
                    name="file"
                    className="border px-2 py-1 w-full"
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
          </div>

          {formStatus === "success" && (
            <div className="text-green-600 text-center text-sm font-medium">
              Thank you for your enquiry! We will get in touch shortly.
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#004b93] text-white px-6 py-2 mt-6 border border-blue-600 hover:bg-white hover:text-black hover:border-blue-600 transition duration-300 rounded"
            >
              SUBMIT
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EnquiryForm;
