'use client'

import React, { useState, useEffect, useRef } from 'react'
import { LinkItem, iconMap } from '@/data/links'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Cancel01Icon,
} from '@hugeicons/core-free-icons'

interface AddLinkDialogProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (link: Omit<LinkItem, 'id' | 'clicks'>) => void
}

const colorPresets = [
  { name: '오로라 퍼플', value: 'from-[#8b5cf6] via-[#ec4899] to-[#3b82f6]' },
  { name: '인스타 그라데이션', value: 'from-[#e1306c] via-[#fd1d1d] to-[#fcb045]' },
  { name: '유튜브 레드', value: 'from-[#ff0000] to-[#cc0000]' },
  { name: '네이버 그린', value: 'from-[#03cf5d] to-[#029e47]' },
  { name: '다크 시크', value: 'from-[#24292e] to-[#171a1d]' },
  { name: '포트폴리오 인디고', value: 'from-[#4f46e5] to-[#3730a3]' },
]

export default function AddLinkDialog({ isOpen, onClose, onAdd }: AddLinkDialogProps) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [iconName, setIconName] = useState('link')
  const [highlightColor, setHighlightColor] = useState(colorPresets[0].value)
  const [errors, setErrors] = useState<{ title?: string; url?: string }>({})

  const dialogRef = useRef<HTMLDivElement>(null)

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // 모달이 열릴 때 입력값 초기화
  useEffect(() => {
    if (isOpen) {
      setTitle('')
      setUrl('')
      setDescription('')
      setIconName('link')
      setHighlightColor(colorPresets[0].value)
      setErrors({})
    }
  }, [isOpen])

  if (!isOpen) return null

  // 실시간 검증을 위해 onChange 이벤트 래핑
  const handleTitleChange = (val: string) => {
    setTitle(val)
    if (errors.title) {
      if (val.trim() && val.length <= 50) {
        setErrors(prev => ({ ...prev, title: undefined }))
      }
    }
  }

  const handleUrlChange = (val: string) => {
    setUrl(val)
    if (errors.url) {
      const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/
      if (val.trim() && urlPattern.test(val)) {
        setErrors(prev => ({ ...prev, url: undefined }))
      }
    }
  }

  const validate = () => {
    const newErrors: { title?: string; url?: string } = {}
    if (!title.trim()) {
      newErrors.title = '제목을 입력해주세요.'
    } else if (title.length > 50) {
      newErrors.title = '제목은 최대 50자까지 입력 가능합니다.'
    }

    if (!url.trim()) {
      newErrors.url = 'URL을 입력해주세요.'
    } else {
      // URL 형식 검사 정규식 (프로토콜 생략 가능하게)
      const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/
      if (!urlPattern.test(url)) {
        newErrors.url = '올바른 URL 형식을 입력해주세요. (예: https://example.com)'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    // http:// 또는 https:// 가 안 붙어있으면 기본값으로 https:// 추가
    let formattedUrl = url.trim()
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = `https://${formattedUrl}`
    }

    onAdd({
      title: title.trim(),
      url: formattedUrl,
      description: description.trim() || undefined,
      iconName,
      highlightColor,
      isActive: true,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 백드롭 글로우 아웃포커스 효과 */}
      <div
        className="absolute inset-0 bg-[#07090e]/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      />

      {/* 모달 본체 */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0f1322]/95 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 transform scale-100 animate-in fade-in zoom-in-95 duration-200 text-white"
      >
        {/* 장식용 글로우 배경 */}
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        {/* 헤더 */}
        <div className="relative flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            새로운 링크 블록 추가
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-white/5 hover:text-white transition-all active:scale-95 cursor-pointer"
            aria-label="닫기"
          >
            <HugeiconsIcon icon={Cancel01Icon} className="w-5 h-5" />
          </button>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="relative space-y-5">
          {/* 제목 입력 */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label htmlFor="title" className="text-xs font-semibold text-slate-400 tracking-wider">
                링크 제목 <span className="text-purple-400">*</span>
              </label>
              <span className={`text-[10px] ${title.length >= 45 ? 'text-red-400 font-bold' : 'text-slate-500'}`}>
                {title.length}/50
              </span>
            </div>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="예: 내 포트폴리오 사이트"
              className={`w-full rounded-xl border ${
                errors.title ? 'border-red-500/50 focus:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.1)]' : 'border-white/10 focus:border-purple-500'
              } bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:bg-white/10`}
              maxLength={50}
            />
            {errors.title && <p className="text-xs text-red-400/90 font-medium">{errors.title}</p>}
          </div>

          {/* URL 입력 */}
          <div className="space-y-1.5">
            <label htmlFor="url" className="text-xs font-semibold text-slate-400 tracking-wider">
              목적지 URL <span className="text-purple-400">*</span>
            </label>
            <input
              type="text"
              id="url"
              value={url}
              onChange={(e) => handleUrlChange(e.target.value)}
              placeholder="https://example.com"
              className={`w-full rounded-xl border ${
                errors.url ? 'border-red-500/50 focus:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.1)]' : 'border-white/10 focus:border-purple-500'
              } bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:bg-white/10`}
            />
            {errors.url && <p className="text-xs text-red-400/90 font-medium">{errors.url}</p>}
          </div>

          {/* 설명 입력 */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label htmlFor="description" className="text-xs font-semibold text-slate-400 tracking-wider">
                설명 (선택)
              </label>
              <span className={`text-[10px] ${description.length >= 90 ? 'text-red-400 font-bold' : 'text-slate-500'}`}>
                {description.length}/100
              </span>
            </div>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="링크에 대한 짧은 설명을 적어주세요."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-purple-500 focus:bg-white/10"
              maxLength={100}
            />
          </div>

          {/* 아이콘 선택 */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400 tracking-wider">아이콘 선택</span>
            <div className="flex items-center gap-3">
              {Object.keys(iconMap).map((key) => {
                const IconComponent = iconMap[key]
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setIconName(key)}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                      iconName === key
                        ? 'border-purple-500 bg-purple-500/10 text-white shadow-lg shadow-purple-500/10'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <HugeiconsIcon icon={IconComponent} className="w-5 h-5" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* 그라데이션 프리셋 선택 */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-400 tracking-wider">버튼 그라데이션 테마</span>
            <div className="grid grid-cols-3 gap-2">
              {colorPresets.map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => setHighlightColor(preset.value)}
                  className={`relative flex flex-col items-center justify-center rounded-xl border p-2 text-center transition-all hover:scale-[1.02] active:scale-95 cursor-pointer ${
                    highlightColor === preset.value
                      ? 'border-purple-500 bg-purple-500/10'
                      : 'border-white/5 bg-white/5'
                  }`}
                >
                  <div
                    className={`h-4 w-full rounded-md bg-gradient-to-r ${preset.value} mb-1.5`}
                  />
                  <span className="text-[10px] text-slate-300 font-medium truncate w-full">
                    {preset.name}
                  </span>
                  {highlightColor === preset.value && (
                    <div className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 제출 버튼 */}
          <div className="flex items-center gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-all active:scale-95 cursor-pointer"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex-1 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/95 transition-all active:scale-95 cursor-pointer"
            >
              추가하기
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
