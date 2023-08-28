import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import data from './card-data'
import Card from './components/card'
const App = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          upper component
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          lower component
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-auto justify-between gap-2 md:gap-4 ">
          {data.map((card_data,key) => {
            return <Card  title={card_data.title} desc={card_data.desc} Icon={card_data.icon} key={key} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default App;

