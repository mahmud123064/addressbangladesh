"use client";
import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";
import { FaFacebook, FaHandHoldingHeart, FaWhatsapp } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"

type FormData = {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
};

export default function ContactPage() {
    const [sent, setSent] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
  try {
    await emailjs.send(
      "service_4kf0aye",      // e.g. "service_abc123"
      "template_23tn89j",     // e.g. "template_xyz456"
      {
        name: data.name,
        email: data.email,
        phone: data.phone || "Not provided",
        subject: data.subject || "No subject",
        message: data.message,
      },
      "zWuj8hWYkmx8BHREL"       // e.g. "user_abc123xyz"
    );
    setSent(true);
    reset();
  } catch (error) {
    console.error("Failed to send:", error);
    alert("Something went wrong. Please try again.");
  }
};
    return (
        <div style={{ background: "var(--bg)" }}>
            {/* Hero */}
            <div
                className="relative py-36 flex items-center justify-center overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, #064e3b, #059669)",
                }}
            >
                <div className="relative text-center px-4">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold text-emerald-300"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                        Contact Us
                    </div>
                    <h1
                        className="text-5xl font-black text-white mb-3"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        Get In Touch
                    </h1>
                    <p className="text-green-200 text-lg">
                        We love hearing from donors, volunteers, and communities
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-2">
                        <h2
                            className="text-2xl font-bold mb-6"
                            style={{
                                color: "var(--text)",
                                fontFamily: "Playfair Display, serif",
                            }}
                        >
                            Contact Information
                        </h2>
                        <div className="flex flex-col gap-4 mb-8">
                            {[
                                {
                                    icon: MdLocationOn,
                                    label: "Address",
                                    val: "Dhaka, Bangladesh",
                                    color: "#059669",
                                },
                                {
                                    icon: MdEmail,
                                    label: "Email",
                                    val: "addressbangladeshngo@gmail.com",
                                    color: "#0891b2",
                                },
                                {
                                    icon: MdPhone,
                                    label: "Phone",
                                    val: "+880 1759733296",
                                    color: "#d97706",
                                },
                                {
                                    icon: FaWhatsapp,
                                    label: "WhatsApp",
                                    val: "+880 1759733296",
                                    color: "#16a34a",
                                },
                            ].map((c) => (
                                <div
                                    key={c.label}
                                    className="flex items-center gap-4 p-4 rounded-xl"
                                    style={{
                                        background: "var(--card)",
                                        border: "1px solid var(--border)",
                                    }}
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: c.color + "18" }}
                                    >
                                        <c.icon size={18} color={c.color} />
                                    </div>
                                    <div>
                                        <div
                                            className="text-xs font-semibold uppercase tracking-wider"
                                            style={{
                                                color: "var(--text-muted)",
                                            }}
                                        >
                                            {c.label}
                                        </div>
                                        <div
                                            className="text-sm font-medium"
                                            style={{ color: "var(--text)" }}
                                        >
                                            {c.val}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="flex gap-3 mb-8">
                            {[
                                {
                                    icon: FaFacebook,
                                    link: "https://www.facebook.com/people/%E0%A6%85%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A1%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B8-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6/100064905875116/",
                                },
                                {
                                    icon: FaWhatsapp,
                                    link: "https://wa.me/8801759733296",
                                },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={i}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:scale-110"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, #059669, #047857)",
                                        }}
                                    >
                                        <Icon size={16} />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Donate Box */} {/* Donation Info  */}
                        {/* <div
                            id="donate"
                            className="p-6 rounded-2xl text-center"
                            style={{
                                background:
                                    "linear-gradient(135deg, #064e3b, #059669)",
                            }}
                        >
                            <FaHandHoldingHeart
                                size={32}
                                color="#fbbf24"
                                className="mx-auto mb-3"
                            />
                            <h3
                                className="text-lg font-bold text-white mb-2"
                                style={{
                                    fontFamily: "Playfair Display, serif",
                                }}
                            >
                                Make a Donation
                            </h3>
                            <p className="text-green-200 text-sm mb-4">
                                Your generosity changes lives. Every taka
                                counts.
                            </p>
                            <div className="flex flex-col gap-2">
                                <div
                                    className="p-3 rounded-xl text-sm text-left"
                                    style={{
                                        background: "rgba(255,255,255,0.1)",
                                    }}
                                >
                                    <div className="text-green-300 text-xs font-semibold mb-1">
                                        bKash
                                    </div>
                                    <div className="text-white font-bold">
                                        01759733296
                                    </div>
                                </div>
                                <div
                                    className="p-3 rounded-xl text-sm text-left"
                                    style={{
                                        background: "rgba(255,255,255,0.1)",
                                    }}
                                >
                                    <div className="text-green-300 text-xs font-semibold mb-1">
                                        Bank Transfer
                                    </div>
                                    <div className="text-white font-bold text-sm">
                                        SOCIETY FOR ADVOCACY IN DEVELOPMENT AND
                                        REALIZING SOCIAL SUSTAINABILITY
                                    </div>
                                    <div className="text-white font-bold text-sm">
                                        <span className="text-green-300 text-sm">
                                            Bank Name:{" "}
                                        </span>{" "}
                                        Dutch-Bangla Bank Ltd
                                    </div>
                                    <div className="text-white font-bold text-sm">
                                        <span className="text-green-300 text-sm">
                                            Branch Name:{" "}
                                        </span>{" "}
                                        Progoti Shoroni Branch
                                    </div>
                                    <div className="text-white font-bold text-sm">
                                        <span className="text-green-300 text-sm">
                                            Account Number:{" "}
                                        </span>{" "}
                                        1931100028981
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Contact Form */}
                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <div
                            className="p-8 rounded-2xl"
                            style={{
                                background: "var(--card)",
                                border: "1px solid var(--border)",
                            }}
                        >
                            {sent ? (
                                <div className="text-center py-12">
                                    <IoCheckmarkCircle
                                        size={56}
                                        color="#059669"
                                        className="mx-auto mb-4"
                                    />
                                    <h3
                                        className="text-2xl font-bold mb-2"
                                        style={{
                                            color: "var(--text)",
                                            fontFamily:
                                                "Playfair Display, serif",
                                        }}
                                    >
                                        Message Sent!
                                    </h3>
                                    <p style={{ color: "var(--text-muted)" }}>
                                        Thank you for reaching out. We'll get
                                        back to you within 24-48 hours.
                                    </p>
                                    <button
                                        onClick={() => setSent(false)}
                                        className="mt-6 px-6 py-2.5 rounded-full text-sm font-semibold text-white"
                                        style={{ background: "#059669" }}
                                    >
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2
                                        className="text-2xl font-bold mb-6"
                                        style={{
                                            color: "var(--text)",
                                            fontFamily:
                                                "Playfair Display, serif",
                                        }}
                                    >
                                        Send a Message
                                    </h2>

                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="flex flex-col gap-4"
                                    >
                                        {/* Name + Email */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1">
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    {...register("name", {
                                                        required:
                                                            "Name is required",
                                                    })}
                                                    className="px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all"
                                                    style={{
                                                        background: "var(--bg)",
                                                        borderColor: errors.name
                                                            ? "#ef4444"
                                                            : "var(--border)",
                                                        color: "var(--text)",
                                                    }}
                                                />
                                                {errors.name && (
                                                    <span
                                                        className="text-xs"
                                                        style={{
                                                            color: "#ef4444",
                                                        }}
                                                    >
                                                        {errors.name.message}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex flex-col gap-1">
                                                <input
                                                    type="email"
                                                    placeholder="Your Email"
                                                    {...register("email", {
                                                        required:
                                                            "Email is required",
                                                        pattern: {
                                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                            message:
                                                                "Enter a valid email",
                                                        },
                                                    })}
                                                    className="px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all"
                                                    style={{
                                                        background: "var(--bg)",
                                                        borderColor:
                                                            errors.email
                                                                ? "#ef4444"
                                                                : "var(--border)",
                                                        color: "var(--text)",
                                                    }}
                                                />
                                                {errors.email && (
                                                    <span
                                                        className="text-xs"
                                                        style={{
                                                            color: "#ef4444",
                                                        }}
                                                    >
                                                        {errors.email.message}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Phone + Subject */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1">
                                                <input
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    {...register("phone", {
                                                        pattern: {
                                                            value: /^[+\d\s\-()]{7,15}$/,
                                                            message:
                                                                "Enter a valid phone number",
                                                        },
                                                    })}
                                                    className="px-4 py-3 rounded-xl text-sm border focus:outline-none"
                                                    style={{
                                                        background: "var(--bg)",
                                                        borderColor:
                                                            errors.phone
                                                                ? "#ef4444"
                                                                : "var(--border)",
                                                        color: "var(--text)",
                                                    }}
                                                />
                                                {errors.phone && (
                                                    <span
                                                        className="text-xs"
                                                        style={{
                                                            color: "#ef4444",
                                                        }}
                                                    >
                                                        {errors.phone.message}
                                                    </span>
                                                )}
                                            </div>

                                            <select
                                                {...register("subject")}
                                                className="px-4 py-3 rounded-xl text-sm border focus:outline-none"
                                                style={{
                                                    background: "var(--bg)",
                                                    borderColor:
                                                        "var(--border)",
                                                    color: "var(--text)",
                                                }}
                                            >
                                                <option value="">
                                                    Select Subject
                                                </option>
                                                <option>General Inquiry</option>
                                                <option>Donation</option>
                                                <option>Volunteer</option>
                                                <option>Partnership</option>
                                                <option>Media</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div className="flex flex-col gap-1">
                                            <textarea
                                                rows={5}
                                                placeholder="Your message..."
                                                {...register("message", {
                                                    required:
                                                        "Message is required",
                                                    minLength: {
                                                        value: 10,
                                                        message:
                                                            "Message must be at least 10 characters",
                                                    },
                                                })}
                                                className="px-4 py-3 rounded-xl text-sm border focus:outline-none resize-none"
                                                style={{
                                                    background: "var(--bg)",
                                                    borderColor: errors.message
                                                        ? "#ef4444"
                                                        : "var(--border)",
                                                    color: "var(--text)",
                                                }}
                                            />
                                            {errors.message && (
                                                <span
                                                    className="text-xs"
                                                    style={{ color: "#ef4444" }}
                                                >
                                                    {errors.message.message}
                                                </span>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:scale-105 hover:shadow-lg"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, #059669, #d97706)",
                                            }}
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
