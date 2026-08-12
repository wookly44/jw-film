import { useId, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, A11y } from "swiper/modules";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import "swiper/css";
import PlaceholderMedia from "../ui/PlaceholderMedia";
import { VideoPopup } from "./Popup";
import { youtubeThumbnail } from "../../data/videoProjects";

export default function ProjectSlider({ projects }) {
  const uid = useId();
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const updateEdges = (s) => {
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  if (!projects?.length) {
    return (
      <p className="py-10 text-center text-sm text-white/50">
        준비 중인 프로젝트가 없습니다.
      </p>
    );
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Keyboard, A11y]}
        keyboard={{ enabled: true }}
        spaceBetween={2}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
        }}
        a11y={{
          prevSlideMessage: "이전 프로젝트",
          nextSlideMessage: "다음 프로젝트",
        }}
        onSwiper={(s) => {
          setSwiper(s);
          updateEdges(s);
        }}
        onSlideChange={updateEdges}
        onBreakpoint={updateEdges}
        onResize={updateEdges}
        className="!overflow-hidden"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <article className="group relative aspect-video w-full overflow-hidden bg-black">
              <PlaceholderMedia
                image={
                  project.image ||
                  (project.youtubeId && youtubeThumbnail(project.youtubeId))
                }
                alt={project.title}
                gradient={project.gradient}
                label={project.title}
                className="transition duration-500 group-hover:scale-105"
              />

              {project.eyebrow && (
                <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                  {project.eyebrow}
                </span>
              )}

              {project.duration && (
                <span className="absolute bottom-4 right-4 rounded bg-black/50 px-2 py-0.5 text-xs font-medium text-white/90">
                  {project.duration}
                </span>
              )}

              <h3
                className={`absolute bottom-4 left-4 w-[70%] whitespace-pre-line text-2xl font-bold sm:text-2xl ${
                  project.accent || "text-white"
                }`}
              >
                {project.title}
              </h3>

              <button
                type="button"
                onClick={() => setActiveProject(project)}
                aria-label={`${project.title} 상세보기`}
                className="center-abs flex-col gap-2 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/70 group-hover:opacity-100"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black">
                  <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  프로젝트 자세히 보기
                </span>
              </button>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 이전 버튼
          첫 번째 슬라이드에서는 버튼 자체를 렌더링하지 않음 */}
      {!isBeginning && (
        <button
          type="button"
          onClick={() => swiper?.slidePrev()}
          aria-label="이전 프로젝트 보기"
          aria-controls={uid}
          className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/80"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* 다음 버튼
          마지막 슬라이드에서는 버튼 자체를 렌더링하지 않음 */}
      {!isEnd && (
        <button
          type="button"
          onClick={() => swiper?.slideNext()}
          aria-label="다음 프로젝트 보기"
          aria-controls={uid}
          className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/80"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {activeProject && (
        <VideoPopup
          project={activeProject}
          projects={projects}
          onSelect={setActiveProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}
