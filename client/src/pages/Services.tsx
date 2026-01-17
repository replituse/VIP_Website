import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { services } from "@/lib/services-data";
import radarGif from "@assets/CCTV_Camera_1768636156008.gif";

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Solutions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology services tailored to secure, connect, and empower your enterprise.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 container px-4 md:px-6 mx-auto space-y-24">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            {/* Image/Icon Side */}
            <div className="flex-1 w-full flex justify-center">
              <div className="relative w-full max-w-lg aspect-video rounded-2xl bg-gradient-to-br from-secondary to-card border border-white/10 shadow-2xl overflow-hidden group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 w-full">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Solution {String(index + 1).padStart(2, '0')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <button className="flex items-center gap-2 text-white font-bold hover:text-primary transition-colors uppercase tracking-wider text-sm group cursor-pointer">
                  Request Quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
