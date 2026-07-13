import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ResumeButton({ className = "" }) {
  return (
    <motion.a
      href="/johnrovs.pdf"
      download="johnrovs.pdf"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      className={`btn-primary ${className}`}
    >
      <Download size={18} />
      Download Resume
    </motion.a>
  );
}
