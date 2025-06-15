// src/components/ARLauncher.jsx
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import kidney3D from '../assets/kidney_2.png';
import Heart3D from '../assets/Heart-3d-model.jpg';
import Lungs3D from '../assets/lungs.jpg';
import Frog3D from '../assets/frog.jpg';

const modes = ['Learning', 'Quiz'];
const items = [
  { label: 'Kidney', imageSrc: kidney3D, description: 'Detailed 3D kidney anatomy.' },
  { label: 'Heart',  imageSrc: Heart3D,  description: 'Explore the heart’s chambers.' },
  { label: 'Lungs',  imageSrc: Lungs3D,  description: 'Visualize breathing in AR.' },
  { label: 'Frog',   imageSrc: Frog3D,   description: 'Study amphibian anatomy.' }
];

export default function ARLauncher({ setCurrentScreen, setSidebarCollapsed, mode= modes[0]}) {
  const [activeMode, setActiveMode] = useState(mode);
  const [selected, setSelected] = useState(items[0]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-10">
      <div className="w-full mx-5 bg-white rounded-3xl shadow overflow-hidden">
        {/* Hero Banner */}
        <div
          className="relative h-72"
          style={{
            backgroundImage: `url(${selected.imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
          {/* Text */}
          <div className="absolute top-6 left-6 z-10 text-gray-900">
            <h1 className="text-4xl font-bold mb-1">{selected.label}</h1>
            <p className="max-w-md text-base opacity-90">{selected.description}</p>
          </div>
          {/* Play */}
          <button
            onClick={() => {
              setCurrentScreen(`AR${activeMode}`)
              setSidebarCollapsed(true)
            }}
            className="absolute bottom-6 right-6 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            <Play size={20} />
            <span className="ml-2">Play {activeMode}</span>
          </button>
        </div>

        <div className="px-6 py-4 space-y-6">
          {/* Mode Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex bg-gray-200 p-1 rounded-full">
              {modes.map(mode => (
                <button
                  key={mode}
                  onClick={() => setActiveMode(mode)}
                  className={
                    `px-6 py-2 rounded-full font-semibold transition ${
                      activeMode === mode
                        ? 'bg-white text-blue-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`
                  }
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Selection Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {items.map(item => (
              <button
                key={item.label}
                onClick={() => setSelected(item)}
                className={
                  `group relative rounded-2xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-200 ${
                    selected.label === item.label ? 'ring-4 ring-blue-300' : ''
                  }`
                }
              >
                <div className="h-40 w-full relative">
                  <img
                    src={item.imageSrc}
                    alt={item.label}
                    className="object-cover w-full h-full"
                  />
                  {/* bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* label */}
                  <span className="absolute top-3 left-3 text-white text-lg font-bold drop-shadow-md">
                    {item.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
}
