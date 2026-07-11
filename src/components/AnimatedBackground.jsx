export default function AnimatedBackground({ variant = 'default' }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute -top-32 -left-24 w-96 h-96 bg-primary/30 rounded-full blur-[100px] animate-blob" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] animate-blob-slow" />
      {variant === 'default' && (
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-blob" />
      )}
    </div>
  )
}
