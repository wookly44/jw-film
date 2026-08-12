// lucide-react는 브랜드(SNS) 아이콘을 제공하지 않으므로 최소한의 커스텀 SVG를 직접 정의합니다.
// 새 아이콘이 필요하면 이 파일에 추가하고 iconMap에 등록하세요.

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22 5.9c-.7.33-1.46.55-2.25.65a3.9 3.9 0 0 0 1.72-2.16 7.8 7.8 0 0 1-2.48.95 3.9 3.9 0 0 0-6.65 3.56A11.07 11.07 0 0 1 4.3 4.9a3.9 3.9 0 0 0 1.2 5.2c-.63-.02-1.23-.2-1.75-.48v.05a3.9 3.9 0 0 0 3.13 3.83c-.58.16-1.2.18-1.8.07a3.9 3.9 0 0 0 3.64 2.71A7.83 7.83 0 0 1 2 18.4a11.05 11.05 0 0 0 5.98 1.75c7.17 0 11.1-5.94 11.1-11.1l-.01-.5A7.9 7.9 0 0 0 22 5.9Z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.5 21v-7.5H16l.5-3.5h-3V7.8c0-1 .3-1.7 1.7-1.7H16.6V3.1C16.2 3 15.1 3 13.9 3 11.3 3 9.5 4.6 9.5 7.5v2.5H7V13.5h2.5V21h4Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const iconMap = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

export default function SocialIcon({ name, className = 'w-4 h-4' }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}
