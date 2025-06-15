import React from 'react';
import { Zap, Users } from 'lucide-react';
import {
  leaderboard,
  achievements,
  weeklyChallenges
} from '../data/competitionData';

export default function CompetitionScreen({setCurrentScreen}) {
  return (
    <div className="flex-1 p-6 bg-gray-50">
      {/* Top Cards */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Speed Challenge */}
        <div className="relative bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white overflow-hidden">
          <Zap size={40} className="absolute top-8 left-8 text-orange-200 opacity-30" />
          <div className="flex items-center justify-between mb-6 relative z-10">
            <Zap size={40} className="text-orange-200" />
            <div className="text-right">
              <p className="text-orange-100 text-sm">Best Time</p>
              <p className="text-2xl font-bold">1:23</p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-2 relative z-10">Speed Challenge</h3>
          <p className="text-orange-100 mb-6 relative z-10">
            Race against time to identify kidney parts as fast as possible
          </p>
          <button className="relative z-10 bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
            Start Challenge
          </button>
        </div>

        {/* Team Battle */}
        <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white overflow-hidden">
          <Users size={40} className="absolute top-8 left-8 text-blue-200 opacity-30" />
          <div className="flex items-center justify-between mb-6 relative z-10">
            <Users size={40} className="text-blue-200" />
            <div className="text-right">
              <p className="text-blue-100 text-sm">Team Score</p>
              <p className="text-2xl font-bold">2,450</p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-2 relative z-10">Team Battle</h3>
          <p className="text-blue-100 mb-6 relative z-10">
            Collaborate with classmates to solve complex anatomy challenges
          </p>
          <button onClick={() =>setCurrentScreen("party")} className="relative z-10 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
            Join Team
          </button>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Global Leaderboard */}
        <div className="bg-white rounded-3xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Global Leaderboard</h3>
          <ul className="space-y-3">
            {leaderboard.map((player) => (
              <li key={player.rank} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    player.rank === 1 ? 'bg-yellow-400' :
                    player.rank === 2 ? 'bg-gray-400' :
                    'bg-orange-400'
                  }`}>
                    {player.rank}
                  </div>
                  <span>{player.name}</span>
                </div>
                <span className="font-semibold">{player.score.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-3xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Achievements</h3>
          <ul className="space-y-4">
            {achievements.map((ach, i) => (
              <li key={i} className={`flex items-center gap-3 p-3 rounded-lg border ${
                ach.earned ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'
              }`}>
                <span className="text-2xl">
                  {ach.title === 'Speed Demon' ? '⚡' :
                   ach.title === 'Perfect Score' ? '🎯' :
                   ach.title === 'Team Player' ? '🤝' :
                   '🧠'}
                </span>
                <div>
                  <h4 className={`font-medium ${ach.earned ? 'text-yellow-800' : 'text-gray-600'}`}>
                    {ach.title}
                  </h4>
                  <p className={`text-sm ${ach.earned ? 'text-yellow-600' : 'text-gray-500'}`}>
                    {ach.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Weekly Challenges */}
        <div className="bg-white rounded-3xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Weekly Challenges</h3>
          <ul className="space-y-6">
            {weeklyChallenges.map((wc, i) => {
              const pct = Math.min(100, (wc.progress / wc.total) * 100);
              return (
                <li key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800">{wc.challenge}</span>
                    <span className="text-sm text-blue-600">{wc.reward}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="h-2 bg-blue-500 transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{wc.progress}/{wc.total}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}