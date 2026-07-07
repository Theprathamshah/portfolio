import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GitHubIcon, LeetCodeIcon, ExternalLinkIcon } from '../ui/Icons';
import { profiles } from '@/data/portfolio';
import { useGitHubData } from '@/hooks/useGitHubData';
import { useTheme } from '@/context/ThemeContext';

const GitHubCard = ({ profile }: { profile: typeof profiles[0] }) => {
  const { repos, followers, following, loading, error } = useGitHubData(profile.username);
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 md:p-8 hover:border-retro-orange/30 dark:hover:border-white/15 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-retro-black/5 dark:bg-white/5 border border-retro-black/5 dark:border-white/5">
            <GitHubIcon className="w-6 h-6 text-retro-gray dark:text-white/70" />
          </div>
          <h2 className="text-2xl font-extrabold text-retro-black dark:text-white">
            GitHub Contributions
          </h2>
        </div>
        <motion.a
          href={profile.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="text-sm text-retro-orange flex items-center gap-1 hover:underline"
        >
          Visit <ExternalLinkIcon className="w-3.5 h-3.5" />
        </motion.a>
      </div>


      <div className="mb-6 p-4 bg-retro-paper dark:bg-retro-gray/20 rounded-lg border border-retro-black/5 dark:border-white/5">
        <div className="w-full overflow-x-auto bg-retro-offWhite dark:bg-black rounded-lg p-4 min-h-[150px] flex items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center gap-2 text-retro-gray dark:text-white/60">
              <div className="w-8 h-8 border-2 border-retro-black/20 border-t-retro-black/60 dark:border-white/20 dark:border-t-white/60 rounded-full animate-spin"></div>
              <p className="text-sm">Loading contribution graph...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center gap-2 text-retro-gray dark:text-white/60">
              <p className="text-sm">Unable to load contribution graph</p>
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-retro-orange hover:underline text-xs"
              >
                View on GitHub →
              </a>
            </div>
          ) : (
            <img
              src={`https://github-contributions-api.jogruber.de/v4/${profile.username}?no-total=true&no-legend=true&format=svg&theme=${theme === 'dark' ? 'github-dark' : 'github-light'}`}
              alt="GitHub Contribution Graph"
              width={820}
              height={120}
              className="w-full h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ghchart.rshah.org/${profile.username}?colors=161b22,0e4429,006d32,26a641,39d353`;
                target.width = 820;
                target.height = 120;
              }}
            />
          )}
        </div>
        <p className="text-sm text-retro-gray dark:text-white/60 mt-3 text-center">
          Contributions in the last year
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 text-center hover:border-retro-orange/30 dark:hover:border-white/20 transition-all duration-300"
        >
          <div className="text-2xl font-extrabold text-retro-black dark:text-white mb-1">
            {loading ? '...' : error ? '—' : repos}
          </div>
          <div className="text-xs text-retro-gray dark:text-white/75 font-medium">Repositories</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-4 text-center hover:border-retro-orange/30 dark:hover:border-white/20 transition-all duration-300"
        >
          <div className="text-2xl font-extrabold text-retro-black dark:text-white mb-1">
            {loading ? '...' : error ? '—' : followers}
          </div>
          <div className="text-xs text-retro-gray dark:text-white/75 font-medium">Followers</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card p-4 text-center hover:border-white/20 transition-all duration-300"
        >
          <div className="text-2xl font-bold text-retro-black dark:text-white mb-1">
            {loading ? '...' : error ? '—' : following}
          </div>
          <div className="text-xs text-retro-gray dark:text-retro-paper/60">Following</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const LeetCodeCard = ({ profile }: { profile: typeof profiles[0] }) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const primary = `https://alfa-leetcode-api.onrender.com/${profile.username}/profile`;
    const fallback = `https://leetcode-stats-api.herokuapp.com/${profile.username}`;
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const res = await fetch(primary, { signal: controller.signal });
        if (res.status === 429) throw new Error('rate_limited');
        if (!res.ok) throw new Error('primary_failed');
        const json = await res.json();
        setData(json);
        setLoading(false);
        return;
      } catch (err: any) {
        if (err?.name === 'AbortError') return;
        // Try fallback API
        try {
          const res2 = await fetch(fallback, { signal: controller.signal });
          if (!res2.ok) throw new Error('fallback_failed');
          const json2 = await res2.json();
          setData(json2);
          setLoading(false);
          return;
        } catch (err2: any) {
          if (err2?.name === 'AbortError') return;
          setError(err2?.message || 'Failed to fetch LeetCode data');
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [profile.username]);

  const totalSolved = data?.totalSolved ?? null;
  // @ts-ignore
  const easy = data?.easySolved ?? data?.matchedUserStats?.acSubmissionNum?.find((d: any) => d.difficulty === 'Easy')?.count ?? null;
  // @ts-ignore
  const medium = data?.mediumSolved ?? data?.matchedUserStats?.acSubmissionNum?.find((d: any) => d.difficulty === 'Medium')?.count ?? null;
  // @ts-ignore
  const hard = data?.hardSolved ?? data?.matchedUserStats?.acSubmissionNum?.find((d: any) => d.difficulty === 'Hard')?.count ?? null;
  const ranking = data?.ranking ?? null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="glass-card p-6 md:p-8 hover:border-retro-orange/30 dark:hover:border-white/15 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-retro-black/5 dark:bg-white/5 border border-retro-black/5 dark:border-white/5">
            <LeetCodeIcon className="w-6 h-6 text-retro-gray dark:text-white/70" />
          </div>
          <h2 className="text-2xl font-extrabold text-retro-black dark:text-white">
            LeetCode Statistics
          </h2>
        </div>
        <motion.a
          href={profile.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="text-sm text-retro-orange flex items-center gap-1 hover:underline font-bold"
        >
          Visit <ExternalLinkIcon className="w-3.5 h-3.5" />
        </motion.a>
      </div>


      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 text-center hover:border-retro-orange/30 dark:hover:border-white/20 transition-all duration-300"
        >
          <div className="text-2xl font-extrabold text-retro-black dark:text-white mb-1">
            {loading ? '...' : error ? '—' : totalSolved?.toLocaleString() ?? '—'}
          </div>
          <div className="text-xs text-retro-gray dark:text-white/75 font-medium">Problems Solved</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-4 text-center hover:border-retro-orange/30 dark:hover:border-white/20 transition-all duration-300"
        >
          <div className="text-2xl font-extrabold text-retro-black dark:text-white mb-1">
            {loading ? '...' : error ? '—' : ranking?.toLocaleString() ?? '—'}
          </div>
          <div className="text-xs text-retro-gray dark:text-white/75 font-medium">Ranking</div>
        </motion.div>
      </div>

      {error && (
        <p className="text-xs text-red-500 mt-4 text-center">Unable to fetch live LeetCode data.</p>
      )}
    </motion.div>
  );
};

