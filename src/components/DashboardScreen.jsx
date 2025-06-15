import React from 'react';
import { Brain, Target, Trophy } from 'lucide-react';
import { cards, recentActivity, learningStats } from '../data/dashboardData';

export default function DashboardScreen({ setCurrentScreen ,setMode}) {
  return (
    <div className="flex-1 p-6 bg-gray-50">
      {/* Top Cards */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {cards.map(card => {
          const Icon = { Brain, Target, Trophy }[card.icon];
          return (
            <div
              key={card.id}
              onClick={() => {
                setMode(card.mode ?? "Learning")
                setCurrentScreen(card.screen)
              }}
              className={`bg-gradient-to-br from-${card.colorFrom} to-${card.colorTo} rounded-3xl p-6 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer group hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-4">
                <Icon size={32} className={`text-${card.colorFrom}-200 group-hover:text-white transition-colors`} />
                <div className="text-right">
                  <p className={`text-${card.colorFrom}-100 text-sm`}>{card.progressLabel}</p>
                  <p className="text-xl font-bold">{card.progressValue}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className={`text-${card.colorFrom}-100`}>{card.detailLabel}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity & Learning Stats */}
      <div className="grid grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-3">
            {recentActivity.map((item, i) => (
              <li key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium text-gray-900">{item.activity}</p>
                  <p className="text-sm text-gray-600">{item.time}</p>
                </div>
                <span className="font-semibold text-blue-600">+{item.xp} XP</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Learning Stats */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Learning Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            {learningStats.map((stat, i) => (
              <div
                key={i}
                className={`text-center p-4 rounded-xl bg-${stat.bg}`}
              >
                <div className={`text-2xl font-bold text-${stat.text}`}>{stat.value}</div>
                <div className={`text-sm text-${stat.text}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
