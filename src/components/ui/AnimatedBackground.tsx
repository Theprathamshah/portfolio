export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Subtle gradient for light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-retro-orange/3 via-transparent to-retro-teal/3" />
      {/* Modern dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-retro-orange/5 via-transparent to-retro-teal/5 dark:opacity-100 opacity-0" />
      {/* Additional depth for dark mode */}
      <div className="absolute inset-0 bg-gradient-to-t from-retro-black via-transparent to-transparent dark:opacity-30 opacity-0" />
    </div>
  );
};