const ChessCard = ({ profile }: { profile: typeof profiles[0] }) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const url = `https://api.chess.com/pub/player/${profile.username}/stats`;
    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        if (err.name === 'AbortError') return;
        setError(err.message || 'Failed to fetch chess.com data');
        setLoading(false);
      });

    return () => controller.abort();
  }, [profile.username]);

  const blitz = data?.chess_blitz?.last?.rating ?? null;
  const rapid = data?.chess_rapid?.last?.rating ?? null;
  const bullet = data?.chess_bullet?.last?.rating ?? null;
  const tactics = data?.tactics?.highest?.rating ?? null;

  const title = '♞ Chess (Strategy & Problem Solving)';

  return (
    <motion.a
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="glass-card glass-card-hover p-5 group block"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-retro-black/5 dark:bg-white/5 border border-retro-black/5 dark:border-white/5">
            <span className="text-retro-gray dark:text-white/70">♞</span>
          </div>
          <span className="font-bold text-retro-black dark:text-white">{title}</span>
        </div>
        <span className="text-sm text-retro-orange flex items-center gap-1 group-hover:underline font-bold">
          Visit <ExternalLinkIcon className="w-3.5 h-3.5" />
        </span>
      </div>

      <p className="text-sm text-retro-gray dark:text-white/70 mb-1">@{profile.username}</p>
      <p className="text-sm text-retro-gray dark:text-white/75 font-medium">{loading ? 'Loading chess stats...' : error ? profile.description : `Best blitz ${data?.chess_blitz?.best?.rating ?? '—'}`}</p>

      <div className="flex gap-6 mt-4 pt-4 border-t border-retro-black/5 dark:border-white/5">
        <div>
          <p className="font-extrabold text-retro-black dark:text-white">{loading ? '...' : error ? '—' : blitz ?? '—'}</p>
          <p className="text-xs text-retro-gray dark:text-white/70 font-medium">Blitz</p>
        </div>

        <div className="grid grid-cols-3 gap-4 flex-1">
          <div>
            <p className="font-extrabold text-retro-black dark:text-white">{loading ? '...' : error ? '—' : rapid ?? '—'}</p>
            <p className="text-xs text-retro-gray dark:text-white/70 font-medium">Rapid</p>
          </div>
          <div>
            <p className="font-extrabold text-retro-black dark:text-white">{loading ? '...' : error ? '—' : bullet ?? '—'}</p>
            <p className="text-xs text-retro-gray dark:text-white/70 font-medium">Bullet</p>
          </div>
          <div>
            <p className="font-extrabold text-retro-black dark:text-white">{loading ? '...' : error ? '—' : tactics ?? '—'}</p>
            <p className="text-xs text-retro-gray dark:text-white/70 font-medium">Tactics</p>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-500 mt-3">Unable to fetch chess.com data.</p>
      )}
    </motion.a>
  );
};

