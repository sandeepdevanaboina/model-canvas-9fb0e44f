import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

import fashionImg1 from '@/assets/portfolio-fashion-1.jpg';
import fashionImg2 from '@/assets/portfolio-fashion-2.jpg';
import fashionImg3 from '@/assets/portfolio-fashion-3.jpg';
import commercialImg1 from '@/assets/portfolio-commercial-1.jpg';
import commercialImg2 from '@/assets/portfolio-commercial-2.jpg';
import fitnessImg1 from '@/assets/portfolio-fitness-1.jpg';

const categories = ['All', 'Fashion', 'Commercial', 'Fitness'];

const portfolioItems = [
  { src: fashionImg1, category: 'Fashion', title: 'Editorial Campaign' },
  { src: commercialImg1, category: 'Commercial', title: 'Lifestyle Brand' },
  { src: fashionImg2, category: 'Fashion', title: 'Street Style' },
  { src: fitnessImg1, category: 'Fitness', title: 'Athletic Campaign' },
  { src: fashionImg3, category: 'Fashion', title: 'Studio Editorial' },
  { src: commercialImg2, category: 'Commercial', title: 'Casual Wear' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    const actualIndex = portfolioItems.findIndex(item => item === filteredItems[index]);
    setLightboxIndex(actualIndex);
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-caption text-muted-foreground mb-3">Selected Work</p>
          <h2 className="text-display-md">Portfolio</h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 md:gap-4 mb-10 md:mb-14"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-sm uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.src}-${item.title}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className="image-reveal relative overflow-hidden aspect-[4/5]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-caption text-primary-foreground/70">{item.category}</p>
                    <p className="text-primary-foreground font-medium">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={portfolioItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
};

export default Portfolio;
