import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x,
        y,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      className="hidden md:block"
    >
      {/* Outer Ring */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative -left-1/2 -top-1/2 w-10 h-10 border-2 border-primary/50 rounded-full flex items-center justify-center"
      >
        {/* CCTV Lens Detail */}
        <div className="w-6 h-6 border border-primary/30 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        </div>
        
        {/* Target Crosshairs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-primary/50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-primary/50" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-primary/50" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-primary/50" />

        {/* Scanning Line Effect */}
        <motion.div
          animate={{
            top: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 -translate-x-1/2 w-8 h-[1px] bg-primary/20"
        />
      </motion.div>
    </motion.div>
  );
}
