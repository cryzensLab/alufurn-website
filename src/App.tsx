import { motion } from "motion/react";
import { Menu, X, Instagram, Facebook, Linkedin, Phone, Mail, MapPin, CheckCircle2, PenTool, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#" },
    { name: "Experience Center", href: "#" },
    { name: "Catalog", href: "#" },
    { name: "Franchise", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl transition-all duration-500 ${isScrolled ? "top-4" : "top-8"}`}>
      <div className="glass-nav rounded-full px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-[0.2em] text-white">ALUFURN</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-4 left-0 w-full bg-brand-primary/95 backdrop-blur-xl rounded-3xl p-8 md:hidden border border-white/10"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
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
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight mb-6"
          >
            Crafting Timeless <br />
            <span className="italic font-light">Spaces</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed font-light"
          >
            Premium architectural interior solutions that transform houses into extraordinary homes.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="group flex items-center gap-3 px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white hover:text-brand-primary transition-all duration-300 button-glow tracking-widest text-sm font-medium uppercase"
          >
            Explore Designs
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
        className={`bg-white p-10 md:p-16 shadow-2xl z-10 w-[90%] md:w-[45%] mt-[-100px] md:mt-0 ${reverse ? "md:mr-[-10%]" : "md:ml-[-10%]"} rounded-none border border-gray-100`}
      >
        <span className="text-brand-gold font-medium text-lg mb-4 block tracking-widest">{number}</span>
        <h3 className="text-3xl md:text-4xl font-semibold text-brand-primary mb-6 tracking-tight uppercase">{title}</h3>
        <p className="text-brand-primary/70 leading-relaxed mb-10 font-light text-lg">
          {description}
        </p>
        <button className="bg-brand-primary text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-brand-gold transition-all duration-300 group tracking-widest text-xs font-bold uppercase">
          Explore {title}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
          image="https://images.unsplash.com/photo-1556912177-c54030639a4c?q=80&w=1600&auto=format&fit=crop"
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
      image: "https://images.unsplash.com/photo-1620626011761-9963d7b69763?q=80&w=1200&auto=format&fit=crop",
      desc: "Elegant bathroom solutions"
    },
    {
      title: "Aluminium Panels",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
      desc: "Modern architectural finishes"
    },
    {
      title: "Interior Doors",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?q=80&w=1200&auto=format&fit=crop",
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
                <div className="p-4 bg-brand-light rounded-2xl group-hover:bg-brand-primary transition-colors duration-500">
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
    { value: "5+", label: "YEARS OF EXCELLENCE" },
    { value: "1K+", label: "PROJECT DELIVERED" },
    { value: "10+", label: "DOMESTIC PARTNERS" },
    { value: "4+", label: "DESIGN AWARDS" }
  ];

  return (
    <section className="py-32 bg-white text-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand-primary text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold"
        >
          ABOUT US
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-brand-gold mb-12 tracking-[0.2em] uppercase"
        >
          ALUFURN
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8 mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-primary/60 text-sm md:text-base leading-relaxed font-light"
          >
            Since 1994, OPPEIN Home Group, Inc. (Stock Code: 603833.SS) has been transforming homes worldwide as a leading provider of custom kitchens, wardrobes, bathrooms, interior doors, furniture, and whole-house solutions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-brand-primary/60 text-sm md:text-base leading-relaxed font-light"
          >
            With five advanced production bases across China and an annual output of over 9 million cabinets, we are the world's largest cabinetry manufacturer and deliver innovative and tailored living solutions to customers in 146 countries and regions.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-light p-10 rounded-2xl flex flex-col items-center justify-center group hover:bg-brand-primary transition-colors duration-500"
            >
              <span className="text-4xl font-bold text-brand-primary group-hover:text-white mb-2 transition-colors duration-500">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold text-brand-primary/40 group-hover:text-white/60 tracking-widest uppercase transition-colors duration-500">
                {stat.label}
              </span>
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
                <div className="p-2 rounded-full border border-brand-gold/30 group-hover:border-white/30 transition-colors">
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
  return (
    <section className="py-40 bg-white overflow-hidden relative">
      {/* Subtle background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[30vw] font-bold uppercase tracking-tighter">ALUFURN</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-8xl font-bold text-brand-primary mb-12 tracking-tighter leading-[0.9]">
            Ready to elevate <br />
            <span className="text-brand-gold italic font-light">your living space?</span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 bg-brand-gold mx-auto mb-16"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-primary text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-[0.3em] hover:bg-brand-gold transition-all duration-500 shadow-2xl group"
          >
            Get Consultation
          </motion.button>
        </motion.div>
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
            <a href="#" className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-brand-primary transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-brand-primary transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 rounded-full border border-white/10 hover:bg-white hover:text-brand-primary transition-all">
              <Linkedin size={18} />
            </a>
            <button className="ml-4 px-6 py-2 bg-brand-gold text-white rounded-full text-sm font-medium hover:bg-white hover:text-brand-primary transition-all">
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

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Showcase />
      <FullViewProducts />
      <TrustSection />
      <Collaborators />
      <AboutUs />
      <Outlets />
      <Consultation />
      <Footer />
    </div>
  );
}
