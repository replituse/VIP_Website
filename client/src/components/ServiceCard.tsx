import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string | React.ReactNode;
  delay?: number;
}

export function ServiceCard({ title, description, image, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-card/50 backdrop-blur-sm border border-white/5 hover:border-primary/50 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover-elevate active-elevate-2"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-full h-48 mb-6 rounded-lg bg-secondary overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        <Link href="/services">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider cursor-pointer group/link">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
