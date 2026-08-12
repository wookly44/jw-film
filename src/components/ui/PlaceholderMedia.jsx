import { div } from "framer-motion/client";
import { useState } from "react";

// 실제 이미지 경로(image)가 없거나 로드에 실패하면 그라디언트 + 라벨로 대체 표시되는 공용 미디어 컴포넌트.
// data 폴더에서 image 값만 채워주면 자동으로 실제 이미지로 교체됩니다.
export default function PlaceholderMedia({
  image,
  alt,
  gradient,
  label,
  className = "",
  fit = "cover",
}) {
  const [failed, setFailed] = useState(false);
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  if (image && !failed) {
    return (
      <img
        src={image}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`w-full h-full ${className} ${fitClass}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient} ${className}`}
    >
      {label && (
        <span className="select-none px-4 text-center text-xs font-medium uppercase tracking-widest text-black/30">
          {label}
        </span>
      )}
    </div>
  );
}
