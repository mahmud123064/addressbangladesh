"use client";
import { useState } from "react";
import { galleryImages } from "@/lib/data";
import { IoClose } from "react-icons/io5";
import { FiZoomIn } from "react-icons/fi";

const categories = ["All", "Environment", "Health", "Education", "Relief", "Livelihood"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <div className="relative py-32 flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #064e3b, #059669)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #d97706, transparent 60%)" }} />
        <div className="relative text-center px-4">
          <div className="section-badge mb-4" style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", color: "white" }}>
            Our Gallery
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
            Our Gallery
          </h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            Glimpses of our work and impact across Bangladesh
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden mb-4"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center" style={{ background: "rgba(6,78,59,0.7)" }}>
                <FiZoomIn size={28} color="white" className="mb-2" />
                <span className="text-white text-sm font-medium text-center px-3">{img.title}</span>
                <span className="text-emerald-300 text-xs mt-1">{img.category}</span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="text-xs px-2 py-1 rounded-full font-medium text-white" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}>
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: "var(--text-muted)" }}>
            No images found for this category.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/10"
            onClick={() => setLightbox(null)}
          >
            <IoClose size={24} />
          </button>
          <img
            src={lightbox}
            alt="Gallery full view"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
