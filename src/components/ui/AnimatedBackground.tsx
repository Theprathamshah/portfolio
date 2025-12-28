export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-retro-orange/5 via-transparent to-retro-teal/5 dark:from-retro-orange/10 dark:via-transparent dark:to-retro-teal/10" />
    </div>
  );
};
