import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');

          form.current.reset();

        }, (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message.');
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="order-2 md:order-1 md:w-1/2">
            <input className="bg-neutral-700 w-full rounded-md min-h-10 border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 placeholder:text-sm px-4 mb-4" placeholder="Name" name="user_name" required />

            <input className="bg-neutral-700 w-full rounded-md min-h-10 border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 placeholder:text-sm px-4 mb-4" placeholder="Email" name="user_email" required />

            <textarea className="bg-neutral-700 w-full rounded-md min-h-10 border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 placeholder:text-sm px-4 py-2 mb-4" placeholder="Message" name="message" rows="6" required />

            <button className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm shadow-md focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800 hover:bg-stone-800" type="submit" value="Send">Send Message</button>
        </form>
    );
};

export default ContactForm;