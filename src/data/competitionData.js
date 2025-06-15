// src/data/competitionData.js

export const leaderboard = [
  { rank: 1, name: 'Alex Chen', score: 2850 },
  { rank: 2, name: 'Sarah Kim', score: 2720 },
  { rank: 3, name: 'You', score: 2450 },
  { rank: 4, name: 'Mike Johnson', score: 2380 },
  { rank: 5, name: 'Emma Wilson', score: 2290 },
];

export const achievements = [
  { title: 'Speed Demon', desc: 'Complete 10 speed challenges', earned: true },
  { title: 'Perfect Score', desc: 'Get 100% on any quiz', earned: true },
  { title: 'Team Player', desc: 'Win 5 team battles', earned: false },
  { title: 'Anatomy Expert', desc: 'Master all kidney parts', earned: false },
];

export const weeklyChallenges = [
  { challenge: 'Complete 20 quizzes', progress: 15, total: 20, reward: '500 XP' },
  { challenge: 'Study for 5 hours', progress: 3.2, total: 5, reward: '300 XP' },
  { challenge: 'Win 3 speed challenges', progress: 1, total: 3, reward: '400 XP' },
];
