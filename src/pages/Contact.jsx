import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-jakarta font-bold text-neutral-900 mb-4">Contact Us</h1>
        <p className="text-xl font-inter text-neutral-600 max-w-3xl mx-auto">
          Have questions about our services? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-jakarta font-bold text-neutral-900 mb-6">Send us a Message</h2>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-700">Thank you for your message. We'll get back to you soon!</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-inter text-sm font-medium text-neutral-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 rounded-xl border border-neutral-300 font-inter text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-inter text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 rounded-xl border border-neutral-300 font-inter text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-inter text-sm font-medium text-neutral-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 rounded-xl border border-neutral-300 font-inter text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-inter text-sm font-medium text-neutral-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="block w-full px-4 py-3 rounded-xl border border-neutral-300 font-inter text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center px-6 py-3 rounded-xl font-inter font-semibold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-jakarta font-bold text-neutral-900 mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-jakarta font-semibold text-neutral-900 mb-1">Email</h3>
                  <p className="font-inter text-neutral-600">support@brandxchange.com</p>
                  <p className="font-inter text-neutral-600">sales@brandxchange.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-jakarta font-semibold text-neutral-900 mb-1">Phone</h3>
                  <p className="font-inter text-neutral-600">+1 (555) 123-4567</p>
                  <p className="font-inter text-neutral-600">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-jakarta font-semibold text-neutral-900 mb-1">Office</h3>
                  <p className="font-inter text-neutral-600">123 Brand Street</p>
                  <p className="font-inter text-neutral-600">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-xl p-6">
            <h3 className="font-jakarta font-semibold text-neutral-900 mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between font-inter text-neutral-600">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between font-inter text-neutral-600">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM EST</span>
              </div>
              <div className="flex justify-between font-inter text-neutral-600">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-6">
            <h3 className="font-jakarta font-semibold text-neutral-900 mb-4">Need Immediate Assistance?</h3>
            <p className="font-inter text-neutral-600 mb-4">
              For urgent matters, please call our support line or use our live chat feature.
            </p>
            <button className="w-full px-6 py-3 rounded-xl bg-primary text-white font-inter font-semibold hover:bg-primary/90 transition-colors duration-200">
              Start Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 