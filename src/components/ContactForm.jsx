import { useState } from 'react';
import emailjs from '@emailjs/browser';

const initialForm = { name: '', email: '', message: '' };

export default function ContactForm({ id }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  function validate(values = form) {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Name is required';
    else if (values.name.trim().length < 3) nextErrors.name = 'Name must be at least 3 characters';

    if (!values.email.trim()) nextErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = 'Enter a valid email address';

    if (!values.message.trim()) nextErrors.message = 'Message is required';
    else if (values.message.trim().length < 10) nextErrors.message = 'Message must be at least 10 characters';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);
    if (errors[name]) validate(nextForm);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validate()) {
      setStatus({ type: 'error', message: 'Please fix the errors before sending.' });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send('service_n374frp', 'template_6p08hew', {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      }, 'wg1Ki3dMFsPfdHA0u');

      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
  }

  const inputClass = (field) => errors[field] ? 'error' : form[field].trim() ? 'success' : '';

  return (
    <form className="contact-form js-contact-form" id={id} onSubmit={handleSubmit} noValidate>
      <div className="input-field">
        <label htmlFor={`${id || 'contact'}-name`}>Name</label>
        <input id={`${id || 'contact'}-name`} name="name" type="text" className={`input-name ${inputClass('name')}`} placeholder="Your Name" value={form.name} onChange={handleChange} />
        <small className="error-text js-name-error">{errors.name}</small>
      </div>

      <div className="input-field">
        <label htmlFor={`${id || 'contact'}-email`}>Email</label>
        <input id={`${id || 'contact'}-email`} name="email" type="email" className={`input-email ${inputClass('email')}`} placeholder="Your Email" value={form.email} onChange={handleChange} />
        <small className="error-text js-email-error">{errors.email}</small>
      </div>

      <div className="input-field">
        <label htmlFor={`${id || 'contact'}-message`}>Message</label>
        <textarea id={`${id || 'contact'}-message`} name="message" className={`input-message ${inputClass('message')}`} placeholder="Tell Me About Your Project..." rows="5" value={form.message} onChange={handleChange}></textarea>
        <small className="error-text js-message-error">{errors.message}</small>
      </div>

      <div className="form-button">
        <button type="submit" className={`send-button js-send-button ${loading ? 'loading' : ''}`} disabled={loading}>
          <img className="sen-button-image" src="/images/icons/paper-plane-tilt.svg" alt="" />
          <span className="js-button-text">{loading ? 'Sending...' : 'Send'}</span>
        </button>
      </div>

      <div className={`form-status js-form-status ${status.type === 'success' ? 'success-message' : status.type === 'error' ? 'error-message' : ''}`}>
        {status.message}
      </div>
    </form>
  );
}
