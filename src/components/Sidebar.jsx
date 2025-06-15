// src/components/Sidebar.jsx
import React from 'react';
import { Menu, Home, Brain, Target, Trophy, Settings } from 'lucide-react';

const navItems = [
  { id: 'home', icon: Home, label: 'Dashboard', color: 'text-blue-600' },
  { id: 'learning', icon: Brain, label: 'Learning Mode', color: 'text-green-600' },
  { id: 'compete', icon: Trophy, label: 'Competition', color: 'text-purple-600' },
];

export default function Sidebar({
  currentScreen,
  setCurrentScreen,
  sidebarCollapsed,
  setSidebarCollapsed
}) {
  const isDark = currentScreen.startsWith('AR');

  return (
    <div
      className={`transition-all duration-300 border-r flex flex-col ${
        isDark
          ? `bg-gray-800 border-gray-700 text-white ${sidebarCollapsed ? 'w-16' : 'w-80'}`
          : `bg-white border-gray-200 text-gray-900 ${sidebarCollapsed ? 'w-16' : 'w-80'}`
      }`}
    >
      {/* Logo & Toggle */}
      <div
        className="p-4 border-b flex items-center justify-between transition-colors"
        style={{ borderColor: isDark ? '#374151' : '#E5E7EB' }}
      >
        {!sidebarCollapsed && (
          <div>
            <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>KidneyAR</h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Learn anatomy in 3D</p>
          </div>
        )}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
            isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <Menu size={20} className={isDark ? 'text-white' : 'text-gray-700'} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentScreen(item.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
              currentScreen === item.id
                ? isDark
                  ? 'bg-gray-700 text-white border border-gray-600'
                  : 'bg-blue-50 text-blue-700 border border-blue-200'
                : isDark
                  ? 'hover:bg-gray-700 text-gray-300'
                  : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <item.icon
              size={20}
              className={
                currentScreen === item.id
                  ? item.color
                  : isDark
                    ? 'text-gray-400'
                    : 'text-gray-500'
              }
            />
            {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Settings */}
      {!sidebarCollapsed && (
        <div
          className="p-4 border-t transition-colors"
          style={{ borderColor: isDark ? '#374151' : '#E5E7EB' }}
        >
          <button
            onClick={() => setCurrentScreen('settings')}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${
              isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-50 text-gray-600'
            }`}
          >
            <Settings size={20} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
            <span>Settings</span>
          </button>
        </div>
      )}
    </div>
  );
}
