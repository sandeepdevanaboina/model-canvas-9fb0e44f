import { Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Marcus Vale. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/marcusvale"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 border border-border hover:bg-secondary transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
