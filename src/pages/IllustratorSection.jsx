import { useState } from "react";
import { motion } from "framer-motion";
import PlaceholderMedia from "../components/ui/PlaceholderMedia";
import Inner from "../components/layout/Inner";
import { ImagePopup } from "../components/common/Popup";
import { illustrator, illustrations } from "../data/illustrations";

export default function IllustratorSection() {
  const [active, setActive] = useState(null);

  return (
    <section id="design">
      <Inner
        size="wide"
        gutter={false}
        className="grid grid-cols-1 md:grid-cols-[minmax(0,280px)_1fr]"
      >
        <div className="bg-rose-50 px-6 py-10 sm:py-14 mt-3">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold leading-snug text-neutral-900 md:sticky md:top-30 md:h-fit"
          >
            Visual Design with Illustrator & Photoshop
          </motion.p>
        </div>

        <div className="columns-2 gap-2 p-2 sm:gap-3 sm:p-3">
          {illustrations.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              aria-label={`${item.title} 자세히 보기`}
              className={`group relative mb-2 block w-full overflow-hidden break-inside-avoid sm:mb-3 ${item.ratio}`}
            >
              <PlaceholderMedia
                image={item.image}
                alt={item.title}
                gradient={item.gradient}
                label={item.title}
                className="transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />
            </motion.button>
          ))}
        </div>
      </Inner>

      {active && (
        <ImagePopup
          item={active}
          items={illustrations}
          onSelect={setActive}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
