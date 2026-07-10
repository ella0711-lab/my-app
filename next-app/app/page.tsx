'use client'

import React, { useState, useEffect } from 'react'
import { links as defaultLinks, iconMap, LinkItem } from "@/data/links"
import { Card, CardContent } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  InstagramIcon,
  YoutubeIcon,
  GithubIcon,
  PlusSignIcon,
  Delete02Icon,
  ChartUpIcon,
} from "@hugeicons/core-free-icons"
import AddLinkDialog from "@/components/AddLinkDialog"

export default function Page() {
  const [links, setLinks] = useState<LinkItem[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // 컴포넌트 마운트 시 localStorage에서 데이터 로드 (Hydration 에러 방지)
  useEffect(() => {
    setIsMounted(true)
    const stored = localStorage.getItem('mylinks')
    if (stored) {
      try {
        setLinks(JSON.parse(stored))
      } catch (e) {
        setLinks(defaultLinks)
      }
    } else {
      setLinks(defaultLinks)
      localStorage.setItem('mylinks', JSON.stringify(defaultLinks))
    }
  }, [])

  // 링크 데이터 변경 시 localStorage 저장 및 상태 업데이트
  const saveLinks = (updatedLinks: LinkItem[]) => {
    setLinks(updatedLinks)
    localStorage.setItem('mylinks', JSON.stringify(updatedLinks))
  }

  // 링크 추가
  const handleAddLink = (newLink: Omit<LinkItem, 'id' | 'clicks'>) => {
    const linkToAdd: LinkItem = {
      ...newLink,
      id: `link-${Date.now()}`,
      clicks: 0,
    }
    saveLinks([...links, linkToAdd])
  }

  // 링크 삭제
  const handleDeleteLink = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (confirm('이 링크 블록을 삭제하시겠습니까?')) {
      const updated = links.filter((link) => link.id !== id)
      saveLinks(updated)
    }
  }

  // 링크 클릭 통계 누적 및 이동 처리
  const handleLinkClick = (id: string, url: string, e: React.MouseEvent) => {
    e.preventDefault()

    // 클릭수 1 증가
    const updated = links.map((link) =>
      link.id === id ? { ...link, clicks: (link.clicks || 0) + 1 } : link
    )
    saveLinks(updated)

    // 안전하게 새 탭으로 URL 열기
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // 마운트 전에는 빈 화면 대신 어두운 스켈레톤 레이아웃 렌더링
  if (!isMounted) {
    return (
      <div className="relative flex min-h-svh flex-col items-center justify-center bg-[#090b11] text-white overflow-hidden px-6 py-12" />
    )
  }

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

          {/* 소셜 링크 아이콘 바 */}
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
          
          {/* [디자인 개선] 새 링크 블록 추가하기 버튼 (최상단 배치, Primary 테마 색상 적용) */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="w-full group relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/10 backdrop-blur-xl py-4.5 px-6 text-sm font-semibold tracking-wide text-primary-foreground/80 hover:text-primary-foreground flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-[0_8px_32px_0_rgba(255,255,255,0.01)] hover:border-primary/40"
          >
            {/* 은은한 Primary 글로우 레이어 */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary-foreground/75 group-hover:text-primary-foreground transition-colors">
                <HugeiconsIcon icon={PlusSignIcon} className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              </div>
              <span className="text-primary-foreground/90 group-hover:text-primary-foreground transition-colors duration-300">
                새 링크 블록 추가하기
              </span>
            </div>
          </button>

          {links.length === 0 ? (
            <div className="text-center py-10 border border-dashed border-white/5 rounded-2xl bg-white/[0.01]">
              <p className="text-sm text-slate-500">등록된 링크 블록이 없습니다.</p>
            </div>
          ) : (
            links.map((link) => {
              const IconComponent = iconMap[link.iconName || 'link']

              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleLinkClick(link.id, link.url, e)}
                  className="block group outline-none transition-all duration-200 cursor-pointer"
                >
                  <Card className="relative overflow-hidden transition-all duration-300 ease-out border-white/10 dark:border-white/5 bg-[#0f1322]/60 hover:bg-[#13192e]/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-purple-500/5">
                    <CardContent className="flex flex-col p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {/* 개별 브랜드 색상 그라데이션을 두른 고급 아이콘 컨테이너 */}
                          <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${link.highlightColor || 'from-purple-500 to-blue-500'} p-[1.5px] flex items-center justify-center shadow-inner`}>
                            <div className="w-full h-full rounded-[10px] bg-[#0d111d] flex items-center justify-center text-white">
                              {IconComponent && <HugeiconsIcon icon={IconComponent} className="w-5 h-5" />}
                            </div>
                          </div>
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

                        {/* 우측 도구 제어 및 메트릭 */}
                        <div className="flex items-center gap-2.5 z-20">
                          {/* 누적 클릭 카운트 표시 */}
                          <div
                            className="flex items-center gap-1 text-[10px] font-semibold text-slate-400 bg-white/5 border border-white/10 px-2 py-1 rounded-lg transition-colors group-hover:border-purple-500/30 group-hover:bg-purple-500/5"
                            title={`누적 클릭: ${link.clicks || 0}회`}
                          >
                            <HugeiconsIcon icon={ChartUpIcon} className="w-3 h-3 text-purple-400" />
                            <span>{link.clicks || 0}</span>
                          </div>

                          {/* 호버 시 노출되는 삭제 아이콘 */}
                          <button
                            type="button"
                            onClick={(e) => handleDeleteLink(link.id, e)}
                            className="p-1.5 rounded-lg border border-red-500/20 bg-red-500/5 text-red-400 hover:bg-red-500/15 hover:text-red-300 hover:scale-105 active:scale-95 transition-all cursor-pointer md:opacity-0 md:group-hover:opacity-100 duration-200"
                            title="삭제하기"
                          >
                            <HugeiconsIcon icon={Delete02Icon} className="w-3.5 h-3.5" />
                          </button>

                          <HugeiconsIcon
                            icon={ArrowRight01Icon}
                            className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              )
            })
          )}


        </div>

        {/* 푸터 섹션 */}
        <div className="text-center font-mono text-[11px] text-slate-500/80 pt-6 border-t border-white/5 w-full">
          © {new Date().getFullYear()} Sein Oh. All rights reserved.
        </div>
      </div>

      {/* 새 링크 추가 다이얼로그 모달 */}
      <AddLinkDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onAdd={handleAddLink}
      />
    </div>
  )
}


