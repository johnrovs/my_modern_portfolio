import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center gap-4"
        >
          <motion.p
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            className="font-mono text-2xl text-gradient font-bold"
          >
            {'<JRR />'}
          </motion.p>
          <div className="w-40 h-1 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1/2 h-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
