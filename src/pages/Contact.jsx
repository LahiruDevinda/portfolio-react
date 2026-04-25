import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${form.name}!`);
  };

  return (
    <div className="contact-content">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Name</label>
          <input 
            type="text" 
            value={form.name} 
            onChange={(e) => setForm({...form, name: e.target.value})} 
          />
        </div>
        <div className="input-field">
          <label>Email</label>
          <input 
            type="email" 
            value={form.email} 
            onChange={(e) => setForm({...form, email: e.target.value})} 
          />
        </div>
        <div className="input-field">
          <label>Message</label>
          <textarea 
            rows="5"
            value={form.message} 
            onChange={(e) => setForm({...form, message: e.target.value})} 
          />
        </div>
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}