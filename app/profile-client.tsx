"use client";

import { useState, useEffect } from "react";
import { 
  Mail, 
  ExternalLink, 
  Sun, 
  Moon, 
  Code, 
  Cpu, 
  Sparkles, 
  GraduationCap, 
  Heart,
  Terminal,
  Layers,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  Minus,
  X
} from "lucide-react";
import Image from "next/image";

// Custom Github Icon for Lucide compatibility (Neon Brutalism solid style)
const Github = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProfilePageClient() {
  const [darkMode, setDarkMode] = useState(true); // 기본 다크모드 우선
  const [activeTab, setActiveTab] = useState("all");
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [mounted, setMounted] = useState(false);

  // Sync theme with document class
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    // 사용자가 라이트모드를 명시적으로 설정한 경우가 아니라면 사이버 다크모드로 디폴트 설정
    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setEmailSent(true);
      setTimeout(() => {
        setEmailSent(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050508] font-mono text-[#00f2fe]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#00f2fe] border-t-transparent animate-spin"></div>
          <span className="font-black tracking-widest uppercase animate-flicker">INITIALIZING NEON CONSOLE...</span>
        </div>
      </div>
    );
  }

  const projects = [
    {
      title: "VibePort",
      category: "frontend",
      description: "개발자들을 위한 마크다운 기반의 프리미엄 포트폴리오 생성기. 직관적인 UI와 반응형 템플릿을 제공합니다.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Zustand"],
      github: "https://github.com",
      demo: "https://github.com",
      image: "/vibeport_thumb.png"
    },
    {
      title: "StudyMate",
      category: "fullstack",
      description: "대학생들을 위한 실시간 협업 스터디 타이머 및 계획 플래너. 소켓 통신을 활용한 뽀모도로 타이머 동기화를 구현했습니다.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://github.com",
      image: "/studymate_thumb.png"
    },
    {
      title: "DevSpace Blog",
      category: "frontend",
      description: "정적 사이트 생성을 지원하는 초경량 기술 블로그. MDX 파싱과 코드 하이라이팅, SEO 최적화를 커스텀하게 구현했습니다.",
      tags: ["Next.js", "MDX", "TailwindCSS", "Plausible"],
      github: "https://github.com",
      demo: "https://github.com",
      image: "/devspace_thumb.png"
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 pb-24 font-mono antialiased relative">
      
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(0,242,254,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,254,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background border-b-3 border-foreground px-6 h-20 flex items-center justify-between transition-colors">
        <a href="#" className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2 text-foreground hover:text-[var(--accent-cyan)] transition-colors">
          <Terminal className="w-6 h-6 text-[var(--accent-cyan)]" />
          <span>SEIN.OH</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 font-black text-sm uppercase">
          {["about", "skills", "projects", "contact"].map((link) => (
            <a 
              key={link} 
              href={`#${link}`} 
              className="px-3 py-1 border-2 border-transparent hover:border-foreground hover:bg-[var(--accent-cyan)] hover:text-black transition-all"
            >
              // {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="neon-btn-pink p-3 border-3 text-white cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-black" /> : <Moon className="w-5 h-5" />}
          </button>
          <a 
            href="#contact" 
            className="neon-btn-cyan border-3 text-black font-black"
          >
            HIRE ME
          </a>
        </div>
      </header>

      {/* Main Container - Wide Responsive Layout */}
      <main className="max-w-7xl mx-auto px-6 mt-12 space-y-28 md:space-y-40">
        
        {/* Hero Section (Split 와이드 랜딩 디자인) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-6">
          
          {/* Left Panel: 거대 타이포그래피 터미널 */}
          <div className="lg:col-span-7 flex flex-col justify-between neon-card-cyan p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-black text-xs text-cyan-400/30 uppercase tracking-widest select-none">
              TERMINAL_SYS_V4.0
            </div>
            
            <div className="space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[var(--accent-cyan)] bg-cyan-950/20 text-[var(--accent-cyan)] text-xs md:text-sm font-black tracking-wide uppercase">
                <span className="w-2.5 h-2.5 bg-[#39ff14] rounded-full animate-flicker" />
                SYSTEM STATUS: ONLINE
              </div>
              
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase select-none">
                안녕하세요,<br />
                오세인 입니다.
              </h1>

              <p className="text-sm md:text-lg font-bold leading-relaxed border-t-3 border-[var(--accent-cyan)] pt-6 text-foreground/80 pl-4 border-l-3 border-l-[var(--accent-cyan)] bg-slate-950/10 dark:bg-cyan-950/5">
                배움을 즐기며, 기술을 조화롭게 엮어 일상을 다채롭게 바꾸는 웹 서비스를 구현합니다. 
                현재 Next.js와 디자인 시스템에 몰입하여 코드를 작성하고 있습니다.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-8 z-10">
              <a 
                href="#projects" 
                className="neon-btn-pink border-3"
              >
                PROJECTS ➔
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="neon-btn-cyan border-3 text-black"
              >
                <Github className="w-5 h-5 mr-2 inline-block align-text-bottom" /> VISIT GITHUB
              </a>
            </div>
          </div>

          {/* Right Panel: 사이버 터미널 코드 위젯 */}
          <div className="lg:col-span-5 neon-card-pink overflow-hidden flex flex-col justify-between">
            {/* Terminal Top Window Title bar */}
            <div className="bg-[#050508] border-b-3 border-[var(--accent-pink)] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 bg-rose-500 border border-black rounded-full" />
                <span className="w-3.5 h-3.5 bg-yellow-500 border border-black rounded-full" />
                <span className="w-3.5 h-3.5 bg-green-500 border border-black rounded-full" />
              </div>
              <span className="text-[10px] font-black text-[var(--accent-pink)] tracking-wider">developer_profile.json</span>
              <div className="flex items-center gap-1.5 text-neutral-500">
                <Minus className="w-3.5 h-3.5" />
                <Maximize2 className="w-3.5 h-3.5" />
                <X className="w-3.5 h-3.5" />
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 md:p-8 flex-1 bg-[#09090f] text-[var(--accent-pink)] text-xs md:text-sm overflow-y-auto space-y-4">
              <p className="text-neutral-500">// Welcome to Cyber Console</p>
              <div className="space-y-1 select-all font-mono">
                <p><span className="text-cyan-400">const</span> developer = &#123;</p>
                <p className="pl-4">name: <span className="text-yellow-400">"오세인"</span>,</p>
                <p className="pl-4">role: <span className="text-yellow-400">"Creative Developer"</span>,</p>
                <p className="pl-4">status: <span className="text-lime-400">"Seeking Opportunities"</span>,</p>
                <p className="pl-4">location: <span className="text-yellow-400">"Seoul, S.Korea"</span>,</p>
                <p className="pl-4">hobbies: [<span className="text-yellow-400">"UI Design"</span>, <span className="text-yellow-400">"Next.js"</span>],</p>
                <p className="pl-4">vibe: <span className="text-lime-400">"Neon Brutalism"</span></p>
                <p>&#125;;</p>
              </div>
              
              <div className="border-t border-rose-950 pt-4 mt-4 font-mono">
                <p className="text-neutral-400">&gt; npm run dev --theme=neon</p>
                <p className="text-lime-400 animate-flicker">✓ Ready in 836ms</p>
                <p className="text-cyan-400">&gt; localhost:3000</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section (와이드 가로형 3패널 패널) */}
        <section id="about" className="scroll-mt-24 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-3 border-foreground pb-4">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
              // ABOUT ME
            </h2>
            <p className="text-xs md:text-sm font-black text-foreground/60 mt-2 md:mt-0 max-w-md">
              학습의 원동력과 가치관을 바탕으로 끊임없이 성장하며 문제를 해결합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="neon-card-cyan p-8 group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,242,254,1)]">
              {/* Header Tab Bar Style */}
              <div className="flex justify-between items-center border-b-2 border-[var(--accent-cyan)] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-[var(--accent-cyan)]" />
                  <span className="text-xs font-black text-[var(--accent-cyan)]">SYS_LEARNING</span>
                </div>
                <div className="w-2.5 h-2.5 bg-[var(--accent-cyan)] rounded-none" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 text-white uppercase tracking-tighter">지속적인 배움</h3>
              <p className="text-xs md:text-sm font-bold leading-relaxed text-foreground/80">
                직관적이고 인터랙티브한 코딩을 지향하고 있으며, 최신 웹 생태계를 깊게 파고드는 성장형 대학생 개발자입니다.
              </p>
            </div>

            {/* Card 2 */}
            <div className="neon-card-pink p-8 group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(255,0,127,1)]">
              {/* Header Tab Bar Style */}
              <div className="flex justify-between items-center border-b-2 border-[var(--accent-pink)] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-[var(--accent-pink)] fill-rose-500/10" />
                  <span className="text-xs font-black text-[var(--accent-pink)]">SYS_EXPERIENCE</span>
                </div>
                <div className="w-2.5 h-2.5 bg-[var(--accent-pink)] rounded-none" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 text-white uppercase tracking-tighter">사용자 경험 중심</h3>
              <p className="text-xs md:text-sm font-bold leading-relaxed text-foreground/80">
                아름다운 레이아웃뿐 아니라 디테일한 반응성, 섬세하고 트렌디한 마이크로 인터랙션에 매료되어 프론트엔드 역량을 키우고 있습니다.
              </p>
            </div>

            {/* Card 3 */}
            <div className="neon-card-lime p-8 group hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(57,255,20,1)]">
              {/* Header Tab Bar Style */}
              <div className="flex justify-between items-center border-b-2 border-[var(--accent-lime)] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-[var(--accent-lime)]" />
                  <span className="text-xs font-black text-[var(--accent-lime)]">SYS_ARCH</span>
                </div>
                <div className="w-2.5 h-2.5 bg-[var(--accent-lime)] rounded-none" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 text-white uppercase tracking-tighter">견고한 설계</h3>
              <p className="text-xs md:text-sm font-bold leading-relaxed text-foreground/80">
                TypeScript와 Next.js를 연동하여 완전한 형식 안전성을 추구하며, 확장 가능하고 예측 가능한 소프트웨어 설계를 지향합니다.
              </p>
            </div>

          </div>
        </section>

        {/* Skills Section (Bento Grid 배치) */}
        <section id="skills" className="scroll-mt-24 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-3 border-foreground pb-4">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
              // SKILL STACK
            </h2>
            <p className="text-xs md:text-sm font-black text-foreground/60 mt-2 md:mt-0 max-w-md">
              프로젝트와 실무에 적극적으로 활용하는 핵심 기술과 도구들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Frontend Skills (Bento 1) */}
            <div className="neon-card-cyan p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b-2 border-[var(--accent-cyan)] pb-3 mb-4">
                  <Code className="w-5 h-5 text-[var(--accent-cyan)]" />
                  <h3 className="font-black text-lg text-white uppercase">Frontend</h3>
                </div>
                <div className="space-y-5">
                  {[
                    { name: "React / Next.js", level: 90 },
                    { name: "TypeScript", level: 80 },
                    { name: "TailwindCSS", level: 95 },
                    { name: "Zustand & State tools", level: 75 }
                  ].map((s) => (
                    <div key={s.name} className="space-y-2">
                      <div className="flex justify-between text-xs font-black text-neutral-350">
                        <span>{s.name}</span>
                        <span>{s.level}%</span>
                      </div>
                      <div className="h-4 w-full bg-[#050508] border-2 border-[var(--accent-cyan)] rounded-none overflow-hidden relative shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8)]">
                        <div className="h-full bg-[var(--accent-cyan)] border-r-2 border-black" style={{ width: `${s.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Skills (Bento 2) */}
            <div className="neon-card-pink p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b-2 border-[var(--accent-pink)] pb-3 mb-4">
                  <Cpu className="w-5 h-5 text-[var(--accent-pink)]" />
                  <h3 className="font-black text-lg text-white uppercase">Backend</h3>
                </div>
                <div className="space-y-5">
                  {[
                    { name: "Node.js (Express)", level: 70 },
                    { name: "MongoDB", level: 65 },
                    { name: "RESTful API Design", level: 80 },
                    { name: "Supabase / Firebase", level: 75 }
                  ].map((s) => (
                    <div key={s.name} className="space-y-2">
                      <div className="flex justify-between text-xs font-black text-neutral-350">
                        <span>{s.name}</span>
                        <span>{s.level}%</span>
                      </div>
                      <div className="h-4 w-full bg-[#050508] border-2 border-[var(--accent-pink)] rounded-none overflow-hidden relative shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8)]">
                        <div className="h-full bg-[var(--accent-pink)] border-r-2 border-black" style={{ width: `${s.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DevTools & Design (Bento 3) */}
            <div className="neon-card-lime p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b-2 border-[var(--accent-lime)] pb-3 mb-4">
                  <Layers className="w-5 h-5 text-[var(--accent-lime)]" />
                  <h3 className="font-black text-lg text-white uppercase">Tools & UI/UX</h3>
                </div>
                <div className="space-y-5">
                  {[
                    { name: "Git & GitHub", level: 85 },
                    { name: "Figma (UI Design)", level: 80 },
                    { name: "Vercel / Netlify", level: 90 },
                    { name: "Docker", level: 50 }
                  ].map((s) => (
                    <div key={s.name} className="space-y-2">
                      <div className="flex justify-between text-xs font-black text-neutral-350">
                        <span>{s.name}</span>
                        <span>{s.level}%</span>
                      </div>
                      <div className="h-4 w-full bg-[#050508] border-2 border-[var(--accent-lime)] rounded-none overflow-hidden relative shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8)]">
                        <div className="h-full bg-[var(--accent-lime)] border-r-2 border-black" style={{ width: `${s.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section (포스터 와이드 디자인) */}
        <section id="projects" className="scroll-mt-24 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-3 border-foreground pb-4">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
              // PROJECTS
            </h2>
            
            {/* Filter Tabs (직각 형광 필터) */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0 p-1 bg-[#0c0c14] border-2 border-foreground rounded-none">
              {["all", "frontend", "fullstack"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 font-black text-xs md:text-sm uppercase transition-all duration-150 cursor-pointer rounded-none border-2 border-transparent ${
                    activeTab === tab 
                      ? "bg-[var(--accent-cyan)] text-black border-foreground" 
                      : "text-foreground hover:bg-neutral-800"
                  }`}
                >
                  {tab === "all" ? "전체" : tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid (Bento/포스터 와이드 그리드) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div 
                key={p.title} 
                className="neon-card flex flex-col h-full overflow-hidden group hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                {/* Image layout with harsh Neobrutalism border */}
                <div className="h-56 relative overflow-hidden bg-slate-900 border-b-3 border-foreground">
                  <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-cyan-950/20 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-[#09090f]">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 text-[9px] font-black uppercase border-2 border-black bg-[var(--accent-cyan)] text-black shadow-[2px_2px_0px_0px_#000]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs md:text-sm font-bold leading-relaxed text-foreground/75">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-4 text-xs font-black text-[var(--accent-cyan)] uppercase border-t-2 border-foreground">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 hover:underline"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a 
                      href={p.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo ➔
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section (터미널 윈도우 스타일 대형 폼) */}
        <section id="contact" className="scroll-mt-24 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-3 border-foreground pb-4">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
              // CONTACT ME
            </h2>
            <p className="text-xs md:text-sm font-black text-foreground/60 mt-2 md:mt-0 max-w-md">
              프로젝트 제안이나 협업 등 소중한 연락을 기다립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Info Panel */}
            <div className="lg:col-span-5 flex">
              <div className="neon-card-pink p-8 md:p-12 space-y-8 flex flex-col justify-between w-full relative overflow-hidden group">
                <div className="space-y-4 relative z-10">
                  <h3 className="font-black text-2xl md:text-3xl text-white uppercase tracking-tighter">Let's build something together!</h3>
                  <p className="text-xs md:text-sm font-bold leading-relaxed text-foreground/80">
                    언제든지 의견이나 제안이 있으시면 우측 폼 또는 아래 정보를 이용해 메시지를 남겨주세요.
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t-3 border-[var(--accent-pink)] relative z-10">
                  <a 
                    href="mailto:osein@example.com" 
                    className="flex items-center gap-4 p-4 border-3 border-foreground bg-[#0c0c14] text-white hover:bg-[var(--accent-pink)] hover:text-black hover:translate-x-1 hover:translate-y-1 transition-all shadow-[4px_4px_0px_0px_var(--accent-pink)]"
                  >
                    <div className="p-2 border-2 border-foreground bg-[#0c0c14]">
                      <Mail className="w-5 h-5 text-[var(--accent-pink)]" />
                    </div>
                    <div>
                      <div className="text-[9px] text-neutral-400 font-black uppercase tracking-wider">Email</div>
                      <div className="font-black text-sm md:text-base">osein@example.com</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 border-3 border-foreground bg-[#0c0c14] text-white hover:bg-[var(--accent-cyan)] hover:text-black hover:translate-x-1 hover:translate-y-1 transition-all shadow-[4px_4px_0px_0px_var(--accent-cyan)]"
                  >
                    <div className="p-2 border-2 border-foreground bg-[#0c0c14]">
                      <Github className="w-5 h-5 text-[var(--accent-cyan)]" />
                    </div>
                    <div>
                      <div className="text-[9px] text-neutral-400 font-black uppercase tracking-wider">GitHub</div>
                      <div className="font-black text-sm md:text-base">github.com/osein</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Form (터미널 UI 스타일) */}
            <div className="lg:col-span-7">
              <form 
                onSubmit={handleSendMessage} 
                className="neon-card-cyan p-8 md:p-12 space-y-6 h-full relative overflow-hidden"
              >
                {emailSent && (
                  <div className="absolute inset-0 bg-cyan-950 z-20 flex flex-col items-center justify-center space-y-4 p-8 border-4 border-[var(--accent-cyan)] animate-fade-in text-center">
                    <CheckCircle2 className="w-16 h-16 text-[var(--accent-lime)] animate-bounce" />
                    <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">MESSAGE SENT!</h4>
                    <p className="text-xs md:text-sm font-bold text-cyan-300 max-w-md">소중한 의견 감사드립니다. 기재해 주신 메일로 신속히 답변 드리겠습니다.</p>
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="font-black text-xl md:text-2xl text-white uppercase tracking-tighter">간편 메시지 발송</h3>
                  <p className="text-xs font-bold text-foreground/60">성함과 이메일 주소를 입력해 주시면 감사하겠습니다.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-black uppercase tracking-wider">이름</label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="홍길동" 
                      className="neon-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-black uppercase tracking-wider">이메일</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="example@domain.com" 
                      className="neon-input"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-black uppercase tracking-wider">내용</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="협업 제안이나 피드백을 적어주세요." 
                    className="neon-input resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="neon-btn-cyan w-full py-4 text-sm font-black tracking-wide"
                >
                  MESSAGE SEND ➔
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-28 py-8 text-center text-xs md:text-sm font-black uppercase border-t-3 border-foreground relative z-10 transition-colors">
        <p>© 2026 Sein Oh. All rights reserved.</p>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-neutral-500">
          Made with <Heart className="w-4 h-4 text-[var(--accent-pink)] fill-[var(--accent-pink)]" /> & Next.js Neon Brutalism
        </p>
      </footer>

    </div>
  );
}
