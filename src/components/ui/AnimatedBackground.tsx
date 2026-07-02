export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#090909]">
      {/* Subtle fading engineering grid */}
      <div className="absolute inset-0 bg-grid" />
      
      {/* Top-Left Ambient Glow (Orange) */}
      <div className="absolute -top-[20%] -left-[20%] w-[650px] h-[650px] rounded-full bg-retro-orange/[0.035] blur-[180px]" />

      {/* Bottom-Left Ambient Glow (Blue) */}
      <div className="absolute -bottom-[20%] -left-[20%] w-[650px] h-[650px] rounded-full bg-retro-blue/[0.03] blur-[180px]" />

      {/* Bottom-Right Ambient Glow (Purple) */}
      <div className="absolute -bottom-[20%] -right-[20%] w-[650px] h-[650px] rounded-full bg-retro-purple/[0.03] blur-[180px]" />
    </div>
  );
};
