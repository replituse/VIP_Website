import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRight, CheckCircle2, Shield, Network, Zap, Lock, Radio } from "lucide-react";
import cctvBg from "@assets/CCTV_Camera_1768635376032.gif";
import securityIcon from "@assets/download1_1768635381877.png";
import fireIcon from "@assets/image_1768635398231.png";
import bioIcon from "@assets/image_1768635412180.png";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      title: "CCTV Surveillance",
      description: "Advanced HD/IP surveillance systems with night vision, motion detection, and remote monitoring capabilities for total peace of mind.",
      icon: securityIcon
    },
    {
      title: "Fire Detection",
      description: "State-of-the-art fire alarms and smoke detection systems designed to protect your assets and ensure safety compliance.",
      icon: fireIcon
    },
    {
      title: "Access Control",
      description: "Biometric and card-based access control systems to regulate entry and enhance physical security for your premises.",
      icon: bioIcon
    },
    {
      title: "Networking Solutions",
      description: "Robust structured cabling, switching, and routing infrastructure for high-speed, reliable connectivity.",
      icon: <Network className="w-8 h-8" />
    },
    {
      title: "PA & AV Systems",
      description: "Crystal clear public address systems and immersive audio-visual setups for conference rooms and public spaces.",
      icon: <Radio className="w-8 h-8" />
    },
    {
      title: "Power Backup",
      description: "Industrial grade UPS and battery solutions ensuring business continuity during power outages.",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/90 z-10" />
          <img 
            src={cctvBg} 
            alt="Surveillance Background" 
            className="w-full h-full object-cover opacity-30"
          />
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10" />
        </div>

        <div className="container relative z-20 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
              Visionary • Innovative • Productivity
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Where Technology Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-300">
                Reliability
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              Empowering your business with cutting-edge security, networking, and IT infrastructure solutions tailored for the modern enterprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all uppercase tracking-wide flex items-center justify-center gap-2 group cursor-pointer">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-all uppercase tracking-wide cursor-pointer">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll Down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      {/* INTRO / ABOUT PREVIEW */}
      <section className="py-24 bg-secondary/50 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Redefining Security & <br />
                <span className="text-primary">Connectivity</span>
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                VIP Networks specializes in delivering top-tier IT infrastructure and security solutions. From enterprise networking to advanced surveillance, we build systems that safeguard your assets and streamline your operations.
              </p>
              <ul className="space-y-4 mb-8">
                {["Expert installation & maintenance", "24/7 Technical Support", "Customized Enterprise Solutions"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <span className="text-primary font-bold uppercase tracking-wider text-sm hover:underline cursor-pointer">
                  Read More About Us
                </span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-xl">
                    <Shield className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg text-white">Security</h3>
                    <p className="text-sm text-muted-foreground mt-2">Comprehensive protection for physical and digital assets.</p>
                  </div>
                  <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-xl">
                    <Lock className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-bold text-lg text-white">Access</h3>
                    <p className="text-sm text-muted-foreground mt-2">Smart control systems for regulated entry.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-xl">
                    <Network className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="font-bold text-lg text-white">Network</h3>
                    <p className="text-sm text-muted-foreground mt-2">High-speed infrastructure for modern business.</p>
                  </div>
                  <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-xl">
                    <Zap className="w-10 h-10 text-yellow-500 mb-4" />
                    <h3 className="font-bold text-lg text-white">Power</h3>
                    <p className="text-sm text-muted-foreground mt-2">Uninterrupted power solutions for continuity.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 blur-3xl rounded-full" />

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Solutions</h2>
            <p className="text-muted-foreground text-lg">
              We offer end-to-end technology services designed to enhance efficiency and ensure security across your organization.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Link href="/services">
              <button className="px-8 py-3 bg-secondary hover:bg-white/10 text-white border border-white/10 rounded-full font-bold uppercase text-sm tracking-wide transition-all cursor-pointer">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        {/* Tech abstract image for overlay texture */}
        
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Upgrade Your Infrastructure?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Get in touch with our experts today for a customized quote tailored to your specific business needs.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-xl hover:scale-105 transition-transform uppercase tracking-wide cursor-pointer">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
