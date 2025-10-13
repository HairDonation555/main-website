"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import { useRouter } from "next/navigation";

export default function HairDonationConsentForm() {
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxsozq8O4DHsp6umCZwPCExp7JkZUBpNVfsWpDjXvKHbx9rgl7YgRn0dUopzzRT4wga8Q/exec";

  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    address: "",
    donorPhoto: null,
    mobile: "",
    email: "",
    parentName: "",
    parentMobile: "",
    haircutDate: "",
    courierDate: "",
    hairTreatment: "",
    hearAbout: "",
    courierTracking: "",
    newsletter: "",
    donatedBefore: "",
    previousDonationDetails: "",
    publishConsent: "",
    publishPhoto: null,
    certificate: "",
    comments: "",
    donorSignature: "",
    donorDate: "",
    guardianSignature: "",
    guardianDate: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file && file.size > 1024 * 1024) {
        alert("File size exceeds 1MB!");
        return;
      }
      setFormData((prev) => ({ ...prev, [name]: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) return resolve("");
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (err) => reject(err);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");

    try {
      const donorBase64 = await convertToBase64(formData.donorPhoto);
      const publishBase64 = await convertToBase64(formData.publishPhoto);

      const body = new URLSearchParams({
        formType: "newConsent",
        ...Object.fromEntries(
          Object.entries(formData).filter(
            ([key]) => key !== "donorPhoto" && key !== "publishPhoto"
          )
        ),
        donorPhoto: donorBase64 || "",
        publishPhoto: publishBase64 || "",
      });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body,
      });

      const result = await response.text();
      if (result === "Success") {
        setSuccessMessage("Form submitted successfully! Redirecting to home...");
        setTimeout(() => router.push("/"), 3000);

        setFormData({
          name: "",
          age: "",
          gender: "",
          address: "",
          donorPhoto: null,
          mobile: "",
          email: "",
          parentName: "",
          parentMobile: "",
          haircutDate: "",
          courierDate: "",
          hairTreatment: "",
          hearAbout: "",
          courierTracking: "",
          newsletter: "",
          donatedBefore: "",
          previousDonationDetails: "",
          publishConsent: "",
          publishPhoto: null,
          certificate: "",
          comments: "",
          donorSignature: "",
          donorDate: "",
          guardianSignature: "",
          guardianDate: "",
        });
      } else {
        setSuccessMessage("⚠️ Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccessMessage("❌ Error while submitting form. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50 py-10 px-4 md:px-10"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-6 text-left">
          Hair Donation Consent Form
        </h1>
        <p className="text-left text-gray-500 mb-10">
          Thank you for choosing to donate. Please fill out all required details.
        </p>
        <Logo />

        <form
          onSubmit={handleSubmit}
          className="space-y-10 mt-12 text-gray-700"
          encType="multipart/form-data"
        >
          {/* Personal Information */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Personal Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              />
            </div>

            <div className="mt-4">
              <label className="block font-medium mb-1">
                Passport-size photograph (Max 1MB)
              </label>
              <input
                type="file"
                name="donorPhoto"
                accept="image/*"
                onChange={handleChange}
                className="w-fit text-white p-2 bg-primary rounded"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              />
            </div>
          </section>

          {/* Parent/Guardian Info */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Parent / Guardian Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="parentName"
                placeholder="Name of Parent / Guardian"
                value={formData.parentName}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              />
              <input
                type="tel"
                name="parentMobile"
                placeholder="Mobile Number"
                value={formData.parentMobile}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              />
            </div>
          </section>

          {/* Donation Details */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Donation Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium">Date of Hair Cut</span>
                <input
                  type="date"
                  name="haircutDate"
                  value={formData.haircutDate}
                  onChange={handleChange}
                  className="bg-gray-300 p-2 mt-1 rounded-md w-full"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">
                  Date of Courier / Delivery
                </span>
                <input
                  type="date"
                  name="courierDate"
                  value={formData.courierDate}
                  onChange={handleChange}
                  className="bg-gray-300 p-2 mt-1 rounded-md w-full"
                />
              </label>

              <input
                type="text"
                name="hairTreatment"
                placeholder="Chemical Treatments (if any)"
                value={formData.hairTreatment}
                onChange={handleChange}
                className="bg-gray-300 p-2 mt-3 rounded-md w-full md:col-span-2"
              />
              <select
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              >
                <option value="">How did you hear about us?</option>
                <option>Website</option>
                <option>Media</option>
                <option>Friend</option>
                <option>Other</option>
              </select>
              <input
                type="text"
                name="courierTracking"
                placeholder="Courier Tracking Number"
                value={formData.courierTracking}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              />
            </div>
          </section>

          {/* Newsletter & Acknowledgment */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Newsletter & Acknowledgement
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="newsletter"
                value={formData.newsletter}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              >
                <option value="">Receive Newsletter?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <select
                name="donatedBefore"
                value={formData.donatedBefore}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              >
                <option value="">Donated before?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <input
              type="text"
              name="previousDonationDetails"
              placeholder="If yes, specify details"
              value={formData.previousDonationDetails}
              onChange={handleChange}
              className="bg-gray-300 p-2 mt-3 rounded-md w-full"
            />

            <select
              name="publishConsent"
              value={formData.publishConsent}
              onChange={handleChange}
              className="bg-gray-300 p-2 mt-3 rounded-md w-full"
            >
              <option value="">Consent to publish on social media?</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <div className="mt-3">
              <label className="block font-medium mb-1">
                Upload Photo for Publishing (Max 1MB)
              </label>
              <input
                type="file"
                name="publishPhoto"
                accept="image/*"
                onChange={handleChange}
                className="w-fit text-white p-2 bg-primary rounded"
              />
            </div>

            <select
              name="certificate"
              value={formData.certificate}
              onChange={handleChange}
              className="bg-gray-300 p-2 mt-3 rounded-md w-full"
            >
              <option value="">Receive Acknowledgment Certificate?</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <textarea
              name="comments"
              placeholder="Comments (if any)"
              value={formData.comments}
              onChange={handleChange}
              className="bg-gray-300 p-2 mt-3 rounded-md h-24 w-full md:col-span-2"
            />
          </section>

          {/* Declaration */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Declaration
            </h2>
            <p className="text-gray-600 mb-3 leading-relaxed">
              I hereby confirm that I, out of my free will and consent, agree to
              donate my hair for the purpose of creating wigs for marginalized
              cancer patients undergoing chemotherapy...
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                name="donorSignature"
                placeholder="Signature of Donor"
                value={formData.donorSignature}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              />
              <label className="block">
                <span className="text-sm font-medium">Date</span>
                <input
                  type="date"
                  name="donorDate"
                  value={formData.donorDate}
                  onChange={handleChange}
                  className="bg-gray-300 p-2 mt-1 rounded-md w-full"
                />
              </label>
            </div>

            <h3 className="text-lg font-semibold text-primary mt-6">
              Additional Declaration by Parent/Guardian (if donor is under 18)
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <input
                type="text"
                name="guardianSignature"
                placeholder="Signature of Parent/Guardian"
                value={formData.guardianSignature}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded-md w-full"
              />
              <label className="block">
                <span className="text-sm font-medium">Date</span>
                <input
                  type="date"
                  name="guardianDate"
                  value={formData.guardianDate}
                  onChange={handleChange}
                  className="bg-gray-300 p-2 mt-1 rounded-md w-full"
                />
              </label>
            </div>
          </section>

          <div className="flex flex-col items-center pt-6">
            <button
              type="submit"
              disabled={submitting}
              className={`${
                submitting
                  ? "bg-primary/50 cursor-not-allowed"
                  : "bg-primary hover:bg-primary/80"
              } text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md`}
            >
              {submitting ? "Submitting..." : "Submit Form"}
            </button>

            {successMessage && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm w-full ${
                  successMessage.includes("Success")
                    ? "text-green-600 font-bold text-center"
                    : "text-red-600 font-bold text-center"
                }`}
              >
                {successMessage}
              </motion.p>
            )}
          </div>
        </form>
      </div>
    </motion.div>
  );
}
