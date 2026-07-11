import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'
import SectionTitle from './SectionTitle'
import SocialLinks from './SocialLinks'

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your full name.'
    if (!form.email.trim()) {
      next.email = 'Enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!form.subject.trim()) next.subject = 'Enter a subject.'
    if (!form.message.trim()) next.message = 'Write a short message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    // Simulated submit — wire this up to your email service (e.g. Formspree, EmailJS) or backend API.
    await new Promise((res) => setTimeout(res, 1400))
    setStatus('success')
    setForm(initialForm)
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="relative section-pad">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <SectionTitle tag="06" file="contact.js" title="Let's Work Together" />
          <p className="text-textSecondary text-base sm:text-lg leading-relaxed max-w-md -mt-6">
            Have a project in mind or an opening on your team? I'd love to hear about it —
            drop a message and I'll get back to you soon.
          </p>

          <div className="mt-8 space-y-4">
            <a href="mailto:roverorommel12@gmail.com" className="flex items-center gap-4 glass-card p-4 hover:border-accent/50 transition-colors">
              <span className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-textSecondary">Email</p>
                <p className="text-sm text-white font-medium">roverorommel12@gmail.com</p>
              </div>
            </a>
            <a href="tel:+639000000000" className="flex items-center gap-4 glass-card p-4 hover:border-accent/50 transition-colors">
              <span className="w-11 h-11 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-textSecondary">Phone</p>
                <p className="text-sm text-white font-medium">+1 702 857 5758</p>
              </div>
            </a>
            <div className="flex items-center gap-4 glass-card p-4">
              <span className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-textSecondary">Location</p>
                <p className="text-sm text-white font-medium">Las Vegas, NV · Onsite - Hybrid - Remote-friendly</p>
              </div>
            </div>
          </div>

          <SocialLinks className="mt-8" />
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          noValidate
          className="glass-card p-6 sm:p-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-1.5">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Juan Dela Cruz"
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                errors.name ? 'border-red-400/60' : 'border-white/10'
              } text-white placeholder:text-textSecondary/50 focus:border-accent/60 outline-none transition-colors`}
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                errors.email ? 'border-red-400/60' : 'border-white/10'
              } text-white placeholder:text-textSecondary/50 focus:border-accent/60 outline-none transition-colors`}
            />
            {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-textSecondary mb-1.5">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              placeholder="Let's talk about..."
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                errors.subject ? 'border-red-400/60' : 'border-white/10'
              } text-white placeholder:text-textSecondary/50 focus:border-accent/60 outline-none transition-colors`}
            />
            {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell me a bit about your project..."
              className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                errors.message ? 'border-red-400/60' : 'border-white/10'
              } text-white placeholder:text-textSecondary/50 focus:border-accent/60 outline-none transition-colors resize-none`}
            />
            {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-full disabled:opacity-70"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Sending...
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle2 size={18} /> Message Sent
              </>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </motion.button>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-success text-center"
            >
              Thanks for reaching out — I'll reply within a day or two.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
