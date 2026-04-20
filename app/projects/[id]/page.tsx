import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IoArrowBack, IoCalendarOutline, IoCheckmarkCircle } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} - ${project.subtitle}`,
    description: project.shortDesc,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const others = projects.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={project.coverImage} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${project.color}ee 0%, rgba(0,0,0,0.3) 100%)` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12 w-full">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors">
            <IoArrowBack size={16} /> Back to Projects
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{project.icon}</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}>
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: project.status === "Ongoing" ? "#dcfce7" : "#fef9c3", color: project.status === "Ongoing" ? "#166534" : "#713f12" }}>
              {project.status}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            {project.title}
          </h1>
          <p className="text-xl font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>{project.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: "var(--text-muted)" }}>
              <IoCalendarOutline size={16} />
              <span>{project.date}</span>
            </div>

            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)", fontFamily: "Playfair Display, serif" }}>About This Project</h2>
            <div className="prose max-w-none">
              {project.fullDesc.split("\n\n").map((para, i) => (
                <p key={i} className="mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>{para}</p>
              ))}
            </div>

            <h3 className="text-xl font-bold mt-10 mb-5" style={{ color: "var(--text)", fontFamily: "Playfair Display, serif" }}>Key Activities</h3>
            <ul className="flex flex-col gap-3">
              {project.activities.map((a, i) => (
                <li key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "var(--bg-secondary)" }}>
                  <IoCheckmarkCircle size={20} style={{ color: project.color, flexShrink: 0 }} />
                  <span className="text-sm" style={{ color: "var(--text)" }}>{a}</span>
                </li>
              ))}
            </ul>

            {/* Photo Gallery */}
            <h3 className="text-xl font-bold mt-12 mb-5" style={{ color: "var(--text)", fontFamily: "Playfair Display, serif" }}>Project Gallery</h3>
            <div className="grid grid-cols-3 gap-3">
              {project.gallery.map((img, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden">
                  <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Impact Card */}
            <div className="rounded-2xl p-6 mb-6 relative overflow-hidden" style={{ background: project.color, color: "white" }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20" style={{ background: "rgba(255,255,255,0.3)", transform: "translate(30%, -30%)" }} />
              <div className="relative">
                <div className="text-5xl font-black mb-1">{project.impact}</div>
                <div className="text-lg font-medium opacity-90">{project.impactLabel}</div>
                <div className="mt-3 pt-3 text-sm opacity-80" style={{ borderTop: "1px solid rgba(255,255,255,0.3)" }}>
                  📅 {project.date}
                </div>
              </div>
            </div>

            {/* Donate CTA */}
            <div className="rounded-2xl p-6 mb-6 text-center" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <FaHandHoldingHeart size={32} color="#d97706" className="mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-2" style={{ color: "var(--text)", fontFamily: "Playfair Display, serif" }}>Support This Project</h4>
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>Your donation directly funds this initiative and helps us scale our impact.</p>
              <Link
                href="/contact#donate"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #059669, #d97706)" }}
              >
                <FaHandHoldingHeart size={14} /> Donate Now
              </Link>
            </div>

            {/* Other Projects */}
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Other Projects</h4>
            <div className="flex flex-col gap-3">
              {others.map((p) => (
                <Link key={p.id} href={`/projects/${p.id}`} className="flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.01]" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{p.title}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{p.category}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
