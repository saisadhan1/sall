// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <>
      <h2>Contact Us</h2>
      <div class="contact-form">
            <form action="#" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
        <button type="submit">Submit</button>
    </>
  )
}

export default Contact;
