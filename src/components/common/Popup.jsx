import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PlaceholderMedia from "../ui/PlaceholderMedia";
import YouTubePlayer from "../ui/YouTubePlayer";
import { getProjectThumbnail } from "../../data/videoProjects";

// 프로젝트/이미지 클릭 시 뜨는 상세 팝업(라이트박스)의 공통 뼈대.
//
// 상단 바(뱃지+닫기)
// 좌측 미디어 / 우측 정보 패널
// 하단 필름스트립
// 좌우 이전/다음 탐색
//
// VideoPopup(유튜브 영상)과 ImagePopup(이미지)이 이 뼈대를 공유합니다.

function PopupShell({
  badge,
  title,
  meta,
  point,
  description,
  infoImage,
  media,
  mediaFit = "cover",
  items,
  activeId,
  thumbOf,
  onSelect,
  onClose,
}) {
  const titleId = useId();
  const closeButtonRef = useRef(null);
  const previouslyFocused = useRef(null);

  const activeIndex = items.findIndex((item) => item.id === activeId);

  // 이전 / 다음 항목
  const prevItem = activeIndex > 0 ? items[activeIndex - 1] : null;

  const nextItem =
    activeIndex < items.length - 1 ? items[activeIndex + 1] : null;

  // 배경 스크롤 잠금 + 포커스 관리
  useEffect(() => {
    previouslyFocused.current = document.activeElement;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;

      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus();
      }
    };
  }, []);

  // 키보드 탐색
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "ArrowRight" && nextItem) {
        onSelect(nextItem);
      }

      if (e.key === "ArrowLeft" && prevItem) {
        onSelect(prevItem);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onSelect, nextItem, prevItem]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black/90 p-3 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="flex max-h-full w-full max-w-4xl cursor-default flex-col overflow-hidden bg-neutral-950 shadow-2xl"
        >
          {/* 상단 바 */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
            <span className="text-xs text-white/70">{badge}</span>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="팝업 닫기"
              className="rounded p-1 text-white/80 transition hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* 메인 영역 */}
          <div className="grid flex-1 grid-cols-1 gap-6 overflow-y-auto p-4 thin-scrollbar sm:grid-cols-[1fr_300px] sm:p-6">
            {/* 미디어 */}
            <div
              className={
                mediaFit === "contain"
                  ? "flex h-[45vh] max-h-[45vh] justify-center overflow-hidden bg-black sm:h-[51vh] sm:max-h-[60vh]"
                  : "aspect-video overflow-hidden bg-black"
              }
            >
              {media}
            </div>

            {/* 프로젝트 정보 */}
            <div>
              <h2 id={titleId} className="text-2xl font-bold text-white">
                {title}
              </h2>

              {meta && <p className="mt-1 text-xs text-white/50">{meta}</p>}

              {point && (
                <p className="mt-3 text-sm font-medium leading-relaxed text-amber-300">
                  {point}
                </p>
              )}

              {infoImage && (
                <div className="mt-4 overflow-hidden rounded-lg bg-neutral-900">
                  <img
                    src={infoImage}
                    alt={`${title} 추가 이미지`}
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
              )}

              <p className="mt-4 max-h-40 overflow-y-auto whitespace-pre-line pr-2 text-sm leading-relaxed text-white/70 thin-scrollbar sm:max-h-56">
                {description || "소개 문구가 아직 없습니다."}
              </p>
            </div>
          </div>

          {/* 하단 필름스트립 */}
          {items.length > 1 && (
            <div className="relative border-t border-white/10">
              {/* 이전 버튼 */}
              <button
                type="button"
                onClick={() => prevItem && onSelect(prevItem)}
                disabled={!prevItem}
                aria-label={
                  prevItem ? `이전: ${prevItem.title}` : "이전 항목 없음"
                }
                className="absolute left-1 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 disabled:pointer-events-none disabled:opacity-30 sm:left-2 sm:flex"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2 overflow-x-auto p-3 no-scrollbar sm:p-4 sm:px-14">
                {items.map((item) => {
                  const thumbnail = thumbOf(item);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onSelect(item)}
                      aria-current={item.id === activeId}
                      className={`relative aspect-video w-28 shrink-0 overflow-hidden rounded transition sm:w-32 ${
                        item.id === activeId
                          ? "ring-2 ring-brand-cyan"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <PlaceholderMedia
                        image={thumbnail}
                        alt={item.title}
                        label={item.title}
                      />

                      {/* Coming Soon 표시 */}
                      {item.complete === false && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/60">
                          <span className="text-[9px] font-semibold uppercase tracking-wider text-white">
                            Coming Soon
                          </span>
                        </span>
                      )}

                      <span className="absolute inset-x-1 bottom-1 truncate text-left text-[10px] font-semibold text-white">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* 다음 버튼 */}
              <button
                type="button"
                onClick={() => nextItem && onSelect(nextItem)}
                disabled={!nextItem}
                aria-label={
                  nextItem ? `다음: ${nextItem.title}` : "다음 항목 없음"
                }
                className="absolute right-1 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80 disabled:pointer-events-none disabled:opacity-30 sm:right-2 sm:flex"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}

// --------------------------------------------------
// Video Popup
// --------------------------------------------------

export function VideoPopup({ project, projects, onSelect, onClose }) {
  const thumbnail = getProjectThumbnail(project);

  return (
    <PopupShell
      badge={project.badge}
      title={project.title}
      meta={project.duration}
      point={project.point}
      description={project.description}
      media={
        <div className="relative aspect-video h-full w-full overflow-hidden bg-black">
          {/* 완성된 프로젝트 */}
          {project.complete ? (
            <YouTubePlayer
              youtubeId={project.youtubeId}
              title={project.title}
              image={project.image}
            />
          ) : (
            /* Coming Soon 프로젝트 */
            <div className="relative h-full w-full">
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-neutral-900">
                  <span className="text-sm text-white/30">
                    Preview unavailable
                  </span>
                </div>
              )}

              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/65 backdrop-blur-[2px]">
                <div className="text-center">
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                    Coming Soon
                  </p>

                  <p className="mt-2 text-2xl font-bold tracking-tight text-white">
                    COMING SOON
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      }
      items={projects}
      activeId={project.id}
      thumbOf={(project) => getProjectThumbnail(project)}
      onSelect={onSelect}
      onClose={onClose}
    />
  );
}

// --------------------------------------------------
// Image Popup
// --------------------------------------------------

export function ImagePopup({ item, items, onSelect, onClose }) {
  const hasInfoImage = Boolean(item.infoImage);

  return (
    <PopupShell
      title={item.title}
      meta={item.score}
      description={item.description}
      media={
        <div
          className={
            hasInfoImage
              ? "flex h-full w-full flex-col gap-3 overflow-y-auto bg-black p-3 thin-scrollbar"
              : "h-full w-full bg-black"
          }
        >
          {/* Main Image */}
          <div
            className={
              hasInfoImage
                ? "relative w-full shrink-0 overflow-hidden"
                : "relative h-full w-full overflow-hidden"
            }
          >
            <PlaceholderMedia
              image={item.image}
              alt={item.title}
              label={item.title}
              fit="contain"
            />
          </div>

          {/* 추가 이미지가 있는 특수 케이스 */}
          {hasInfoImage && (
            <div className="relative w-full shrink-0 overflow-hidden">
              <PlaceholderMedia
                image={item.infoImage}
                alt={`${item.title} 추가 이미지`}
                label={`${item.title} 추가 이미지`}
                fit="contain"
              />
            </div>
          )}
        </div>
      }
      mediaFit="contain"
      items={items}
      activeId={item.id}
      thumbOf={(it) => it.image}
      onSelect={onSelect}
      onClose={onClose}
    />
  );
}
