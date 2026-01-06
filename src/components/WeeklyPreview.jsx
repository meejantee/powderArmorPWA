import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { EXERCISES } from '../data/exercises';

const WeeklyPreview = ({ onBack }) => {
  const weeks = [1, 2, 3, 4];
  const exerciseKeys = Object.keys(EXERCISES);

  return (
    <div className="min-h-screen bg-slate-950 p-4 pb-20 text-white">
      <div className="flex items-center gap-4 mb-6 sticky top-0 bg-slate-950 py-2 z-10 border-b border-slate-800">
        <button onClick={onBack} className="btn-secondary p-2 rounded-full w-auto">
          <ChevronLeft />
        </button>
        <h1 className="text-xl font-bold">Weekly Progression</h1>
      </div>

      <div className="space-y-8">
        {weeks.map((week) => (
          <div key={week} className="border border-slate-800 rounded-xl p-4 bg-slate-900/50">
            <h2 className="text-2xl font-bold text-powder-500 mb-4 border-b border-slate-800 pb-2">
              Week {week}
            </h2>

            <div className="space-y-6">
              {exerciseKeys.map((key) => {
                const exercise = EXERCISES[key];
                const weekKey = `week${week}`;
                // Fallback to 'all' or 'week1' if specific week not found (though structure implies it usually exists or is 'all')
                const progression = exercise.progression[weekKey] || exercise.progression.all || exercise.progression.week1;

                if (!progression) return null;

                return (
                  <div key={key} className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg text-white">{exercise.name}</h3>

                    <div className="text-sm text-slate-400 pl-3 border-l-2 border-slate-700 space-y-1">
                      {progression.weight && progression.weight !== "Bodyweight" && (
                         <p><span className="text-slate-500">Weight:</span> <span className="text-white font-mono">{progression.weight}</span></p>
                      )}

                      {/* Show reps/time from progression if it exists, else base exercise */}
                      <p>
                          <span className="text-slate-500">Volume:</span>
                          <span className="text-white font-mono ml-1">
                             {progression.reps || exercise.reps || (progression.time || exercise.time ? (progression.time || exercise.time) + 's' : '')}
                          </span>
                      </p>

                      <p className="text-powder-300 italic">"{progression.instruction}"</p>

                      {progression.variant && (
                          <p><span className="text-slate-500">Variant:</span> <span className="text-white">{progression.variant}</span></p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyPreview;
