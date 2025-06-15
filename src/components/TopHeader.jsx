import { Camera, RotateCcw, Maximize, Clock, Star } from 'lucide-react';

export default function TopHeader({
  title,
}) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      </div>
    </div>
  );
}
