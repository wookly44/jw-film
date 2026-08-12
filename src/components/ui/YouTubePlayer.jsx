import { useState } from "react";
import { Play } from "lucide-react";
import { youtubeThumbnail } from "../../data/videoProjects";

// 유튜브 iframe을 처음부터 로드하지 않고,
// 클릭 전까지는 썸네일 이미지만 보여주는 퍼사드(Facade) 패턴입니다.
//
// image가 있으면 커스텀 썸네일을 사용하고,
// image가 없으면 YouTube 기본 썸네일을 사용합니다.

export default function YouTubePlayer({ youtubeId, title, image }) {
  const [playing, setPlaying] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);

  // image가 있으면 커스텀 썸네일
  // 없으면 YouTube 썸네일
  const thumbnail = image || youtubeThumbnail(youtubeId);

  // 영상 재생 상태
  if (playing) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`${title} 재생`}
      className="group relative h-full w-full overflow-hidden bg-neutral-800"
    >
      {/* 썸네일 */}
      {!thumbFailed && thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          onError={() => setThumbFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-neutral-900">
          <span className="text-sm text-white/30">Thumbnail unavailable</span>
        </div>
      )}

      {/* 썸네일 위 어두운 오버레이 */}
      <span className="center-abs bg-black/30 transition group-hover:bg-black/50">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black transition group-hover:scale-105">
          <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
        </span>
      </span>
    </button>
  );
}
