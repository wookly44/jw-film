import { motion } from "framer-motion";
import SocialIcon from "../ui/SocialIcons";
import { socialLinks } from "../../data/site";

// 항상 화면 우측 하단에 고정되어 있는 소셜 링크 버튼. 별도 클릭 없이 바로 보입니다.
export default function SocialFab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="fixed bottom-5 right-5 z-40 flex flex-col gap-1 rounded-lg border border-white/70 bg-black/90 p-1.5 backdrop-blur sm:bottom-6 sm:right-6"
    >
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={social.label}
          className="flex size-8 sm:size-11 items-center justify-center rounded text-white transition hover:bg-white/10"
        >
          <SocialIcon name={social.icon} className="size-5 sm:size-6" />
        </a>
      ))}
    </motion.div>
  );
}
