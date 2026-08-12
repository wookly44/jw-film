import { siteConfig } from '../../data/site';
import Inner from './Inner';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-6">
      <Inner>
        <p className="text-center text-[11px] text-white/40">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </Inner>
    </footer>
  );
}
