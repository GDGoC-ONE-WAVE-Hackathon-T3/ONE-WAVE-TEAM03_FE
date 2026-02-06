"use client"

import * as React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

// Mock Data for Repositories based on HTML reference
const REPOSITORIES = [
  {
    id: 1,
    title: "Clean-Architecture-Template",
    description: "중도 합류를 통해 기존의 레이어드 아키텍처를 클린 아키텍처로 전환하는 과정을 경험해보세요. 테스트 코드 작성이 주요 과제입니다.",
    tech: "TypeScript",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "초급",
    levelClass: "bg-[#E8F3FF] text-[#3182F6]",
    views: "1,240",
    stars: "85",
    isRecommended: true
  },
  {
    id: 2,
    title: "E-commerce-Dashboard-Refactor",
    description: "복잡한 상태 관리 로직을 Redux Toolkit에서 Zustand로 전환하고 성능 최적화를 진행하는 프로젝트입니다.",
    tech: "React",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "중급",
    levelClass: "bg-[#FFF0F0] text-[#FF4D4F]",
    views: "856",
    stars: "42",
    isRecommended: false
  },
  {
    id: 3,
    title: "Personal-Blog-SEO-Project",
    description: "SEO 최적화가 필요한 블로그 프로젝트에 합류하여 Meta 태그 관리 및 서버 사이드 렌더링 로직을 개선합니다.",
    tech: "Next.js",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "초급",
    levelClass: "bg-[#E8F3FF] text-[#3182F6]",
    views: "2,103",
    stars: "128",
    isRecommended: false
  },
  {
    id: 4,
    title: "FastAPI-Microservice-Auth",
    description: "마이크로서비스 아키텍처 기반의 인증 모듈을 구축하는 과정입니다. OAuth2와 JWT 구현 경험을 쌓을 수 있습니다.",
    tech: "Python",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "중급",
    levelClass: "bg-[#FFF0F0] text-[#FF4D4F]",
    views: "542",
    stars: "31",
    isRecommended: false
  },
  {
    id: 5,
    title: "Spring-JPA-Board-Legacy",
    description: "기존의 MyBatis 기반 게시판 프로젝트를 Spring Data JPA로 마이그레이션하는 협업 프로젝트입니다.",
    tech: "Spring Boot",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "입문",
    levelClass: "bg-[#E8F3FF] text-[#3182F6]",
    views: "3,421",
    stars: "204",
    isRecommended: false
  },
  {
    id: 6,
    title: "Vue3-Composition-UI-Kit",
    description: "Vue3의 Composition API를 활용하여 사내 공통 UI 컴포넌트 라이브러리를 구축하는 프로젝트에 기여해보세요.",
    tech: "Vue.js",
    techClass: "bg-[#F2F4F6] text-[#4E5968]",
    level: "초급",
    levelClass: "bg-[#E8F3FF] text-[#3182F6]",
    views: "670",
    stars: "55",
    isRecommended: false
  }
]

