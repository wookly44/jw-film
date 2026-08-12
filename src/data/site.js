// 사이트 전역 설정 (내비게이션, 소셜 링크, 연락처)
// 새 메뉴/링크 추가 시 이 파일만 수정하면 됩니다.

export const siteConfig = {
  name: "JW Portfolio",
  image: `${import.meta.env.BASE_URL}/images/logo.webp`,
  portrait: `${import.meta.env.BASE_URL}/images/portrait.webp`,
  email: "jujaeu60@gmail.com",
  phone: "010-7572-2788",
};

export const navLinks = [
  { label: "FILM", href: "#film" },
  { label: "Design", href: "#design" },
  { label: "3D", href: "#3d" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    label: "threads",
    href: "https://www.threads.com/@motion_jraphic?hl=ko",
    icon: "threads",
  },
  {
    label: "youtube",
    href: "https://www.youtube.com/channel/UCfnYD_kEwvwyiYopYTrGv9g",
    icon: "youtube",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/motion_jraphic/",
    icon: "instagram",
  },
];
