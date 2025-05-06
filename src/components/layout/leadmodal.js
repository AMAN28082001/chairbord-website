import React, { useEffect, useState } from 'react';

const LeadModal = ({ isOpen, onClose, visitData = {}, onSubmit }) => {
  const formFields = [
    { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '9876543210' },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Your message...' },
  ];

  const [formData, setFormData] = useState(() =>
    formFields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const combinedData = {
      ...formData,
      ...visitData,
    };

    console.log('✅ Form submitted with data:', combinedData);

    // TODO: send `combinedData` to API
    if (onSubmit) onSubmit(formData); // Call parent handler with form data

    onClose();
  };

  useEffect(() => {
    if (!visitData || Object.keys(visitData).length === 0) {
      console.warn('⚠️ visitData is empty or undefined');
    } else {
      console.log('ℹ️ Received visitData in modal:', visitData);
    }
  }, [visitData]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn} aria-label="Close modal">×</button>
        <h2 style={styles.heading}>Enquiry Form</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {formFields.map((field) => (
            <div key={field.name} style={styles.formGroup}>
              <label htmlFor={field.name} style={styles.label}>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  rows="4"
                  style={{ ...styles.input, resize: 'vertical' }}
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  style={styles.input}
                  required
                />
              )}
            </div>
          ))}
          <button type="submit" style={styles.submitBtn}>Send Message</button>
        </form>

        {/* Optional Debug Info */}
        {/* <pre style={{ fontSize: '12px', marginTop: '20px', color: '#555' }}>
          Debug visitData: {JSON.stringify(visitData, null, 2)}
        </pre> */}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '480px',
    padding: '30px',
    position: 'relative',
    boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#222',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '14px',
    marginBottom: '6px',
    color: '#555',
    fontWeight: '500',
  },
  input: {
    padding: '10px 12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  submitBtn: {
    background: 'linear-gradient(90deg, #3674B5, #578FCA, #A1E3F9, #D1F8EF)',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s ease',
  },
  closeBtn: {
    position: 'absolute',
    top: '12px',
    right: '16px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    color: '#999',
    cursor: 'pointer',
  },
};

export default LeadModal;
