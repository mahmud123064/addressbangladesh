"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaHandHoldingHeart } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--forest, #064e3b)" }}>
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ background: "linear-gradient(135deg, #10b981, #d97706)" }}>
                A
              </div>
              <div>
                <div className="font-bold text-white text-sm" style={{ fontFamily: "Playfair Display, serif" }}>AdDReSSBANGLADESH</div>
                <div className="text-xs text-emerald-300">Serving Humanity</div>
              </div>
            </div>
            <p className="text-sm text-green-200 leading-relaxed mb-5">
              Building self-sufficient communities through education, health, environment, and livelihood programs across Bangladesh.
            </p>
            <div className="flex gap-3">
              {[FaFacebook, FaTwitter, FaYoutube, FaInstagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg flex items-center justify-center text-green-200 hover:text-white transition-all hover:scale-110" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/#projects", label: "Our Projects" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-green-200 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Programs</h4>
            <div className="flex flex-col gap-2">
              {[
                "Mrittrikar Ghran",
                "Winter Warmth",
                "Self-Reliant",
                "Public Health Camp",
                "Education First",
                "Eid Gift Drive",
              ].map((p) => (
                <span key={p} className="text-sm text-green-200">• {p}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-green-200">
                <MdLocationOn size={16} className="mt-0.5 flex-shrink-0 text-yellow-400" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-green-200">
                <MdEmail size={16} className="flex-shrink-0 text-yellow-400" />
                <a href="mailto:info@addressbangladesh.org" className="text-sm hover:text-white transition-colors">info@addressbangladesh.org</a>
              </div>
              <div className="flex items-center gap-3 text-green-200">
                <MdPhone size={16} className="flex-shrink-0 text-yellow-400" />
                <span className="text-sm">+880 1XXX-XXXXXX</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/contact#donate"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #059669, #d97706)" }}
              >
                <FaHandHoldingHeart size={14} />
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-xs text-green-300">
            © {new Date().getFullYear()} AdDReSSBANGLADESH. All rights reserved.
          </p>
          <p className="text-xs text-green-400">
            Registered Society | Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
