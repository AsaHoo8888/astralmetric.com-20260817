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
  mark: "/manus-storage/astral-brand-mark-white_52916e21.png",
  hero: "/manus-storage/astral-hero-portal_0c0ed2f0.png",
  insight: "/manus-storage/astral-insight-signal_b526daaa.png",
  campaign: "/manus-storage/astral-campaign-current_871eebc9.png",
};

const navItems = [
  { label: "能力", target: "capabilities" },
  { label: "方法", target: "method" },
  { label: "观点", target: "perspective" },
];

const capabilities = [
  {
    id: "01",
    icon: Crosshair,
    title: "SEO 搜索引擎优化",
    description: "围绕搜索意图、内容结构与技术基础，持续提升品牌在关键搜索场景中的自然可见度。",
    note: "Intent / Content / Technical SEO",
    status: "VISIBILITY / READY",
    output: "OUT / 搜索增长机会图谱",
  },
  {
    id: "02",
    icon: RadioTower,
    title: "GEO 生成式引擎优化",
    description: "面向 AI 搜索与生成式答案场景，建设清晰的品牌实体、内容证据与可引用信息。",
    note: "Entity / Citation / AI Visibility",
    status: "CITATION / READY",
    output: "OUT / AI 可见度内容框架",
  },
  {
    id: "03",
    icon: BarChart3,
    title: "Google Ads 效果投放",
    description: "从关键词策略到转化追踪，持续校准搜索、展示与自动化广告系列的增长效率。",
    note: "Search / Performance / Conversion",
    status: "CONVERSION / ACTIVE",
    output: "OUT / 可扩展投放路径",
  },
  {
    id: "04",
    icon: Orbit,
    title: "Meta Ads 社交广告",
    description: "通过创意测试、受众分层与再营销，让社交媒体注意力转化为可衡量的业务行动。",
    note: "Creative / Audience / Retargeting",
    status: "AUDIENCE / ACTIVE",
    output: "OUT / 创意与人群实验矩阵",
  },
];

