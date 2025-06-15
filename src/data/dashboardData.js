// src/data/dashboardData.js
export const cards = [
  {
    id: 'learning-basic',
    screen: 'learning',
    mode: 'Learning',
    title: 'Learning Mode',
    icon: 'Brain',
    progressLabel: 'Progress',
    progressValue: '65%',
    colorFrom: 'from-blue-500',
    colorTo: 'to-blue-600',
    detailLabel: 'Explore kidney anatomy with interactive AR guidance'
  },
  {
    id: 'quiz-basic',
    screen: 'learning',
    mode: 'Quiz',
    title: 'Quiz Mode',
    icon: 'Target',
    progressLabel: 'Best Score',
    progressValue: '94%',
    colorFrom: 'from-green-500',
    colorTo: 'to-green-600',
    detailLabel: 'Test your knowledge with AR-based challenges'
  },
  // {
  //   id: 'compete-basic',
  //   screen: 'compete',
  //   mode: null,
  //   title: 'Competition',
  //   icon: 'Trophy',
  //   progressLabel: 'Rank',
  //   progressValue: '#3',
  //   colorFrom: 'purple-500',
  //   colorTo: 'purple-600',
  //   detailLabel: 'Challenge friends in multiplayer AR battles'
  // }
];


export const recentActivity = [
  { activity: 'Completed Nephron Quiz', time: '2 hours ago', xp: 85 },
  { activity: 'Studied Renal Cortex', time: '1 day ago', xp: 45 },
  { activity: 'Team Challenge Victory', time: '2 days ago', xp: 120 }
];

export const learningStats = [
  { label: 'Parts Learned', value: '24', bg: 'blue-50', text: 'blue-600' },
  { label: 'Quiz Average', value: '89%', bg: 'green-50', text: 'green-600' },
  { label: 'Study Time', value: '16h', bg: 'purple-50', text: 'purple-600' },
  { label: 'Streak Days', value: '7', bg: 'orange-50', text: 'orange-600' }
];