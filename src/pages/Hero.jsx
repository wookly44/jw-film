import { motion } from "framer-motion";
import Inner from "../components/layout/Inner";
import { siteConfig } from "../data/site";

export default function Hero() {
  return (
    <section id="top">
      <Inner className="grid grid-cols-1 gap-10 py-14 md:grid-cols-2 md:items-center md:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative flex aspect-[4/5] w-full items-end justify-center overflow-hidden rounded-sm"
        >
          <img
            src={siteConfig.portrait}
            alt="JaeWoo Portrait"
            className="w-full"
          />
          <span className="absolute z-1 w-full text-center bottom-6 select-none text-xs font-medium uppercase tracking-widest text-black/30">
            JaeWoo — Portrait
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 27 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-lg font-medium text-white/70">
            Film Director | Designer
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl leading-14">
            주재우
            <br />
            Jae Woo, Joo
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            # 영상, 그래픽, 3D를 아우르며 계속 확장하는 크리에이터입니다.
            <br />
            <br />
            영화와 영상 편집을 기반으로 프리미어 프로와 애프터 이펙트를 다루고,
            일러스트레이터와 포토샵으로 비주얼을 설계하며, 3D 작업으로 표현의
            영역을 넓혀갑니다.
            <br />
            <br />
            여기에 AI 툴을 더해 영화적인 무드의 영상과 이미지 아트를 구현하며,
            기술의 변화를 작업의 새로운 가능성으로 흡수합니다.
            <br />
            <br />
            문제를 해결하는 과정에서 즐거움을 느끼며, '위기를 기회로' 만드는
            철학을 가지고 매 프로젝트에 도전합니다.
            <br />
            <br />각 도구가 가진 강점을 유기적으로 연결해 하나의 완성도 높은
            결과물로 빚어내며, 주인의식을 가지고 함께 성장하는 결과물을
            만듭니다.
          </p>
        </motion.div>
      </Inner>
    </section>
  );
}
