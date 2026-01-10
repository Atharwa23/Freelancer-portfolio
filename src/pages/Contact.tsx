import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // These IDs come from your EmailJS Dashboard
    const serviceID = 'service_o10s9k6';
    const templateID = 'template_0pkbwin';
    const publicKey = 'I4kdqLfH1KW5VC6GU';

    // Create an object that matches your EmailJS template placeholders
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Oops! Something went wrong. Please try again later.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F4ED] to-[#E5D5C8] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-700">
            Have a project in mind? Let's work together to build something great.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#4A5346] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Email</h3>
            <a href="mailto:atharwazawar23@gmail.com" className="text-gray-600 hover:text-[#4A5346] transition-colors">
              atharwazawar23@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#E5B8AD] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Phone</h3>
            <a href="tel:+919307257942" className="text-gray-600 hover:text-[#E5B8AD] transition-colors">
              +91 95791 77758
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#8B9A7E] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Uttar Pradesh, India</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4A5346] focus:outline-none transition-colors"
                  placeholder="Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4A5346] focus:outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4A5346] focus:outline-none transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4A5346] focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-[#4A5346] text-white rounded-lg font-medium hover:bg-[#3D4139] transition-colors"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
