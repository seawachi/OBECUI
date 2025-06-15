// src/components/QuizScreen.jsx
import React from 'react';
import {
  CheckCircle,
  RotateCcw,
  Maximize,
  Target,
  Clock
} from 'lucide-react';

export default function ARQuiz({
  quizScore,
  setQuizScore,
  currentQuizQuestion,
  setCurrentQuizQuestion,
  userAnswer,
  setUserAnswer,
  triggerCelebration
}) {
  return (
    <div className="flex-1 flex">
      {/* AR View */}
      <div className="flex-1 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-96 h-96 border-2 border-green-400 border-dashed rounded-full flex items-center justify-center mb-4 mx-auto relative">
              <Target size={64} />
              <p className="mt-4 text-lg">Find the Highlighted Part!</p>
              <div className="absolute top-24 right-40 w-4 h-4 bg-red-500 rounded-full animate-ping" />
              <div
                className="absolute bottom-32 left-36 w-4 h-4 bg-yellow-500 rounded-full animate-ping"
                style={{ animationDelay: '0.5s' }}
              />
            </div>
          </div>
        </div>

        {/* Quiz Instructions Overlay */}
        <div className="absolute top-6 left-6 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-4 max-w-xs">
          <h4 className="font-semibold text-gray-900 mb-2">Current Challenge</h4>
          <p className="text-sm text-gray-700">
            Tap on the <span className="font-semibold text-red-600">Renal Cortex</span> in the AR model
          </p>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Quiz Progress</span>
              <span className="text-sm text-gray-600">{currentQuizQuestion}/10</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentQuizQuestion / 10) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Panel */}
      <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Question {currentQuizQuestion}</h3>
            <div className="text-right">
              <div className="text-sm text-gray-600">Score</div>
              <div className="text-xl font-bold text-green-600">{quizScore}</div>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Identify the highlighted part and explain its function.
          </p>
        </div>

        <div className="flex-1 p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              What does this part do? Explain its function:
            </label>
            <textarea
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              placeholder="Describe the function and importance of this kidney part..."
              className="w-full p-4 border border-gray-300 rounded-xl resize-none h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                setQuizScore(quizScore + 10);
                setCurrentQuizQuestion(currentQuizQuestion + 1);
                triggerCelebration();
              }}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
            >
              <CheckCircle size={16} />
              Submit Answer
            </button>
            <button className="w-full bg-yellow-500 text-white py-3 rounded-xl font-medium hover:bg-yellow-600 transition-colors">
              Need a Hint?
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors">
              Skip Question
            </button>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-xl">
            <h5 className="font-medium text-blue-900 mb-2">Quiz Tips</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Look for highlighted indicators</li>
              <li>• Use different viewing angles</li>
              <li>• Consider the part's location</li>
              <li>• Think about its relationship to other parts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
