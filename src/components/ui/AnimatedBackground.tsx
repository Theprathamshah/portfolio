export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-white dark:bg-retro-black transition-colors duration-300">
      {/* 1. Base breathing ambient gradient flow layer (10% opacity) */}
      <div className="absolute inset-0 bg-animated-gradient opacity-10" />

      {/* 2. Floating Ambient Glow Accent Blobs */}
      {/* Orange Glow (Left Side) */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#FF6B35]/[0.12] dark:bg-[#FF6B35]/[0.22] blur-[130px] animate-blob" 
        style={{ willChange: 'transform', contain: 'strict' }}
      />

      {/* Purple Glow (Right Side) */}
      <div 
        className="absolute -bottom-[15%] -right-[15%] w-[600px] h-[600px] rounded-full bg-[#7C3AED]/[0.1] dark:bg-[#7C3AED]/[0.18] blur-[130px] animate-blob" 
        style={{ animationDelay: '4s', willChange: 'transform', contain: 'strict' }}
      />

      {/* 3. Static CSS-drawn Grid Overlay (on top of glows) */}
      <div className="absolute inset-0 bg-grid-lines" />
    </div>
  );
};
