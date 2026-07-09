import { links } from "@/data/links"
import { Card, CardContent } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  InstagramIcon,
  YoutubeIcon,
  GithubIcon,
} from "@hugeicons/core-free-icons"

export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center bg-[#090b11] text-white overflow-hidden px-6 py-12">
      {/* 몽환적인 오로라 배경 글로우 서클 */}
      <div className="absolute top-[-10%] left-[-20%] w-[380px] h-[380px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[380px] h-[380px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] left-[50%] -translate-x-1/2 w-[320px] h-[320px] rounded-full bg-pink-500/10 blur-[130px] pointer-events-none" />

      <div className="w-full max-w-md space-y-9 flex flex-col items-center z-10">
        {/* 프로필 섹션 */}
        <div className="flex flex-col items-center text-center">
          {/* 빛나는 그라데이션 테두리를 가진 아바타 */}
          <div className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 shadow-2xl shadow-purple-500/10">
            <div className="w-full h-full rounded-full bg-[#0d111d] flex items-center justify-center text-white font-extrabold text-3xl select-none">
              SO
            </div>
          </div>
          <h1 className="text-2xl font-bold mt-5 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
            오세인 (Sein Oh)
          </h1>
          <p className="text-sm text-slate-400 mt-2.5 max-w-xs leading-relaxed">
            새로운 가치를 만드는 프론트엔드 개발자입니다. 저의 SNS 채널 및 포트폴리오를 둘러보세요!
          </p>

          {/* 소셜 링크 아이콘 바 (요구사항 O-03 반영) */}
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://instagram.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Instagram"
            >
              <HugeiconsIcon icon={InstagramIcon} className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/channel/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="YouTube"
            >
              <HugeiconsIcon icon={YoutubeIcon} className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="GitHub"
            >
              <HugeiconsIcon icon={GithubIcon} className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 링크 목록 */}
        <div className="w-full space-y-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group outline-none"
            >
              <Card className="relative overflow-hidden hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 ease-out border-white/10 dark:border-white/5 bg-[#0f1322]/60 hover:bg-[#13192e]/80 backdrop-blur-xl py-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-purple-500/5">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    {/* 개별 브랜드 색상 그라데이션을 두른 고급 아이콘 컨테이너 */}
                    {link.icon && (
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${link.highlightColor} p-[1.5px] flex items-center justify-center shadow-inner`}>
                        <div className="w-full h-full rounded-[10px] bg-[#0d111d] flex items-center justify-center text-white">
                          <HugeiconsIcon icon={link.icon} className="w-5 h-5" />
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col text-left">
                      <span className="font-semibold text-[15px] text-slate-100 group-hover:text-white transition-colors duration-200">
                        {link.title}
                      </span>
                      {link.description && (
                        <span className="text-xs text-slate-400 mt-1 line-clamp-1">
                          {link.description}
                        </span>
                      )}
                    </div>
                  </div>
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="w-5 h-5 text-slate-400/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                  />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* 푸터 섹션 */}
        <div className="text-center font-mono text-[11px] text-slate-500/80 pt-6 border-t border-white/5 w-full">
          © {new Date().getFullYear()} Sein Oh. All rights reserved.
        </div>
      </div>
    </div>
  )
}
