export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-grid">

      <div className="absolute inset-0 bg-gradient-to-br from-retro-orange/[0.03] via-transparent to-retro-teal/[0.03]" />

      <div className="absolute inset-0 bg-gradient-to-br from-retro-orange/[0.05] via-transparent to-retro-teal/[0.05] dark:opacity-100 opacity-0" />

      <div className="absolute inset-0 bg-gradient-to-t from-retro-black via-transparent to-transparent dark:opacity-30 opacity-0" />

      <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-retro-orange/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-retro-orange/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};