const methodology = [
  {
    number: "01",
    eyebrow: "CAPTURE",
    title: "识别搜索与需求信号",
    copy: "从搜索意图、用户旅程与竞争空间中，识别值得被内容、AI 答案与广告共同放大的真实需求。",
    input: "IN / 需求、查询、受众信号",
    output: "OUT / 优先级增长机会",
  },
  {
    number: "02",
    eyebrow: "CALIBRATE",
    title: "校准内容与广告航线",
    copy: "用 SEO 结构、GEO 内容证据与广告创意形成同一套决策坐标，让每次触达知道自己正在推动什么。",
    input: "IN / 内容、页面、创意资产",
    output: "OUT / 协同触达航线",
  },
  {
    number: "03",
    eyebrow: "AMPLIFY",
    title: "放大已验证的转化势能",
    copy: "以归因与持续实验积累确定性，在有效方向上递进投入，将单次成果变成可复制的增长系统。",
    input: "IN / 转化、成本、归因数据",
    output: "OUT / 可扩展增长效率",
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
    toast("咨询入口将在正式上线时接入", {
      description: "当前为品牌官网演示版本，可在发布前配置表单或企业邮箱。",
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
            aria-label="返回首页"
          >
            <img src={assets.mark} alt="Astral" className="h-9 w-9 object-contain transition-transform duration-200 group-hover:rotate-6" />
            <span className="wordmark text-white">A<span>stral</span></span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="主导航">
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
            开始校准 <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center border border-white/15 text-white lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#071a3d]/98 px-5 py-5 backdrop-blur-xl lg:hidden">
            <nav className="mx-auto flex max-w-[1440px] flex-col gap-1" aria-label="移动端导航">
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
                开始校准
              </button>
            </nav>
          </div>
        )}
      </header>

      <section id="top" className="relative isolate min-h-[800px] overflow-hidden pt-[76px] sm:min-h-[860px]">
        <div className="absolute inset-0 bg-[#06142f]" />
        <img src={assets.hero} alt="抽象的数字增长门户视觉" className="absolute inset-0 h-full w-full object-cover object-[64%_center] opacity-85" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#06142f_0%,rgba(6,20,47,0.92)_29%,rgba(6,20,47,0.36)_61%,rgba(6,20,47,0.12)_100%)]" />
        <div className="absolute inset-0 hero-grid opacity-60" />
        <div className="absolute left-[8%] top-[23%] h-px w-[20%] bg-gradient-to-r from-transparent via-[#00c7ff]/75 to-transparent" />

        <div className="relative mx-auto flex min-h-[724px] max-w-[1440px] items-center px-5 pb-24 pt-20 sm:px-8 lg:min-h-[784px] lg:px-12">
          <div className="max-w-[720px]">
            <div className="mb-7 flex items-center gap-3 font-mono text-[0.68rem] font-medium tracking-[0.16em] text-[#77ddf7]">
              <span className="signal-dot" />
              AST/01 — SEO / GEO / PAID MEDIA
            </div>
            <h1 className="font-display max-w-[700px] text-[clamp(3.4rem,7.1vw,7.1rem)] font-semibold leading-[0.93] tracking-[-0.075em] text-white">
              让每一次搜索、点击与触达，<br />
              都指向<span className="text-gradient-cyan">增长。</span>
            </h1>
            <p className="mt-8 max-w-[525px] text-base leading-8 text-white/68 sm:text-lg">
              Astral 将 SEO、GEO、Google Ads、Meta Ads 与数据归因连成一条清晰航线，让搜索可见度、广告转化与品牌增长协同发生。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => scrollToSection("capabilities")} className="group inline-flex items-center justify-center gap-3 bg-[#00c7ff] px-6 py-4 font-mono text-xs font-bold tracking-[0.12em] text-[#041128] transition-all duration-200 hover:-translate-y-1 hover:bg-[#76e5ff] active:scale-[0.97]">
                获取服务地图 <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <button type="button" onClick={handleConsultation} className="group inline-flex items-center justify-center gap-3 border border-white/20 bg-white/[0.04] px-6 py-4 font-mono text-xs font-medium tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-1 hover:border-white/60 hover:bg-white/[0.09] active:scale-[0.97]">
                获取增长诊断 <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#06142f]/60 backdrop-blur-sm">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
            {["SEO", "GEO", "Google Ads", "Meta Ads"].map((item, index) => (
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
          {["SEARCH TO ACTION", "AI DISCOVERY", "PAID MEDIA SIGNALS", "MEASURE THE PATH", "SEARCH TO ACTION", "AI DISCOVERY", "PAID MEDIA SIGNALS", "MEASURE THE PATH"].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-10"><CircleDot className="h-3.5 w-3.5 text-[#00c7ff]" />{item}</span>
          ))}
        </div>
      </section>

      <section id="capabilities" className="relative bg-[#f4f6fa] px-5 py-24 text-[#0b1c3d] sm:px-8 sm:py-32 lg:px-12">
        <div className="absolute left-[8%] top-0 h-16 w-px bg-[#00c7ff]" />
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end">
            <div>
              <p className="eyebrow-dark">ASTRAL CAPABILITIES / 2026</p>
              <h2 className="mt-5 max-w-[550px] font-display text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl">
                从自然可见，<br />到一套增长系统。
              </h2>
            </div>
            <p className="max-w-[530px] border-l border-[#0b1c3d]/18 pl-6 text-base leading-8 text-[#0b1c3d]/67 sm:text-lg">
              我们不把 SEO、AI 搜索与付费媒体割裂处理，而是用一套共同的判断逻辑，让内容、广告与数据在同一张增长星图上协同运行。
            </p>
          </div>

          <div className="relative mt-16 grid gap-3 border-t border-[#0b1c3d]/16 pt-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4 lg:pt-4">
            <div className="capability-route" aria-hidden="true"><span className="route-node route-node-a" /><span className="route-node route-node-b" /><span className="route-node route-node-c" /></div>
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              const offsetClasses = ["lg:col-span-3 lg:mt-0", "lg:col-span-3 lg:mt-16", "lg:col-span-3 lg:mt-7", "lg:col-span-3 lg:mt-24"];
              return (
                <article key={item.id} className={`capability-card group relative min-h-[320px] border border-[#0b1c3d]/16 bg-[#f8faff] px-6 py-7 sm:px-7 lg:min-h-[372px] lg:px-8 ${offsetClasses[index]}`}>
                  <div className="flex items-center justify-between gap-2 border-b border-[#0b1c3d]/11 pb-4">
                    <span className="font-mono text-[0.61rem] tracking-[0.12em] text-[#0b1c3d]/45">NODE_{item.id}</span>
                    <span className="panel-state">{item.status}</span>
                    <Icon className="h-5 w-5 text-[#00a9dc] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" strokeWidth={1.6} />
                  </div>
                  <div className="mt-14">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.045em]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#0b1c3d]/66">{item.description}</p>
                  </div>
                  <div className="absolute bottom-7 left-6 right-6 border-t border-[#0b1c3d]/11 pt-4 sm:left-7 sm:right-7 lg:left-8 lg:right-8">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[0.55rem] tracking-[0.1em] text-[#0b1c3d]/42">{item.note}</p>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00c7ff] shadow-[0_0_0_4px_rgba(0,199,255,0.12)]" />
                    </div>
                    <p className="card-output">{item.output}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="perspective" className="relative overflow-hidden bg-[#06142f] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="absolute left-0 top-0 h-full w-full opacity-30 hero-grid" />
        <div className="perspective-route" aria-hidden="true"><span /></div>
        <div className="relative mx-auto max-w-[1240px]">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-[#00c7ff]" />
              <img src={assets.insight} alt="整合后的数据成为明晰信号" className="relative aspect-[4/3] w-full object-cover shadow-[24px_30px_0_rgba(0,199,255,0.08)]" />
              <div className="absolute bottom-5 left-5 border border-white/15 bg-[#06142f]/80 px-3 py-2 font-mono text-[0.6rem] tracking-[0.14em] text-[#9beaff] backdrop-blur-md">
                SIGNAL LOCKED
              </div>
            </div>
            <div className="lg:pl-12">
              <p className="eyebrow-light">PERSPECTIVE / SIGNAL OVER NOISE</p>
              <h2 className="mt-5 max-w-[620px] font-display text-5xl font-semibold leading-[0.99] tracking-[-0.065em] text-white sm:text-6xl">
                曝光不该只是报表，<br />它应该<span className="text-[#77ddf7]">推动下一次行动。</span>
              </h2>
              <p className="mt-7 max-w-[585px] text-base leading-8 text-white/63 sm:text-lg">
                当搜索排名、AI 可见度、广告点击与转化拥有共同坐标，团队才能从“看见了什么”转向“下一步应该推进什么”。Astral 让信号真正参与决策。
              </p>
              <div className="mt-10 grid max-w-[565px] grid-cols-2 gap-x-7 gap-y-6 border-t border-white/15 pt-6">
                <div>
                  <p className="font-mono text-[0.61rem] tracking-[0.14em] text-white/43">INPUT</p>
                  <p className="mt-2 text-sm text-white/84">搜索意图、AI 可见度与广告信号</p>
                </div>
                <div>
                  <p className="font-mono text-[0.61rem] tracking-[0.14em] text-white/43">OUTPUT</p>
                  <p className="mt-2 text-sm text-white/84">可验证的增长决策</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="relative overflow-hidden bg-[#e9eef7] px-5 py-24 text-[#0b1c3d] sm:px-8 sm:py-32 lg:px-12">
        <div className="absolute right-[12%] top-0 h-32 w-px bg-[#6f5cff]" />
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow-dark">THE ASTRAL METHOD</p>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl">把不确定，<br />导向可验证的下一步。</h2>
            </div>
            <p className="max-w-[430px] text-base leading-8 text-[#0b1c3d]/65">一套连接自然搜索、AI 搜索与付费媒介的工作节奏：捕获值得相信的信号，校准决策坐标，再把有效势能稳定地放大。</p>
          </div>

          <div className="relative mt-16 grid gap-4 border-t border-[#0b1c3d]/15 pt-4 lg:grid-cols-[1.05fr_0.9fr_1.05fr] lg:gap-5">
            <div className="method-orbit-line hidden lg:block" />
            {methodology.map((step, index) => (
              <article key={step.number} className={`relative border border-[#0b1c3d]/15 bg-[#f2f5fb] px-7 py-8 lg:px-8 lg:py-10 ${index === 1 ? "lg:mt-14" : index === 2 ? "lg:mt-5" : "lg:mt-0"}`}>
                <div className="flex items-center justify-between border-b border-[#0b1c3d]/11 pb-4">
                  <span className="font-mono text-[0.58rem] tracking-[0.14em] text-[#0b1c3d]/45">ROUTE_PHASE_{step.number}</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#0b1c3d]/30 bg-[#e9eef7] font-mono text-[0.57rem] text-[#0b1c3d]">{step.number}</span>
                </div>
                <p className="mt-10 font-mono text-[0.62rem] font-semibold tracking-[0.17em] text-[#008ec0]">{step.eyebrow}</p>
                <h3 className="mt-4 max-w-[270px] font-display text-3xl font-semibold leading-[1.02] tracking-[-0.05em]">{step.title}</h3>
                <p className="mt-5 max-w-[320px] text-sm leading-7 text-[#0b1c3d]/64">{step.copy}</p>
                <div className="mt-10 border-t border-[#0b1c3d]/11 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.58rem] tracking-[0.1em] text-[#0b1c3d]/47">INPUT → OUTPUT</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#008ec0]" />
                  </div>
                  <p className="mt-2 font-mono text-[0.53rem] tracking-[0.08em] text-[#0b1c3d]/47">{step.input}</p>
                  <p className="mt-1 font-mono text-[0.53rem] tracking-[0.08em] text-[#008ec0]">{step.output}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081a3a] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <img src={assets.campaign} alt="内容与传播被放大的抽象视觉" className="h-full w-full object-cover opacity-75 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081a3a] via-[#081a3a]/55 to-transparent" />
        </div>
        <div className="relative mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="eyebrow-light">CONTENT THAT TRAVELS</p>
            <h2 className="mt-5 max-w-[650px] font-display text-5xl font-semibold leading-[0.97] tracking-[-0.065em] text-white sm:text-6xl">内容不止是一张海报，<br />也是搜索、AI 与广告共同的<span className="text-[#77ddf7]">增长资产。</span></h2>
          </div>
          <p className="max-w-[410px] border-l border-[#00c7ff]/60 pl-5 text-base leading-8 text-white/72">从内容结构到广告素材与分发机制，我们设计能够被搜索、被 AI 理解、被用户点击，并持续产生行动的内容资产。</p>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#031128] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
        <div className="absolute inset-0 contact-grid opacity-70" />
        <div className="absolute -right-14 -top-20 text-[17rem] font-display font-semibold leading-none tracking-[-0.16em] text-[#00c7ff]/[0.08] sm:text-[27rem]">A</div>
        <div className="contact-route" aria-hidden="true"><span className="contact-node" /></div>
        <div className="relative mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="flex items-center gap-3 font-mono text-[0.68rem] font-semibold tracking-[0.16em] text-[#8fe9fb]"><Sparkles className="h-4 w-4" /> SIGNAL LOCKED / NEXT COORDINATE</p>
            <h2 className="mt-5 max-w-[790px] font-display text-5xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-7xl">构建你的搜索与投放<br />增长系统。</h2>
          </div>
          <button type="button" onClick={handleConsultation} className="group inline-flex min-w-[220px] items-center justify-between bg-[#00c7ff] px-6 py-5 font-mono text-xs font-semibold tracking-[0.13em] text-[#041128] transition-all duration-200 hover:-translate-y-1 hover:bg-[#8beaff] active:scale-[0.97]">
            预约服务诊断 <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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
            <p className="mt-3 text-sm text-white/43">张家港星界维度科技有限公司 · SEO、GEO 与全域广告增长</p>
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
