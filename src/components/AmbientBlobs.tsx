const AmbientBlobs = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    <div
      className="absolute rounded-full"
      style={{
        width: 600, height: 600,
        background: 'hsl(var(--ms-accent))',
        filter: 'blur(80px)',
        opacity: 0.12,
        top: -200, left: -100,
        animation: 'floatBlob 22s ease-in-out infinite alternate',
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: 400, height: 400,
        background: 'hsl(var(--ms-accent-blue))',
        filter: 'blur(80px)',
        opacity: 0.12,
        top: '40%', right: -100,
        animation: 'floatBlob 18s ease-in-out infinite alternate',
        animationDelay: '-8s',
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: 300, height: 300,
        background: 'hsl(var(--ms-accent-neon))',
        filter: 'blur(80px)',
        opacity: 0.07,
        bottom: '10%', left: '30%',
        animation: 'floatBlob 25s ease-in-out infinite alternate',
        animationDelay: '-12s',
      }}
    />
  </div>
);

export default AmbientBlobs;
