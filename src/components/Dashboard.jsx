
import React, { useState } from 'react';
import { generateSchedule, TOTAL_DAYS } from '../data/schedule';
import { Calendar, Trophy, Zap, AlertTriangle, Mountain, BookOpen } from 'lucide-react';
import clsx from 'clsx';

const Dashboard = ({ state, daysUntilTrip, onStartDay, onViewWeekly, onUnlockSession, isSessionUnlocked }) => {
  const schedule = generateSchedule();
  const nextDay = state.currentDay;
  const [titleTapCount, setTitleTapCount] = useState(0);

  const todayConfig = schedule.find(d => d.day === nextDay);

  const handleTitleTap = () => {
    if (isSessionUnlocked) return; // Already unlocked
    const newCount = titleTapCount + 1;
    setTitleTapCount(newCount);
    if (newCount >= 7) {
        onUnlockSession(true);
        setTitleTapCount(0);
    }
  };

  const renderDayCard = (dayConfig) => {
    const isCompleted = state.completedDays.includes(dayConfig.day);
    const isLocked = dayConfig.day > nextDay && !isCompleted;
    const isCurrent = dayConfig.day === nextDay;

    let statusColor = "bg-slate-800 border-slate-700";
    if (isCompleted) statusColor = "bg-green-900/20 border-green-800";
    if (isCurrent) statusColor = "bg-slate-800 border-powder-500 ring-1 ring-powder-500";
    if (isLocked) statusColor = "bg-slate-900/50 border-slate-800 opacity-50";

    return (
      <div
        key={dayConfig.day}
        className={clsx(
          "relative p-3 rounded-lg border flex flex-col items-center justify-between min-h-[80px]",
          statusColor
        )}
      >
        <span className={clsx("text-xs font-mono mb-1", isCompleted ? "text-green-400" : "text-slate-500")}>
          Day {dayConfig.day}
        </span>

        {isCompleted ? (
          <Trophy className="w-6 h-6 text-green-500" />
        ) : dayConfig.type === 'rest' ? (
          <span className="text-xs font-bold text-slate-400 uppercase">Rest</span>
        ) : dayConfig.type === 'recovery' ? (
          <span className="text-xs font-bold text-blue-400 uppercase">Recov</span>
        ) : (
          <span className="text-lg font-bold text-white">{dayConfig.rounds}R</span>
        )}

        {isCurrent && !isCompleted && (
           <div className="absolute -top-1 -right-1 w-3 h-3 bg-powder-500 rounded-full animate-pulse" />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 p-4 pb-20">
      <header className="mb-6">
        <div className="flex justify-between items-start mb-4">
            <div onClick={handleTitleTap} className="cursor-pointer select-none">
                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                <Mountain className="text-powder-500" />
                Powder Armor
                </h1>
                <p className="text-sm text-slate-400">Preparation Protocol</p>
            </div>
            <div className="text-right">
                 <div className="text-2xl font-mono font-bold text-powder-400">{daysUntilTrip}</div>
                 <div className="text-xs text-slate-500 uppercase tracking-wider">Days to Trip</div>
            </div>
        </div>

        {todayConfig && (
            <div className="card mb-6 border-powder-500/30 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-powder-400 px-2 py-1 bg-powder-500/10 rounded uppercase tracking-wider">
                        {todayConfig.phase?.name || "Week " + todayConfig.week}
                    </span>
                    {todayConfig.label === 'Max Effort' && (
                         <span className="flex items-center gap-1 text-xs font-bold text-red-400">
                             <Zap className="w-3 h-3" /> Max Effort
                         </span>
                    )}
                </div>

                <h2 className="text-3xl font-bold text-white mb-1">Day {todayConfig.day}</h2>
                <p className="text-slate-300 mb-4">{todayConfig.label}</p>

                {todayConfig.note && (
                    <div className="flex items-start gap-2 mb-4 p-2 bg-slate-950/50 rounded text-sm text-slate-400">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-yellow-500" />
                        {todayConfig.note}
                    </div>
                )}

                <button
                    onClick={() => onStartDay(todayConfig.day)}
                    disabled={!isSessionUnlocked && todayConfig.type !== 'rest'} // Rest days maybe always unlockable? Prompt implies "start session button" which is for workouts. But to be safe, disable all. Prompt says "disable start session button".
                    className={clsx(
                        todayConfig.type === 'rest' ? "btn-secondary" : "btn-primary",
                        "mb-3",
                        (!isSessionUnlocked && todayConfig.type !== 'rest') && "opacity-50 cursor-not-allowed"
                    )}
                >
                    {todayConfig.type === 'rest' ? 'Complete Rest Day' : 'Start Session'}
                </button>

                <button
                    onClick={onViewWeekly}
                    className="w-full py-3 bg-slate-900 border border-slate-700 rounded-lg font-bold text-slate-300 flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                >
                    <BookOpen className="w-4 h-4" /> View Weekly Progression
                </button>
            </div>
        )}
      </header>

      <div className="grid grid-cols-7 gap-2">
        {schedule.map(renderDayCard)}
      </div>
    </div>
  );
};

export default Dashboard;
