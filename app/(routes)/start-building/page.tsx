"use client";

import { useState } from 'react';
import { Smiley, Envelope, CircleCheck } from '@/components/icons/PhosphorIcons';

type PersonaType = 'founder' | 'enterprise' | 'innovator' | null;

export default function StartBuildingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedEngagement, setSelectedEngagement] = useState<string>('');
  const [selectedPersona, setSelectedPersona] = useState<PersonaType>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate persona selection
    if (!selectedPersona) {
      alert('Please select who you are before proceeding.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    // Collect form data
    formData.forEach((value, key) => {
      if (value) data[key] = value.toString();
    });

    // Add selected persona and engagement type
    if (selectedPersona) {
      data.persona = selectedPersona;
    }
    if (selectedEngagement) {
      data.engagementType = selectedEngagement;
    }

    try {
      const response = await fetch('/api/forms/discovery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        const errorMessage = error.details 
          ? `Validation failed: ${error.details.map((d: any) => d.message || `${d.field}: ${d.message}`).join(', ')}`
          : error.error || 'Submission failed';
        throw new Error(errorMessage);
      }

      // Success
      setSubmitSuccess(true);
      form.reset();
      setSelectedEngagement('');
      setSelectedPersona(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] text-white">
      <div className="max-w-7xl mx-auto px-5 pt-28 pb-10 md:pt-32 md:pb-16">
        {/* Section 1: Start Your Discovery Sprint */}
        <section className="mb-16 animate-fadeInUp">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] bg-clip-text text-transparent">
              Start Your AI Journey With Us
            </h1>
            <p className="text-[#94a3b8] text-lg">
              Let&apos;s explore how AI can transform your business
            </p>
          </div>
        </section>

        {/* Form Container */}
        <div className="bg-[rgba(30,41,82,0.6)] border border-[rgba(0,212,255,0.2)] rounded-3xl p-10 md:p-12 backdrop-blur-md max-w-4xl mx-auto">
          {submitSuccess ? (
            <div className="p-5 bg-gradient-to-r from-[rgba(0,255,136,0.2)] to-[rgba(0,212,255,0.2)] border border-[#00ff88] rounded-xl text-center animate-fadeInUp">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CircleCheck size={24} weight="fill" className="text-[#00ff88]" />
                <h3 className="text-xl font-semibold">Application Received!</h3>
              </div>
              <p>Our team will review and send you a detailed sprint proposal within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Section 1: Tell us who you are */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00ff88]">
                  Tell Us Who You Are
                </h2>
                <div className="space-y-4">
                  <label
                    className={`flex items-center p-5 bg-[rgba(15,23,42,0.6)] border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedPersona === 'founder'
                        ? 'border-[#00ff88] bg-[rgba(0,255,136,0.1)]'
                        : 'border-[rgba(148,163,184,0.2)] hover:border-[#00d4ff] hover:bg-[rgba(15,23,42,0.8)]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="persona"
                      value="founder"
                      checked={selectedPersona === 'founder'}
                      onChange={() => setSelectedPersona('founder')}
                      className="w-5 h-5 mr-4 accent-[#00ff88]"
                    />
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-white mb-1">Founder/Startup Leader</div>
                      <div className="text-sm text-[#94a3b8]">Building the next big thing, moving fast</div>
                    </div>
                  </label>

                  <label
                    className={`flex items-center p-5 bg-[rgba(15,23,42,0.6)] border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedPersona === 'enterprise'
                        ? 'border-[#00ff88] bg-[rgba(0,255,136,0.1)]'
                        : 'border-[rgba(148,163,184,0.2)] hover:border-[#00d4ff] hover:bg-[rgba(15,23,42,0.8)]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="persona"
                      value="enterprise"
                      checked={selectedPersona === 'enterprise'}
                      onChange={() => setSelectedPersona('enterprise')}
                      className="w-5 h-5 mr-4 accent-[#00ff88]"
                    />
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-white mb-1">Enterprise Executive</div>
                      <div className="text-sm text-[#94a3b8]">Transforming at scale, proving ROI</div>
                    </div>
                  </label>

                  <label
                    className={`flex items-center p-5 bg-[rgba(15,23,42,0.6)] border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedPersona === 'innovator'
                        ? 'border-[#00ff88] bg-[rgba(0,255,136,0.1)]'
                        : 'border-[rgba(148,163,184,0.2)] hover:border-[#00d4ff] hover:bg-[rgba(15,23,42,0.8)]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="persona"
                      value="innovator"
                      checked={selectedPersona === 'innovator'}
                      onChange={() => setSelectedPersona('innovator')}
                      className="w-5 h-5 mr-4 accent-[#00ff88]"
                    />
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-white mb-1">Innovator/R&D Leader</div>
                      <div className="text-sm text-[#94a3b8]">Pushing boundaries, pioneering solutions</div>
                    </div>
                  </label>
                </div>
              </section>

              {/* Section 2: Your Details */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00ff88]">
                  Your Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company Name"
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Role or Title <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      placeholder="Chief Technology Officer"
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                    />
                  </div>
                </div>
              </section>

              {/* Section 3: Share with us your AI Vision */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00ff88]">
                  Share with us your AI Vision
                </h2>
                <div>
                  <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                    <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="aiVision"
                    required
                    rows={6}
                    placeholder="Tell us about your vision for AI transformation. What challenges are you looking to solve? What opportunities do you see? How do you envision AI transforming your business?"
                    className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b] resize-y min-h-[150px]"
                  />
                </div>
              </section>

              {/* Section 4: How do you anticipate us working together? */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00ff88]">
                  How do you anticipate us working together?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Strategy Call Card */}
                  <label
                    className={`relative bg-[rgba(30,41,82,0.5)] border-2 rounded-2xl p-8 backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-[#00d4ff] hover:-translate-y-1 overflow-hidden group ${
                      selectedEngagement === 'strategy'
                        ? 'border-[#00ff88] bg-[rgba(0,255,136,0.1)]'
                        : 'border-transparent'
                    }`}
                  >
                    <input
                      type="radio"
                      name="engagementType"
                      value="strategy"
                      checked={selectedEngagement === 'strategy'}
                      onChange={(e) => setSelectedEngagement(e.target.value)}
                      className="hidden"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,212,255,0.1)] to-[rgba(0,255,136,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <h3 className="text-2xl font-semibold mb-2 text-[#00ff88]">Strategy Call</h3>
                      <p className="text-lg text-[#00d4ff] mb-5 font-medium">Free</p>
                      <ul className="list-none mb-6 space-y-2.5 text-left">
                        <li className="text-[#cbd5e1] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00ff88]">
                          30-minute assessment
                        </li>
                        <li className="text-[#cbd5e1] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00ff88]">
                          Feasibility discussion
                        </li>
                        <li className="text-[#cbd5e1] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00ff88]">
                          Rough timeline estimate
                        </li>
                        <li className="text-[#cbd5e1] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00ff88]">
                          No commitment
                        </li>
                      </ul>
                    </div>
                  </label>

                  {/* Discovery Sprint Card */}
                  <label
                    className={`relative bg-[rgba(30,41,82,0.5)] border-2 rounded-2xl p-8 backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-[#00d4ff] hover:-translate-y-1 overflow-hidden group ${
                      selectedEngagement === 'discovery'
                        ? 'border-[#00ff88] bg-[rgba(0,255,136,0.1)]'
                        : 'border-transparent'
                    }`}
                  >
                    <input
                      type="radio"
                      name="engagementType"
                      value="discovery"
                      checked={selectedEngagement === 'discovery'}
                      onChange={(e) => setSelectedEngagement(e.target.value)}
                      className="hidden"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,212,255,0.1)] to-[rgba(0,255,136,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <h3 className="text-2xl font-semibold mb-2 text-[#00ff88]">Discovery Sprint</h3>
                      <p className="text-lg text-[#00d4ff] mb-5 font-medium">Fee Based</p>
                      <ul className="list-none mb-6 space-y-2.5 text-left">
                        <li className="text-[#cbd5e1] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00ff88]">
                          2 to 4 week deep dive
                        </li>
                        <li className="text-[#cbd5e1] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00ff88]">
                          Technical architecture
                        </li>
                        <li className="text-[#cbd5e1] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00ff88]">
                          Detailed roadmap
                        </li>
                        <li className="text-[#cbd5e1] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00ff88]">
                          Go/no-go decision
                        </li>
                      </ul>
                    </div>
                  </label>

                  {/* Full Partnership Card */}
                  <label
                    className={`relative bg-[rgba(30,41,82,0.5)] border-2 rounded-2xl p-8 backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-[#00d4ff] hover:-translate-y-1 overflow-hidden group ${
                      selectedEngagement === 'partnership'
                        ? 'border-[#00ff88] bg-[rgba(0,255,136,0.1)]'
                        : 'border-transparent'
                    }`}
                  >
                    <input
                      type="radio"
                      name="engagementType"
                      value="partnership"
                      checked={selectedEngagement === 'partnership'}
                      onChange={(e) => setSelectedEngagement(e.target.value)}
                      className="hidden"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,212,255,0.1)] to-[rgba(0,255,136,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <h3 className="text-2xl font-semibold mb-2 text-[#00ff88]">Full Partnership</h3>
                      <p className="text-lg text-[#00d4ff] mb-5 font-medium">Custom</p>
                      <ul className="list-none mb-6 space-y-2.5 text-left">
                        <li className="text-[#cbd5e1] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00ff88]">
                          30-90 Day First Build
                        </li>
                        <li className="text-[#cbd5e1] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00ff88]">
                          Dedicated Project Team
                        </li>
                        <li className="text-[#cbd5e1] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00ff88]">
                          Custom Pricing Models
                        </li>
                        <li className="text-[#cbd5e1] pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-[#00ff88]">
                          24x7 Optimization and Tech Support
                        </li>
                      </ul>
                    </div>
                  </label>
                </div>
              </section>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedEngagement || !selectedPersona}
                  className="w-full py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(102,126,234,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>

              {/* Alternative Contact Section */}
              <div className="mt-8 pt-8 border-t border-[rgba(148,163,184,0.2)]">
                <p className="text-[#94a3b8] text-base mb-4">
                  Don&apos;t feel like filling out a form? Just type — we get it. <Smiley size={20} weight="regular" className="inline-block ml-1 text-[#00d4ff]" />
                </p>
                <p className="text-[#94a3b8] text-base mb-4">
                  Whether your idea is <span className="text-[#00ff88] font-semibold">still forming or already in motion</span>, we approach every message with <span className="text-[#00d4ff] font-semibold">respect, curiosity, and zero assumptions</span>. No concept is <span className="text-[#00ff88] font-semibold">too small, too early, or too experimental</span>. If you&apos;re thinking about building something with AI, we&apos;ll help you <span className="text-[#00d4ff] font-semibold">shape it, refine it</span>, and guide you toward the next step. <span className="text-[#00ff88] font-semibold">Just reach out</span> — we&apos;re here to support you.
                </p>
                <p className="text-[#e2e8f0] text-base flex items-center gap-2">
                  <Envelope size={20} weight="regular" className="text-[#00d4ff]" />
                  <span>Email us anytime: <a href="mailto:aifoundry@westlakeitsolutions.com" className="text-[#00ff88] hover:text-[#00d4ff] transition-colors underline">aifoundry@westlakeitsolutions.com</a></span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
