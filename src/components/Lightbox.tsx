import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: Array<{ src: string; title: string; category: string }>;
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ images, currentIndex, onClose, onNavigate }: LightboxProps) => {
  const isOpen = currentIndex !== null;

  const goToPrevious = useCallback(() => {
    if (currentIndex !== null) {
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      onNavigate(newIndex);
    }
  }, [currentIndex, images.length, onNavigate]);

  const goToNext = useCallback(() => {
    if (currentIndex !== null) {
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      onNavigate(newIndex);
    }
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goToPrevious, goToNext, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && currentIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-primary-foreground hover:opacity-70 transition-opacity z-10"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 md:left-8 p-2 text-primary-foreground hover:opacity-70 transition-opacity z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 md:right-8 p-2 text-primary-foreground hover:opacity-70 transition-opacity z-10"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="max-w-[90vw] max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent">
              <p className="text-caption text-primary-foreground/70">{images[currentIndex].category}</p>
              <p className="text-primary-foreground font-medium">{images[currentIndex].title}</p>
            </div>
          </motion.div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
