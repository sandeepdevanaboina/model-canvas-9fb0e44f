import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Instagram, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully",
      description: "I'll get back to you as soon as possible.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-caption text-muted-foreground mb-3">Get in Touch</p>
            <h2 className="text-display-md mb-8">Contact</h2>
            
            <p className="text-body text-muted-foreground mb-10">
              Available for fashion, commercial, editorial, and runway bookings. 
              For inquiries, please reach out directly or through my agency.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:bookings@marcusvale.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <Mail size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-caption text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:opacity-70 transition-opacity">
                    bookings@marcusvale.com
                  </p>
                </div>
              </a>

              <a
                href="https://instagram.com/marcusvale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <Instagram size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-caption text-muted-foreground">Instagram</p>
                  <p className="font-medium group-hover:opacity-70 transition-opacity">
                    @marcusvale
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent flex items-center justify-center">
                  <span className="text-xs font-bold">AG</span>
                </div>
                <div>
                  <p className="text-caption text-muted-foreground">Agency</p>
                  <p className="font-medium">Select Model Management</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-caption text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-caption text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-caption text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-foreground outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
