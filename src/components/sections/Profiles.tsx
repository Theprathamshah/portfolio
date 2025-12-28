import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GitHubIcon, LeetCodeIcon, ExternalLinkIcon } from '../ui/Icons';
import { profiles } from '@/data/portfolio';
import { useGitHubData } from '@/hooks/useGitHubData';

const GitHubCard = ({ profile }: { profile: typeof profiles[0] }) => {
  const { repos, followers, loading, error } = useGitHubData(profile.username);
  console.log(repos, followers);
  console.log(`Profile is`, profile);
  return (
    <motion.a
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="retro-card retro-card-hover p-5 group block"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-retro-paper dark:bg-retro-gray/30">
            <GitHubIcon className="w-5 h-5 text-retro-gray dark:text-retro-paper/70" />
          </div>
          <span className="font-semibold text-retro-black dark:text-retro-cream">
            {profile.platform}
          </span>
        </div>
        <span className="text-sm text-retro-orange flex items-center gap-1 group-hover:underline">
          Visit <ExternalLinkIcon className="w-3.5 h-3.5" />
        </span>
      </div>

      <p className="text-sm text-retro-gray dark:text-retro-paper/70 mb-1">
        @{profile.username}
      </p>
      <p className="text-sm text-retro-gray dark:text-retro-paper/70">
        {profile.description}
      </p>

      <div className="flex gap-6 mt-4 pt-4 border-t border-retro-black/5 dark:border-white/5">
        <div>
          <p className="font-semibold text-retro-black dark:text-retro-cream">
            {loading ? '...' : error ? '—' : repos}
          </p>
          <p className="text-xs text-retro-gray dark:text-retro-paper/60">
            Repositories
          </p>
        </div>
        <div>
          <p className="font-semibold text-retro-black dark:text-retro-cream">
            {loading ? '...' : error ? '—' : followers}
          </p>
          <p className="text-xs text-retro-gray dark:text-retro-paper/60">
            Followers
          </p>
        </div>
      </div>
    </motion.a>
  );
};