export default function TaskSelectPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedRepoId, setSelectedRepoId] = React.useState<number | null>(null)

  // Filter states (visual only for now as per requirement to just show UI)
  const [activeFilter, setActiveFilter] = React.useState("전체")

  const handleNext = () => {
    if (!selectedRepoId) {
      alert("프로젝트를 선택해주세요.")
      return
    }
    // Pass the selected repository ID and previous techs to the analysis page
    const techs = searchParams.get('techs')
    const query = techs ? `?techs=${techs}&repo=${selectedRepoId}` : `?repo=${selectedRepoId}`
    router.push(`/select/analysis${query}`)
  }
  
  const handlePrev = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header is handled by layout, but we need main padding */}
      
      <main className="px-20 py-12 max-w-[1440px] mx-auto">
        
        {/* Progress Stepper - Custom for this page to match design */}
        {/* Note: The design usually has this in the header in the HTML reference, 
            but in our Next.js app structure so far it's been inside the page content.
            I'll keep it consistent with the previous pages for now but styled as per HTML reference if possible. 
            Actually, the previous pages had their own stepper. Let's adapt to that style but with Step 3 active.
        */}
         <div className="flex items-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">
                    <i className="fa-solid fa-check text-xs"></i>
                </div>
                <span className="font-medium">직군 선택</span>
            </div>
            <div className="w-12 h-[2px] bg-gray-200"></div>
            <div className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">
                    <i className="fa-solid fa-check text-xs"></i>
                </div>
                <span className="font-medium">기술 스택</span>
            </div>
            <div className="w-12 h-[2px] bg-gray-200"></div>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#3182F6] text-white flex items-center justify-center font-bold text-sm">3</div>
                <span className="text-[#3182F6] font-bold">과제 선택</span>
            </div>
            <div className="w-12 h-[2px] bg-gray-200"></div>
            <div className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm">4</div>
                <span className="font-medium">코드 분석</span>
            </div>
        </div>


        {/* Filter Section */}
        <section className="bg-white rounded-2xl p-8 border border-[#E5E8EB] shadow-sm mb-10">
            <div className="mb-8">
                <h2 className="text-sm font-bold text-[#8B95A1] mb-4 uppercase tracking-wider">기술 스택 필터</h2>
                <div className="flex flex-wrap gap-3">
                    {["전체", "React", "TypeScript", "Next.js", "Node.js", "Python", "Spring Boot", "Vue.js"].map((tech) => (
                        <button 
                            key={tech}
                            onClick={() => setActiveFilter(tech)}
                            className={cn(
                                "px-5 py-2.5 rounded-full font-medium text-sm transition-colors",
                                activeFilter === tech 
                                    ? "bg-[#3182F6] text-white font-semibold" 
                                    : "bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E5E8EB]"
                            )}
                        >
                            {tech}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10 mb-8">
                <div>
                    <h2 className="text-sm font-bold text-[#8B95A1] mb-4 uppercase tracking-wider">난이도 및 토픽</h2>
                    <div className="flex flex-wrap gap-2">
                        {["초급", "리팩토링", "테스트 코드"].map((tag) => (
                             <span key={tag} className="px-3 py-1.5 bg-[#E8F3FF] text-[#3182F6] rounded-md text-sm font-medium flex items-center gap-2">
                                {tag} <i className="fa-solid fa-xmark cursor-pointer"></i>
                            </span>
                        ))}
                        <button className="px-3 py-1.5 border border-dashed border-[#D1D6DB] text-[#8B95A1] rounded-md text-sm font-medium hover:bg-gray-50">
                            <i className="fa-solid fa-plus mr-1"></i> 태그 추가
                        </button>
                    </div>
                </div>
                <div className="flex items-end justify-end">
                    <button className="px-8 py-4 bg-[#3182F6] text-white rounded-xl font-bold text-[16px] hover:bg-[#1B64DA] transition-colors shadow-lg shadow-blue-100">
                        필터링 적용하기
                    </button>
                </div>
            </div>
        </section>

        {/* Repository List Section */}
        <section>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-[#191F28]">탐색된 레포지토리</span>
                    <span className="text-[#3182F6] font-bold text-xl">128</span>
                </div>
                <div className="flex bg-[#F2F4F6] p-1 rounded-lg">
                    <button className="px-4 py-2 bg-white rounded-md shadow-sm text-sm font-bold flex items-center gap-2 text-[#191F28]">
                        <i className="fa-solid fa-grip"></i> 카드 뷰
                    </button>
                    <button className="px-4 py-2 text-[#8B95A1] text-sm font-medium flex items-center gap-2 hover:text-[#4E5968]">
                        <i className="fa-solid fa-list"></i> 리스트 뷰
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {REPOSITORIES.map((repo) => (
                    <div 
                        key={repo.id}
                        onClick={() => setSelectedRepoId(repo.id)}
                        className={cn(
                            "group relative p-6 bg-white rounded-2xl border-2 transition-all cursor-pointer",
                            selectedRepoId === repo.id 
                                ? "border-[#3182F6] shadow-sm"
                                : "border-[#E5E8EB] shadow-sm hover:border-[#3182F6]"
                        )}
                    >
                         {selectedRepoId === repo.id && (
                            <div className="absolute top-4 right-4">
                                <i className="fa-solid fa-circle-check text-[#3182F6] text-xl"></i>
                            </div>
                        )}
                        
                        <div className="flex gap-2 mb-4">
                            <span className={cn("text-[11px] font-bold px-2 py-1 rounded", repo.techClass)}>{repo.tech}</span>
                            <span className={cn("text-[11px] font-bold px-2 py-1 rounded", repo.levelClass)}>{repo.level}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-[#191F28] group-hover:text-[#3182F6] transition-colors">{repo.title}</h3>
                        <p className="text-[#4E5968] text-sm leading-relaxed mb-6 line-clamp-3">
                            {repo.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F2F4F6]">
                            <button className="text-[#3182F6] text-sm font-bold flex items-center gap-1">
                                자세히보기 <i className="fa-solid fa-arrow-right text-[10px]"></i>
                            </button>
                            <div className="flex items-center gap-3 text-[#8B95A1] text-xs">
                                <span className="flex items-center gap-1"><i className="fa-regular fa-eye"></i> {repo.views}</span>
                                <span className="flex items-center gap-1"><i className="fa-regular fa-star"></i> {repo.stars}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 flex justify-center pb-32">
                <button className="px-10 py-4 bg-white border border-[#E5E8EB] text-[#4E5968] font-bold rounded-xl hover:bg-gray-50 transition-colors">
                    더 많은 레포지토리 불러오기
                </button>
            </div>
        </section>
      </main>

      {/* Bottom Floating Action Bar */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[1440px] px-20 flex justify-end pointer-events-none z-50">
            <button 
                onClick={handleNext}
                className={cn(
                    "pointer-events-auto px-12 py-5 bg-[#191F28] text-white rounded-2xl font-bold text-lg shadow-2xl transition-all active:scale-95 flex items-center",
                    !selectedRepoId && "opacity-50 cursor-not-allowed hover:bg-[#191F28]"
                )}
            >
                선택한 프로젝트로 합류하기 <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
      </div>

    </div>
  )
}
