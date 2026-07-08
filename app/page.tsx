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
  BookOpen,
  Briefcase,
  Layers,
  ChevronRight,
  Send,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";

// Custom Github Icon for Lucide compatibility (removed in v1+)
const Github = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [mounted, setMounted] = useState(false);

  // Sync theme with document class
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
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

  // Avoid hydration mismatch by rendering a loader or placeholder until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
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
      image: "⚡"
    },
    {
      title: "StudyMate",
      category: "fullstack",
      description: "대학생들을 위한 실시간 협업 스터디 타이머 및 계획 플래너. 소켓 통신을 활용한 뽀모도로 타이머 동기화를 구현했습니다.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://github.com",
      image: "⏱️"
    },
    {
      title: "DevSpace Blog",
      category: "frontend",
      description: "정적 사이트 생성을 지원하는 초경량 기술 블로그. MDX 파싱과 코드 하이라이팅, SEO 최적화를 커스텀하게 구현했습니다.",
      tags: ["Next.js", "MDX", "TailwindCSS", "Plausible"],
      github: "https://github.com",
      demo: "https://github.com",
      image: "✍️"
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decorative Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] bg-purple-600/10 dark:bg-purple-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[50%] bg-blue-600/10 dark:bg-blue-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/40 dark:border-slate-800/40 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-mono text-xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent hover:opacity-85 transition-opacity">
            SEIN.OH
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-200/50 hover:bg-slate-200/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 transition-all active:scale-95 shadow-sm"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/35 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 md:py-20 relative z-10 space-y-24 md:space-y-36">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 text-xs font-semibold tracking-wide uppercase animate-pulse">
              <Sparkles className="w-3.5 h-3.5" /> Creative Web Developer
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              안녕하세요, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">오세인</span> 입니다
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed font-normal">
              배움을 즐기며, 기술을 조화롭게 엮어 일상을 다채롭게 바꾸는 웹 서비스를 구현합니다. 
              현재 Next.js와 디자인 시스템에 푹 빠져 매일 몰입하여 코드를 작성하고 있습니다.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-semibold shadow-lg shadow-purple-500/20 dark:shadow-none hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm"
              >
                포트폴리오 보기 <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-200/50 hover:bg-slate-200/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-semibold border border-slate-300/30 dark:border-slate-700/30 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm"
              >
                <Github className="w-5 h-5" /> GitHub 방문
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              {/* Profile Image Frame */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glass dark:glass-dark border border-slate-200/50 dark:border-slate-800/50 p-2 animate-float">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                  <Image 
                    src="/profile_avatar.png"
                    alt="오세인 프로필"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">저를 소개합니다</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-sm text-slate-500 dark:text-slate-400">학습의 원동력과 가치관을 바탕으로 끊임없이 성장합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl glass dark:glass-dark border border-slate-200/50 dark:border-slate-800/50 shadow-sm glass-hover relative overflow-hidden group">
              <div className="p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl w-fit mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">지속적인 배움</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                바이브 코딩을 통해 직관적이고 인터랙티브한 코딩을 경험하고 있으며, 최신 웹 생태계를 깊게 공부하는 대학생 개발자입니다.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl glass dark:glass-dark border border-slate-200/50 dark:border-slate-800/50 shadow-sm glass-hover relative overflow-hidden group">
              <div className="p-3 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl w-fit mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">사용자 경험 중심</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                아름답고 미려한 UI뿐 아니라 빠른 성능, 매끄러운 반응, 그리고 섬세한 마이크로 애니메이션을 설계하는 데 각별한 애정을 가집니다.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl glass dark:glass-dark border border-slate-200/50 dark:border-slate-800/50 shadow-sm glass-hover relative overflow-hidden group">
              <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl w-fit mb-4">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">견고한 설계</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                TypeScript와 최신 Next.js를 기반으로 형식 안정성을 챙기고, 효율적인 비즈니스 로직을 설계하여 확장 가능한 구조를 지향합니다.
              </p>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">보유 기술 스택</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-sm text-slate-500 dark:text-slate-400">능숙히 다룰 수 있거나 프로젝트에 즐겨 활용하는 역량들입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="p-8 rounded-3xl glass dark:glass-dark border border-slate-200/40 dark:border-slate-800/40 space-y-6">
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-bold text-lg">Frontend</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "React / Next.js", level: 90 },
                  { name: "TypeScript", level: 80 },
                  { name: "TailwindCSS", level: 95 },
                  { name: "Zustand & State tools", level: 75 }
                ].map((s) => (
                  <div key={s.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>{s.name}</span>
                      <span className="text-purple-600 dark:text-purple-400">{s.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full" style={{ width: `${s.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="p-8 rounded-3xl glass dark:glass-dark border border-slate-200/40 dark:border-slate-800/40 space-y-6">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-lg">Backend</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Node.js (Express)", level: 70 },
                  { name: "MongoDB", level: 65 },
                  { name: "RESTful API Design", level: 80 },
                  { name: "Supabase / Firebase", level: 75 }
                ].map((s) => (
                  <div key={s.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>{s.name}</span>
                      <span className="text-blue-600 dark:text-blue-400">{s.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-teal-400 rounded-full" style={{ width: `${s.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DevTools & Design */}
            <div className="p-8 rounded-3xl glass dark:glass-dark border border-slate-200/40 dark:border-slate-800/40 space-y-6">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="font-bold text-lg">Tools & UI/UX</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Git & GitHub", level: 85 },
                  { name: "Figma (UI Design)", level: 80 },
                  { name: "Vercel / Netlify", level: 90 },
                  { name: "Docker", level: 50 }
                ].map((s) => (
                  <div key={s.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span>{s.name}</span>
                      <span className="text-indigo-600 dark:text-indigo-400">{s.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: `${s.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24 space-y-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">프로젝트 쇼케이스</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto sm:mx-0 rounded-full"></div>
            </div>

            {/* Filter Tabs */}
            <div className="flex bg-slate-200/50 dark:bg-slate-800/50 p-1.5 rounded-2xl gap-1.5 border border-slate-300/20 dark:border-slate-700/20 text-xs font-semibold">
              {["all", "frontend", "fullstack"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl transition-all capitalize ${
                    activeTab === tab 
                      ? "bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm" 
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  {tab === "all" ? "전체" : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <article 
                key={p.title} 
                className="group rounded-3xl glass dark:glass-dark border border-slate-200/50 dark:border-slate-800/50 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-purple-900/10 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Visual Header / Avatar placeholder */}
                <div className="h-44 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800/50 flex items-center justify-center relative overflow-hidden border-b border-slate-200/30 dark:border-slate-800/30">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300 select-none">{p.image}</span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-2 text-xs font-semibold text-slate-700 dark:text-slate-300 border-t border-slate-200/30 dark:border-slate-800/30">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <Github className="w-4 h-4" /> 코드
                    </a>
                    <a 
                      href={p.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> 라이브 데모
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">연락처 및 링크</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-sm text-slate-500 dark:text-slate-400">언제든 메시지를 보내주시거나 소셜 계정을 확인해보세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Info Panel */}
            <div className="md:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl glass dark:glass-dark border border-slate-200/40 dark:border-slate-800/40 space-y-6 shadow-sm">
                <h3 className="font-bold text-xl">Let's Connect!</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  프로젝트 협업, 네트워킹, 기술 논의 등 언제나 열려 있습니다. 메일이나 아래 링크로 연락주시면 빠른 시일 내에 답변드리겠습니다.
                </p>

                <div className="space-y-4">
                  <a 
                    href="mailto:osein@example.com" 
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-200/40 dark:hover:bg-slate-800/40 transition-colors text-sm"
                  >
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email</div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">osein@example.com</div>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-200/40 dark:hover:bg-slate-800/40 transition-colors text-sm"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">GitHub</div>
                      <div className="font-semibold text-slate-800 dark:text-slate-200">github.com/osein</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="md:col-span-7">
              <form 
                onSubmit={handleSendMessage} 
                className="p-8 rounded-3xl glass dark:glass-dark border border-slate-200/40 dark:border-slate-800/40 space-y-6 shadow-sm relative overflow-hidden"
              >
                {emailSent && (
                  <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center space-y-3 animate-fade-in">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">성공적으로 발송되었습니다!</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">소중한 의견 감사드립니다. 곧 연락드리겠습니다.</p>
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="font-bold text-xl">간편 메시지 보내기</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">이름과 이메일을 남겨주시면 바로 메일이 연동됩니다.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">이름</label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="홍길동" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-300/30 dark:border-slate-700/30 bg-slate-100/50 dark:bg-slate-900/50 focus:border-purple-500 focus:bg-white dark:focus:bg-slate-950 focus:outline-none transition-all text-sm font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">이메일</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="example@domain.com" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-300/30 dark:border-slate-700/30 bg-slate-100/50 dark:bg-slate-900/50 focus:border-purple-500 focus:bg-white dark:focus:bg-slate-950 focus:outline-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">내용</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="프로젝트 협업 제안이나 남기고 싶은 글을 입력해주세요." 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300/30 dark:border-slate-700/30 bg-slate-100/50 dark:bg-slate-900/50 focus:border-purple-500 focus:bg-white dark:focus:bg-slate-950 focus:outline-none transition-all text-sm font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm cursor-pointer"
                >
                  메시지 전송 <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/40 dark:border-slate-800/40 bg-slate-100/30 dark:bg-slate-950/30 py-8 text-center text-xs text-slate-500 dark:text-slate-400 transition-colors duration-300">
        <p>© 2026 Sein Oh. All rights reserved.</p>
        <p className="mt-1 flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> & Next.js App Router
        </p>
      </footer>

    </div>
  );
}
