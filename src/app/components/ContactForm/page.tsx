// components/ContactForm.tsx
"use client"
import React, { useState } from 'react';
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service-ID', 'template-ID', e.currentTarget, 'Public-Key')
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        alert('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send the message. Please try again.');
      });
  };

  return (
    <div className="contact-form">
      <form id="contact-form" onSubmit={handleSubmit}>
        <label className="label-field" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="input-field"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label className="label-field" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="input-field"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label className="label-field" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="input-field"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;