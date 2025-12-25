import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-caption text-muted-foreground mb-3">About</p>
            <h2 className="text-display-md mb-8">The Model</h2>
            
            <div className="space-y-6 text-body text-muted-foreground">
              <p>
                Marcus Vale is a London-based fashion and commercial model with a natural ability 
                to embody versatility in front of the camera. With a background in performing arts, 
                he brings an innate understanding of movement and expression to every shoot.
              </p>
              <p>
                Specializing in high-fashion editorial and lifestyle commercial work, Marcus has 
                collaborated with emerging designers and established brands alike. His work ethic 
                is defined by professionalism, punctuality, and a genuine passion for the craft.
              </p>
              <p>
                Available for bookings worldwide. Open to editorial, commercial, runway, and 
                campaign work. Flexible for travel and committed to bringing creative visions to life.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-muted relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Marcus Vale portrait"
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
