import React from 'react';
// import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <div className="contact-section">
                {/* <ContactForm /> */}
                <ContactInfo />
            </div>
        </section>
    );
};

export default ContactSection;
