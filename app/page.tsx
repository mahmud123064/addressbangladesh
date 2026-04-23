"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLang } from "./components/LangContext";
import { projects, testimonials, faqs } from "@/lib/data";
import { FaHandHoldingHeart, FaLeaf, FaUsers, FaHeart } from "react-icons/fa";
import {
    MdHealthAndSafety,
    MdSchool,
    MdVolunteerActivism,
} from "react-icons/md";
import { IoChevronDown, IoChevronUp, IoArrowForward } from "react-icons/io5";
import { BsStarFill } from "react-icons/bs";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const stats = [
    {
        icon: FaUsers,
        value: "2000+",
        label: "Lives Impacted",
        color: "#059669",
    },
    { icon: FaLeaf, value: "1000+", label: "Trees Planted", color: "#16a34a" },
    {
        icon: MdHealthAndSafety,
        value: "400+",
        label: "Patients Treated",
        color: "#0891b2",
    },
    {
        icon: MdSchool,
        value: "800+",
        label: "Students Supported",
        color: "#d97706",
    },
    {
        icon: MdVolunteerActivism,
        value: "20+",
        label: "Women Empowered",
        color: "#db2777",
    },
    { icon: FaHeart, value: "6+", label: "Active Projects", color: "#7c3aed" },
];

function CountUp({ end, duration = 2000 }: { end: string; duration?: number }) {
    const [displayed, setDisplayed] = useState("0");
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                const num = parseInt(end.replace(/\D/g, ""));
                const suffix = end.replace(/[\d]/g, "");
                let start = 0;
                const step = Math.ceil(num / (duration / 16));
                const timer = setInterval(() => {
                    start += step;
                    if (start >= num) {
                        setDisplayed(num + suffix);
                        clearInterval(timer);
                    } else setDisplayed(start + suffix);
                }, 16);
            }
        });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={ref}>{displayed}</span>;
}

function RevealSection({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(
                        () => entry.target.classList.add("visible"),
                        delay,
                    );
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);
    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    );
}

