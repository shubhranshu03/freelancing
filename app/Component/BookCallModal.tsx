"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookCallModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState("");

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-book-modal", handleOpen);
    return () => window.removeEventListener("open-book-modal", handleOpen);
  }, []);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          font-family: 'Inter', sans-serif;
          overflow-y: auto;
        }
        
        @media (min-width: 640px) {
          .modal-overlay {
            padding: 20px;
          }
        }
        
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .modal-card {
          position: relative;
          width: 100%;
          max-width: 380px;
          background-color: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          z-index: 10;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          display: grid;
          margin: auto;
          max-height: calc(100vh - 24px);
          overflow-y: auto;
        }

        @media (min-width: 480px) {
          .modal-card {
            max-width: 450px;
            border-radius: 16px;
          }
        }

        @media (min-width: 640px) {
          .modal-card {
            max-width: 600px;
          }
        }

        @media (min-width: 768px) {
          .modal-card {
            max-width: 900px;
            grid-template-columns: 1fr 1.3fr;
            max-height: 90vh;
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 20;
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: color 0.3s;
          padding: 4px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @media (min-width: 640px) {
          .modal-close-btn {
            top: 20px;
            right: 20px;
            padding: 6px;
          }
        }
        
        .modal-close-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
        }

        .modal-left {
          background-color: rgba(255, 255, 255, 0.02);
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          min-height: 280px;
        }
        
        @media (min-width: 480px) {
          .modal-left {
            padding: 32px;
            min-height: 320px;
          }
        }
        
        @media (min-width: 768px) {
          .modal-left {
            padding: 48px;
            border-bottom: none;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            min-height: auto;
          }
        }

        .modal-tag {
          display: inline-block;
          font-size: 10px;
          font-family: monospace;
          color: #b8ff57;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 12px;
        }
        
        @media (min-width: 480px) {
          .modal-tag {
            font-size: 11px;
            margin-bottom: 16px;
          }
        }

        .modal-title {
          font-size: 24px;
          color: #fff;
          font-weight: 300;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          line-height: 1.2;
          font-family: 'Syne', sans-serif;
        }
        
        @media (min-width: 480px) {
          .modal-title {
            font-size: 28px;
            margin-bottom: 16px;
          }
        }
        
        @media (min-width: 640px) {
          .modal-title {
            font-size: 32px;
          }
        }
        
        @media (min-width: 1024px) {
          .modal-title { 
            font-size: 40px; 
          }
        }

        .modal-title span {
          color: #b8ff57;
          font-weight: 600;
        }

        .modal-desc {
          color: rgba(255, 255, 255, 0.5);
          font-size: 13px;
          line-height: 1.6;
          max-width: none;
        }
        
        @media (min-width: 480px) {
          .modal-desc {
            font-size: 14px;
            max-width: 280px;
          }
        }

        .modal-features {
          display: flex;
          margin-top: 24px;
          gap: 12px;
          flex-direction: column;
        }
        
        @media (min-width: 480px) {
          .modal-features {
            margin-top: 32px;
            gap: 16px;
          }
        }
        
        @media (min-width: 768px) {
          .modal-features { 
            margin-top: 40px;
          }
        }

        .modal-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 13px;
        }
        
        @media (min-width: 480px) {
          .modal-feature-item {
            gap: 12px;
            font-size: 14px;
          }
        }

        .modal-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #b8ff57;
          flex-shrink: 0;
        }
        
        @media (min-width: 480px) {
          .modal-dot {
            width: 6px;
            height: 6px;
          }
        }

        .modal-right {
          padding: 24px;
        }
        
        @media (min-width: 480px) {
          .modal-right {
            padding: 32px;
          }
        }
        
        @media (min-width: 768px) {
          .modal-right { 
            padding: 48px; 
          }
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        @media (min-width: 480px) {
          .modal-form {
            gap: 24px;
          }
        }

        .modal-form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        
        @media (min-width: 480px) {
          .modal-form-row {
            gap: 24px;
          }
        }
        
        @media (min-width: 640px) {
          .modal-form-row { 
            grid-template-columns: 1fr 1fr; 
          }
        }

        .modal-form-group {
          display: flex;
          flex-direction: column;
        }

        .modal-label {
          font-size: 10px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 6px;
        }
        
        @media (min-width: 480px) {
          .modal-label {
            font-size: 11px;
            margin-bottom: 8px;
          }
        }

        .modal-input {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          padding: 10px 14px;
          color: #fff;
          font-size: 15px;
          transition: all 0.3s;
          box-sizing: border-box;
          outline: none;
        }
        
        @media (min-width: 480px) {
          .modal-input {
            border-radius: 8px;
            padding: 12px 16px;
            font-size: 16px;
          }
        }
        
        .modal-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        .modal-input:focus {
          border-color: #b8ff57;
          background-color: rgba(255, 255, 255, 0.06);
        }

        .modal-select-wrapper {
          position: relative;
        }

        .modal-select {
          appearance: none;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.7);
        }

        .modal-select option {
          background-color: #000;
          color: #fff;
        }

        .modal-select-icon {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: rgba(255, 255, 255, 0.5);
        }
        
        @media (min-width: 480px) {
          .modal-select-icon {
            right: 16px;
          }
        }

        .modal-textarea {
          resize: none;
          min-height: 80px;
        }
        
        @media (min-width: 480px) {
          .modal-textarea {
            min-height: 90px;
          }
        }

        .modal-submit {
          width: 100%;
          background-color: #b8ff57;
          color: #000;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 14px 16px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-top: 8px;
        }
        
        @media (min-width: 480px) {
          .modal-submit {
            font-size: 14px;
            padding: 16px;
            border-radius: 8px;
          }
        }
        
        .modal-submit:hover {
          background-color: #fff;
        }
        
        .modal-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>

      <AnimatePresence>
        {isOpen && (
          <div className="modal-overlay">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
              className="modal-backdrop"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "tween", ease: "circOut", duration: 0.35 }}
              className="modal-card"
            >
              <button onClick={closeModal} className="modal-close-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="modal-left">
                <div>
                  <span className="modal-tag">Book a Call</span>
                  <h2 className="modal-title">
                    Let's build <span>something</span> together.
                  </h2>
                  <p className="modal-desc">
                    Fill in the details and our team will get back to you within 24 hours.
                  </p>
                </div>

                <div className="modal-features">
                  <div className="modal-feature-item">
                    <span className="modal-dot" /> Free consultation
                  </div>
                  <div className="modal-feature-item">
                    <span className="modal-dot" /> Reply within 24 hours
                  </div>
                  <div className="modal-feature-item">
                    <span className="modal-dot" /> No obligation quote
                  </div>
                </div>
              </div>

              <div className="modal-right">
                <form
                  className="modal-form"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setSubmitResult("Sending...");
                    
                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);
                    
                    // TODO: Replace with the actual access key from Web3Forms
                    formData.append("access_key", "9b52f3f6-7d9d-4182-ae01-6416555de4d2");

                    try {
                      const response = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        body: formData
                      });

                      const data = await response.json();

                      if (data.success) {
                        setSubmitResult("Inquiry Sent Successfully!");
                        form.reset();
                        setTimeout(() => {
                          closeModal();
                          setSubmitResult("");
                        }, 2000);
                      } else {
                        setSubmitResult("Something went wrong. Please try again.");
                      }
                    } catch (error) {
                      setSubmitResult("Error connecting. Please try again.");
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                >
                  <div className="modal-form-row">
                    <div className="modal-form-group">
                      <label className="modal-label">Name</label>
                      <input required type="text" name="name" className="modal-input" placeholder="Your full name" />
                    </div>
                    <div className="modal-form-group">
                      <label className="modal-label">Phone / WhatsApp</label>
                      <input required type="tel" name="phone" className="modal-input" placeholder="Contact number" />
                    </div>
                  </div>

                  <div className="modal-form-group">
                    <label className="modal-label">Email</label>
                    <input required type="email" name="email" className="modal-input" placeholder="Your email address" />
                  </div>

                  <div className="modal-form-group">
                    <label className="modal-label">Service Needed</label>
                    <div className="modal-select-wrapper">
                      <select required name="service" defaultValue="" className="modal-input modal-select">
                        <option value="" disabled>Select an option</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Full Website">Full Website</option>
                        <option value="Web App">Web App</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Redesign">Website Redesign</option>
                        <option value="UI-UX Design">UI/UX Design</option>
                      </select>
                      <div className="modal-select-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="modal-form-group">
                    <label className="modal-label">Project Details (Optional)</label>
                    <textarea rows={3} name="details" className="modal-input modal-textarea" placeholder="Tell us about your project..." />
                  </div>

                  <button type="submit" className="modal-submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  
                  {submitResult && (
                    <p style={{ color: submitResult.includes("Success") ? "#b8ff57" : "#ff5757", fontSize: "14px", textAlign: "center", marginTop: "8px" }}>
                      {submitResult}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}