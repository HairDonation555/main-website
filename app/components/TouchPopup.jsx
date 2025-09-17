import React, { useState } from 'react';

const TouchPopup = ({ onClose }) => {
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'sending', 'sent', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    const formData = new FormData(e.target);
    formData.append("formType", "donation"); // distinguish in the script

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyB34cvcgdh0aHp3C1JPKj43RxSvt6agnQkMILlzHpCWEgwx43IiARn_5KV9L1nLOsw/exec", {
        method: "POST",
        body: formData,
      });
      
      setSubmitStatus('sent');
      
      // Show sent state for 2 seconds, then close popup
      setTimeout(() => {
        e.target.reset();
        onClose(); // optionally close the popup
      }, 2000);
      
    } catch (error) {
      console.error("Submission failed", error);
      setSubmitStatus('error');
      
      // Reset to idle state after 3 seconds on error
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  const getButtonContent = () => {
    switch (submitStatus) {
      case 'sending':
        return (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Sending...
          </div>
        );
      case 'sent':
        return (
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Message Sent!
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Error - Try Again
          </div>
        );
      default:
        return 'Send Message';
    }
  };

  const getButtonStyles = () => {
    const baseStyles = "w-full py-3 rounded-xl font-semibold transition-all duration-300";
    
    switch (submitStatus) {
      case 'sending':
        return `${baseStyles} bg-blue-500 text-white cursor-not-allowed`;
      case 'sent':
        return `${baseStyles} bg-green-500 text-white cursor-default`;
      case 'error':
        return `${baseStyles} bg-red-500 text-white cursor-pointer hover:bg-red-600`;
      default:
        return `${baseStyles} bg-primary cursor-pointer text-white hover:scale-[1.01]`;
    }
  };

  return (
    <div className="relative w-full max-w-2xl z-75 md:z-100 mx-auto mt-10 bg-white rounded-2xl p-6 md:py-12 animate-slideDown border border-gray-200">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 cursor-pointer hover:text-gray-900 text-md text-red-600 md:text-2xl md:mt-6 font-bold transition"
        onClick={onClose}
        disabled={submitStatus === 'sending'}
      >
        ✕
      </button>

      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-2 text-primary">
        Donate for a Cause
      </h1>
      <p className="text-xl text-center mb-6 text-gray-600">
        Please fill the below form & we'll reach you out shortly.
      </p>

      {/* Contact Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="formType" type="hidden" defaultValue="donate" />
        <input name="timestamp" type="hidden" defaultValue={new Date().toISOString()} />
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          disabled={submitStatus === 'sending' || submitStatus === 'sent'}
          className="w-full p-3 border rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-primary transition disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          disabled={submitStatus === 'sending' || submitStatus === 'sent'}
          className="w-full p-3 border rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-primary transition disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          disabled={submitStatus === 'sending' || submitStatus === 'sent'}
          className="w-full p-3 border rounded-lg text-primary h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary transition disabled:bg-gray-100 disabled:cursor-not-allowed"
        ></textarea>

        <button
          type="submit"
          disabled={submitStatus === 'sending' || submitStatus === 'sent'}
          className={getButtonStyles()}
        >
          {getButtonContent()}
        </button>
      </form>
    </div>
  );
};

export default TouchPopup;