export default function Home() {
    const { t } = useLang();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div>
            {/* ==================== HERO ==================== */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/dhksln9ks/image/upload/v1776926648/addressbangladesh/collage_3_1_rlfkkh.png"
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                    <div className="hero-gradient absolute inset-0" />
                    {/* Animated particles */}
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full opacity-40"
                            style={{
                                width: `${20 + i * 15}px`,
                                height: `${20 + i * 15}px`,
                                background: i % 2 === 0 ? "#10b981" : "#d97706",
                                left: `${10 + i * 12}%`,
                                bottom: `${-10}%`,
                                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                                animationDelay: `${i * 0.4}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-10">
                    <h1
                        className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight animate-fade-up "
                        style={{
                            fontFamily: "Playfair Display, serif",
                            animationDelay: "0.1s",
                        }}
                    >
                        {t("heroTitle")}
                    </h1>
                    <p
                        className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto mb-10 animate-fade-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        {t("heroSub")}
                    </p>

                    <div
                        className="flex flex-wrap items-center justify-center gap-4 animate-fade-up"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <Link
                            href="#projects"
                            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm transition-all hover:scale-105 hover:shadow-2xl"
                            style={{
                                background:
                                    "linear-gradient(135deg, #059669, #d97706)",
                            }}
                        >
                            {t("exploreProjects")} <IoArrowForward />
                        </Link>
                        <Link
                            href="/about"
                            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105"
                            style={{
                                background: "rgba(255,255,255,0.15)",
                                border: "1.5px solid rgba(255,255,255,0.4)",
                                color: "white",
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            {t("learnMore")}
                        </Link>
                    </div>

                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mt-7 text-sm font-medium text-emerald-300"
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        <FaHandHoldingHeart size={14} />
                        <span>Registered NGO · Bangladesh</span>
                    </div>
                    {/* Quick stats bar */}
                    <div
                        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-up"
                        style={{ animationDelay: "0.7s" }}
                    >
                        {[
                            { v: "2K+", l: "Lives" },
                            { v: "1K+", l: "Trees" },
                            { v: "6+", l: "Projects" },
                            { v: "20+", l: "Women" },
                        ].map((s) => (
                            <div
                                key={s.l}
                                className="text-center p-3 rounded-xl"
                                style={{
                                    background: "rgba(255,255,255,0.1)",
                                    backdropFilter: "blur(8px)",
                                }}
                            >
                                <div className="text-2xl font-black text-white shimmer-text">
                                    {s.v}
                                </div>
                                <div className="text-xs text-green-200">
                                    {s.l}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
                    <div
                        className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
                        style={{ border: "2px solid rgba(255,255,255,0.4)" }}
                    >
                        <div
                            className="w-1 h-3 rounded-full bg-white opacity-80"
                            style={{
                                animation: "float 1.5s ease-in-out infinite",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ==================== MISSION STRIP ==================== */}
            <section
                style={{
                    background: "linear-gradient(135deg, #059669, #047857)",
                }}
                className="py-12"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: FaLeaf,
                                title: "Environment",
                                desc: "Green Bangladesh through tree distribution and eco-awareness",
                            },
                            {
                                icon: MdHealthAndSafety,
                                title: "Healthcare",
                                desc: "Free medical camps bringing healthcare to underserved communities",
                            },
                            {
                                icon: MdSchool,
                                title: "Education",
                                desc: "Scholarships and books ensuring every child can learn and grow",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="flex items-center gap-4 p-4 rounded-2xl"
                                style={{ background: "rgba(255,255,255,0.1)" }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                                    style={{
                                        background: "rgba(255,255,255,0.2)",
                                    }}
                                >
                                    <item.icon size={22} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-green-100">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== PROJECTS ==================== */}
            <section
                id="projects"
                className="py-24 pattern-dots"
                style={{ background: "var(--bg)" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <RevealSection className="text-center mb-16">
                        <div className="section-badge mb-4">
                            <MdVolunteerActivism size={12} />
                            {t("ourProjects")}
                        </div>
                        <h2
                            className="text-4xl sm:text-5xl font-black mb-4"
                            style={{ color: "var(--text)" }}
                        >
                            {t("ourProjects")}
                        </h2>
                        <p
                            className="text-lg max-w-xl mx-auto"
                            style={{ color: "var(--text-muted)" }}
                        >
                            {t("projectsSub")}
                        </p>
                    </RevealSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, i) => (
                            <RevealSection key={project.id} delay={i * 100}>
                                <Link href={`/projects/${project.id}`}>
                                    <div
                                        className="project-card rounded-2xl overflow-hidden cursor-pointer h-full"
                                        style={{
                                            background: "var(--card)",
                                            border: "1px solid var(--border)",
                                        }}
                                    >
                                        <div className="relative h-52 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                            <div
                                                className="absolute inset-0"
                                                style={{
                                                    background: `linear-gradient(to top, ${project.color}cc, transparent)`,
                                                }}
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span
                                                    className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                                                    style={{
                                                        background:
                                                            "rgba(0,0,0,0.4)",
                                                        backdropFilter:
                                                            "blur(8px)",
                                                    }}
                                                >
                                                    {project.category}
                                                </span>
                                            </div>
                                            <div className="absolute bottom-4 left-4">
                                                <span className="text-4xl">
                                                    {project.icon}
                                                </span>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <span
                                                    className="text-xs font-medium px-2 py-1 rounded-full"
                                                    style={{
                                                        background:
                                                            project.status ===
                                                            "Ongoing"
                                                                ? "#dcfce7"
                                                                : "#fef9c3",
                                                        color:
                                                            project.status ===
                                                            "Ongoing"
                                                                ? "#166534"
                                                                : "#713f12",
                                                    }}
                                                >
                                                    {project.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3
                                                className="text-xl font-bold mb-1"
                                                style={{
                                                    color: "var(--text)",
                                                    fontFamily:
                                                        "Playfair Display, serif",
                                                }}
                                            >
                                                {project.title}
                                            </h3>
                                            <p
                                                className="text-sm mb-3"
                                                style={{
                                                    color: project.color,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {project.subtitle}
                                            </p>
                                            <p
                                                className="text-sm leading-relaxed mb-4"
                                                style={{
                                                    color: "var(--text-muted)",
                                                }}
                                            >
                                                {project.shortDesc}
                                            </p>
                                            <div
                                                className="flex items-center justify-between pt-4"
                                                style={{
                                                    borderTop:
                                                        "1px solid var(--border)",
                                                }}
                                            >
                                                <div>
                                                    <div
                                                        className="text-xl font-black"
                                                        style={{
                                                            color: project.color,
                                                        }}
                                                    >
                                                        {project.impact}
                                                    </div>
                                                    <div
                                                        className="text-xs"
                                                        style={{
                                                            color: "var(--text-muted)",
                                                        }}
                                                    >
                                                        {project.impactLabel}
                                                    </div>
                                                </div>
                                                <div
                                                    className="flex items-center gap-1 text-sm font-semibold"
                                                    style={{
                                                        color: project.color,
                                                    }}
                                                >
                                                    View Details{" "}
                                                    <IoArrowForward size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== IMPACT STATS ==================== */}
            <section
                className="py-24 relative overflow-hidden"
                style={{ background: "var(--forest, #064e3b)" }}
            >
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 20% 50%, #10b981 0%, transparent 50%), radial-gradient(circle at 80% 50%, #d97706 0%, transparent 50%)",
                    }}
                />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                    <RevealSection className="text-center mb-16">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold uppercase tracking-wider"
                            style={{
                                background: "rgba(255,255,255,0.1)",
                                color: "#10b981",
                            }}
                        >
                            <BsStarFill size={10} /> {t("ourImpact")}
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                            {t("ourImpact")}
                        </h2>
                        <p className="text-green-200 max-w-xl mx-auto">
                            {t("impactSub")}
                        </p>
                    </RevealSection>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {stats.map((stat, i) => (
                            <RevealSection key={i} delay={i * 80}>
                                <div
                                    className="text-center p-6 rounded-2xl"
                                    style={{
                                        background: "rgba(255,255,255,0.08)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        backdropFilter: "blur(8px)",
                                    }}
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                                        style={{
                                            background: stat.color + "22",
                                        }}
                                    >
                                        <stat.icon
                                            size={18}
                                            style={{ color: stat.color }}
                                        />
                                    </div>
                                    <div className="text-2xl font-black text-white mb-1">
                                        <CountUp end={stat.value} />
                                    </div>
                                    <div className="text-xs text-green-300">
                                        {stat.label}
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== TESTIMONIALS (Swiper) ==================== */}
            <section
                className="py-24"
                style={{ background: "var(--bg-secondary)" }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <RevealSection className="text-center mb-16">
                        <div className="section-badge mb-4">
                            <FaHeart size={10} /> {t("whatTheySay")}
                        </div>
                        <h2
                            className="text-4xl sm:text-5xl font-black mb-4"
                            style={{ color: "var(--text)" }}
                        >
                            {t("whatTheySay")}
                        </h2>
                        <p style={{ color: "var(--text-muted)" }}>
                            {t("testimonialSub")}
                        </p>
                    </RevealSection>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        spaceBetween={24}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-10"
                    >
                        {testimonials.map((t_, i) => (
                            <SwiperSlide key={i}>
                                <div
                                    className="rounded-2xl p-6 h-full flex flex-col"
                                    style={{
                                        background: "var(--card)",
                                        border: "1px solid var(--border)",
                                    }}
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, j) => (
                                            <BsStarFill
                                                key={j}
                                                size={12}
                                                color="#d97706"
                                            />
                                        ))}
                                    </div>
                                    <p
                                        className="text-sm leading-relaxed mb-6 flex-1 italic"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        "{t_.text}"
                                    </p>
                                    <div
                                        className="flex items-center gap-3 pt-4"
                                        style={{
                                            borderTop:
                                                "1px solid var(--border)",
                                        }}
                                    >
                                        <img
                                            src={t_.avatar}
                                            alt={t_.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <div
                                                className="text-sm font-semibold"
                                                style={{ color: "var(--text)" }}
                                            >
                                                {t_.name}
                                            </div>
                                            <div
                                                className="text-xs"
                                                style={{
                                                    color: "var(--text-muted)",
                                                }}
                                            >
                                                {t_.location}
                                            </div>
                                        </div>
                                        <div className="ml-auto">
                                            <span
                                                className="text-xs px-2 py-1 rounded-full font-medium"
                                                style={{
                                                    background:
                                                        "rgba(5,150,105,0.1)",
                                                    color: "#059669",
                                                }}
                                            >
                                                {t_.project}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* ==================== FAQ ==================== */}
            <section className="py-24" style={{ background: "var(--bg)" }}>
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <RevealSection className="text-center mb-16">
                        <div className="section-badge mb-4">FAQ</div>
                        <h2
                            className="text-4xl sm:text-5xl font-black mb-4"
                            style={{ color: "var(--text)" }}
                        >
                            {t("faqTitle")}
                        </h2>
                        <p style={{ color: "var(--text-muted)" }}>
                            {t("faqSub")}
                        </p>
                    </RevealSection>

                    <div className="flex flex-col gap-3">
                        {faqs.map((faq, i) => (
                            <RevealSection key={i} delay={i * 60}>
                                <div
                                    className="rounded-2xl overflow-hidden transition-all"
                                    style={{
                                        border:
                                            openFaq === i
                                                ? "1.5px solid #059669"
                                                : "1.5px solid var(--border)",
                                        background: "var(--card)",
                                    }}
                                >
                                    <button
                                        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                                        onClick={() =>
                                            setOpenFaq(openFaq === i ? null : i)
                                        }
                                    >
                                        <span
                                            className="font-semibold text-sm sm:text-base"
                                            style={{ color: "var(--text)" }}
                                        >
                                            {faq.q}
                                        </span>
                                        <span
                                            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                                            style={{
                                                background:
                                                    openFaq === i
                                                        ? "#059669"
                                                        : "var(--bg-secondary)",
                                                color:
                                                    openFaq === i
                                                        ? "white"
                                                        : "var(--text-muted)",
                                            }}
                                        >
                                            {openFaq === i ? (
                                                <IoChevronUp size={14} />
                                            ) : (
                                                <IoChevronDown size={14} />
                                            )}
                                        </span>
                                    </button>
                                    <div
                                        className={`faq-answer ${openFaq === i ? "open" : ""}`}
                                    >
                                        <div
                                            className="px-6 pb-5 text-sm leading-relaxed"
                                            style={{
                                                color: "var(--text-muted)",
                                            }}
                                        >
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== CTA ==================== */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80"
                        alt=""
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(135deg, #064e3b, #059669)",
                        }}
                    />
                </div>
                <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
                    <RevealSection>
                        <h2
                            className="text-4xl sm:text-5xl font-black text-white mb-4"
                            style={{ fontFamily: "Playfair Display, serif" }}
                        >
                            Be Part of the Change
                        </h2>
                        <p className="text-green-200 text-lg mb-8">
                            Your support enables us to reach more families,
                            plant more trees, and build a better Bangladesh.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {/* <Link
                                href="/contact#donate"
                                className="donate-btn-pulse flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #d97706, #f59e0b)",
                                }}
                            >
                                <FaHandHoldingHeart /> Donate Now
                            </Link> */}
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                                style={{
                                    background: "rgba(255,255,255,0.15)",
                                    color: "white",
                                    border: "1.5px solid rgba(255,255,255,0.4)",
                                }}
                            >
                                Volunteer With Us
                            </Link>
                        </div>
                    </RevealSection>
                </div>
            </section>
        </div>
    );
}
