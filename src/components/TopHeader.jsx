import React, { useState } from 'react';
import { LogIn, Users, LogOut } from 'lucide-react';

export default function TopHeader({ title, currentScreen }) {
  const [inputPartyId, setInputPartyId] = useState('');
  const [createdPartyId, setCreatedPartyId] = useState('');
  const [totalMembers, setTotalMembers] = useState(0);
  const [members, setMembers] = useState([]);
  const [showMembers, setShowMembers] = useState(false);

  const handleCreateParty = () => {
    const newPartyId = Math.random().toString(36).substr(2, 8).toUpperCase();
    setCreatedPartyId(newPartyId);
    setTotalMembers(1);
    setMembers(['Host']);
  };

  const handleJoinParty = () => {
    if (!inputPartyId.trim()) return;
    setCreatedPartyId(inputPartyId.trim());
    setTotalMembers((prev) => prev + 1 || 1);
    setMembers((prev) => [...prev, `Member ${prev.length + 1}`]);
  };

  const handleLeaveParty = () => {
    setCreatedPartyId('');
    setInputPartyId('');
    setTotalMembers(0);
    setMembers([]);
    setShowMembers(false);
  };

  const toggleMembersList = () => {
    setShowMembers((prev) => !prev);
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      {/* Left: Title */}
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

      {/* Right: Party Controls */}
      {currentScreen === 'learning' && (
        <div className="flex items-center gap-3">
          {!createdPartyId ? (
            <>              
              <input
                type="text"
                placeholder="Party ID"
                value={inputPartyId}
                onChange={(e) => setInputPartyId(e.target.value)}
                className="border border-gray-300  rounded-full rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleJoinParty}
                className="flex items-center justify-center px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                aria-label="Join Party"
              >
                <LogIn size={20} />
              </button>
              <button
                onClick={handleCreateParty}
                className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Create Party
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3 relative">
              <span className="font-medium">Party ID: {createdPartyId}</span>
              <button
                onClick={toggleMembersList}
                className="flex items-center gap-1"
                aria-label="Show Members"
              >
                <Users size={20} />
                <span className="font-medium">{totalMembers}</span>
              </button>
              {showMembers && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                  {members.map((m, i) => (
                    <div key={i} className="px-4 py-2 hover:bg-gray-100">
                      {m}
                    </div>
                  ))}
                </div>
              )}
              <button
                onClick={handleLeaveParty}
                className="flex items-center justify-center px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                aria-label="Leave Party"
              >
                <LogOut size={20} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
