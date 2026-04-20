"use client";
import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";
import { FaFacebook, FaHandHoldingHeart, FaWhatsapp } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <div className="relative py-36 flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #064e3b, #059669)" }}>
        <div className="relative text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold text-emerald-300" style={{ background: "rgba(255,255,255,0.1)" }}>
            Contact Us
          </div>
          <h1 className="text-5xl font-black text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>Get In Touch</h1>
          <p className="text-green-200 text-lg">We love hearing from donors, volunteers, and communities</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)", fontFamily: "Playfair Display, serif" }}>Contact Information</h2>
            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: MdLocationOn, label: "Address", val: "Dhaka, Bangladesh", color: "#059669" },
                { icon: MdEmail, label: "Email", val: "info@addressbangladesh.org", color: "#0891b2" },
                { icon: MdPhone, label: "Phone", val: "+880 1XXX-XXXXXX", color: "#d97706" },
                { icon: FaWhatsapp, label: "WhatsApp", val: "+880 1XXX-XXXXXX", color: "#16a34a" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: c.color + "18" }}>
                    <c.icon size={18} color={c.color} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{c.label}</div>
                    <div className="text-sm font-medium" style={{ color: "var(--text)" }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mb-8">
              {[FaFacebook, FaWhatsapp].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110" style={{ background: "linear-gradient(135deg, #059669, #047857)" }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Donate Box */}
            <div id="donate" className="p-6 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #064e3b, #059669)" }}>
              <FaHandHoldingHeart size={32} color="#fbbf24" className="mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "Playfair Display, serif" }}>Make a Donation</h3>
              <p className="text-green-200 text-sm mb-4">Your generosity changes lives. Every taka counts.</p>
              <div className="flex flex-col gap-2">
                <div className="p-3 rounded-xl text-sm text-left" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <div className="text-green-300 text-xs font-semibold mb-1">bKash / Nagad</div>
                  <div className="text-white font-bold">01XXX-XXXXXX</div>
                </div>
                <div className="p-3 rounded-xl text-sm text-left" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <div className="text-green-300 text-xs font-semibold mb-1">Bank Transfer</div>
                  <div className="text-white font-bold text-xs">Contact us for bank details</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              {sent ? (
                <div className="text-center py-12">
                  <IoCheckmarkCircle size={56} color="#059669" className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text)", fontFamily: "Playfair Display, serif" }}>Message Sent!</h3>
                  <p style={{ color: "var(--text-muted)" }}>Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                  <button onClick={() => setSent(false)} className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: "#059669" }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)", fontFamily: "Playfair Display, serif" }}>Send a Message</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { key: "name", placeholder: "Your Name", type: "text", required: true },
                        { key: "email", placeholder: "Your Email", type: "email", required: true },
                      ].map((field) => (
                        <input
                          key={field.key}
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all"
                          style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--text)" }}
                        />
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="px-4 py-3 rounded-xl text-sm border focus:outline-none"
                        style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--text)" }}
                      />
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="px-4 py-3 rounded-xl text-sm border focus:outline-none"
                        style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--text)" }}
                      >
                        <option value="">Select Subject</option>
                        <option>General Inquiry</option>
                        <option>Donation</option>
                        <option>Volunteer</option>
                        <option>Partnership</option>
                        <option>Media</option>
                      </select>
                    </div>
                    <textarea
                      rows={5}
                      placeholder="Your message..."
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="px-4 py-3 rounded-xl text-sm border focus:outline-none resize-none"
                      style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--text)" }}
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:scale-105 hover:shadow-lg"
                      style={{ background: "linear-gradient(135deg, #059669, #d97706)" }}
                    >
                      <MdSend size={16} /> Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
