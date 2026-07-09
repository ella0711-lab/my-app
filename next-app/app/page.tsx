import { links } from "@/data/links"
import { Card, CardContent } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-radial from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6">
      <div className="w-full max-w-md space-y-8 flex flex-col items-center">
        {/* 프로필 섹션 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full border-4 border-background shadow-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-3xl select-none ring-2 ring-primary/10">
            L
          </div>
          <h1 className="text-2xl font-bold mt-4 tracking-tight">오세인 (Sein Oh)</h1>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs leading-relaxed">
            프론트엔드 개발자입니다. 저의 다양한 소셜 네트워크 및 포트폴리오 채널을 방문해보세요!
          </p>
        </div>

        {/* 링크 목록 */}
        <div className="w-full space-y-3.5">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group outline-none"
            >
              <Card className="hover:scale-[1.015] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ease-out border-muted hover:border-primary/20 dark:hover:border-primary/40 bg-card/60 backdrop-blur-md py-0">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    {link.icon && (
                      <div className="w-10 h-10 rounded-lg bg-secondary/50 dark:bg-secondary/20 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-colors">
                        <HugeiconsIcon icon={link.icon} className="w-5 h-5" />
                      </div>
                    )}
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </span>
                  </div>
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="w-5 h-5 text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                  />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* 푸터 섹션 */}
        <div className="text-center font-mono text-xs text-muted-foreground/80 pt-4 border-t border-muted/60 w-full">
          © {new Date().getFullYear()} Sein Oh. All rights reserved.
        </div>
      </div>
    </div>
  )
}
