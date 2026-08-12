// 영상 프로젝트 데이터
// AI Film / Premiere Pro & After Effects 슬라이더 + 클릭 시 뜨는 상세 팝업(VideoModal)에서 사용합니다.
//
// youtubeId: 유튜브 영상 ID (watch?v= 뒤에 오는 값). 팝업에서 재생되는 실제 영상입니다.
//            값을 바꾸면 사이트 전체에 바로 반영됩니다. 없으면 image 플레이스홀더로 다.
// image: 커스텀 썸네일 경로. 비워두면 youtubeId의 유튜브 썸네일을 자동으로 사용합니다.
// description: 팝업 우측 패널에 노출되는 소개 문구입니다.
// badge: 팝업 상단 좌측에 노출되는 상태 라벨(예: 'Coming Soon'). 없으면 표시하지 않습니다.

export const youtubeThumbnail = (id) =>
  id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null;

export const getProjectThumbnail = (project) => {
  if (project.image) return project.image;

  if (project.youtubeId) {
    return youtubeThumbnail(project.youtubeId);
  }

  return null;
};

export const aiFilmProjects = [
  {
    id: 1,
    title: "동반자(Companion)",
    eyebrow: "⭐NAIFA 2026 official selection",
    duration: "18:12",
    youtubeId: "vzy6MSbZiD4",
    image: "/images/ai_film_1.webp",
    accent: "text-white/70",
    badge: "AI Film Production",
    point:
      "Official Selection | NAIFA 2026 Summer Edition 국제 AI 영화제 NAIFA 2026 공식 선정작",
    description:
      '시력을 잃은 카렌과 그녀의 유일한 동반자이자 안내견 제프, 두 존재는 고립된 마을 "애쉬 볼더"에 도착합니다. 그곳엔 30년 전 억울하게 죽은 엘리노어 블랙우드가 여전히 떠나지 못한 채 남아 있습니다. 볼 수 없는 자, 말할 수 없는 자, 그리고 보이지 않는 저주 이 세 겹의 침묵이 서서히 겹쳐지며 공포는 눈이 아닌 다른 감각을 잠식해갑니다.',
    complete: true,
  },
  {
    id: 2,
    title: "잔영(remnant)",
    eyebrow: "✅Coming Soon",
    duration: "",
    youtubeId: "",
    image: "/images/ai_film_2.webp",
    accent: "text-white/70",
    badge: "AI Film Production",
    point: "",
    description:
      "꽃잎과 환호 속에서 축복받은 세 개의 그림자가 안개 너머로 걸어 들어간다. 하나, 둘, 침묵 속에 지워지고 마지막 그림자만이 어둠 속에서 자신을 기다리던 것과 마주선다.",
    complete: false,
  },
];

export const filmProjects = [
  {
    id: 1,
    title: "From Midnight to Sunrise \n한밤에서 새벽까지 – Personal Film",
    eyebrow: "",
    duration: "02:30",
    youtubeId: "-AOTOXRlmC8",
    image: "/images/project_1.webp",
    accent: "text-white/0",
    badge: "Film Production",
    point: "",
    description:
      "핵심 개요: 기획 콘셉트: 코로나 시기의 어두운 방황과 제약 속에서 벗어나, 새로운 목표와 치유의 여정을 향해 나아가는 내면적 해방과 용기를 담은 영상. \n\n주요 제작 포인트: 트랜지션, 컬러 그레이딩, 슬로우모션을 활용한 시각적 완성도 향상, Vignette 및 Glow 효과와 배경음악·사운드 이펙트(SFX) 조화를 통한 몰입감 극대화.",
    complete: true,
  },

  {
    id: 2,
    title: "Dante's Inferno \n단테스 인페르노 – Concept Trailer",
    eyebrow: "",
    duration: "05:32",
    youtubeId: "zD46KvNxzTk",
    image: "/images/project_2.webp",
    accent: "text-white/0",
    badge: "Film Production",
    point: "",
    description:
      "기획 콘셉트: 주인공이 복수와 정의를 위해 점차 강인한 전사로 거듭나지만, 내면은 피폐해져 결국 마지막 쿠키 씬에서 광기에 물들어가는 극적인 서사를 담은 애니메이션 트레일러 제작. \n\n 주요 제작 포인트: 컷 편집과 자막 편집을 바탕으로 전투 장면에 긴장감을 부여하고, 다양한 상황별 풍부한 사운드 효과 및 배경음 디테일에 중점을 둠.",
    complete: true,
  },

  {
    id: 3,
    title: "She, the Ultimate Weapon | 최종병기 그녀 – Fan-Made MV & Trailer",
    eyebrow: "",
    duration: "08:02",
    youtubeId: "zwrW7Rbtv6I",
    image: "/images/project_3.webp",
    accent: "text-white/0",
    badge: "Film Production",
    point: "",
    description:
      "기획 콘셉트: 애니메이션 원작을 바탕으로 뮤직비디오와 트레일러의 경계를 허물고 결합하여 새로운 방향성을 제시한 도전적인 영상 제작. \n\n주요 제작 포인트: 영상 흐름과 방향성에 최적화된 배경 OST 및 세심한 사운드 이펙트 배치, 몰입감을 높이는 컷 편집과 분위기 맞춤형 자막 이펙트 구현.",
    complete: true,
  },

  {
    id: 4,
    title: "Coca-Cola Motion Graphic | 코카콜라 모션그래픽 – Personal Project",
    eyebrow: "",
    duration: "00:36",
    youtubeId: "wnDIJEhbeA8",
    image: "/images/project_4.webp",
    accent: "text-white/0",
    badge: "Film Production",
    point: "",
    description:
      "기획 콘셉트: 코카콜라의 활기차고 청량한 브랜드 이미지를 극대화하여 시각적으로 전달하는 모션그래픽 제작. \n\n 주요 제작 포인트: 파티클 효과를 활용해 탄산이 터지는 순간을 생동감 있게 표현하고, 브랜드 특유의 에너제틱하고 시원한 느낌을 역동적인 모션으로 시각화.",
    complete: true,
  },
];
