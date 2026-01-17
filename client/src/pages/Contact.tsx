import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type ContactMessageInput } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-contact";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import radarGif from "@assets/CCTV_Camera_1768636156008.gif";

// Frontend validation schema
const contactSchema = api.contact.submit.input;

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactMessageInput>({
    resolver: zodResolver(contactSchema),
  });

  const { mutate, isPending } = useSubmitContact();

  const onSubmit = (data: ContactMessageInput) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
        <img src={radarGif} alt="" className="w-full h-full object-cover" />
      </div>
      <Navbar />

      <div className="pt-32 pb-20 container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Contact us for a consultation or quote. Our team is ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="bg-card rounded-3xl p-8 border border-white/5">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Office</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Shop No. 5, Ground Floor,<br />
                      Jogeshwari East,<br />
                      Mumbai - 400060
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-muted-foreground mb-1">+91 9326144739</p>
                    <p className="text-muted-foreground text-sm">(Mon-Sat, 9am - 7pm)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <a href="mailto:vip.itinfra@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
                      vip.itinfra@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-secondary/50 rounded-3xl h-64 border border-white/5 flex items-center justify-center text-muted-foreground text-sm uppercase tracking-widest relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-800">
                {/* Simulated Map UI */}
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3491953255154!2d72.85507797497886!3d19.136166450085465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7d5904d9943%3A0xc619f5e3e6012015!2sJogeshwari%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709289299999!5m2!1sen!2sin" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0, opacity: 0.6, filter: 'grayscale(100%) invert(90%)' }} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-3xl p-8 lg:p-10 border border-white/5 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
            <p className="text-muted-foreground mb-8">Fill out the form below and we will get back to you shortly.</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Your Name</label>
                  <input 
                    {...register("name")}
                    placeholder="John Doe"
                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                  />
                  {errors.name && <p className="text-destructive text-xs ml-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Phone Number</label>
                  <input 
                    {...register("phone")}
                    placeholder="+91 98765 43210"
                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                  />
                  {errors.phone && <p className="text-destructive text-xs ml-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Email Address</label>
                <input 
                  {...register("email")}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                />
                {errors.email && <p className="text-destructive text-xs ml-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Message</label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50 resize-none"
                />
                {errors.message && <p className="text-destructive text-xs ml-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isPending}
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
