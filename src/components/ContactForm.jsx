import React, { useState, useEffect, useRef } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const successTimeoutRef = useRef(null);

  // Clean up any pending timeouts on unmount
  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  // Validation side effect
  useEffect(() => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if there are any errors before submitting
    if (Object.keys(errors).length === 0) {
      setIsSuccess(true);
      
      // Reset the form values
      setFormData({
        name: '',
        email: '',
        address: '',
        message: ''
      });
      setTouched({});

      // Auto-hide success alert after 4 seconds
      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
      successTimeoutRef.current = setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    }
  };

  // Determine if submit should be disabled
  const hasEmptyFields = !formData.name || !formData.email || !formData.address || !formData.message;
  const isSubmitDisabled = Object.keys(errors).length > 0 || hasEmptyFields;

  return (
    <article className="contact-form">
      <h3>Send a Message</h3>
      
      {isSuccess && (
        <div className="form-success-alert" role="alert">
          🎉 Thank you! Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.name && errors.name ? 'input-error' : ''}
            required
          />
          {touched.name && errors.name && (
            <span className="error-message">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.email && errors.email ? 'input-error' : ''}
            required
          />
          {touched.email && errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        {/* Address */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.address && errors.address ? 'input-error' : ''}
            required
          />
          {touched.address && errors.address && (
            <span className="error-message">{errors.address}</span>
          )}
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.message && errors.message ? 'input-error' : ''}
            required
          ></textarea>
          {touched.message && errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitDisabled}
          className={isSubmitDisabled ? 'btn-disabled' : ''}
        >
          Send Message
        </button>
      </form>
    </article>
  );
}
