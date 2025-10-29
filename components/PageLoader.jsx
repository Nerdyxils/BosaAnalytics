import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white/70 backdrop-blur-sm">
      <motion.div
        className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 0.8, repeat: Infinity }}
      />
    </div>
  );
}


