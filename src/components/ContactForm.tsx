import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with cancellation flag for unmounting
    let isCancelled = false;

    const timeout = setTimeout(() => {
      if (!isCancelled) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }
    }, 1000);

    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Get In Touch</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:omoruyiidehen@outlook.com"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Mail size={20} />
              omoruyiidehen@outlook.com
            </a>

            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/omoruyiidehen"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/sircodo92"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;