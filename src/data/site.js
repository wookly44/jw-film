// 사이트 전역 설정 (내비게이션, 소셜 링크, 연락처)
// 새 메뉴/링크 추가 시 이 파일만 수정하면 됩니다.

export const siteConfig = {
  name: "JW Portfolio",
  image: "/public/images/logo.webp",
  portrait: "/public/images/portrait.webp",
  email: "info@mysite.com",
};

export const navLinks = [
  { label: "FILM", href: "#film" },
  { label: "Design", href: "#design" },
  { label: "3D", href: "#3d" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
];

export const footerLinks = [
  { label: "VIMEO", href: "https://vimeo.com" },
  { label: "INSTAGRAM", href: "https://instagram.com" },
  { label: "TWITTER", href: "https://twitter.com" },
  { label: "IMDb", href: "https://imdb.com" },
];
