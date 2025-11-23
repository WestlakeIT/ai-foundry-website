"use client";

import { useState } from 'react';

type FormType = 'strategy' | 'discovery' | 'partnership' | null;
type PersonaType = 'founder' | 'enterprise' | 'innovator' | null;

export default function StartBuildingPage() {
  const [selectedForm, setSelectedForm] = useState<FormType>(null);
  const [selectedPersona, setSelectedPersona] = useState<PersonaType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const showForm = (type: FormType) => {
    setSelectedForm(type);
    setSelectedPersona(null);
    setSubmitSuccess(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showEngagement = () => {
    setSelectedForm(null);
    setSelectedPersona(null);
    setSubmitSuccess(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showDynamicFields = (persona: PersonaType) => {
    setSelectedPersona(persona);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formType: FormType) => {
    e.preventDefault();
    
    // Validate persona selection for discovery form
    if (formType === 'discovery' && !selectedPersona) {
      alert('Please select who you are before proceeding.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitSuccess(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    // Collect form data
    formData.forEach((value, key) => {
      if (value) data[key] = value.toString();
    });

    // For discovery form, add persona
    if (formType === 'discovery' && selectedPersona) {
      data.persona = selectedPersona;
    }

    try {
      const response = await fetch(`/api/forms/${formType}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Submission failed');
      }

      // Success
      setSubmitSuccess(formType);
      form.reset();
      if (formType === 'discovery') {
        setSelectedPersona(null);
      }
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
      <div className="max-w-7xl mx-auto px-5 py-10 md:py-16">
        {/* Engagement Section */}
        {!selectedForm && (
          <section className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] bg-clip-text text-transparent">
              Three Ways to Engage
            </h1>
            <p className="text-[#94a3b8] text-lg mb-10">
              Choose the partnership model that fits your needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Strategy Call Card */}
              <div
                onClick={() => showForm('strategy')}
                className="relative bg-[rgba(30,41,82,0.5)] border-2 border-transparent rounded-2xl p-8 backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-[#00d4ff] hover:-translate-y-1 overflow-hidden group"
              >
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
                  <button className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none py-3 rounded-full text-base font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(102,126,234,0.3)]">
                    Book Call
                  </button>
                </div>
              </div>

              {/* Discovery Sprint Card */}
              <div
                onClick={() => showForm('discovery')}
                className="relative bg-[rgba(30,41,82,0.5)] border-2 border-transparent rounded-2xl p-8 backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-[#00d4ff] hover:-translate-y-1 overflow-hidden group"
              >
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
                  <button className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none py-3 rounded-full text-base font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(102,126,234,0.3)]">
                    Start Sprint
                  </button>
                </div>
              </div>

              {/* Full Partnership Card */}
              <div
                onClick={() => showForm('partnership')}
                className="relative bg-[rgba(30,41,82,0.5)] border-2 border-transparent rounded-2xl p-8 backdrop-blur-md cursor-pointer transition-all duration-300 hover:border-[#00d4ff] hover:-translate-y-1 overflow-hidden group"
              >
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
                  <button className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none py-3 rounded-full text-base font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(102,126,234,0.3)]">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Strategy Call Form */}
        {selectedForm === 'strategy' && (
          <section className="animate-fadeInUp">
            <button
              onClick={showEngagement}
              className="inline-block mb-5 px-5 py-2.5 bg-[rgba(148,163,184,0.1)] border border-[rgba(148,163,184,0.3)] rounded-full text-[#94a3b8] text-sm transition-all duration-300 hover:bg-[rgba(148,163,184,0.2)] hover:text-white"
            >
              ← Back to options
            </button>
            <div className="bg-[rgba(30,41,82,0.6)] border border-[rgba(0,212,255,0.2)] rounded-3xl p-10 md:p-12 backdrop-blur-md max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00d4ff] to-[#00ff88] bg-clip-text text-transparent">
                Book Your Strategy Call
              </h2>
              {submitSuccess === 'strategy' ? (
                <div className="p-5 bg-gradient-to-r from-[rgba(0,255,136,0.2)] to-[rgba(0,212,255,0.2)] border border-[#00ff88] rounded-xl text-center animate-fadeInUp">
                  <h3 className="text-xl font-semibold mb-2">✅ Call Requested!</h3>
                  <p>We&apos;ll reach out within 24 hours to confirm your time slot.</p>
                </div>
              ) : (
                <form onSubmit={(e) => handleSubmit(e, 'strategy')}>
                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Your Company Name"
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Your Biggest AI Challenge
                    </label>
                    <textarea
                      name="challenge"
                      required
                      rows={5}
                      placeholder="Tell us what problem you're trying to solve with AI..."
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b] resize-y min-h-[120px]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Preferred Call Time
                    </label>
                    <select
                      name="preferredTime"
                      required
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                    >
                      <option value="">Select a time slot</option>
                      <option value="morning">Morning (9am - 12pm EST)</option>
                      <option value="afternoon">Afternoon (12pm - 5pm EST)</option>
                      <option value="evening">Evening (5pm - 7pm EST)</option>
                      <option value="flexible">I&apos;m flexible</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(102,126,234,0.4)] disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      'Book My Free Call'
                    )}
                  </button>
                </form>
              )}
            </div>
          </section>
        )}

        {/* Discovery Sprint Form */}
        {selectedForm === 'discovery' && (
          <section className="animate-fadeInUp">
            <button
              onClick={showEngagement}
              className="inline-block mb-5 px-5 py-2.5 bg-[rgba(148,163,184,0.1)] border border-[rgba(148,163,184,0.3)] rounded-full text-[#94a3b8] text-sm transition-all duration-300 hover:bg-[rgba(148,163,184,0.2)] hover:text-white"
            >
              ← Back to options
            </button>
            <div className="bg-[rgba(30,41,82,0.6)] border border-[rgba(0,212,255,0.2)] rounded-3xl p-10 md:p-12 backdrop-blur-md max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00d4ff] to-[#00ff88] bg-clip-text text-transparent">
                Start Your Discovery Sprint
              </h2>
              {submitSuccess === 'discovery' ? (
                <div className="p-5 bg-gradient-to-r from-[rgba(0,255,136,0.2)] to-[rgba(0,212,255,0.2)] border border-[#00ff88] rounded-xl text-center animate-fadeInUp">
                  <h3 className="text-xl font-semibold mb-2">🚀 Sprint Application Received!</h3>
                  <p>Our team will review and send you a detailed sprint proposal within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => handleSubmit(e, 'discovery')}>
                  {/* Persona Selection */}
                  <div className="mb-8">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-4 uppercase tracking-wide">
                      Step 1: Tell us who you are
                    </label>
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
                          onChange={() => showDynamicFields('founder')}
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
                          onChange={() => showDynamicFields('enterprise')}
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
                          onChange={() => showDynamicFields('innovator')}
                          className="w-5 h-5 mr-4 accent-[#00ff88]"
                        />
                        <div className="flex-1">
                          <div className="text-lg font-semibold text-white mb-1">Innovator/R&D Leader</div>
                          <div className="text-sm text-[#94a3b8]">Pushing boundaries, pioneering solutions</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Founder Fields */}
                  {selectedPersona === 'founder' && (
                    <div className="space-y-6 animate-fadeInUp">
                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="founderName"
                          required
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Startup Name
                        </label>
                        <input
                          type="text"
                          name="startupName"
                          required
                          placeholder="AI Ventures Inc."
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Your Role
                        </label>
                        <select
                          name="founderRole"
                          required
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                        >
                          <option value="">Select your role</option>
                          <option value="founder">Founder</option>
                          <option value="cofounder">Co-founder</option>
                          <option value="cto">CTO</option>
                          <option value="ceo">CEO</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Email
                        </label>
                        <input
                          type="email"
                          name="founderEmail"
                          required
                          placeholder="jane@startup.com"
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Your AI Challenge
                        </label>
                        <textarea
                          name="founderChallenge"
                          required
                          rows={5}
                          placeholder="Need to automate customer support? Build an AI feature? Scale operations? Share your biggest bottleneck..."
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b] resize-y min-h-[120px]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Current Stage
                        </label>
                        <select
                          name="founderStage"
                          required
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                        >
                          <option value="">Select your stage</option>
                          <option value="idea">Idea Stage</option>
                          <option value="pre-mvp">Pre-MVP</option>
                          <option value="mvp">MVP Ready</option>
                          <option value="scaling">Scaling Phase</option>
                          <option value="growth">Growth Stage</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Sprint Budget
                        </label>
                        <select
                          name="founderBudget"
                          required
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                        >
                          <option value="">Select budget range</option>
                          <option value="5-10k">$5k - $10k</option>
                          <option value="10-25k">$10k - $25k</option>
                          <option value="25-50k">$25k - $50k</option>
                          <option value="discuss">Let&apos;s Discuss</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Enterprise Fields */}
                  {selectedPersona === 'enterprise' && (
                    <div className="space-y-6 animate-fadeInUp">
                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="enterpriseName"
                          required
                          placeholder="Michael Johnson"
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Organization Name
                        </label>
                        <input
                          type="text"
                          name="orgName"
                          required
                          placeholder="Fortune 500 Corp"
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Your Title
                        </label>
                        <select
                          name="enterpriseTitle"
                          required
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                        >
                          <option value="">Select your title</option>
                          <option value="ceo">CEO</option>
                          <option value="cto">CTO</option>
                          <option value="cdo">CDO</option>
                          <option value="vp">VP of Innovation</option>
                          <option value="director">Director of Technology</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Corporate Email
                        </label>
                        <input
                          type="email"
                          name="enterpriseEmail"
                          required
                          placeholder="mjohnson@enterprise.com"
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Strategic AI Initiative
                        </label>
                        <textarea
                          name="enterpriseInitiative"
                          required
                          rows={5}
                          placeholder="Describe your vision for AI transformation - operational efficiency, customer experience, competitive advantage..."
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b] resize-y min-h-[120px]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Department Focus
                        </label>
                        <select
                          name="enterpriseDepartment"
                          required
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                        >
                          <option value="">Select department</option>
                          <option value="operations">Operations</option>
                          <option value="customer">Customer Service</option>
                          <option value="sales">Sales & Marketing</option>
                          <option value="hr">Human Resources</option>
                          <option value="finance">Finance</option>
                          <option value="it">IT/Technology</option>
                          <option value="multiple">Multiple Departments</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Sprint Investment Range
                        </label>
                        <select
                          name="enterpriseBudget"
                          required
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                        >
                          <option value="">Select investment range</option>
                          <option value="25-50k">$25k - $50k</option>
                          <option value="50-100k">$50k - $100k</option>
                          <option value="100k+">$100k+</option>
                          <option value="custom">Custom Proposal</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Innovator Fields */}
                  {selectedPersona === 'innovator' && (
                    <div className="space-y-6 animate-fadeInUp">
                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="innovatorName"
                          required
                          placeholder="Dr. Sarah Chen"
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Organization/Lab Name
                        </label>
                        <input
                          type="text"
                          name="labName"
                          required
                          placeholder="AI Research Lab"
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Your Focus Area
                        </label>
                        <select
                          name="innovatorFocus"
                          required
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                        >
                          <option value="">Select focus area</option>
                          <option value="research">Research Lead</option>
                          <option value="innovation">Innovation Director</option>
                          <option value="architect">Technical Architect</option>
                          <option value="ml">ML Engineer</option>
                          <option value="product">Product Innovation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Email
                        </label>
                        <input
                          type="email"
                          name="innovatorEmail"
                          required
                          placeholder="sarah@researchlab.org"
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Innovation Vision
                        </label>
                        <textarea
                          name="innovatorVision"
                          required
                          rows={5}
                          placeholder="What's the cutting-edge AI challenge you're solving? New model architecture? Novel application? Industry disruption?"
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b] resize-y min-h-[120px]"
                        />
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Technical Approach
                        </label>
                        <select
                          name="innovatorApproach"
                          required
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                        >
                          <option value="">Select approach</option>
                          <option value="custom-model">Custom Model Development</option>
                          <option value="fine-tuning">Fine-tuning LLMs</option>
                          <option value="multimodal">Multi-modal AI</option>
                          <option value="edge">Edge AI</option>
                          <option value="neuromorphic">Neuromorphic Computing</option>
                          <option value="quantum">Quantum ML</option>
                          <option value="other">Other Frontier Tech</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                          Sprint Funding
                        </label>
                        <select
                          name="innovatorFunding"
                          required
                          className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                        >
                          <option value="">Select funding source</option>
                          <option value="grant">Research Grant</option>
                          <option value="innovation">Innovation Budget</option>
                          <option value="vc">VC Funded</option>
                          <option value="partnership">Partnership Model</option>
                          <option value="discuss">Open to Discussion</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {selectedPersona && (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(102,126,234,0.4)] disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing...
                        </span>
                      ) : (
                        'Start Discovery Sprint'
                      )}
                    </button>
                  )}
                </form>
              )}
            </div>
          </section>
        )}

        {/* Full Partnership Form */}
        {selectedForm === 'partnership' && (
          <section className="animate-fadeInUp">
            <button
              onClick={showEngagement}
              className="inline-block mb-5 px-5 py-2.5 bg-[rgba(148,163,184,0.1)] border border-[rgba(148,163,184,0.3)] rounded-full text-[#94a3b8] text-sm transition-all duration-300 hover:bg-[rgba(148,163,184,0.2)] hover:text-white"
            >
              ← Back to options
            </button>
            <div className="bg-[rgba(30,41,82,0.6)] border border-[rgba(0,212,255,0.2)] rounded-3xl p-10 md:p-12 backdrop-blur-md max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#00d4ff] to-[#00ff88] bg-clip-text text-transparent">
                Apply for Full Partnership
              </h2>
              {submitSuccess === 'partnership' ? (
                <div className="p-5 bg-gradient-to-r from-[rgba(0,255,136,0.2)] to-[rgba(0,212,255,0.2)] border border-[#00ff88] rounded-xl text-center animate-fadeInUp">
                  <h3 className="text-xl font-semibold mb-2">🎯 Application Submitted!</h3>
                  <p>Our executive team will review your application and contact you within 24 hours to discuss next steps.</p>
                </div>
              ) : (
                <form onSubmit={(e) => handleSubmit(e, 'partnership')}>
                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Robert Williams"
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      placeholder="Chief Technology Officer"
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Tech Innovations Inc."
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="robert@company.com"
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Company Size
                    </label>
                    <select
                      name="companySize"
                      required
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501-1000">501-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Annual Revenue
                    </label>
                    <select
                      name="annualRevenue"
                      required
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                    >
                      <option value="">Select revenue range</option>
                      <option value="<1M">Less than $1M</option>
                      <option value="1-5M">$1M - $5M</option>
                      <option value="5-10M">$5M - $10M</option>
                      <option value="10-50M">$10M - $50M</option>
                      <option value="50-100M">$50M - $100M</option>
                      <option value="100M+">$100M+</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Current AI Maturity
                    </label>
                    <select
                      name="aiMaturity"
                      required
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                    >
                      <option value="">Select maturity level</option>
                      <option value="none">No AI implementation</option>
                      <option value="exploring">Exploring possibilities</option>
                      <option value="pilot">Running pilot programs</option>
                      <option value="partial">Partial implementation</option>
                      <option value="advanced">Advanced implementation</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Project Description
                    </label>
                    <textarea
                      name="projectDescription"
                      required
                      rows={5}
                      placeholder="Describe your AI project goals, expected outcomes, and why you need a full partnership..."
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b] resize-y min-h-[120px]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Expected Outcomes
                    </label>
                    <textarea
                      name="expectedOutcomes"
                      required
                      rows={5}
                      placeholder="What specific results are you looking to achieve? Cost reduction? Revenue increase? Process automation?"
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] placeholder:text-[#64748b] resize-y min-h-[120px]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Budget Range
                    </label>
                    <select
                      name="budgetRange"
                      required
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                    >
                      <option value="">Select budget range</option>
                      <option value="100-250k">$100k - $250k</option>
                      <option value="250-500k">$250k - $500k</option>
                      <option value="500k-1M">$500k - $1M</option>
                      <option value="1M+">$1M+</option>
                      <option value="custom">Custom/Flexible</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#e2e8f0] text-sm font-semibold mb-2 uppercase tracking-wide">
                      Timeline Requirements
                    </label>
                    <select
                      name="timeline"
                      required
                      className="w-full px-4 py-3.5 bg-[rgba(15,23,42,0.6)] border border-[rgba(148,163,184,0.2)] rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#00d4ff] focus:bg-[rgba(15,23,42,0.8)] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (ASAP)</option>
                      <option value="30days">Within 30 days</option>
                      <option value="quarter">This quarter</option>
                      <option value="6months">Next 6 months</option>
                      <option value="planning">Planning phase</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(102,126,234,0.4)] disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      'Submit Partnership Application'
                    )}
                  </button>
                </form>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
