          >
            {pct}%
          </motion.span>
        </div>
      </div>
      <p className="text-[#959595] text-[20px] md:text-[24px] font-bold text-center">
        {name}
      </p>
    </motion.div>
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
  const [activeNav, setActiveNav] = useState("home");
  const [form, setForm] = useState({
    name: "",
    email: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    details: "",
                    }}
                    whileHover={{ x: 10, color: "#FD6F00" }}
                  >
                    <span className="inline-block w-4 mr-2 text-[#FD6F00]/50 text-xs">
                      &gt;
                      >
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
                <GlI need to use a very precise and unique match string. The orphaned code starts right after `FField`'s closing `);` and the `function FTextarea` declaration. Let me target the exact orphaned block with sufficient unique surrounding context.
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
<edit_file>
<path>e:/Personal Website/My Portfolio/src/app/App.tsx</path>
<old_str>        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full bg-transparent text-[#959595] placeholder-[#959595] outline-none font-medium text-base capitalize relative z-10"
      />
    </motion.div>
  );
}
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
        </svg>
      </div>
    </motion.div>
  );
}
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
function FTextarea({</old_str>
<new_str>        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full bg-transparent text-[#959595] placeholder-[#959595] outline-none font-medium text-base capitalize relative z-10"
      />
    </motion.div>
  );
}
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