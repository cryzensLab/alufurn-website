import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Facebook, Linkedin, Phone, Mail, MapPin, CheckCircle2, PenTool, ShieldCheck, Award, ArrowRight, MessageSquare, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Products", href: "#" },
    { name: "Experience Center", href: "#" },
    { name: "Catalog", href: "#" },
    { name: "Franchise", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white py-4 shadow-lg" : "bg-transparent py-8"}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-2xl font-bold tracking-[0.2em] transition-colors duration-500 ${isScrolled ? "text-brand-primary" : "text-white"}`}>
            ALUFURN
          </span>
        </div>

        {/* Desktop Menu - Hidden on Tablet (lg) and below */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled ? "text-brand-primary/70 hover:text-brand-primary" : "text-white/70 hover:text-white"}`}
            >
              {link.name}
            </a>
          ))}
          <button className={`px-6 py-2 rounded-none text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${isScrolled ? "bg-brand-primary text-white hover:bg-brand-gold" : "bg-white text-brand-primary hover:bg-brand-gold hover:text-white"}`}>
            Enquire Now
          </button>
        </div>

        {/* Mobile/Tablet Toggle */}
        <button 
          className={`lg:hidden z-[60] transition-colors duration-500 ${mobileMenuOpen ? "text-white" : (isScrolled ? "text-brand-primary" : "text-white")}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Full Screen Mobile/Tablet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-brand-primary z-50 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-2xl md:text-4xl font-bold uppercase tracking-[0.3em] text-white/60 hover:text-brand-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1 }}
                className="mt-8 px-12 py-4 bg-brand-gold text-white text-sm font-bold uppercase tracking-[0.4em] rounded-none"
              >
                Enquire Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end pb-32 md:pb-40">
      {/* Background with slow zoom animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-[0.15em] mb-6 uppercase"
          >
            Crafting <span className="text-brand-gold">Timeless</span> <br />
            <span className="italic font-light lowercase tracking-normal opacity-70">Spaces</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-white/60 mb-10 max-w-md leading-relaxed font-light tracking-wide"
          >
            Premium architectural interior solutions that transform houses into extraordinary homes.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, backgroundColor: "#C5A059" }}
            className="group flex items-center gap-3 px-5 py-3 border border-white/20 text-white rounded-none transition-all duration-300 tracking-[0.3em] text-[10px] font-bold uppercase"
          >
            Explore Designs
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const ShowcaseItem = ({ number, title, description, image, reverse = false }: { number: string, title: string, description: string, image: string, reverse?: boolean }) => {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-0 mb-32 last:mb-0 relative`}>
      {/* Image Container - Sharp Edges */}
      <div className="w-full md:w-2/3 h-[500px] md:h-[600px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Floating Card */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`bg-white p-8 md:p-12 shadow-2xl z-10 w-[90%] md:w-[40%] mt-[-100px] md:mt-0 ${reverse ? "md:mr-[-8%]" : "md:ml-[-8%]"} rounded-none border border-gray-100`}
      >
        <span className="text-brand-gold font-medium text-sm mb-3 block tracking-widest">{number}</span>
        <h3 className="text-2xl md:text-3xl font-semibold text-brand-primary mb-4 tracking-tight uppercase">{title}</h3>
        <p className="text-brand-primary/70 leading-relaxed mb-8 font-light text-sm md:text-base">
          {description}
        </p>
        <button className="bg-brand-primary text-white px-6 py-3 rounded-none flex items-center gap-3 hover:bg-brand-gold transition-all duration-300 group tracking-[0.3em] text-[10px] font-bold uppercase">
          Explore {title}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

const Showcase = () => {
  return (
    <section className="py-32 bg-brand-light overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-brand-primary mb-6 tracking-tight"
          >
            COMPLETE HOME INTERIOR SOLUTIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-primary/60 italic font-light text-lg"
          >
            Kitchen, Wardrobes, Vanities & Doors — Perfectly Integrated.
          </motion.p>
        </div>

        <ShowcaseItem
          number="01"
          title="Kitchens"
          description="Experience the perfect blend of form and function. Our bespoke kitchens are crafted with precision, featuring premium materials and state-of-the-art integration to elevate your culinary space."
          image="https://images.unsplash.com/photo-1556911223-435f7566d392?q=80&w=1600&auto=format&fit=crop"
        />

        <ShowcaseItem
          number="02"
          title="Wardrobes"
          description="Transform your storage into a statement of luxury. Our intelligently designed wardrobes combine sophisticated aesthetics with unparalleled organization for a seamless lifestyle."
          image="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1600&auto=format&fit=crop"
          reverse
        />
      </div>
    </section>
  );
};

