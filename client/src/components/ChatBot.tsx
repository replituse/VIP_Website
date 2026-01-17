import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import chatbotGif from "@assets/chatbot_1768660863797.gif";
import { services } from "@/lib/services-data";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! I'm your VIP Networks assistant. How can I help you with our IT & Infrastructure solutions today?" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    // Simple knowledge base logic
    setTimeout(() => {
      let botResponse = "I'm sorry, I don't have specific information on that. Would you like to speak with our sales team? You can reach us at +91 9326144739 or vip.itinfra@gmail.com.";
      
      const query = userMessage.toLowerCase();
      
      // Networking & IT Infrastructure Q&A
      if (query.includes("what is ip") || query.includes("ip address")) {
        botResponse = "An IP (Internet Protocol) address is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. It serves two main functions: host or network interface identification and location addressing.";
      } else if (query.includes("what is dhcp") || query.includes("dhcp")) {
        botResponse = "DHCP (Dynamic Host Configuration Protocol) is a network management protocol used on IP networks whereby a DHCP server dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks.";
      } else if (query.includes("protocol") || query.includes("what is protocol")) {
        botResponse = "In networking, a protocol is a set of rules that govern the exchange of information between devices. Examples include TCP/IP (for internet communication), HTTP (for web browsing), and SMTP (for email).";
      } else if (query.includes("lan") || query.includes("wan")) {
        botResponse = "LAN (Local Area Network) covers a small geographic area like an office or home, while WAN (Wide Area Network) covers a large geographic area, such as a city, country, or even the whole world.";
      } else if (query.includes("dns")) {
        botResponse = "DNS (Domain Name System) is like the phonebook of the Internet. It translates human-friendly domain names (like google.com) into numerical IP addresses that computers use to talk to each other.";
      } else if (query.includes("vlan")) {
        botResponse = "A VLAN (Virtual Local Area Network) is a logical subnetwork that can group together a collection of devices from different physical LANs. This improves security and network management.";
      } else if (query.includes("firewall")) {
        botResponse = "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies.";
      }
      
      // Check services if not a general networking question
      else {
        const foundService = services.find(s => 
          query.includes(s.title.toLowerCase()) || 
          s.title.toLowerCase().split(" ").some(word => word.length > 3 && query.includes(word))
        );

        if (foundService) {
          botResponse = `${foundService.title}: ${foundService.description}\n\nKey features include:\n${foundService.features.slice(0, 3).map(f => `• ${f}`).join("\n")}`;
        } else if (query.includes("contact") || query.includes("reach") || query.includes("phone") || query.includes("email")) {
          botResponse = "You can contact VIP Networks at:\nPhone: +91 9326144739\nEmail: vip.itinfra@gmail.com\nLocation: Jogeshwari East, Mumbai.";
        }
      }

      setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[10000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[400px] md:w-[450px] h-[600px] bg-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-lg"
          >
            {/* Header */}
            <div className="p-4 bg-primary flex items-center justify-between text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 overflow-hidden">
                  <img src={chatbotGif} alt="Bot" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">VIP Assistant</h4>
                  <p className="text-[10px] opacity-80">Online | AI Powered</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/30"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === "user" 
                        ? "bg-primary text-primary-foreground rounded-tr-none" 
                        : "bg-secondary text-foreground border border-white/5 rounded-tl-none whitespace-pre-wrap"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-card border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about our services..."
                className="flex-1 bg-secondary/50 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary/50"
              />
              <button 
                onClick={handleSend}
                className="bg-primary text-primary-foreground p-2 rounded-full hover:scale-105 transition-transform"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-40 h-40 flex items-center justify-center group relative overflow-visible"
      >
        <img 
          src={chatbotGif} 
          alt="Chat" 
          className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]" 
        />
        {!isOpen && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-8 right-8 w-8 h-8 bg-red-500 rounded-full border-2 border-background shadow-lg"
          />
        )}
      </motion.button>
    </div>
  );
}
