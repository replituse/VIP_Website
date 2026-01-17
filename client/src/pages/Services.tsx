import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import securityIcon from "@assets/download1_1768635381877.png";
import fireIcon from "@assets/image_1768635398231.png";
import bioIcon from "@assets/image_1768635412180.png";

export default function Services() {
  const serviceCategories = [
    {
      id: "surveillance",
      title: "CCTV & Surveillance",
      icon: securityIcon,
      content: "We provide comprehensive surveillance solutions including HD cameras, IP cameras, NVRs, and remote monitoring setups. Our systems ensure 24/7 visibility with night vision and motion detection capabilities.",
      features: ["HD/IP/Network Cameras", "Night Vision & Motion Detection", "Remote Mobile Monitoring", "Video Analytics"]
    },
    {
      id: "fire-safety",
      title: "Fire & Safety",
      icon: fireIcon,
      content: "Protect your premises with our advanced fire detection systems. We install smoke detectors, heat sensors, and integrated alarm panels that respond instantly to threats.",
      features: ["Conventional & Addressable Panels", "Smoke & Heat Detectors", "Manual Call Points", "Response Integration"]
    },
    {
      id: "biometrics",
      title: "Biometrics & Access Control",
      icon: bioIcon,
      content: "Secure your facility with biometric fingerprint scanners, facial recognition, and RFID card systems. Track attendance and restrict unauthorized entry effectively.",
      features: ["Fingerprint & Facial Recognition", "RFID Card Systems", "Time & Attendance Tracking", "Door Interlocking"]
    },
    {
      id: "networking",
      title: "Networking & IT Infrastructure",
      icon: null, // Default icon fallback
      content: "We design and implement structured cabling, server racks, switching, and routing solutions to create a robust backbone for your IT operations.",
      features: ["Structured Cabling (Cat6/Fiber)", "Switches & Routers", "Server Racks & Cabinets", "Wireless Access Points"]
    },
    {
      id: "audio-visual",
      title: "PA Systems & AV Solutions",
      icon: null,
      content: "Enhance communication with our Public Address systems and Audio-Visual setups for conference rooms, auditoriums, and office spaces.",
      features: ["Conference Room Solutions", "Projectors & Screens", "Public Address Systems", "Background Music Systems"]
    },
    {
      id: "power",
      title: "Power Backup & UPS",
      icon: null,
      content: "Ensure business continuity with our reliable UPS and battery backup solutions designed for critical IT loads.",
      features: ["Online & Offline UPS", "Battery Banks", "Inverters", "Power Audits"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
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
        {serviceCategories.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            {/* Image/Icon Side */}
            <div className="flex-1 w-full flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-secondary to-card border border-white/10 flex items-center justify-center p-12 shadow-2xl overflow-hidden group">
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {service.icon ? (
                  <img src={service.icon as string} alt={service.title} className="w-48 h-48 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center text-primary text-6xl font-bold border border-primary/20">
                    {service.title.charAt(0)}
                  </div>
                )}
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 w-full">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Service {String(index + 1).padStart(2, '0')}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {service.content}
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
