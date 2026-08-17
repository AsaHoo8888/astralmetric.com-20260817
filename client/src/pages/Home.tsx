/**
 * Astral design reminder — 星图调度舱：深蓝策略空间、信号青焦点、轨道式非对称叙事。
 * Every visual choice must reinforce a clear path from insight to measurable growth.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  ChevronRight,
  CircleDot,
  Crosshair,
  Menu,
  Orbit,
  RadioTower,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";

const assets = {
  mark: "/manus-storage/astral-brand-mark_0c7028fd.png",
  hero: "/manus-storage/astral-hero-portal_0c0ed2f0.png",
  insight: "/manus-storage/astral-insight-signal_b526daaa.png",
  campaign: "/manus-storage/astral-campaign-current_871eebc9.png",
};

const navItems = [
  { label: "Capabilities", target: "capabilities" },
  { label: "Method", target: "method" },
  { label: "Perspective", target: "perspective" },
];

const capabilities = [
  {
    id: "01",
    icon: Crosshair,
    title: "Growth Positioning",
    description: "Align brand value, audience motivation, and category context into one executable growth direction.",
    note: "Brand / Audience / Category",
  },
  {
    id: "02",
    icon: RadioTower,
    title: "Integrated Communications",
    description: "Align content, media, and experience into one coherent rhythm of reach and response.",
    note: "Narrative / Channel / Experience",
  },
  {
    id: "03",
    icon: BarChart3,
    title: "Performance Media",
    description: "Use disciplined testing to calibrate creative and investment, turning each cycle into evidence for the next.",
    note: "Test / Learn / Scale",
  },
  {
    id: "04",
    icon: Orbit,
    title: "Data Intelligence",
    description: "Bring scattered behavioral signals back to one growth map, so teams can move with clarity.",
    note: "Signal / System / Decision",
  },
];

const methodology = [
  {
    number: "01",
    eyebrow: "CAPTURE",
    title: "Capture the signals that matter",
    copy: "Start with business goals and audience journeys to identify motivations worth amplifying—not temporary noise.",
  },
  {
    number: "02",
    eyebrow: "CALIBRATE",
    title: "Calibrate the growth route",
    copy: "Bring strategy, content, and media into one decision coordinate, so each touchpoint knows what it moves forward.",
  },
  {
    number: "03",
    eyebrow: "AMPLIFY",
    title: "Amplify proven momentum",
    copy: "Build certainty through continuous learning, then scale investment in what works until success becomes repeatable.",
  },
];

function scrollToSection(target: string) {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleConsultation = () => {
    toast("The consultation channel will be connected before launch", {
      description: "This brand site is currently a demonstration. Add a form or business email before publishing.",
    });
  };

  const handleNav = (target: string) => {
    setMobileOpen(false);
    scrollToSection(target);
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#06142f] text-white selection:bg-[#00c7ff] selection:text-[#041128]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#06142f]/88 shadow-[0_12px_32px_rgba(3,11,28,0.2)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="group flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#00c7ff]"
            aria-label="Back to home"
          >
            <img src={assets.mark} alt="Astral" className="h-9 w-9 object-contain transition-transform duration-200 group-hover:rotate-6" />
            <span className="wordmark text-white">A<span>stral</span></span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => handleNav(item.target)}
                className="nav-link font-mono text-[0.68rem] tracking-[0.16em] text-white/62 outline-none hover:text-white focus-visible:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={handleConsultation}
            className="hidden items-center gap-2 border border-[#00c7ff]/45 bg-[#00c7ff]/10 px-4 py-2.5 font-mono text-[0.66rem] font-medium tracking-[0.13em] text-[#9beaff] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00c7ff] hover:bg-[#00c7ff] hover:text-[#041128] active:scale-[0.97] lg:flex"
          >
            CALIBRATE <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-white/15 text-white lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#071a3d]/98 px-5 py-5 backdrop-blur-xl lg:hidden">
            <nav className="mx-auto flex max-w-[1440px] flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => handleNav(item.target)}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-left font-display text-xl text-white"
                >
                  {item.label} <ArrowDownRight className="h-4 w-4 text-[#00c7ff]" />
                </button>
              ))}
              <button type="button" onClick={handleConsultation} className="mt-4 bg-[#00c7ff] px-5 py-3 text-left font-mono text-xs font-bold tracking-[0.14em] text-[#041128]">
                CALIBRATE YOUR ROUTE
              </button>
            </nav>
          </div>
        )}
      </header>

      <section id="top" className="relative isolate min-h-[800px] overflow-hidden pt-[76px] sm:min-h-[860px]">
        <div className="absolute inset-0 bg-[#06142f]" />
        <img src={assets.hero} alt="Abstract digital growth portal" className="absolute inset-0 h-full w-full object-cover object-[64%_center] opacity-85" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#06142f_0%,rgba(6,20,47,0.92)_29%,rgba(6,20,47,0.36)_61%,rgba(6,20,47,0.12)_100%)]" />
        <div className="absolute inset-0 hero-grid opacity-60" />
        <div className="absolute left-[8%] top-[23%] h-px w-[20%] bg-gradient-to-r from-transparent via-[#00c7ff]/75 to-transparent" />

        <div className="relative mx-auto flex min-h-[724px] max-w-[1440px] items-center px-5 pb-24 pt-20 sm:px-8 lg:min-h-[784px] lg:px-12">
          <div className="max-w-[720px]">
            <div className="mb-7 flex items-center gap-3 font-mono text-[0.68rem] font-medium tracking-[0.16em] text-[#77ddf7]">
              <span className="signal-dot" />
              AST/01 — DIGITAL GROWTH NAVIGATION
            </div>
            <h1 className="font-display max-w-[700px] text-[clamp(3.4rem,7.1vw,7.1rem)] font-semibold leading-[0.93] tracking-[-0.075em] text-white">
              Make every touchpoint<br />
              point to <span className="text-gradient-cyan">growth.</span>
            </h1>
            <p className="mt-8 max-w-[525px] text-base leading-8 text-white/68 sm:text-lg">
              Astral aligns insight, content, and media into a clear growth route—making digital marketing visible, controllable, and ready to scale.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => scrollToSection("capabilities")} className="group inline-flex items-center justify-center gap-3 bg-[#00c7ff] px-6 py-4 font-mono text-xs font-bold tracking-[0.12em] text-[#041128] transition-all duration-200 hover:-translate-y-1 hover:bg-[#76e5ff] active:scale-[0.97]">
                EXPLORE CAPABILITIES <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <button type="button" onClick={handleConsultation} className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-white/[0.04] px-6 py-4 font-mono text-xs font-medium tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-1 hover:border-white/60 hover:bg-white/[0.09] active:scale-[0.97]">
                CALIBRATE YOUR NEXT ROUTE <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#06142f]/60 backdrop-blur-sm">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
            {["Growth Positioning", "Integrated Communications", "Performance Media", "Data Intelligence"].map((item, index) => (
              <div key={item} className="flex items-center gap-3 border-r border-white/10 py-5 last:border-r-0 lg:py-6">
                <span className="font-mono text-[0.63rem] text-[#00c7ff]/80">0{index + 1}</span>
                <span className="text-sm text-white/72">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#091b3b] py-7">
        <div className="marquee-track flex items-center gap-10 whitespace-nowrap font-mono text-[0.7rem] tracking-[0.17em] text-white/55">
          {["INSIGHT INTO ACTION", "SIGNAL OVER NOISE", "MEASURE WHAT MOVES", "MAKE GROWTH VISIBLE", "INSIGHT INTO ACTION", "SIGNAL OVER NOISE", "MEASURE WHAT MOVES", "MAKE GROWTH VISIBLE"].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-10"><CircleDot className="h-3.5 w-3.5 text-[#00c7ff]" />{item}</span>
          ))}
        </div>
      </section>

      <section id="capabilities" className="route-section-light relative bg-[#f4f6fa] px-5 py-24 text-[#0b1c3d] sm:px-8 sm:py-32 lg:px-12">
        <div className="absolute left-[8%] top-0 h-16 w-px bg-[#00c7ff]" />
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end">
            <div>
              <div className="section-label-dark"><img src={assets.mark} alt="" aria-hidden="true" /><p className="eyebrow-dark">ASTRAL CAPABILITIES / 2026</p></div>
              <h2 className="mt-5 max-w-[550px] font-display text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl">
                From one signal,<br />to a growth system.
              </h2>
            </div>
            <p className="max-w-[530px] border-l border-[#0b1c3d]/18 pl-6 text-base leading-8 text-[#0b1c3d]/67 sm:text-lg">
              We do not stack channels. We create one shared decision system where brand, content, media, and data move on the same map.
            </p>
          </div>

          <div className="relative mt-16 grid gap-3 border-t border-[#0b1c3d]/16 pt-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4 lg:pt-4">
            <div className="capability-route" aria-hidden="true"><span className="route-node route-node-a" /><span className="route-node route-node-b" /><span className="route-node route-node-c" /></div>
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              const offsetClasses = ["lg:col-span-3 lg:mt-0", "lg:col-span-3 lg:mt-16", "lg:col-span-3 lg:mt-7", "lg:col-span-3 lg:mt-24"];
              return (
                <article key={item.id} className={`capability-card diagnostic-panel group relative min-h-[320px] border border-[#0b1c3d]/16 bg-[#f8faff] px-6 py-7 sm:px-7 lg:min-h-[372px] lg:px-8 ${offsetClasses[index]}`}>
                  <div className="flex items-center justify-between border-b border-[#0b1c3d]/11 pb-4">
                    <span className="font-mono text-[0.61rem] tracking-[0.12em] text-[#0b1c3d]/45">NODE_{item.id}</span>
                    <Icon className="h-5 w-5 text-[#00a9dc] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" strokeWidth={1.6} />
                  </div>
                  <div className="mt-14">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.045em]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#0b1c3d]/66">{item.description}</p>
                  </div>
                  <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between border-t border-[#0b1c3d]/11 pt-4 sm:left-7 sm:right-7 lg:left-8 lg:right-8">
                    <p className="font-mono text-[0.55rem] tracking-[0.1em] text-[#0b1c3d]/42">{item.note}</p>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00c7ff] shadow-[0_0_0_4px_rgba(0,199,255,0.12)]" />
                  </div>
                  <div className="panel-scale" aria-hidden="true"><span /><span /><span /><span /><span /></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="perspective" className="route-section-dark relative overflow-hidden bg-[#06142f] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="absolute left-0 top-0 h-full w-full opacity-30 hero-grid" />
        <div className="perspective-route" aria-hidden="true"><span /></div>
        <div className="relative mx-auto max-w-[1240px]">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-[#00c7ff]" />
              <img src={assets.insight} alt="Integrated data becoming a clear signal" className="relative aspect-[4/3] w-full object-cover shadow-[24px_30px_0_rgba(0,199,255,0.08)]" />
              <div className="instrument-overlay" aria-hidden="true"><span>COORD / 31.04 / 120.75</span><i /><b /></div>
              <div className="absolute bottom-5 left-5 border border-white/15 bg-[#06142f]/80 px-3 py-2 font-mono text-[0.6rem] tracking-[0.14em] text-[#9beaff] backdrop-blur-md">
                SIGNAL LOCKED
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="section-label-light"><img src={assets.mark} alt="" aria-hidden="true" /><p className="eyebrow-light">PERSPECTIVE / SIGNAL OVER NOISE</p></div>
              <h2 className="mt-5 max-w-[620px] font-display text-5xl font-semibold leading-[0.99] tracking-[-0.065em] text-white sm:text-6xl">
                Data should not end in reports.<br />It should <span className="text-[#77ddf7]">change the next decision.</span>
              </h2>
              <p className="mt-7 max-w-[585px] text-base leading-8 text-white/63 sm:text-lg">
                When a marketing system has one shared coordinate, teams can move from “what did we see?” to “what should we advance next?” Astral lets insight participate in real decisions.
              </p>
              <div className="mt-10 grid max-w-[565px] grid-cols-2 gap-x-7 gap-y-6 border-t border-white/15 pt-6">
                <div>
                  <p className="font-mono text-[0.61rem] tracking-[0.14em] text-white/43">INPUT</p>
                  <p className="mt-2 text-sm text-white/84">Business goals and audience intent</p>
                </div>
                <div>
                  <p className="font-mono text-[0.61rem] tracking-[0.14em] text-white/43">OUTPUT</p>
                  <p className="mt-2 text-sm text-white/84">A clearer growth action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="route-section-light relative overflow-hidden bg-[#e9eef7] px-5 py-24 text-[#0b1c3d] sm:px-8 sm:py-32 lg:px-12">
        <div className="absolute right-[12%] top-0 h-32 w-px bg-[#6f5cff]" />
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="section-label-dark"><img src={assets.mark} alt="" aria-hidden="true" /><p className="eyebrow-dark">THE ASTRAL METHOD</p></div>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl">Turn uncertainty<br />into your next verifiable move.</h2>
            </div>
            <p className="max-w-[430px] text-base leading-8 text-[#0b1c3d]/65">A working rhythm beyond slogans: capture credible signals, calibrate decision coordinates, then steadily amplify proven momentum.</p>
          </div>

          <div className="relative mt-16 grid gap-4 border-t border-[#0b1c3d]/15 pt-4 lg:grid-cols-[1.05fr_0.9fr_1.05fr] lg:gap-5">
            <div className="method-orbit-line hidden lg:block" />
            {methodology.map((step, index) => (
              <article key={step.number} className={`diagnostic-panel relative border border-[#0b1c3d]/15 bg-[#f2f5fb] px-7 py-8 lg:px-8 lg:py-10 ${index === 1 ? "lg:mt-14" : index === 2 ? "lg:mt-5" : "lg:mt-0"}`}>
                <div className="flex items-center justify-between border-b border-[#0b1c3d]/11 pb-4">
                  <span className="font-mono text-[0.58rem] tracking-[0.14em] text-[#0b1c3d]/45">ROUTE_PHASE_{step.number}</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#0b1c3d]/30 bg-[#e9eef7] font-mono text-[0.57rem] text-[#0b1c3d]">{step.number}</span>
                </div>
                <p className="mt-10 font-mono text-[0.62rem] font-semibold tracking-[0.17em] text-[#008ec0]">{step.eyebrow}</p>
                <h3 className="mt-4 max-w-[270px] font-display text-3xl font-semibold leading-[1.02] tracking-[-0.05em]">{step.title}</h3>
                <p className="mt-5 max-w-[320px] text-sm leading-7 text-[#0b1c3d]/64">{step.copy}</p>
                <div className="mt-10 flex items-center justify-between border-t border-[#0b1c3d]/11 pt-4">
                  <span className="font-mono text-[0.58rem] tracking-[0.1em] text-[#0b1c3d]/47">INPUT → OUTPUT</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#008ec0]" />
                </div>
                <div className="panel-scale" aria-hidden="true"><span /><span /><span /><span /><span /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="route-section-dark relative overflow-hidden bg-[#081a3a] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
            <img src={assets.campaign} alt="Abstract visual of content and distribution being amplified" className="h-full w-full object-cover opacity-75 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#081a3a] via-[#081a3a]/55 to-transparent" />
            <div className="campaign-instrument" aria-hidden="true"><span>ROUTE TRACE / ACTIVE</span><i /><b /></div>
        </div>
        <div className="relative mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="section-label-light"><img src={assets.mark} alt="" aria-hidden="true" /><p className="eyebrow-light">CONTENT THAT TRAVELS</p></div>
            <h2 className="mt-5 max-w-[650px] font-display text-5xl font-semibold leading-[0.97] tracking-[-0.065em] text-white sm:text-6xl">Content is not a poster.<br />It is a force that <span className="text-[#77ddf7]">keeps reaching.</span></h2>
          </div>
          <p className="max-w-[410px] border-l border-[#00c7ff]/60 pl-5 text-base leading-8 text-white/72">From narrative structure to distribution systems, we design content assets that can be understood, discussed, and carried into the next action.</p>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#031128] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
        <div className="absolute inset-0 contact-grid opacity-70" />
        <div className="absolute -right-14 -top-20 text-[17rem] font-display font-semibold leading-none tracking-[-0.16em] text-[#00c7ff]/[0.08] sm:text-[27rem]">A</div>
        <div className="contact-route" aria-hidden="true"><span className="contact-node" /></div>
        <div className="relative mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="flex items-center gap-3 font-mono text-[0.68rem] font-semibold tracking-[0.16em] text-[#8fe9fb]"><img src={assets.mark} alt="" aria-hidden="true" className="h-4 w-4 object-contain" /> SIGNAL LOCKED / NEXT COORDINATE</p>
            <h2 className="mt-5 max-w-[790px] font-display text-5xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-7xl">Calibrate your next<br />growth route.</h2>
          </div>
          <button type="button" onClick={handleConsultation} className="group inline-flex min-w-[220px] items-center justify-between bg-[#00c7ff] px-6 py-5 font-mono text-xs font-semibold tracking-[0.13em] text-[#041128] transition-all duration-200 hover:-translate-y-1 hover:bg-[#8beaff] active:scale-[0.97]">
            START A STRATEGY CONVERSATION <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      <footer className="bg-[#041128] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img src={assets.mark} alt="Astral" className="h-9 w-9 object-contain" />
              <span className="wordmark">A<span>stral</span></span>
            </div>
            <p className="mt-3 text-sm text-white/43">Zhangjiagang Astral Dimension Technology Co., Ltd. · Digital Growth Marketing</p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 font-mono text-[0.62rem] tracking-[0.13em] text-white/43">
            <span>© 2026 ASTRAL</span>
            <button type="button" onClick={() => scrollToSection("top")} className="transition-colors hover:text-[#00c7ff]">BACK TO ORIGIN ↑</button>
          </div>
        </div>
      </footer>
    </main>
  );
}
