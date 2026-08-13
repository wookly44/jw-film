import { useState } from "react";
import { motion } from "framer-motion";
import PlaceholderMedia from "../components/ui/PlaceholderMedia";
import SectionHeading from "../components/ui/SectionHeading";
import Inner from "../components/layout/Inner";
import { ImagePopup } from "../components/common/Popup";
import { ratings } from "../data/ratings";

export default function ModellingSection() {
  const [active, setActive] = useState(null);

  return (
    <section id="3d" className="section-padding">
      <Inner>
        <SectionHeading>3D Model</SectionHeading>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ratings.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              aria-label={`${item.title} 자세히 보기`}
              className="group relative aspect-[4/3] overflow-hidden text-left"
            >
              <PlaceholderMedia
                image={item.image}
                alt={item.title}
                gradient={item.gradient}
                label={item.title}
                className="transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 overlay-fade" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white sm:text-xl whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>
      </Inner>

      {active && (
        <ImagePopup
          item={active}
          items={ratings}
          onSelect={setActive}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
