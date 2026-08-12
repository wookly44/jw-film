// lucide-react는 브랜드(SNS) 아이콘을 제공하지 않으므로
// 최소한의 커스텀 SVG를 직접 정의합니다.
// 새 아이콘이 필요하면 이 파일에 추가하고 iconMap에 등록하세요.

const ThreadsIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12.1 2.5c-5.3 0-9.1 3.6-9.1 9.4 0 6 3.4 9.6 9.1 9.6 4.9 0 8.2-2.7 8.2-6.8 0-3.6-2.3-5.8-6.1-6.2-.4-1.8-1.5-2.7-3.4-2.7-1.8 0-3.1 1-3.1 2.4 0 1.4 1.2 2.1 3.6 2.1h.8c.1.5.2 1 .2 1.6v.1c-.5-.1-1-.1-1.5-.1-2.9 0-4.8 1.5-4.8 3.7 0 2.1 1.7 3.5 4.3 3.5 3.2 0 5.3-1.9 5.3-5 0-.5 0-1-.1-1.5 2.1.5 3.2 1.7 3.2 3.5 0 2.6-2.2 4.2-5.9 4.2-4.4 0-7-2.8-7-7.7 0-4.8 2.7-7.5 7.2-7.5 3.5 0 5.7 1.5 6.7 4.4l1.7-.6c-1.2-3.9-4.1-6.3-8.4-6.3Zm-.4 14.9c-1.5 0-2.4-.7-2.4-1.8 0-1.2 1.1-1.9 2.8-1.9.5 0 1 .1 1.5.2 0 2.2-.6 3.5-1.9 3.5Zm-.3-6.8c-1.5 0-2.1-.4-2.1-1.1 0-.6.6-1 1.5-1 .9 0 1.5.5 1.8 1.9-.4.1-.8.2-1.2.2Z" />
  </svg>
);

const YouTubeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.2"
      cy="6.8"
      r="1"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const iconMap = {
  threads: ThreadsIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
};

export default function SocialIcon({
  name,
  className = "w-4 h-4",
}) {
  const IconComponent = iconMap[name];

  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}