import { useState, useEffect, useRef, ReactNode, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import svgPaths from "../imports/Frame84/svg-z4b69fregg";
import imgPerson from "../assets/Mahabub_profile1.png";
import logoImg from "../assets/logo.png";
import { gamePortfolioItems } from "../assets/game_development/index";

/* ───────── constants ───────── */
const OG = "linear-gradient(104deg,#FD6F00 3%,#E46400 95%)";
const LOGO_G = "linear-gradient(to right,#FA6E00,#E60026)";

const NAV = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About me", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact me", id: "contact" },
];

const SERVICES = [
  {
    title: "HTML5 Game Development",
    desc: "Developing high-performance HTML5 games that run seamlessly across desktop, mobile, and web platforms.",
  },
  {
    title: "Phaser.js Development",
    desc: "Building engaging 2D games using Phaser.js with optimized gameplay, animations, and responsive design.",
  },
  {
    title: "Custom Game Development",
    desc: "Transforming your unique game ideas into polished, production-ready experiences tailored to your vision.",
  },
  {
    title: "Bug Fixing & Maintenance",
    desc: "Resolving game issues, adding new features, and providing long-term support for existing projects.",
  },
  {
    title: "Multiplayer Games",
    desc: "Developing real-time multiplayer games using Socket.io and Colyseus for smooth online experiences.",
  },
  {
    title: "Playable Ads",
    desc: "Designing lightweight, interactive playable ads that increase user engagement and conversion rates.",
  },
  {
    title: "Game UI/UX Design",
    desc: "Crafting intuitive game interfaces, menus, HUDs, and animations that enhance player experience.",
  },
  {
    title: "Game Optimization",
    desc: "Improving game performance, reducing load times, and ensuring smooth gameplay across all devices.",
  },
  {
    title: "Game Porting",
    desc: "Porting existing games to HTML5 while maintaining performance and compatibility across platforms.",
  },
  {
    title: "React Web Development",
    desc: "Building modern, responsive websites and dashboards using React with clean and scalable architecture.",
  },
  {
    title: "Firebase Integration",
    desc: "Integrating authentication, leaderboards, cloud databases, and real-time features using Firebase.",
  },
  {
    title: "Telegram Mini Games",
    desc: "Creating interactive Telegram Mini Games with leaderboards, rewards, and social integrations.",
  },
];

const PORTFOLIO = [...gamePortfolioItems];

const FILTERS = [
  "All",
  "Game Development",
  "Spinning Wheel",
  "Web Development",
  "Multiplayer",
];

const SKILLS = [
  { name: "Phaser.js", pct: 100 },
  { name: "JavaScript", pct: 98 },
  { name: "HTML5", pct: 100 },
  { name: "CSS3", pct: 95 },
  { name: "TypeScript", pct: 85 },
  { name: "React.js", pct: 90 },
  { name: "Node.js", pct: 85 },
  { name: "Express.js", pct: 85 },
  { name: "Firebase", pct: 90 },
  { name: "Socket.io", pct: 85 },
  { name: "Git & GitHub", pct: 90 },
];

