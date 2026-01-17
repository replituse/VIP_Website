import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Target, Users, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Team Members", value: "25+" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About VIP Networks</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a premier IT infrastructure provider dedicated to delivering robust, scalable, and secure technology solutions for businesses across India.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-10 rounded-3xl border border-white/5 relative overflow-hidden"
            >
              <Target className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations with reliable, cutting-edge technology infrastructure that ensures security, connectivity, and efficiency. We strive to be the trusted partner that businesses rely on for their digital foundation.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-10 rounded-3xl border border-white/5 relative overflow-hidden"
            >
              <Zap className="w-12 h-12 text-accent mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading system integrator in the region, known for our technical excellence, customer-centric approach, and innovative solutions in security and networking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5 border-y border-white/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">{stat.value}</div>
                <div className="text-primary text-sm uppercase tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-muted-foreground">
              Our commitment to quality and service excellence sets us apart in the competitive IT landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Expertise",
                icon: <Award className="w-8 h-8 text-primary" />,
                desc: "Our team consists of certified engineers with deep knowledge in security and networking protocols."
              },
              {
                title: "Customized Solutions",
                icon: <Target className="w-8 h-8 text-accent" />,
                desc: "We don't believe in one-size-fits-all. We design systems tailored to your specific operational needs."
              },
              {
                title: "Dedicated Support",
                icon: <Users className="w-8 h-8 text-blue-400" />,
                desc: "Our relationship doesn't end at installation. We provide ongoing maintenance and rapid support."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-colors text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
