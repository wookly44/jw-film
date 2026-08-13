import { useState } from "react";

// 실제 이미지 경로(image)가 없거나 로드에 실패하면 그라디언트 + 라벨로 대체 표시되는 공용 미디어 컴포넌트.
// data 폴더에서 image 값만 채워주면 자동으로 실제 이미지로 교체됩니다.
//
// fit:
//   'cover'      (기본) 박스를 꽉 채우며 비율이 다르면 잘릴 수 있음 — 카드/썸네일용
//   'contain'    박스를 꽉 채우되 잘리지 않고 레터박스 여백이 생길 수 있음
//   'natural'    박스 높이를 강제하지 않고, 이미지 자체 비율대로 최대 70vh까지만 보여줌
//                (팝업에서 이미지 사이즈에 따라 팝업 높이가 함께 변합니다)
//   'full-width' 가로를 100%로 채우고 세로는 비율대로 자연스럽게 늘어남
//                (부모에 overflow-y-auto가 있으면 세로 스크롤이 생깁니다)
const SIZE_CLASS = {
  cover: "h-full w-full object-cover",
  contain: "h-full w-full object-contain",
  natural: "mx-auto block max-h-[70vh] w-auto max-w-full object-contain",
  "full-width": "block h-auto w-full",
};

// 실제 이미지가 없을 때(그라디언트 대체) 사용하는 크기 클래스.
// natural/full-width는 이미지 고유 크기로 늘어나는 모드라 부모가 높이를 안 갖고 있을 수 있어,
// 대체 박스는 찌그러지지 않도록 최소 높이를 지정합니다.
const FALLBACK_SIZE_CLASS = {
  natural: "h-[40vh] w-full",
  "full-width": "h-[40vh] w-full",
};

export default function PlaceholderMedia({
  image,
  alt,
  gradient,
  label,
  className = "",
  fit = "cover",
}) {
  const [failed, setFailed] = useState(false);
  const sizeClass = SIZE_CLASS[fit] ?? SIZE_CLASS.cover;

  if (image && !failed) {
    return (
      <img
        src={image}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`${sizeClass} ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-gradient-to-br ${
        FALLBACK_SIZE_CLASS[fit] ?? "h-full w-full"
      } ${gradient} ${className}`}
    >
      {label && (
        <span className="select-none px-4 text-center text-xs font-medium uppercase tracking-widest text-black/30">
          {label}
        </span>
      )}
    </div>
  );
}
