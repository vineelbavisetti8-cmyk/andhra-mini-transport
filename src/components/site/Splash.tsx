import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Splash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 2000);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          onClick={handleDismiss}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-deep"
        >
          <motion.svg
            viewBox="0 0 48 48"
            className="h-20 w-20 text-white"
            fill="none"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M6 38 L24 8 L42 38"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            <motion.path
              d="M15 30 H33"
              stroke="var(--gold-primary)"
              strokeWidth="2.6"
              strokeLinecap="round"
              variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
              transition={{ duration: 0.45, delay: 0.55, ease: "easeInOut" }}
            />
          </motion.svg>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-sm font-semibold tracking-[0.28em] text-white">
              ANDHRA MINI TRANSPORT
            </p>
            <motion.span
              className="mx-auto mt-4 block h-px bg-gold"
              initial={{ width: 0 }}
              animate={{ width: "11rem" }}
              transition={{ delay: 1, duration: 0.7, ease: "easeInOut" }}
            />
            <p className="mt-4 text-xs tracking-[0.2em] text-white/60">
              TRUSTED SINCE 1993 — PAN INDIA RELOCATION
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
