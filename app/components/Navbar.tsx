"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useLang } from "./LangContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import logo from "../../public/address_logo.png";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/#projects", label: t("projects") },
    { href: "/gallery", label: t("gallery") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 shadow-xl"
            : "py-5 bg-transparent"
        }`}
        style={{
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src={logo}
              alt="AdDReSSBANGLADESH Logo"
              height={65}
              className="h-16 w-auto object-contain transition-opacity group-hover:opacity-80"
              priority
            />
          </Link>
          {/* <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ background: "linear-gradient(135deg, #059669, #d97706)" }}>
              A
            </div>
            <div>
              <div className="font-bold text-sm leading-none" style={{ color: scrolled ? "var(--text)" : "white", fontFamily: "Playfair Display, serif" }}>
                AdDReSSBANGLADESH
              </div>
              <div className="text-xs opacity-70" style={{ color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.8)" }}>
                Serving Humanity
              </div>
            </div>
          </Link> */}

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  pathname === link.href ? "active" : ""
                }`}
                style={{ color: scrolled ? "var(--text)" : "rgba(255,255,255,0.9)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language */}
            <div className="relative">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as "en" | "bn")}
                className="appearance-none text-xs px-3 py-1.5 rounded-lg border cursor-pointer pr-7 focus:outline-none"
                style={{
                  background: "transparent",
                  borderColor: scrolled ? "var(--border)" : "rgba(255,255,255,0.3)",
                  color: scrolled ? "var(--text)" : "white",
                }}
              >
                <option value="en" style={{ color: "#111", background: "#fff" }}>🇬🇧 EN</option>
                <option value="bn" style={{ color: "#111", background: "#fff" }}>🇧🇩 বাং</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-xs" style={{ color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.7)" }}>▾</div>
            </div>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              style={{
                background: scrolled ? "var(--bg-secondary)" : "rgba(255,255,255,0.15)",
                color: scrolled ? "var(--text)" : "white",
                border: "1px solid",
                borderColor: scrolled ? "var(--border)" : "rgba(255,255,255,0.2)",
              }}
            >
              {theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />}
            </button>

            {/* Donate */}
            <Link
              href="/contact#donate"
              className="donate-btn-pulse flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #059669, #d97706)" }}
            >
              <FaHandHoldingHeart size={14} />
              {t("donate")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg"
            style={{ color: scrolled ? "var(--text)" : "white", background: scrolled ? "var(--bg-secondary)" : "rgba(255,255,255,0.15)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(0,0,0,0.5)" }}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 lg:hidden shadow-2xl mobile-menu ${menuOpen ? "open" : ""}`}
        style={{ background: "var(--card)", borderLeft: "1px solid var(--border)" }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="font-bold" style={{ fontFamily: "Playfair Display, serif", color: "var(--text)" }}>Menu</span>
            <button onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)" }}>
              <FiX size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                style={{ color: "var(--text)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 pt-6 flex flex-col gap-3" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="flex items-center gap-3">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as "en" | "bn")}
                className="flex-1 text-sm px-3 py-2 rounded-lg border focus:outline-none"
                style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--text)" }}
              >
                <option value="en">🇬🇧 English</option>
                <option value="bn">🇧🇩 বাংলা</option>
              </select>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-10 h-10 rounded-lg flex items-center justify-center border"
                style={{ borderColor: "var(--border)", color: "var(--text)", background: "var(--bg-secondary)" }}
              >
                {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>
            </div>
            <Link
              href="/contact#donate"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #059669, #d97706)" }}
            >
              <FaHandHoldingHeart size={14} />
              {t("donate")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
