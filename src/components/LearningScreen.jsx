import React, { useState } from 'react';
import { Camera, Layers, Scissors, X, Info, Send } from 'lucide-react';

export default function ARLearning() {
  const parts = [
    'Renal Cortex', 'Renal Medulla', 'Renal Pelvis',
    'Ureter', 'Nephron', 'Glomerulus', 'Tubules', 'Calyx'
  ];
  const commonQuestions = [
    'What does this part do?',
    'Which diseases affect it?',
    'How is blood filtered here?',
    'What is its anatomy?'
  ];

  const [selectedPart, setSelectedPart] = useState(null);
  const [layerOpen, setLayerOpen] = useState(false);
  const [selectedLayers, setSelectedLayers] = useState([]);
  const [showPanel, setShowPanel] = useState(true);
  const [askMode, setAskMode] = useState(false);
  const [question, setQuestion] = useState('');

  const toggleLayer = (part) => {
    setSelectedLayers((prev) =>
      prev.includes(part)
        ? prev.filter((p) => p !== part)
        : [...prev, part]
    );
  };

  return (
    <div className="h-screen flex bg-gradient-to-b from-gray-900 to-black text-white">
      {/* 3D View */}
      <div className="relative flex-1">
        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
          🔆 3D Kidney Model 🔆
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 left-6 flex space-x-3">
          <button className="flex items-center bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition">
            <Camera size={16}/><span className="text-sm ml-1">Camera</span>
          </button>
          <div className="relative">
            <button
              onClick={() => setLayerOpen(!layerOpen)}
              className="flex items-center bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition"
            >
              <Layers size={16}/><span className="text-sm ml-1">Layers</span>
            </button>
            {layerOpen && (
              <div className="absolute bottom-10 left-0 bg-white rounded-lg shadow-lg text-black z-50 w-48 p-4 max-h-64 overflow-auto">
                <h4 className="font-semibold mb-2">Toggle Layers</h4>
                <div className="space-y-2">
                  {parts.map((p) => (
                    <label key={p} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedLayers.includes(p)}
                        onChange={() => toggleLayer(p)}
                        className="h-4 w-4"
                      />
                      <span className="text-sm">{p}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button className="flex items-center bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition">
            <Scissors size={16}/><span className="text-sm ml-1">Dissect</span>
          </button>
        </div>

        {/* Panel Toggle */}
        <button
          onClick={() => setShowPanel(!showPanel)}
          className="absolute bottom-6 right-6 bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
        >
          {showPanel ? <X size={20}/> : <Info size={20}/>}        
        </button>
      </div>

      {/* Sidebar */}
      {showPanel && (
        <aside className="w-80 bg-white text-gray-800 p-6 flex flex-col space-y-4 overflow-y-auto">
          <h2 className="text-2xl font-bold">Select Part</h2>

          {/* Part Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {parts.map((p) => (
              <button
                key={p}
                onClick={() => { setSelectedPart(p); setAskMode(false); setQuestion(''); }}
                className={
                  `py-2 px-3 text-sm rounded-lg transition
                  ${selectedPart === p ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`
                }
              >
                {p}
              </button>
            ))}
          </div>

          {/* Ask AI Section */}
          {selectedPart && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Ask about {selectedPart}</h3>

              {!askMode ? (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {commonQuestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => { setQuestion(q); setAskMode(true); }}
                        className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setAskMode(true)}
                    className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex justify-center items-center"
                  >
                    <span>Custom Question</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col h-64">
                  <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-auto">
                    <p className="text-gray-500 italic">AI response will appear here...</p>
                  </div>
                  <div className="mt-3 flex items-center">
                    <input
                      type="text"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Type your question..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    />
                    <button
                      onClick={() => {/* send to AI */}}
                      className="ml-2 p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
                    >
                      <Send size={20} className="text-white" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </aside>
      )}
    </div>
  );
}