const LeetCodeCard = ({ profile }: { profile: typeof profiles[0] }) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const url = `https://alfa-leetcode-api.onrender.com/${profile.username}/profile`;
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
        setError(err.message || 'Failed to fetch LeetCode data');
        setLoading(false);
      });

    return () => controller.abort();
  }, [profile.username]);

  const totalSolved = data?.totalSolved ?? null;
  const easy = data?.easySolved ?? data?.matchedUserStats?.acSubmissionNum?.find((d: any) => d.difficulty === 'Easy')?.count ?? null;
  const medium = data?.mediumSolved ?? data?.matchedUserStats?.acSubmissionNum?.find((d: any) => d.difficulty === 'Medium')?.count ?? null;
  const hard = data?.hardSolved ?? data?.matchedUserStats?.acSubmissionNum?.find((d: any) => d.difficulty === 'Hard')?.count ?? null;

  return (
    <motion.a
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="retro-card retro-card-hover p-5 group block"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-retro-paper dark:bg-retro-gray/30">
            <LeetCodeIcon className="w-5 h-5 text-retro-gray dark:text-retro-paper/70" />
          </div>
          <span className="font-semibold text-retro-black dark:text-retro-cream">
            {profile.platform}
          </span>
        </div>
        <span className="text-sm text-retro-orange flex items-center gap-1 group-hover:underline">
          Visit <ExternalLinkIcon className="w-3.5 h-3.5" />
        </span>
      </div>

      <p className="text-sm text-retro-gray dark:text-retro-paper/70 mb-1">@{profile.username}</p>
      {
        (() => {
          const totalStr = totalSolved != null ? totalSolved.toLocaleString() : '—';
          const rankStr = data?.ranking != null ? data.ranking.toLocaleString() : '—';
          const desc = loading
            ? 'Loading LeetCode stats...'
            : error
            ? profile.description
            : `${totalStr} solved • Rank ${rankStr}`;
          return <p className="text-sm text-retro-gray dark:text-retro-paper/70">{desc}</p>;
        })()
      }

      <div className="flex gap-6 mt-4 pt-4 border-t border-retro-black/5 dark:border-white/5">
        <div>
          <p className="font-semibold text-retro-black dark:text-retro-cream">{loading ? '...' : error ? '—' : totalSolved ?? '—'}</p>
          <p className="text-xs text-retro-gray dark:text-retro-paper/60">Problems Solved</p>
        </div>

        <div className="grid grid-cols-3 gap-4 flex-1">
          <div>
            <p className="font-semibold text-retro-black dark:text-retro-cream">{loading ? '...' : error ? '—' : easy ?? '—'}</p>
            <p className="text-xs text-retro-gray dark:text-retro-paper/60">Easy</p>
          </div>
          <div>
            <p className="font-semibold text-retro-black dark:text-retro-cream">{loading ? '...' : error ? '—' : medium ?? '—'}</p>
            <p className="text-xs text-retro-gray dark:text-retro-paper/60">Medium</p>
          </div>
          <div>
            <p className="font-semibold text-retro-black dark:text-retro-cream">{loading ? '...' : error ? '—' : hard ?? '—'}</p>
            <p className="text-xs text-retro-gray dark:text-retro-paper/60">Hard</p>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-500 mt-3">Unable to fetch live LeetCode data.</p>
      )}
    </motion.a>
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
      className="retro-card retro-card-hover p-5 group block"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-retro-paper dark:bg-retro-gray/30">
            <span className="text-retro-gray dark:text-retro-paper/70">♞</span>
          </div>
          <span className="font-semibold text-retro-black dark:text-retro-cream">{title}</span>
        </div>
        <span className="text-sm text-retro-orange flex items-center gap-1 group-hover:underline">
          Visit <ExternalLinkIcon className="w-3.5 h-3.5" />
        </span>
      </div>

      <p className="text-sm text-retro-gray dark:text-retro-paper/70 mb-1">@{profile.username}</p>
      <p className="text-sm text-retro-gray dark:text-retro-paper/70">{loading ? 'Loading chess stats...' : error ? profile.description : `Best blitz ${data?.chess_blitz?.best?.rating ?? '—'}`}</p>

      <div className="flex gap-6 mt-4 pt-4 border-t border-retro-black/5 dark:border-white/5">
        <div>
          <p className="font-semibold text-retro-black dark:text-retro-cream">{loading ? '...' : error ? '—' : blitz ?? '—'}</p>
          <p className="text-xs text-retro-gray dark:text-retro-paper/60">Blitz</p>
        </div>

        <div className="grid grid-cols-3 gap-4 flex-1">
          <div>
            <p className="font-semibold text-retro-black dark:text-retro-cream">{loading ? '...' : error ? '—' : rapid ?? '—'}</p>
            <p className="text-xs text-retro-gray dark:text-retro-paper/60">Rapid</p>
          </div>
          <div>
            <p className="font-semibold text-retro-black dark:text-retro-cream">{loading ? '...' : error ? '—' : bullet ?? '—'}</p>
            <p className="text-xs text-retro-gray dark:text-retro-paper/60">Bullet</p>
          </div>
          <div>
            <p className="font-semibold text-retro-black dark:text-retro-cream">{loading ? '...' : error ? '—' : tactics ?? '—'}</p>
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
    <section id="profiles" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-retro-black dark:text-retro-cream mb-2">
          Achievements
        </h2>
        <p className="text-retro-gray dark:text-retro-paper/60 mb-8">
          A few things I'm proud of.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {githubProfile && <GitHubCard profile={githubProfile} />}
          {leetcodeProfile && <LeetCodeCard profile={leetcodeProfile} />}
          {chessProfile && <ChessCard profile={chessProfile} />}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="retro-card p-5 mt-6"
        >
          <div className="mb-2">
            <h3 className="font-semibold text-retro-black dark:text-retro-cream text-lg">Open-source Contributions</h3>
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
    </section>
  );
};
