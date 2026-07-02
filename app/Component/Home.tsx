"use client";

import Image from "next/image";

// All images from public folder
const MARQUEE_IMAGES = [
    { src: "/o1.jpg", alt: "Design Reference 1", num: "01" },
    { src: "/o2.jpg", alt: "Design Reference 2", num: "02" },
    { src: "/03.jpg", alt: "Design Reference 3", num: "03" },
    { src: "/o4.jpg", alt: "Design Reference 4", num: "04" },
    { src: "/o5.jpg", alt: "Design Reference 5", num: "05" },
    { src: "/o6.png", alt: "Design Reference 6", num: "06" },
];

export default function Home() {

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .page-wrap {
          min-height: 100vh;
          background: #000000;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        /* ── NAV ── */
        .nav {
          position: absolute;
          top: 0; left: 0; right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 40px;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }
        .nav-left { display: flex; gap: 10px; }
        .nav-pill {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.82);
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.06);
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          letter-spacing: 0.01em;
          backdrop-filter: blur(6px);
        }
        .nav-pill:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.25);
          color: #fff;
        }
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .nav-right { display: flex; align-items: center; gap: 20px; }
        .nav-collab {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-collab:hover { color: #fff; }
        .nav-book {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: #b8ff57;
          padding: 8px 20px;
          border-radius: 999px;
          border: 1.5px solid #b8ff57;
          background: transparent;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          letter-spacing: 0.01em;
        }
        .nav-book:hover { background: #b8ff57; color: #0c0c0e; }

        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          padding-bottom: 60px;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          padding: 0 44px;
          padding-top: 120px;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          flex: 1;
        }
        .hero-h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 7vw, 5.4rem);
          line-height: 1.03;
          color: #fff;
          font-weight: 400;
          letter-spacing: -0.025em;
          margin-bottom: 24px;
          animation: hFadeUp 0.8s ease both;
        }
        .hero-h1 strong { font-weight: 800; }
        .hero-sub {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.5vw, 16px);
          line-height: 1.65;
          color: rgba(255,255,255,0.52);
          max-width: 420px;
          margin-bottom: 36px;
          animation: hFadeUp 0.9s ease 0.12s both;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 999px;
          background: #b8ff57;
          color: #0c0c0e;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.22s;
          animation: hFadeUp 1s ease 0.24s both;
        }
        .hero-cta:hover { background: #a5ed49; transform: translateY(-1px); }
        .cta-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px; height: 28px;
          border-radius: 50%;
          background: #0c0c0e;
          color: #fff;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .hero-cta:hover .cta-arrow { transform: rotate(45deg); }

        /* ── INFINITE MARQUEE ── */
        .marquee-section {
          position: relative;
          z-index: 10;
          width: 100%;
          overflow: hidden;
          padding: 0;
          margin-top: 48px;
          /* fade edges */
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }

        .marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }

        .marquee-card {
          flex: 0 0 auto;
          width: 340px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          position: relative;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          /* transparent so the grid canvas behind shows through */
          background: transparent;
        }
        .marquee-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 28px 60px rgba(0,0,0,0.7);
          border-color: rgba(255,255,255,0.2);
        }

        /* Fake browser chrome */
        .mq-chrome {
          height: 30px;
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          padding: 0 10px;
          gap: 5px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .mq-dot { width: 8px; height: 8px; border-radius: 50%; }
        .mq-bar {
          flex: 1;
          height: 14px;
          border-radius: 3px;
          background: rgba(255,255,255,0.07);
          margin: 0 8px;
        }

        .mq-img-wrap {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        .mq-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .marquee-card:hover .mq-img-wrap img { transform: scale(1.05); }

        /* Number badge */
        .mq-badge {
          position: absolute;
          bottom: 10px;
          right: 12px;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(8px);
          color: rgba(255,255,255,0.6);
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
        }

        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes hFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── TABLET (max-width: 1024px) ── */
        @media (max-width: 1024px) {
          .nav { padding: 20px 30px; }
          .hero-content { padding: 0 30px; padding-top: 110px; }
          .marquee-card { width: 300px; }
          .mq-img-wrap { height: 180px; }
        }

        /* ── SMALL TABLET / LARGE PHONE (max-width: 768px) ── */
        @media (max-width: 768px) {
          .nav { padding: 16px 20px; flex-wrap: wrap; gap: 12px; }
          .nav-logo {
            position: static;
            transform: none;
            order: -1;
            width: 100%;
            text-align: center;
            font-size: 20px;
            margin-bottom: 4px;
          }
          .nav-left { justify-content: center; width: 100%; }
          .nav-right { justify-content: center; width: 100%; gap: 14px; }
          .nav-collab { font-size: 12px; }
          .nav-book { font-size: 12px; padding: 7px 16px; }
          .nav-pill { font-size: 12px; padding: 6px 14px; }
          .hero { min-height: auto; padding-bottom: 40px; }
          .hero-content { padding: 0 20px; padding-top: 140px; }
          .hero-h1 { font-size: clamp(2.2rem, 8vw, 3.5rem); margin-bottom: 18px; }
          .hero-sub { font-size: 14px; max-width: 100%; margin-bottom: 28px; }
          .hero-cta { padding: 12px 22px; font-size: 14px; }
          .cta-arrow { width: 24px; height: 24px; }
          .marquee-section { margin-top: 32px; }
          .marquee-card { width: 260px; }
          .mq-img-wrap { height: 160px; }
          .marquee-track { gap: 12px; }
        }

        /* ── MOBILE (max-width: 480px) ── */
        @media (max-width: 480px) {
          .nav { padding: 14px 16px; gap: 8px; }
          .nav-logo { font-size: 18px; }
          .nav-left { display: none; }
          .nav-right { gap: 10px; }
          .nav-collab { font-size: 11px; }
          .nav-book { font-size: 11px; padding: 6px 14px; }
          .hero-content { padding: 0 16px; padding-top: 110px; }
          .hero-h1 { font-size: clamp(1.8rem, 9vw, 2.8rem); line-height: 1.1; }
          .hero-sub { font-size: 13px; line-height: 1.6; }
          .hero-cta { padding: 11px 20px; font-size: 13px; }
          .cta-arrow { width: 22px; height: 22px; }
          .marquee-section { margin-top: 24px; }
          .marquee-card { width: 220px; border-radius: 12px; }
          .mq-img-wrap { height: 140px; }
          .mq-chrome { height: 24px; }
          .mq-dot { width: 6px; height: 6px; }
          .marquee-track { gap: 10px; }
        }
      `}</style>

            <div className="page-wrap">
                <section className="hero" id="home">
                    <div className="hero-grid-fade" />

                    {/* NAV */}
                    <nav className="nav">
                        <div className="nav-left">
                            <a href="#services" className="nav-pill" id="nav-services">Services</a>
                        </div>
                        <span className="nav-logo">.webstudio</span>
                        <div className="nav-right">
                            <button className="nav-collab" id="nav-collab" onClick={() => window.dispatchEvent(new CustomEvent("open-book-modal"))}>Let&apos;s Collaborate</button>
                            <button className="nav-book" id="nav-book" onClick={() => window.dispatchEvent(new CustomEvent("open-book-modal"))}>Book a Call</button>
                        </div>
                    </nav>

                    {/* HERO TEXT */}
                    <div className="hero-content">
                        <h1 className="hero-h1">
                            We Build <strong>Websites</strong><br />
                            &amp; <strong style={{ color: '#b8ff57' }}>Web Apps</strong> That<br />
                            Grow Your Business
                        </h1>
                        <p className="hero-sub">
                            From landing pages to full-scale web applications — I design and
                            develop fast, modern, conversion-focused websites for startups,
                            businesses, and creators.
                        </p>
                        <button className="hero-cta" id="hero-cta" onClick={() => window.dispatchEvent(new CustomEvent("open-book-modal"))}>
                            Get in touch
                            <span className="cta-arrow">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* INFINITE AUTO-SCROLL MARQUEE */}
                    <div className="marquee-section" id="marquee">
                        {/* We duplicate the array so the loop is seamless */}
                        <div className="marquee-track">
                            {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((img, i) => (
                                <div className="marquee-card" key={i} id={`mq-card-${i}`}>
                                    {/* Fake browser chrome */}
                                    <div className="mq-chrome">
                                        <div className="mq-dot" style={{ background: "#ff5f57" }} />
                                        <div className="mq-dot" style={{ background: "#febc2e" }} />
                                        <div className="mq-dot" style={{ background: "#28c840" }} />
                                        <div className="mq-bar" />
                                    </div>

                                    {/* Image */}
                                    <div className="mq-img-wrap">
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            sizes="340px"
                                        />
                                        <span className="mq-badge">{img.num}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
