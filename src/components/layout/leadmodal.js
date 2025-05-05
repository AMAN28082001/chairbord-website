import React, { useEffect, useState } from 'react';

const LeadModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose(); // Close modal after submission
  };

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
          <div style={styles.formGroup}>
            <label htmlFor="fullName" style={styles.label}>Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="phone" style={styles.label}>Phone Number</label>
            <div style={styles.phoneWrapper}>
              <span style={styles.prefix}>+91</span>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                style={{ ...styles.input, ...styles.phoneInput }}
                required
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="4"
              style={{ ...styles.input, resize: 'vertical' }}
            />
          </div>

          <button type="submit" style={styles.submitBtn}>Send Message</button>
        </form>
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
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // darker transparent black

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
  phoneWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  prefix: {
    padding: '10px 12px',
    backgroundColor: '#f1f1f1',
    border: '1px solid #ccc',
    borderRight: 'none',
    borderRadius: '6px 0 0 6px',
    fontSize: '14px',
  },
  phoneInput: {
    borderRadius: '0 6px 6px 0',
    flex: 1,
    borderLeft: 'none',
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
  }
};

export default LeadModal;
