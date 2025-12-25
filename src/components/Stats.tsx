import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Height', value: '6\'2" / 188 cm' },
  { label: 'Chest', value: '40" / 102 cm' },
  { label: 'Waist', value: '32" / 81 cm' },
  { label: 'Hips', value: '38" / 97 cm' },
  { label: 'Shoe Size', value: 'US 11 / EU 44' },
  { label: 'Hair Color', value: 'Dark Brown' },
  { label: 'Eye Color', value: 'Hazel' },
  { label: 'Nationality', value: 'British' },
  { label: 'Base', value: 'London, UK' },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="section-padding">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-caption text-muted-foreground mb-3">Measurements</p>
          <h2 className="text-display-md">Stats</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-l border-border pl-4"
            >
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
