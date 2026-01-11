'use client'
import React, { useState } from "react";
import { Atkinson_Hyperlegible_Mono } from "next/font/google";

const atkinsonMono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`${atkinsonMono.className} text-3xl sm:text-4xl lg:text-5xl font-bold mb-4`}>
            Get In Touch
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'm here to help. Reach out to me directly and let's explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Email Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Email</h3>
                  <p className="text-white font-medium">akash@example.com</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Phone</h3>
                  <p className="text-white font-medium">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Location</h3>
                  <p className="text-white font-medium">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Discussion"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Please provide details about your inquiry..."
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
                      submitted
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
                    }`}
                  >
                    {submitted ? '✓ Message Sent Successfully' : 'Send Message'}
                  </button>
                </div>

                {/* Note */}
                <p className="text-xs text-slate-400 text-center">
                  We'll get back to you within 24 hours. Your information is secure and won't be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;