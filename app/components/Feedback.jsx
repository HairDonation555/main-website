'use client'
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setSendingMessage(true);
    setSuccessMessage("");

    const formData = new FormData(e.target);
    formData.append("rating", rating);
    formData.append("formType", "feedback");
    formData.append("timestamp", new Date().toISOString());

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyXMXDMSOGMK81bby6MFTFA6L4DuPn8nRHfoVzSB6ce2pZPKEazQdm8SQAxl4lmzo-8QQ/exec", {
        method: "POST",
        body: formData,
      });
      setSuccessMessage("Thank you for your feedback!");
      e.target.reset();
      setRating(0);
    } catch (error) {
      console.error("Submission failed", error);
      setSuccessMessage("There was an error. Please try again.");
    } finally {
      setSendingMessage(false);
    }
  };

  // unified input style (keeps your .input class if you have it)
  const inputClass =
    "input w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div className="bg-white w-full max-w-5xl mx-auto rounded-2xl mb-8 p-6 md:p-8 shadow-sm">
      <h3 className="text-2xl md:text-3xl font-semibold text-center text-primary mb-6">
        Feedback Form
      </h3>

      <form className="space-y-6" onSubmit={handleFeedbackSubmit}>
        {/* Hidden fields */}
        <input name="formType" type="hidden" defaultValue="feedback" />
        <input name="timestamp" type="hidden" defaultValue={new Date().toISOString()} />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-700 block mb-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              className={inputClass}
              required
              autoComplete="name"
            />
          </div>

          <div>
            <label className="text-gray-700 block mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className={inputClass}
              required
              autoComplete="email"
            />
          </div>

          {/* Rating spans full width for clean alignment */}
          <div className="md:col-span-2">
            <label className="text-gray-700 block mb-1">Rating</label>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                    className="p-1"
                    onClick={() => setRating(star)}
                  >
                    <FaStar
                      size={24}
                      className={rating >= star ? "text-yellow-400" : "text-gray-300"}
                    />
                  </button>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {rating ? `${rating}/5` : "Select a rating"}
              </span>
              <input type="hidden" name="rating" value={rating} />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="text-gray-700 block mb-1">Feedback</label>
            <textarea
              name="feedback"
              rows={4}
              placeholder="Share your experience..."
              className={inputClass}
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:scale-[1.01] hover:bg-primary/90 transition duration-200 mt-4"
        >
          Submit Feedback
        </button>

        {sendingMessage && (
          <p className="text-yellow-600 text-center font-medium mt-3">
            Sending your feedback...
          </p>
        )}
        {successMessage && (
          <p className="text-green-600 text-center font-medium mt-3">
            {successMessage}
          </p>
        )}
      </form>

      <div className="text-xs text-gray-400 mt-4 text-center">
        <h1 className="text-primary"> Provide a Google review and support the cause!</h1>
        <button className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
          href="https://www.google.com/maps/place/Hair+Donation/@15.4999205,80.0467724,17z/data=!4m14!1m5!8m4!1e1!2s108048886842683641227!3m1!1e1!3m7!1s0x3a4b011cd72eb6c7:0x96e47f3af7fa542b!8m2!3d15.4999205!4d80.0493473!9m1!1b1!16s%2Fg%2F11wfqz7_x_?entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D" // replace with your Google reviews page link
          >
            Review us on Google
          </a>
        </button>
      </div>
    </div>
  );
};

export default Feedback;
