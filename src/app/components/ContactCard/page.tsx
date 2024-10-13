// components/ContactCard.tsx
import React from "react";
import ContactForm from "../ContactForm/page";

const ContactCard: React.FC = () => {
  return (
    <div className="contact-card">
      <div className="card">
        <h2 className="card-title">Contact Us</h2>
        <p>
          <strong>Address:</strong> Buenos Aires, Argentina
        </p>
        <p>
          <strong>Phone:</strong> (011) 1234-5678
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="codeblueprintsmail@gmail.com">
            codeblueprintsmail@gmail.com
          </a>
        </p>
        <p>
          <strong>Business Hours:</strong> Mon-Fri 9:00 AM - 6:00 PM
        </p>
      </div>

      <ContactForm />

      <div className="map">
        <h3>Find Us Here</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13141.406528857404!2d-58.421971277524704!3d-34.615799373971144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5ae54d36585%3A0xaaf6e955b98b4e17!2sBuenos%20Aires!5e0!3m2!1ses-419!2sar!4v1697203935069!5m2!1ses-419!2sar"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactCard;