const FullViewProducts = () => {
  const products = [
    {
      title: "Vanity",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
      desc: "Elegant bathroom solutions"
    },
    {
      title: "Aluminium Panels",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
      desc: "Modern architectural finishes"
    },
    {
      title: "Interior Doors",
      image: "https://images.unsplash.com/photo-1515898913320-f38370edab7a?q=80&w=1200&auto=format&fit=crop",
      desc: "Premium wood and glass designs"
    }
  ];

  return (
    <section className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-brand-primary">
      {products.map((product, index) => (
        <motion.div
          key={product.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="relative flex-1 h-full group overflow-hidden cursor-pointer"
        >
          {/* Background Image */}
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.5 }}
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            referrerPolicy="no-referrer"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-transparent to-transparent z-10" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-12 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <motion.span className="text-brand-gold text-xs uppercase tracking-[0.4em] mb-4 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Collection
            </motion.span>
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight uppercase">{product.title}</h3>
            <p className="text-white/60 text-sm font-light max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
              {product.desc}
            </p>
            <div className="mt-8 w-12 h-px bg-white/30 group-hover:w-full transition-all duration-700" />
          </div>
        </motion.div>
      ))}
    </section>
  );
};

const TrustSection = () => {
  const features = [
    {
      icon: <PenTool className="text-brand-gold" size={40} />,
      title: "Complete Home Interiors",
      desc: "Comprehensive interior solutions including kitchens, wardrobes, vanities and interior doors."
    },
    {
      icon: <CheckCircle2 className="text-brand-gold" size={40} />,
      title: "Bespoke Design Approach",
      desc: "Tailor-made interiors crafted to match your lifestyle and space."
    },
    {
      icon: <ShieldCheck className="text-brand-gold" size={40} />,
      title: "Exceptional Quality",
      desc: "High-quality finishes and hardware ensuring durability and elegance."
    },
    {
      icon: <Award className="text-brand-gold" size={40} />,
      title: "Trusted Expertise",
      desc: "Professional execution with precision and attention to detail."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="p-4 bg-brand-light rounded-none group-hover:bg-brand-primary transition-colors duration-500">
                  <div className="group-hover:text-white transition-colors duration-500">
                    {feature.icon}
                  </div>
                </div>
                <div className="h-px flex-1 bg-gray-100 group-hover:bg-brand-gold transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-brand-primary mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-brand-primary/60 leading-relaxed font-light text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Collaborators = () => {
  const partners = ["Designers", "Homeowners", "Developers", "Contractors", "Boutique Hotels", "Luxury Estates"];
  
  return (
    <section className="py-20 bg-brand-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md text-center md:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block"
            >
              Our Partners
            </motion.span>
            <h2 className="text-3xl font-semibold tracking-tight">Collaborating with the industry's finest visionaries.</h2>
          </div>
          
          <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-default"
              >
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-brand-gold transition-colors duration-300">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const stats = [
    { value: "9M+", label: "CABINETS ANNUALLY" },
    { value: "5", label: "GLOBAL PRODUCTION BASES" },
    { value: "146", label: "COUNTRIES SERVED" },
    { value: "500K+", label: "SQ. FT. SMART FACILITY" }
  ];

  return (
    <section className="py-32 bg-white text-center overflow-hidden relative">
      {/* Background industrial texture or subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand-primary text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold"
        >
          INDUSTRIAL SCALE
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-brand-gold mb-12 tracking-[0.1em] uppercase"
        >
          GLOBAL LEADERSHIP
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-10 mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-primary text-xl md:text-2xl leading-relaxed font-medium"
          >
            Alufurn is powered by the world's largest cabinetry manufacturing infrastructure.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-brand-primary/60 text-base md:text-lg leading-relaxed font-light"
          >
            With an annual output exceeding 9 million cabinets and five advanced production bases, we leverage heavy-duty German engineering and AI-integrated logistics to deliver premium interiors at an unprecedented scale. Our commitment to high-capacity precision ensures that every project, from luxury villas to massive developments, receives the same uncompromising quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-light p-12 border border-gray-100 group hover:bg-brand-primary transition-all duration-700 relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-5xl font-bold text-brand-primary group-hover:text-white mb-4 block transition-colors duration-500">
                  {stat.value}
                </span>
                <div className="w-10 h-1 bg-brand-gold mx-auto mb-4 group-hover:w-full transition-all duration-500" />
                <span className="text-[10px] font-bold text-brand-primary/40 group-hover:text-white/60 tracking-[0.2em] uppercase transition-colors duration-500">
                  {stat.label}
                </span>
              </div>
              {/* Industrial accent */}
              <div className="absolute -bottom-4 -right-4 text-brand-primary/5 group-hover:text-white/5 text-8xl font-black transition-colors duration-500">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Outlets = () => {
  const outlets = [
    { city: "Mumbai", address: "Design District, Lower Parel", type: "FLAGSHIP STUDIO" },
    { city: "Delhi", address: "MG Road, Sultanpur", type: "EXPERIENCE CENTER" },
    { city: "Bangalore", address: "Indiranagar, 100ft Road", type: "DESIGN STUDIO" },
    { city: "Hyderabad", address: "Jubilee Hills, Road No. 36", type: "EXPERIENCE CENTER" },
    { city: "Pune", address: "Koregaon Park", type: "BOUTIQUE STUDIO" }
  ];

  return (
    <section className="py-32 bg-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold"
            >
              OUR PRESENCE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold text-brand-primary tracking-tight"
            >
              Domestic Outlets
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xs text-brand-primary/60 text-sm font-light leading-relaxed"
          >
            Experience our craftsmanship firsthand at our exclusive design studios across the country.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {outlets.map((outlet, index) => (
            <motion.div
              key={outlet.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-12 h-[350px] flex flex-col justify-between group hover:bg-brand-primary transition-colors duration-700 relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-none border border-brand-gold/30 group-hover:border-white/30 transition-colors">
                  <MapPin size={16} className="text-brand-gold group-hover:text-white transition-colors" />
                </div>
                <span className="text-[10px] font-bold text-brand-primary/30 group-hover:text-white/30 tracking-widest uppercase">
                  {outlet.type}
                </span>
              </div>
              
              <div>
                <h3 className="text-3xl font-semibold text-brand-primary group-hover:text-white mb-2 transition-colors">
                  {outlet.city}
                </h3>
                <p className="text-brand-primary/40 group-hover:text-white/60 text-sm font-light transition-colors">
                  {outlet.address}
                </p>
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 text-8xl font-bold text-brand-primary/5 group-hover:text-white/5 transition-colors pointer-events-none">
                {outlet.city[0]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Consultation = () => {
  const words = ["kitchen", "wardrobe", "space", "interiors", "lifestyle"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 bg-brand-light overflow-hidden relative">
      {/* Aesthetic background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] border border-brand-gold/10 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] border border-brand-gold/5 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white p-12 md:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] relative"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-brand-gold/20" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-brand-gold/20" />

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-10 block font-bold"
            >
              GET STARTED
            </motion.span>

            <h2 className="text-4xl md:text-7xl font-bold text-brand-primary mb-16 tracking-tighter leading-[1.1]">
              Ready to elevate <br />
              <span className="text-brand-primary/30 font-light">your </span>
              <div className="inline-block relative h-[1.1em] min-w-[280px] md:min-w-[450px] text-left align-bottom overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-brand-gold italic font-light absolute left-0 w-full"
                  >
                    {words[index]}?
                  </motion.span>
                </AnimatePresence>
              </div>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#C5A059" }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-primary text-white px-16 py-6 rounded-none text-xs font-bold uppercase tracking-[0.4em] transition-all duration-500 shadow-xl w-full md:w-auto"
              >
                Get Consultation
              </motion.button>
              <button className="text-brand-primary font-bold text-xs uppercase tracking-[0.3em] hover:text-brand-gold transition-colors py-4 px-8">
                View Gallery
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-brand-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-6 block font-bold"
            >
              IN-HOUSE MANUFACTURING
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-none"
            >
              Precision <br />
              <span className="text-brand-gold italic font-light">by Robotics.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-xl font-light leading-relaxed mb-12 max-w-lg"
            >
              World-class German HOMAG machinery meets AI-driven automation. We deliver 0.1mm accuracy that manual craft cannot reach.
            </motion.p>
            
            <div className="flex flex-wrap gap-12">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white mb-1 tracking-tight">0.1mm</span>
                <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Accuracy</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white mb-1 tracking-tight">100%</span>
                <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Automated</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white mb-1 tracking-tight">E1</span>
                <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold">Eco-Grade</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-video overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern Manufacturing"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-gold p-8 hidden md:block">
                <p className="text-white font-bold text-xs tracking-widest uppercase">German <br /> Engineering</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuickLinks = () => {
  const links = [
    { 
      title: "Product Catalogue", 
      desc: "Explore our full range of designs", 
      href: "#",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
    },
    { 
      title: "Alufurn Projects", 
      desc: "View our portfolio of excellence", 
      href: "#",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
    },
    { 
      title: "Franchise Opportunity", 
      desc: "Partner with a global leader", 
      href: "#",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-brand-primary">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {links.map((link, index) => (
          <motion.a
            key={link.title}
            href={link.href}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative h-[320px] flex flex-col items-center justify-center text-center p-12 border-r border-white/10 last:border-r-0 overflow-hidden"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={link.image} 
                alt={link.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/60 group-hover:bg-brand-primary/20 transition-colors duration-700" />
            </div>

            {/* Hover Accent */}
            <div className="absolute inset-x-0 bottom-0 h-0 bg-brand-gold/80 group-hover:h-2 transition-all duration-500 ease-out z-20" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 tracking-widest uppercase group-hover:tracking-[0.3em] transition-all duration-500">
                  {link.title}
                </h3>
                <p className="text-white/60 text-xs font-light tracking-widest uppercase group-hover:text-white transition-colors duration-500 mb-8">
                  {link.desc}
                </p>
                <div className="flex justify-center">
                  <div className="w-10 h-10 rounded-none border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-primary transition-all duration-500">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-12 mb-12 gap-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
              <Mail size={18} />
              <span className="text-sm">hello@alufurn.com</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
              <Phone size={18} />
              <span className="text-sm">+1 (234) 567-890</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="p-2 rounded-none border border-white/10 hover:bg-white hover:text-brand-primary transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-none border border-white/10 hover:bg-white hover:text-brand-primary transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 rounded-none border border-white/10 hover:bg-white hover:text-brand-primary transition-all">
              <Linkedin size={18} />
            </a>
            <button className="ml-4 px-6 py-2 bg-brand-gold text-white rounded-none text-sm font-medium hover:bg-white hover:text-brand-primary transition-all">
              Get Started
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <span className="text-2xl font-bold tracking-[0.2em] mb-6 block">ALUFURN</span>
            <p className="text-white/60 text-sm leading-relaxed mb-8 font-light">
              Redefining luxury through architectural precision and timeless design. We create spaces that resonate with elegance and functionality.
            </p>
            <div className="flex items-start gap-3 text-white/60">
              <MapPin size={20} className="shrink-0 mt-1" />
              <span className="text-sm font-light">123 Luxury Lane, Design District,<br />Metropolis, 90210</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Services</h4>
            <ul className="space-y-4">
              {["Kitchen Design", "Wardrobe Solutions", "Vanity Units", "Interior Doors", "Custom Panels"].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Our Process", "Experience Center", "Franchise", "Careers"].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Support</h4>
            <ul className="space-y-4">
              {["Contact Us", "Catalog Download", "Privacy Policy", "Terms of Service", "FAQ"].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-[10px] uppercase tracking-widest">
            © 2026 ALUFURN INTERIORS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-white/40 text-[10px] uppercase tracking-widest">
            DESIGNED WITH PRECISION
          </p>
        </div>
      </div>
    </footer>
  );
};

const StickyActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight - 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const actions = [
    { icon: <Mail size={18} />, label: "Email", href: "mailto:hello@alufurn.com", color: "bg-brand-primary" },
    { icon: <Phone size={18} />, label: "WhatsApp", href: "https://wa.me/1234567890", color: "bg-green-600" },
    { icon: <MessageSquare size={18} />, label: "AI Chat", href: "#", color: "bg-brand-gold" },
    { icon: <ArrowUp size={18} />, label: "Top", href: "#", color: "bg-gray-800", action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3"
        >
          {actions.map((action, index) => (
            <motion.a
              key={action.label}
              href={action.href}
              onClick={(e) => {
                if (action.action) {
                  e.preventDefault();
                  action.action();
                }
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className={`${action.color} text-white p-3 md:p-4 rounded-none shadow-2xl flex items-center justify-center group relative`}
            >
              {action.icon}
              <span className="absolute right-full mr-4 px-3 py-1 bg-white text-brand-primary text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg border border-gray-100 hidden md:block">
                {action.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Showcase />
      <FullViewProducts />
      <TrustSection />
      <WhyChooseUs />
      <AboutUs />
      <Collaborators />
      <Outlets />
      <Consultation />
      <QuickLinks />
      <Footer />
      <StickyActions />
    </div>
  );
}
