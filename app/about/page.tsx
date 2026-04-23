import type { Metadata } from "next";
import { FaLeaf, FaHandHoldingHeart, FaUsers, FaGlobe } from "react-icons/fa";
import { MdVisibility, MdFlag } from "react-icons/md";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AdDReSSBANGLADESH - our mission, vision, and commitment to serving communities across Bangladesh.",
};

const objectives = [
  "Work with route level people to ensuring Self-Sufficiency",
  "Advocacy and awareness building with Social Sustainability",
  "Enhance knowledge of science, literature & arts through education",
  "Train illiterate and half-literate people for advanced education",
  "Establish Mosque and Madrasa for Islamic education quality",
  "Setup and operate Medical College and Hospital services",
  "Provide relief to natural disaster affected communities",
  "Fund and manage schools, polytechnics, colleges and universities",
  "Promote arts, science and advancement of knowledge",
  "Establish homes and shelters for poor, women and children",
  "Fund Handicraft and SME industries for community development",
  "Support Agricultural activities including fisheries and dairy farms",
];

const team = [
  { name: "Founder & Chairman", role: "Executive Leadership", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { name: "Executive Director", role: "Operations & Programs", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" },
  { name: "Program Coordinator", role: "Field Operations", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80" },
  { name: "Finance Director", role: "Finance & Compliance", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Hero */}
      {/* <div className="relative py-36 flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #064e3b 0%, #059669 60%, #d97706 100%)" }}>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80" alt="" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="relative text-center px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-300" style={{ background: "rgba(255,255,255,0.1)" }}>
            About Us
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            About AdDReSSBANGLADESH
          </h1>
          <p className="text-green-100 text-lg">
            A registered society dedicated to building a self-sufficient, educated, and healthy Bangladesh
          </p>
        </div>
      </div> */}

      <div className="relative w-full py-36 flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #064e3b 0%, #059669 60%, #d97706 100%)" }}>
  <div className="absolute inset-0">
    <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80" alt="" className="w-full h-full object-cover opacity-15" />
  </div>
  <div className="relative w-full text-center px-6 sm:px-8 max-w-3xl mx-auto">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-300" style={{ background: "rgba(255,255,255,0.1)" }}>
      About Us
    </div>
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 break-words" style={{ fontFamily: "Playfair Display, serif" }}>
      About AdDReSSBANGLADESH
    </h1>
    <p className="text-green-100 text-base sm:text-lg">
      A registered society dedicated to building a self-sufficient, educated, and healthy Bangladesh
    </p>
  </div>
</div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-2xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(5,150,105,0.1)" }}>
              <MdFlag size={24} color="#059669" />
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)", fontFamily: "Playfair Display, serif" }}>Our Mission</h2>
            <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
              To work with communities at the grassroots level to ensure self-sufficiency through advocacy, awareness building, and sustainable development programs that address education, health, livelihoods, and environmental challenges across Bangladesh.
            </p>
          </div>
          <div className="p-8 rounded-2xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(217,119,6,0.1)" }}>
              <MdVisibility size={24} color="#d97706" />
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)", fontFamily: "Playfair Display, serif" }}>Our Vision</h2>
            <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
              A Bangladesh where every citizen has access to quality education, healthcare, and livelihood opportunities — a society that is self-reliant, environmentally sustainable, and grounded in values of compassion, justice, and community solidarity.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-3" style={{ color: "var(--text)", fontFamily: "Playfair Display, serif" }}>Our Core Values</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {[
            { icon: FaHandHoldingHeart, label: "Compassion", color: "#db2777" },
            { icon: FaUsers, label: "Community", color: "#059669" },
            { icon: FaLeaf, label: "Sustainability", color: "#16a34a" },
            { icon: FaGlobe, label: "Integrity", color: "#0891b2" },
          ].map((v) => (
            <div key={v.label} className="text-center p-6 rounded-2xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: v.color + "18" }}>
                <v.icon size={22} color={v.color} />
              </div>
              <div className="font-bold" style={{ color: "var(--text)" }}>{v.label}</div>
            </div>
          ))}
        </div>

        {/* Objectives */}
        <div className="mb-20">
          <h2 className="text-3xl font-black mb-3 text-center" style={{ color: "var(--text)", fontFamily: "Playfair Display, serif" }}>Aims & Objectives</h2>
          <p className="text-center mb-10" style={{ color: "var(--text-muted)" }}>As defined in our founding memorandum</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #059669, #d97706)" }}>
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>{obj}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-black mb-3 text-center" style={{ color: "var(--text)", fontFamily: "Playfair Display, serif" }}>Our Leadership</h2>
          <p className="text-center mb-10" style={{ color: "var(--text-muted)" }}>Dedicated people driving our mission forward</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-3 relative" style={{ border: "3px solid var(--border)" }}>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="font-bold text-sm" style={{ color: "var(--text)" }}>{member.name}</div>
                <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, #064e3b, #059669)" }}>
          <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>Join Our Movement</h3>
          <p className="text-green-200 mb-6">Whether you donate, volunteer, or spread the word — every act of support matters.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact#donate" className="px-6 py-3 rounded-full font-semibold text-white hover:scale-105 transition-all" style={{ background: "linear-gradient(135deg, #d97706, #f59e0b)" }}>
              Donate Now
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all" style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1.5px solid rgba(255,255,255,0.3)" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
