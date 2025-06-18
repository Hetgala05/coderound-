import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      console.log("Contact Form Submitted:", formData);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10" data-aos="fade-up" data-aos-duration="2000">
      <h1 className="text-3xl font-bold text-gray-600 mb-8 text-center">Contact Us</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Google Map */}
        <div className="w-full lg:w-1/2 h-96">
          <iframe
            title="Google Map"
            className="w-full h-full rounded-lg shadow"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609920704!2d72.74110151058673!3d19.0821978385874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63e1e91e239%3A0x5c776a5e71f14d6!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718700000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-gray-300 p-6 rounded-lg shadow space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-900 mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-black rounded"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-900 mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-black rounded"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-900 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full p-2 border border-black rounded"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-900 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                className="w-full p-2 border border-black rounded"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>

            {submitted && (
              <p className="text-green-600 text-sm mt-3 text-center">Thank you for contacting us!</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
