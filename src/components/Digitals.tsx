import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

import digitalFront from '@/assets/digital-front.jpg';
import digitalLeft from '@/assets/digital-left.jpg';
import digitalRight from '@/assets/digital-right.jpg';
import digital34 from '@/assets/digital-34.jpg';
import digitalFullBodyFront from '@/assets/digital-fullbody-front.jpg';
import digitalFullBodySide from '@/assets/digital-fullbody-side.jpg';

const digitals = [
  { src: digitalFront, label: 'Front' },
  { src: digitalLeft, label: 'Left Profile' },
  { src: digitalRight, label: 'Right Profile' },
  { src: digital34, label: '¾ Angle' },
  { src: digitalFullBodyFront, label: 'Full Body Front' },
  { src: digitalFullBodySide, label: 'Full Body Side' },
];

const Digitals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="digitals" className="section-padding bg-secondary">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-caption text-muted-foreground mb-3">Agency Standard</p>
          <h2 className="text-display-md">Digitals</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {digitals.map((digital, index) => (
            <motion.div
              key={digital.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="image-reveal aspect-[2/3] bg-muted mb-3">
                <img
                  src={digital.src}
                  alt={`${digital.label} digital`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-caption text-center text-muted-foreground">
                {digital.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-8 md:mt-12"
        >
          Natural lighting • No makeup • No retouching
        </motion.p>
      </div>
    </section>
  );
};

export default Digitals;