/* ───────── helpers ───────── */
function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function useCounter(target: number, active: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let f = 0;
    const id = setInterval(() => {
      f++;
      setN(Math.round((f / 60) * target));
      if (f >= 60) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [active, target]);
  return n;
}

/* ───────── particle canvas ───────── */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
}

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const raf = useRef<number>(0);

  const init = useCallback((w: number, h: number) => {
    particles.current = Array.from({ length: 90 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = 0,
      h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init(w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const ps = particles.current;
      for (const p of ps) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(253,111,0,${p.alpha})`;
        ctx.fill();
      }
      // draw lines between close particles
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x,
            dy = ps[i].y - ps[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = `rgba(253,111,0,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf.current = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, [init]);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

/* ───────── reusable UI atoms ───────── */
function Reveal({
  children,
  delay = 0,
  className = "",
  from = "bottom",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  from?: "bottom" | "left" | "right";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial =
    from === "left"
      ? { opacity: 0, x: -50 }
      : from === "right"
        ? { opacity: 0, x: 50 }
        : { opacity: 0, y: 44 };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GlowBtn({
  children,
  onClick,
  type = "button",
  className = "",
  ghost = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  ghost?: boolean;
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{
        scale: 1.06,
        boxShadow: ghost
          ? "0 0 22px rgba(253,111,0,.35)"
          : "0 0 32px rgba(253,111,0,.65), 0 0 64px rgba(253,111,0,.25)",
      }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden rounded-lg font-bold cursor-pointer transition-colors duration-300 ${className}`}
      style={ghost ? {} : { background: OG }}
    >
      {ghost && (
        <div className="absolute inset-0 rounded-lg border-2 border-[#959595] hover:border-[#FD6F00] transition-colors duration-300" />
      )}
      <motion.span
        className="absolute inset-0 bg-white/0"
        whileHover={{ backgroundColor: "rgba(255,255,255,.08)" }}
        transition={{ duration: 0.2 }}
      />
      <span
        className={`relative z-10 flex items-center gap-2 ${ghost ? "text-[#959595] hover:text-[#FD6F00]" : "text-white"}`}
      >
        {children}
      </span>
      {/* animated border sweep */}
      {!ghost && (
        <motion.div
          className="absolute inset-0 opacity-0"
          whileHover={{ opacity: 1 }}
          style={{
            background:
              "linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: ["200% center", "-200% center"] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
      )}
    </motion.button>
  );
}

function SocialIcon({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, boxShadow: "0 0 18px rgba(253,111,0,.55)" }}
      whileTap={{ scale: 0.85 }}
      className="w-10 h-10 rounded-full border border-[#575757] flex items-center justify-center cursor-pointer"
      style={{ background: "rgba(255,255,255,.04)" }}
    >
      {children}
    </motion.div>
  );
}

/* ───────── hexagonal grid overlay ───────── */
function HexGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[.025]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hex"
            x="0"
            y="0"
            width="56"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="28,2 54,18 54,46 28,62 2,46 2,18"
              fill="none"
              stroke="#FD6F00"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>
    </div>
  );
}

/* ───────── scanline overlay ───────── */
function Scanlines() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] opacity-[.018]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(253,111,0,.5) 2px,rgba(253,111,0,.5) 3px)",
        backgroundSize: "100% 3px",
      }}
    />
  );
}

/* ───────── corner brackets decoration ───────── */
function Brackets({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#FD6F00] opacity-60" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#FD6F00] opacity-60" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#FD6F00] opacity-60" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#FD6F00] opacity-60" />
    </div>
  );
}

/* ───────── stat box with counter ───────── */
function StatBox({
  target,
  label,
  border,
}: {
  target: number;
  label: string;
  border?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const n = useCounter(target, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 py-1.5 ${border ? "pr-6 md:pr-8 border-r border-[#959595]/50" : ""}`}
    >
      <motion.p
        className="text-[#FD6F00] text-[24px] font-extrabold tracking-wider"
        animate={{
          textShadow: [
            "0 0 8px rgba(253,111,0,.4)",
            "0 0 20px rgba(253,111,0,.8)",
            "0 0 8px rgba(253,111,0,.4)",
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        {n}+
      </motion.p>
      <p className="text-[#DFDFDF] text-base md:text-xl font-bold">{label}</p>
    </motion.div>
  );
}

/* ───────── skill ring ───────── */
function SkillRing({
  name,
  pct,
  delay = 0,
}: {
  name: string;
  pct: number;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const r = 54;
  const circ = 2 * Math.PI * r;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-5 w-[130px] md:w-[200px]"
    >
      <div className="relative w-[100px] h-[100px] md:w-[130px] md:h-[130px]">
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 130 130"
        >
          <defs>
            <linearGradient
              id={`sg-${name.replace(/\s/g, "")}`}
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop stopColor="#FD6F00" />
              <stop offset="1" stopColor="#E46400" />
            </linearGradient>
            <filter id={`glow-${name.replace(/\s/g, "")}`}>
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle
            cx="65"
            cy="65"
            r={r}
            fill="none"
            stroke="rgba(217,217,217,.12)"
            strokeWidth="10"
          />
          <motion.circle
            cx="65"
            cy="65"
            r={r}
            fill="none"
            stroke={`url(#sg-${name.replace(/\s/g, "")})`}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circ}
            filter={`url(#glow-${name.replace(/\s/g, "")})`}
            initial={{ strokeDashoffset: circ }}
            animate={inView ? { strokeDashoffset: circ * (1 - pct / 100) } : {}}
            transition={{ duration: 1.8, delay: delay + 0.3, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-[26px] md:text-[30px] font-bold"
            style={{
              background: OG,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.8 }}
          >
            {pct}%
          </motion.span>
        </div>
        <p className="text-[#959595] text-[20px] md:text-[24px] font-bold text-center">
          {name}
        </p>
      </div>
    </motion.div>
  );
}

/* ───────── form atoms ───────── */
function FField({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  const [focus, setFocus] = useState(false);
  return (
    <motion.div
      animate={{
        borderColor: focus ? "rgba(253,111,0,.6)" : "rgba(255,255,255,0)",
      }}
      whileHover={{ borderColor: "rgba(253,111,0,.3)" }}
      className="bg-white/[.04] rounded-lg px-6 py-4 border transition-all duration-200 relative"
    >
      {focus && (
        <motion.div
          className="absolute inset-0 rounded-lg opacity-10 pointer-events-none"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ background: OG }}
        />
      )}
      <input
        type={type}
        placeholder={label}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full bg-transparent text-[#959595] placeholder-[#959595] outline-none font-medium text-base capitalize relative z-10"
      />
    </motion.div>
  );
}

function FSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [focus, setFocus] = useState(false);
  return (
    <motion.div
      animate={{
        borderColor: focus ? "rgba(253,111,0,.6)" : "rgba(255,255,255,0)",
      }}
      whileHover={{ borderColor: "rgba(253,111,0,.3)" }}
      className="bg-white/[.04] rounded-lg px-6 py-4 border transition-all duration-200 relative"
    >
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full bg-transparent text-[#959595] outline-none font-medium text-base capitalize appearance-none cursor-pointer"
      >
        <option value="" disabled className="bg-[#1a1a1a]">
          {label}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#1a1a1a]">
            {o}
          </option>
        ))}
      </select>
      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="12" height="7" viewBox="0 0 15.5 8.5" fill="none">
          <path
            d={svgPaths.p1da3ebe0}
            stroke="#959595"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </motion.div>
  );
}

function FTextarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focus, setFocus] = useState(false);
  return (
    <motion.div
      animate={{
        borderColor: focus ? "rgba(253,111,0,.6)" : "rgba(255,255,255,0)",
      }}
      whileHover={{ borderColor: "rgba(253,111,0,.3)" }}
      className="bg-white/[.04] rounded-lg px-6 py-4 h-[162px] border transition-all duration-200"
    >
      <textarea
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full h-full bg-transparent text-[#959595] placeholder-[#959595] outline-none font-medium text-base capitalize resize-none"
      />
    </motion.div>
  );
}

/* ───────── section heading ───────── */
function SectionHead({ title, sub }: { title: string; sub?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-[18px] mb-16 text-center"
    >
      <motion.div
        className="flex items-center gap-3 mb-1"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-px flex-1 w-16"
          style={{
            background: "linear-gradient(to right, transparent, #FD6F00)",
          }}
          animate={{ scaleX: inView ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <span className="text-[#FD6F00] text-sm font-bold tracking-[.3em] uppercase">
          Portfolio
        </span>
        <motion.div
          className="h-px flex-1 w-16"
          style={{
            background: "linear-gradient(to left, transparent, #FD6F00)",
          }}
          animate={{ scaleX: inView ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-[#FEFEFE] text-[36px] md:text-[40px] font-bold tracking-[1.2px]"
        style={{ textShadow: "0 0 40px rgba(253,111,0,.15)" }}
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="text-[#707070] text-[18px] md:text-[20px] max-w-xl leading-[1.6]"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    details: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const active = NAV.map((n) => document.getElementById(n.id)).reduce(
        (acc, el) =>
          el && el.getBoundingClientRect().top <= 130 ? el.id : acc,
        "home",
      );
      setActiveNav(active);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible =
    filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.cat === filter);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 2000);
  };

  return (
    <div
      className="min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden relative"
      style={{ fontFamily: "'Lato',sans-serif" }}
    >
      {/* ══ global CSS ══ */}
      <style>{`
        @keyframes blob1{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(28%,-18%) scale(1.08)}66%{transform:translate(-18%,22%) scale(.92)}}
        @keyframes blob2{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(-22%,22%) scale(.94)}66%{transform:translate(16%,-16%) scale(1.06)}}
        @keyframes blob3{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(18%,18%) scale(1.04)}66%{transform:translate(-12%,-24%) scale(.96)}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
        @keyframes pulse-ring{0%{transform:scale(.9);opacity:.6}70%{transform:scale(1.15);opacity:0}100%{transform:scale(.9);opacity:0}}
        @keyframes scanmove{0%{transform:translateY(-100%)}100%{transform:translateY(100vh)}}
        @keyframes glitch1{0%,100%{clip-path:inset(0 0 95% 0)}20%{clip-path:inset(30% 0 50% 0)}40%{clip-path:inset(70% 0 10% 0)}60%{clip-path:inset(10% 0 80% 0)}}
        @keyframes typewriter{from{width:0}to{width:100%}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        .blob1{animation:blob1 16s ease-in-out infinite}
        .blob2{animation:blob2 19s ease-in-out infinite}
        .blob3{animation:blob3 13s ease-in-out infinite}
        .float-y{animation:floatY 6s ease-in-out infinite}
        .pulse-ring{animation:pulse-ring 2.5s ease-out infinite}
        .scan-bar{animation:scanmove 5s linear infinite}
        .cursor-blink{animation:blink 1s step-end infinite}
        select option{background:#1a1a1a}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#0d0d0d}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#FD6F00,#E46400);border-radius:2px}
      `}</style>

      {/* ══ background layers ══ */}
      <ParticleCanvas />
      <HexGrid />
      <Scanlines />

      {/* gradient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="blob1 absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle,rgba(253,111,0,.08),transparent 70%)",
          }}
        />
        <div
          className="blob2 absolute top-[38%] -right-64 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle,rgba(253,111,0,.065),transparent 70%)",
          }}
        />
        <div
          className="blob3 absolute -bottom-40 left-[28%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle,rgba(228,100,0,.055),transparent 70%)",
          }}
        />
        {/* moving scan bar */}
        <div
          className="scan-bar absolute left-0 right-0 h-px opacity-[.04]"
          style={{
            background:
              "linear-gradient(to right,transparent,#FD6F00,transparent)",
          }}
        />
      </div>

      {/* ══ NAVBAR ══ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[rgba(13,13,13,.96)] backdrop-blur-2xl shadow-[0_1px_40px_rgba(0,0,0,.6)]" : "bg-transparent"}`}
      >
        {/* top orange line */}
        {scrolled && (
          <motion.div
            className="absolute top-16 left-0 right-0 h-[2px] md:top-20"
            style={{ background: OG }}
            layoutId="nav-line"
          />
        )}
        <nav className="max-w-[1440px] mx-auto px-5 md:px-20 h-16 md:h-[80px] flex items-center justify-between">
          {/* logo */}
          <motion.div
            whileHover={{
              scale: 1.06,
              textShadow: "0 0 24px rgba(253,111,0,.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className="font-bold text-[26px] md:text-[30px] cursor-pointer select-none"
            style={{
              fontFamily: "'K2D',sans-serif",
              background: LOGO_G,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            onClick={() => goTo("home")}
          >
            <img
              src={logoImg}
              alt="Logo"
              className="w-38 h-8 md:w-38 md:h-10 inline-block mr-2"
            />
          </motion.div>

          {/* desktop links */}
          <div className="hidden md:flex gap-[50px] items-center">
            {NAV.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => goTo(item.id)}
                whileHover={{ y: -3 }}
                className="text-[20px] cursor-pointer transition-all duration-200 relative group"
                style={{
                  color: activeNav === item.id ? "#FD6F00" : "#959595",
                  fontWeight: activeNav === item.id ? 700 : 500,
                  textShadow:
                    activeNav === item.id
                      ? "0 0 16px rgba(253,111,0,.6)"
                      : "none",
                }}
              >
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 group-hover:w-full"
                  style={{
                    width: activeNav === item.id ? "100%" : "0%",
                    background: OG,
                  }}
                />
              </motion.button>
            ))}
          </div>

          <div className="hidden md:block">
            <GlowBtn
              onClick={() => goTo("contact")}
              className="px-10 py-3 text-[16px] tracking-[.48px]"
            >
              Hire Me
            </GlowBtn>
          </div>

          {/* mobile hamburger */}
          <motion.button
            className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.88 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-[2px] w-6 rounded-full origin-center"
                style={{ background: menuOpen ? "#FD6F00" : "#959595" }}
                animate={
                  menuOpen
                    ? i === 0
                      ? { rotate: 45, y: 7 }
                      : i === 1
                        ? { opacity: 0, scaleX: 0 }
                        : { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.22 }}
              />
            ))}
          </motion.button>
        </nav>

        {/* mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-[rgba(13,13,13,.98)] border-t border-[#FD6F00]/20 overflow-hidden backdrop-blur-xl"
            >
              <div className="flex flex-col py-4 px-5 gap-1">
                {NAV.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => {
                      goTo(item.id);
                      setMenuOpen(false);
                    }}
                    className="py-3 text-left text-[16px] cursor-pointer transition-all duration-200 relative group"
                    style={{
                      color: activeNav === item.id ? "#FD6F00" : "#959595",
                    }}
                    whileHover={{ x: 10, color: "#FD6F00" }}
                  >
                    <span className="inline-block w-4 mr-2 text-[#FD6F00]/50 text-xs">
                      {/* &gt; */}
                    </span>
                    {item.label}
                  </motion.button>
                ))}
                <GlowBtn
                  onClick={() => {
                    goTo("contact");
                    setMenuOpen(false);
                  }}
                  className="mt-3 py-3 text-sm w-full justify-center"
                >
                  Hire Me
                </GlowBtn>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* ══ HERO ══ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20"
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 w-full py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* left */}
            <div className="flex flex-col gap-12 md:gap-16 max-w-[580px]">
              <div className="flex flex-col gap-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-[#707070] text-[22px] md:text-[24px] font-semibold tracking-[.72px]"
                >
                  Hi I am
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="text-[#959595] text-[26px] md:text-[28px] font-bold tracking-[.84px]"
                >
                  Md Mahabub
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-[52px] md:text-[70px] font-black tracking-[2.1px] leading-none"
                  style={{
                    background:
                      "linear-gradient(93deg,#984300 0%,#FD6F00 42%,#CA5900 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 30px rgba(253,111,0,.35))",
                  }}
                >
                  HTML5 Game Developer
                </motion.h1>
                {/* social icons */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                  className="flex gap-5 pt-4"
                >
                  {[
                    <svg
                      key="ig"
                      width="20"
                      height="20"
                      viewBox="10 10 20 20"
                      fill="none"
                    >
                      <path d={svgPaths.p1e1b7f80} fill="#BABABA" />
                    </svg>,
                    <svg
                      key="li"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d={svgPaths.p34123a70} fill="#BABABA" />
                    </svg>,
                    <svg
                      key="dr"
                      width="16"
                      height="16"
                      viewBox="-1 -1 23 23"
                      fill="none"
                    >
                      <path
                        d={svgPaths.p7e7ff71}
                        stroke="#BABABA"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>,
                    <svg
                      key="be"
                      width="18"
                      height="14"
                      viewBox="9 13 22 14"
                      fill="none"
                    >
                      <path d={svgPaths.p1bf29c00} fill="#BABABA" />
                    </svg>,
                  ].map((icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.7 + i * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <SocialIcon>{icon}</SocialIcon>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="flex gap-6 flex-wrap"
              >
                <GlowBtn
                  onClick={() => goTo("contact")}
                  className="px-10 py-3 md:py-4 text-[18px] md:text-[20px] tracking-[.6px]"
                >
                  Hire Me
                </GlowBtn>
                <GlowBtn
                  ghost
                  onClick={() => window.open("./src/assets/cv.pdf", "_blank")}
                  className="px-10 py-3 md:py-4 text-[18px] md:text-[20px] tracking-[.6px]"
                >
                  Download CV
                </GlowBtn>
              </motion.div>
              {/* stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="bg-white/[.04] rounded-lg p-5 md:p-6 flex gap-6 md:gap-8 items-center w-fit relative border border-white/[.06]"
              >
                <Brackets className="inset-0" />
                <StatBox target={5} label="Experiences" border />
                <StatBox target={40} label="Happy Clients" border />
                <StatBox target={100} label="Project done" />
              </motion.div>
            </div>
            {/* right: photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="float-y relative shrink-0"
            >
              {/* pulse rings */}
              {[1.0, 1.2, 1.4].map((s, i) => (
                <div
                  key={i}
                  className="pulse-ring absolute inset-0 rounded-full border border-[#FD6F00]/20 pointer-events-none"
                  style={{ scale: String(s), animationDelay: `${i * 0.8}s` }}
                />
              ))}
              <div
                className="absolute inset-0 rounded-full opacity-[.1]"
                style={{
                  background: "radial-gradient(circle,#FD6F00,transparent 70%)",
                  transform: "scale(1.3)",
                }}
              />
              <div
                className="w-[260px] h-[360px] md:w-[480px] md:h-[650px] rounded-[200px] overflow-hidden relative z-10"
                style={{
                  mixBlendMode: "luminosity",
                  boxShadow:
                    "0 0 60px rgba(253,111,0,.2), inset 0 0 60px rgba(253,111,0,.05)",
                }}
              >
                <img
                  src={imgPerson}
                  alt="Mahmood Fazile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* corner accent */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#FD6F00]/40 rounded-br-3xl pointer-events-none" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#FD6F00]/40 rounded-tl-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* ══ SERVICES ══ */}
      <section id="services" className="py-24 relative z-10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20">
          <SectionHead
            title="Services"
            sub="Delivering high-quality games with focus on performance, creativity, and exceptional user experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{
                    y: -12,
                    boxShadow:
                      "0 28px 56px rgba(253,111,0,.2), 0 0 0 1px rgba(253,111,0,.2)",
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="bg-white/[.04] rounded-[24px] p-8 flex flex-col items-center gap-8 h-full border border-transparent relative group cursor-pointer overflow-hidden"
                  style={{ borderColor: "rgba(255,255,255,.04)" }}
                >
                  {/* background glow on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px]"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(253,111,0,.08), transparent 60%)",
                    }}
                  />
                  <Brackets className="inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-[70px] h-[70px] relative z-10">
                    <svg
                      viewBox="-5 -5 70 65"
                      fill="none"
                      className="w-full h-full"
                    >
                      <motion.path
                        clipRule="evenodd"
                        d={svgPaths.p1a5e0700}
                        fillRule="evenodd"
                        animate={{ fill: ["#FD6F00", "#FF8C33", "#FD6F00"] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center gap-4 relative z-10">
                    <h3 className="text-[#FD6F00] text-[22px] md:text-[24px] font-bold tracking-[.72px]">
                      {s.title}
                    </h3>
                    <p className="text-[#575757] text-[18px] md:text-[20px] text-center leading-[1.6] tracking-[.6px]">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="py-24 relative z-10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20">
          <SectionHead
            title="About Me"
            sub="HTML5 Game, Web and Game App Developer"
          />
          <div className="flex flex-col md:flex-row gap-16 md:gap-[100px] items-center justify-center">
            {/* photo */}
            <Reveal from="left" delay={0.1} className="relative shrink-0">
              <div className="relative w-[280px] md:w-[560px]">
                <motion.div
                  className="absolute left-[20px] top-[90px] rounded-bl-[12px] rounded-br-[12px] rounded-tl-[261px] rounded-tr-[261px] bg-white/[.04]"
                  style={{ width: "calc(100% - 20px)", height: "78%" }}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(253,111,0,0)",
                      "0 0 30px rgba(253,111,0,.1)",
                      "0 0 0px rgba(253,111,0,0)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div
                  className="relative z-10 overflow-hidden"
                  style={{ height: "520px", mixBlendMode: "luminosity" }}
                >
                  <img
                    src={imgPerson}
                    alt="Mahmood Fazile"
                    className="w-full h-full object-cover object-top"
                    style={{ marginTop: "-5%" }}
                  />
                </div>
                {/* decorative lines */}
                <motion.div
                  className="absolute -left-8 top-1/2 w-6 h-px"
                  style={{ background: OG }}
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute -right-8 top-1/3 w-6 h-px"
                  style={{ background: OG }}
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1.8 }}
                />
              </div>
            </Reveal>

            {/* text */}
            <Reveal from="right" delay={0.25} className="max-w-[631px]">
              <div className="flex flex-col gap-10">
                <p className="text-[#959595] text-[18px] md:text-[20px] leading-[1.9]">
                  An HTML5 game developer transforms creative ideas into
                  immersive, interactive gaming experiences that run seamlessly
                  across web and mobile platforms. Combining gameplay mechanics,
                  animations, and optimized code, they craft engaging worlds
                  where every interaction feels smooth and rewarding. From
                  casual browser games and multiplayer experiences to Telegram
                  Mini Games and playable ads, they bring concepts to life with
                  precision and creativity. Every project is built with
                  performance, scalability, and user experience in mind,
                  ensuring players enjoy fast, responsive, and visually
                  captivating games on any device.
                  <br /> I enjoy transforming creative ideas into polished
                  gaming experiences with clean code, smooth animations, and
                  responsive gameplay. My passion lies in building games that
                  are not only visually appealing but also optimized for
                  performance, scalability, and an exceptional player experience
                  across all devices.
                </p>
                <GlowBtn
                  onClick={() => window.open("./src/assets/cv.pdf", "_blank")}
                  className="px-8 py-3 text-[18px] md:text-[20px] tracking-[.6px] w-fit"
                >
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 18.4769"
                    fill="none"
                  >
                    <path
                      d="M10 12.791L10 0.75"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d={svgPaths.p31fcc480}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d={svgPaths.p21aeb580}
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                  Download CV
                </GlowBtn>
              </div>
            </Reveal>
          </div>
          {/* skills */}
          <Reveal delay={0.15} className="mt-24">
            <div className="flex flex-wrap justify-center md:justify-between gap-10 md:gap-4">
              {SKILLS.map((s, i) => (
                <SkillRing
                  key={s.name}
                  name={s.name}
                  pct={s.pct}
                  delay={i * 0.12}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      {/* ══ PORTFOLIO ══ */}
      <section id="portfolio" className="py-24 relative z-10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20">
          <SectionHead title="Portfolio" />
          {/* filter tabs */}
          <Reveal className="flex flex-wrap gap-3 md:gap-6 justify-center mb-12">
            {FILTERS.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 md:px-10 py-[12px] md:py-[14px] rounded-lg font-bold text-[14px] md:text-[16px] capitalize cursor-pointer tracking-[.48px] relative overflow-hidden"
                animate={
                  filter === f
                    ? {
                        color: "#fff",
                        boxShadow:
                          "0 0 24px rgba(253,111,0,.5), 0 0 48px rgba(253,111,0,.2)",
                      }
                    : { color: "#C6C6C6", boxShadow: "none" }
                }
                style={
                  filter === f
                    ? { background: OG }
                    : { background: "rgba(255,255,255,.08)" }
                }
              >
                {filter === f && (
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
                {f}
              </motion.button>
            ))}
          </Reveal>
          {/* grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((item, i) => (
                <motion.div
                  key={`${item.name}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 30 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group relative rounded-[28px] overflow-hidden cursor-pointer w-full max-w-[415px]"
                  whileHover={{
                    y: -12,
                    boxShadow: "0 32px 64px rgba(253,111,0,.18)",
                  }}
                >
                  <div
                    className="rounded-tl-[28px] rounded-tr-[28px] overflow-hidden aspect-square"
                    style={{ mixBlendMode: "exclusion" }}
                  >
                    <motion.img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="bg-white/[.08] p-4 rounded-bl-[16px] rounded-br-[16px] flex items-center justify-between font-bold text-[16px] capitalize tracking-[.48px]">
                    <span className="text-[#C6C6C6]">{item.name}</span>
                    <span className="text-[#959595] text-sm">{item.cat}</span>
                  </div>
                  {/* hover overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-[28px] flex items-center justify-center"
                    initial={{ background: "rgba(253,111,0,0)" }}
                    whileHover={{ background: "rgba(253,111,0,.18)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7, y: 16 }}
                      whileHover={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-[#FD6F00] text-white font-bold px-6 py-3 rounded-full text-sm"
                      style={{ boxShadow: "0 0 24px rgba(253,111,0,.7)" }}
                    >
                      View Project
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      {/* ══ CONTACT ══ */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20">
          <SectionHead
            title="Contact me"
            sub="Cultivating Connections: Reach Out and Connect with Me"
          />
          <Reveal delay={0.15} className="max-w-[1012px] mx-auto relative">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-8 py-24"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 180, delay: 0.2 }}
                    className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white relative"
                    style={{
                      background: OG,
                      boxShadow: "0 0 40px rgba(253,111,0,.6)",
                    }}
                  >
                    <motion.div className="pulse-ring absolute inset-0 rounded-full border-2 border-[#FD6F00]" />
                    ✓
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-bold text-[#FEFEFE]"
                  >
                    Message Sent!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="text-[#707070] text-center"
                  >
                    {"Thank you for reaching out. I'll get back to you soon."}
                  </motion.p>
                  <GlowBtn
                    onClick={() => {
                      setSent(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        timeline: "",
                        details: "",
                      });
                    }}
                    className="px-8 py-3 text-base mt-2"
                  >
                    Send Another
                  </GlowBtn>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSend}
                  className="flex flex-col gap-[30px]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    <FField
                      label="Name"
                      value={form.name}
                      onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                      required
                    />
                    <FField
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    <FField
                      label="Phone Number"
                      value={form.phone}
                      onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                    />
                    <FSelect
                      label="Service of Interest"
                      value={form.service}
                      onChange={(v) => setForm((f) => ({ ...f, service: v }))}
                      options={[
                        "HTML5 Game Development",
                        "Phaser.js Development",
                        "Custom Game Development",
                        "Multiplayer Games",
                        "Telegram Mini Games",
                        "Playable Ads",
                        "Game UI/UX Design",
                        "Game Optimization",
                        "React Web Development",
                        "Firebase Integration",
                        "Bug Fixing & Maintenance",
                      ]}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    <FField
                      label="Timeline"
                      value={form.timeline}
                      onChange={(v) => setForm((f) => ({ ...f, timeline: v }))}
                    />
                    <div />
                  </div>
                  <FTextarea
                    label="Project Details..."
                    value={form.details}
                    onChange={(v) => setForm((f) => ({ ...f, details: v }))}
                  />
                  <div className="flex justify-end">
                    <GlowBtn
                      type="submit"
                      className="px-10 py-[12px] text-[20px] tracking-[.6px] min-w-[150px] justify-center"
                    >
                      {sending ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 0.7,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full inline-block"
                          />
                          Sending…
                        </>
                      ) : (
                        "Send"
                      )}
                    </GlowBtn>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>
      {/* ══ FOOTER ══ */}
      <footer
        className="relative z-10 border-t border-white/[.06]"
        style={{ background: "rgba(255,255,255,.03)" }}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-10 flex flex-col items-center gap-[50px]">
          <div className="flex flex-col items-center gap-[30px] w-full">
            {/* logo */}
            <motion.div
              whileHover={{
                scale: 1.08,
                filter: "drop-shadow(0 0 16px rgba(253,111,0,.7))",
              }}
              whileTap={{ scale: 0.94 }}
              className="font-bold text-[30px] cursor-pointer select-none"
              style={{
                fontFamily: "'K2D',sans-serif",
                background: LOGO_G,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              onClick={() => goTo("home")}
            >
              {" "}
              <img
                src={logoImg}
                alt="Logo"
                className="w-60 h-12 md:w-60 md:h-14 inline-block mr-2"
              />
            </motion.div>
            <div className="flex flex-wrap gap-6 md:gap-[60px] justify-center">
              {NAV.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  whileHover={{
                    y: -3,
                    color: "#FD6F00",
                    textShadow: "0 0 12px rgba(253,111,0,.5)",
                  }}
                  className="text-[#959595] text-[18px] md:text-[20px] font-medium cursor-pointer transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            {/* social */}
            <div className="flex gap-5">
              {[
                <svg
                  key="ig"
                  width="20"
                  height="20"
                  viewBox="10 10 20 20"
                  fill="none"
                >
                  <path d={svgPaths.p1e1b7f80} fill="#BABABA" />
                </svg>,
                <svg
                  key="li"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d={svgPaths.p34123a70} fill="#BABABA" />
                </svg>,
                <svg
                  key="dr"
                  width="16"
                  height="16"
                  viewBox="-1 -1 23 23"
                  fill="none"
                >
                  <path
                    d={svgPaths.p7e7ff71}
                    stroke="#BABABA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>,
                <svg
                  key="be"
                  width="18"
                  height="14"
                  viewBox="9 13 22 14"
                  fill="none"
                >
                  <path d={svgPaths.p1bf29c00} fill="#BABABA" />
                </svg>,
              ].map((icon, i) => (
                <SocialIcon key={i}>{icon}</SocialIcon>
              ))}
            </div>
            {/* contact info */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-[40px] items-center">
              {[
                {
                  href: "mailto:mdmahbubhossine@gmail.com",
                  icon: (
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                      <path
                        d={svgPaths.p1d50cd00}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M22 6L12 13L2 6"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                  text: "mdmahbubhossine@gmail.com",
                },
                {
                  href: "tel:+8801791096654",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d={svgPaths.p375d9e80}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                  text: "+880 17910 96654",
                },
              ].map(({ href, icon, text }) => (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{
                    color: "#FD6F00",
                    textShadow: "0 0 12px rgba(253,111,0,.4)",
                  }}
                  className="flex gap-[14px] items-center text-[#959595] font-bold text-[18px] md:text-[20px] cursor-pointer transition-colors duration-200"
                >
                  {icon}
                  {text}
                </motion.a>
              ))}
            </div>
          </div>
          <div
            className="w-full pt-4 flex justify-center"
            style={{ borderTop: "1px solid rgba(112,112,112,.4)" }}
          >
            <p className="text-[#707070] text-[14px] md:text-[16px] font-bold tracking-[.48px]">
              Designed by @mdmahabub
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