export const Profiles = () => {
  const githubProfile = profiles.find(p => p.platform === 'GitHub');
  const leetcodeProfile = profiles.find(p => p.platform === 'LeetCode');
  const chessProfile = profiles.find(p => p.platform === 'Chess.com');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-6xl mx-auto"
    >
      <div className="mb-12 select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 rounded-full bg-retro-black/5 dark:bg-white/5 text-[10px] font-bold text-retro-orange border border-retro-black/10 dark:border-white/10 mb-4 uppercase tracking-[0.2em]"
        >
          Track Record
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-retro-black dark:text-white mb-4 leading-tight tracking-tight"
        >
          Technical <span className="text-retro-orange text-glow">Achievements</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-retro-gray dark:text-white/75 font-medium"
        >
          Validation of skills through competitive programming, open source contributions, and strategy.
        </motion.p>
      </div>

      <div className="bento-grid">
        {/* GitHub Contribution - Main Piece */}
        {githubProfile && (
          <div className="md:col-span-2 md:row-span-2">
            <GitHubCard profile={githubProfile} />
          </div>
        )}

        {/* LeetCode - Wide Piece */}
        {leetcodeProfile && (
          <div className="md:col-span-2 md:row-span-1">
            <LeetCodeCard profile={leetcodeProfile} />
          </div>
        )}

        {/* Chess - Now Wide instead of Tall for better fit */}
        {chessProfile && (
          <div className="md:col-span-2 md:row-span-1">
            <ChessCard profile={chessProfile} />
          </div>
        )}

        {/* Open Source - Full width bottom piece */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.5 }}
           className="md:col-span-4 glass-card p-8 flex flex-col justify-center border-retro-orange/20"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl select-none">
              <h2 className="font-extrabold text-retro-black dark:text-white text-2xl flex items-center gap-2 mb-2">
                <span className="text-retro-orange text-3xl">★</span> Open-source Contributions
              </h2>
              <p className="text-sm text-retro-gray dark:text-white/75 font-medium">
                Active member of the developer community, contributing to tools that help thousands of developers worldwide.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 flex-1">
              <li className="p-4 rounded-xl bg-retro-black/5 dark:bg-white/5 border border-retro-black/5 dark:border-white/5 hover:border-retro-orange/30 transition-all duration-300">
                <a href="https://learngitbranching.js.org/" target="_blank" rel="noreferrer" className="text-retro-orange font-bold hover:underline block mb-1">Learn Git Branching</a>
                <p className="text-xs text-retro-gray dark:text-white/70 font-medium">UX/UI enhancements and core bug fixes for the interactive Git playground.</p>
              </li>
              <li className="p-4 rounded-xl bg-retro-black/5 dark:bg-white/5 border border-retro-black/5 dark:border-white/5 hover:border-retro-orange/30 transition-all duration-300">
                <a href="https://chesskit.org/" target="_blank" rel="noreferrer" className="text-retro-orange font-bold hover:underline block mb-1">ChessKit</a>
                <p className="text-xs text-retro-gray dark:text-white/70 font-medium">Implemented advanced ELO estimation logic for player analytics.</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
