import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GitHubIcon, LeetCodeIcon, ExternalLinkIcon } from '../ui/Icons';
import { profiles } from '@/data/portfolio';
import { useGitHubData } from '@/hooks/useGitHubData';

const GitHubCard = ({ profile }: { profile: typeof profiles[0] }) => {
  const { repos, followers, following, loading, error } = useGitHubData(profile.username);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="retro-card p-6 md:p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-retro-paper dark:bg-retro-gray/30">
            <GitHubIcon className="w-6 h-6 text-retro-gray dark:text-white/70" />
          </div>
          <h3 className="text-2xl font-bold text-retro-black dark:text-white bg-gradient-to-r from-retro-black to-retro-gray dark:from-white dark:to-white/80 bg-clip-text text-transparent">
            GitHub Contributions
          </h3>
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
        <div className="w-full overflow-x-auto bg-black rounded-lg p-4 min-h-[150px] flex items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center gap-2 text-white/60">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
              <p className="text-sm">Loading contribution graph...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center gap-2 text-white/60">
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
              src={`https://github-contributions-api.jogruber.de/v4/${profile.username}?no-total=true&no-legend=true&format=svg&theme=github-dark`}
              alt="GitHub Contribution Graph"
              className="w-full h-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ghchart.rshah.org/${profile.username}?colors=161b22,0e4429,006d32,26a641,39d353`;
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
          className="retro-card p-4 text-center"
        >
          <div className="text-2xl font-bold text-retro-black dark:text-white mb-1">
            {loading ? '...' : error ? '—' : repos}
          </div>
          <div className="text-xs text-retro-gray dark:text-white/60">Repositories</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="retro-card p-4 text-center"
        >
          <div className="text-2xl font-bold text-retro-black dark:text-white mb-1">
            {loading ? '...' : error ? '—' : followers}
          </div>
          <div className="text-xs text-retro-gray dark:text-retro-paper/60">Followers</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="retro-card p-4 text-center"
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
      className="retro-card p-6 md:p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-retro-paper dark:bg-retro-gray/30">
            <LeetCodeIcon className="w-6 h-6 text-retro-gray dark:text-white/70" />
          </div>
          <h3 className="text-2xl font-bold text-retro-black dark:text-white bg-gradient-to-r from-retro-black to-retro-gray dark:from-white dark:to-white/80 bg-clip-text text-transparent">
            LeetCode Statistics
          </h3>
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


      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="retro-card p-4 text-center"
        >
          <div className="text-2xl font-bold text-retro-black dark:text-white mb-1">
            {loading ? '...' : error ? '—' : totalSolved?.toLocaleString() ?? '—'}
          </div>
          <div className="text-xs text-retro-gray dark:text-white/60">Problems Solved</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="retro-card p-4 text-center"
        >
          <div className="text-2xl font-bold text-retro-black dark:text-white mb-1">
            {loading ? '...' : error ? '—' : ranking?.toLocaleString() ?? '—'}
          </div>
          <div className="text-xs text-retro-gray dark:text-retro-paper/60">Ranking</div>
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
      className="retro-card p-5 group block"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-retro-paper dark:bg-retro-gray/30">
            <span className="text-retro-gray dark:text-retro-paper/70">♞</span>
          </div>
          <span className="font-semibold text-retro-black dark:text-white">{title}</span>
        </div>
        <span className="text-sm text-retro-orange flex items-center gap-1 group-hover:underline">
          Visit <ExternalLinkIcon className="w-3.5 h-3.5" />
        </span>
      </div>

            <p className="text-sm text-retro-gray dark:text-white/70 mb-1">@{profile.username}</p>
            <p className="text-sm text-retro-gray dark:text-white/70">{loading ? 'Loading chess stats...' : error ? profile.description : `Best blitz ${data?.chess_blitz?.best?.rating ?? '—'}`}</p>

      <div className="flex gap-6 mt-4 pt-4 border-t border-retro-black/5 dark:border-white/5">
        <div>
          <p className="font-semibold text-retro-black dark:text-white">{loading ? '...' : error ? '—' : blitz ?? '—'}</p>
          <p className="text-xs text-retro-gray dark:text-retro-paper/60">Blitz</p>
        </div>

        <div className="grid grid-cols-3 gap-4 flex-1">
          <div>
            <p className="font-semibold text-retro-black dark:text-white">{loading ? '...' : error ? '—' : rapid ?? '—'}</p>
            <p className="text-xs text-retro-gray dark:text-white/60">Rapid</p>
          </div>
          <div>
            <p className="font-semibold text-retro-black dark:text-white">{loading ? '...' : error ? '—' : bullet ?? '—'}</p>
            <p className="text-xs text-retro-gray dark:text-white/60">Bullet</p>
          </div>
          <div>
            <p className="font-semibold text-retro-black dark:text-white">{loading ? '...' : error ? '—' : tactics ?? '—'}</p>
            <p className="text-xs text-retro-gray dark:text-retro-paper/60">Tactics</p>
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
      className="w-full"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-semibold text-retro-black dark:text-white mb-4"
      >
        Achievements
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-lg text-retro-gray dark:text-white/70 mb-12"
      >
        A few things I'm proud of.
      </motion.p>

      <div className="space-y-8 mb-12">
        {githubProfile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GitHubCard profile={githubProfile} />
          </motion.div>
        )}
        {leetcodeProfile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <LeetCodeCard profile={leetcodeProfile} />
          </motion.div>
        )}
        {chessProfile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ChessCard profile={chessProfile} />
          </motion.div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="retro-card p-6"
      >
          <div className="mb-2">
            <h3 className="font-semibold text-retro-black dark:text-white text-lg">Open-source Contributions</h3>
            <p className="text-sm text-retro-gray dark:text-retro-paper/70 mt-1">Selected highlights: community work.</p>
          </div>

          <ul className="mt-3 space-y-2 text-retro-gray dark:text-retro-paper/70 list-disc list-inside">
            <li>
              Contributed to <a href="https://learngitbranching.js.org/" target="_blank" rel="noreferrer" className="text-retro-orange hover:underline">learngitbranching</a> — an interactive Git learning website (UX/content improvements and bug fixes).
            </li>
            <li>
              Added a Chess ELO estimation feature to <a href="https://chesskit.org/" target="_blank" rel="noreferrer" className="text-retro-orange hover:underline">chesskit</a> — improving analytics for community players.
            </li>
          </ul>
      </motion.div>

    </motion.div>
  );
};
