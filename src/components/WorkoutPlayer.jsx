
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  Play, Pause, SkipForward, CheckCircle, AlertTriangle,
  RotateCcw, Volume2, ShieldAlert
} from 'lucide-react';
import { getDailyExercises, generateSchedule } from '../data/schedule';
import { WARMUP, COOLDOWN } from '../data/exercises';
import { playStartBeep, playStopBeep, playCountdownBeep } from '../utils/audio';
import { hapticStart, hapticStop, hapticTick } from '../utils/haptics';

const Timer = ({ duration, onComplete, autoStart = false, label = "Work" }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(autoStart);

  useEffect(() => {
    setTimeLeft(duration);
    setIsActive(autoStart);
  }, [duration, autoStart]);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 4 && t > 1) playCountdownBeep();
          return t - 1;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      onComplete && onComplete();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onComplete]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => { setIsActive(false); setTimeLeft(duration); };

  const progress = ((duration - timeLeft) / duration) * 100;

  const isRest = label.toLowerCase().includes('rest') || label.toLowerCase().includes('recover');
  const colorClass = isRest ? "text-blue-400" : "text-green-400";

  return (
    <div className="flex flex-col items-center w-full mb-6">
      <div className="relative w-48 h-48 flex items-center justify-center mb-4">
         <div
            className="absolute inset-0 rounded-full border-4 border-slate-800"
            style={{
                background: `radial-gradient(closest-side, #020617 79%, transparent 80% 100%), conic-gradient(${isRest ? '#3b82f6' : '#22c55e'} ${progress}%, #1e293b 0)`
            }}
         />
         <div className="relative z-10 text-center">
             <div className="text-5xl font-bold font-mono text-white">
                 {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
             </div>
             <div className={clsx("text-sm font-bold uppercase tracking-widest", colorClass)}>
                 {label}
             </div>
         </div>
      </div>

      <div className="flex gap-4 w-full">
         <button onClick={toggle} className="flex-1 btn-primary py-4">
            {isActive ? <Pause /> : <Play />}
            {isActive ? "Pause" : "Start"}
         </button>
         <button onClick={reset} className="btn-secondary w-auto px-4">
             <RotateCcw />
         </button>
      </div>
    </div>
  );
};

const Checklist = ({ items, onComplete }) => {
    const [checked, setChecked] = useState(new Set());

    const toggle = (index) => {
        const newSet = new Set(checked);
        if (newSet.has(index)) newSet.delete(index);
        else newSet.add(index);
        setChecked(newSet);
    };

    const isAllChecked = checked.size === items.length;

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => toggle(idx)}
                        className={clsx(
                            "p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-all",
                            checked.has(idx)
                                ? "bg-green-900/20 border-green-800"
                                : "bg-slate-900 border-slate-800 hover:border-slate-700"
                        )}
                    >
                        <div className={clsx(
                            "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0",
                            checked.has(idx) ? "bg-green-500 border-green-500" : "border-slate-600"
                        )}>
                            {checked.has(idx) && <CheckCircle className="w-4 h-4 text-white" />}
                        </div>
                        <div>
                            <h4 className={clsx("font-bold", checked.has(idx) ? "text-slate-400 line-through" : "text-white")}>
                                {item.name}
                            </h4>
                            {item.note && <p className="text-sm text-slate-500">{item.note}</p>}
                        </div>
                    </div>
                ))}
            </div>
            <button
                disabled={!isAllChecked}
                onClick={onComplete}
                className={clsx(isAllChecked ? "btn-primary" : "btn-secondary opacity-50 cursor-not-allowed")}
            >
                Next Phase
            </button>
        </div>
    );
};

const WorkoutPlayer = ({ dayNumber, stance, onComplete, onCancel }) => {
  const [phase, setPhase] = useState('warmup');
  const [currentRound, setCurrentRound] = useState(1);
  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [showSafety, setShowSafety] = useState(false);

  const schedule = generateSchedule();
  const dayData = schedule.find(d => d.day === dayNumber);
  const exercises = getDailyExercises(dayNumber, stance);

  const isRestDay = dayData.type === 'rest';
  const isRecoveryDay = dayData.type === 'recovery';

  // --- Logic Fixes Implemented Here ---

  const handleExerciseComplete = () => {
      playStopBeep();

      const isLastExercise = currentExerciseIdx >= exercises.length - 1;

      if (isLastExercise) {
          // End of Round
          if (currentRound < dayData.rounds) {
             setIsResting(true); // Trigger Round Rest
          } else {
             // Workout Complete (to finisher)
             setPhase('finisher');
             setCurrentExerciseIdx(0);
             setCurrentRound(1);
          }
      } else {
          // Next Exercise (Immediate, no rest between exercises)
          setCurrentExerciseIdx(prev => prev + 1);
          playStartBeep(); // Audio cue for next exercise
      }
  };

  const handleRestComplete = () => {
      playStartBeep();
      hapticStart();
      setIsResting(false);

      // Start Next Round
      setCurrentRound(prev => prev + 1);
      setCurrentExerciseIdx(0);
  };


  if (isRestDay) {
      return (
          <div className="h-screen flex flex-col items-center justify-center p-6 text-center">
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
                  <h2 className="text-2xl font-bold text-white mb-4">Rest Day</h2>
                  <p className="text-slate-400 mb-6">{dayData.note || "Take it easy. Recovery is when you grow."}</p>
                  <button onClick={onComplete} className="btn-primary">Mark Complete</button>
              </div>
          </div>
      );
  }

  if (phase === 'warmup') {
      return (
          <div className="h-screen flex flex-col p-4">
              <h2 className="text-xl font-bold text-white mb-4">Warmup</h2>
              <Checklist
                items={WARMUP}
                onComplete={() => {
                    if (isRecoveryDay) setPhase('recovery_main');
                    else setPhase('circuit');
                }}
              />
          </div>
      );
  }

  if (phase === 'recovery_main') {
       return (
           <div className="h-screen flex flex-col p-4">
               <h2 className="text-xl font-bold text-blue-400 mb-2">Active Recovery</h2>
               <p className="text-slate-400 mb-4 text-sm">Do 3 Rounds. Hold each for 90s.</p>
               <Checklist
                   items={COOLDOWN.map(i => ({...i, note: "Hold 90s. Deep breathing."}))}
                   onComplete={() => setPhase('cooldown')}
               />
           </div>
       );
  }

  if (phase === 'circuit') {
      const exercise = exercises[currentExerciseIdx];
      const restTime = dayData.phase?.rest || 120;

      if (isResting) {
          return (
              <div className="h-screen flex flex-col items-center justify-center p-6">
                  <h2 className="text-2xl font-bold text-white mb-8">Rest Between Rounds</h2>
                  <Timer
                    duration={restTime}
                    label="Recover"
                    autoStart={true}
                    onComplete={handleRestComplete}
                  />
                  <div className="mt-8 text-center">
                      <p className="text-slate-500 text-sm">Next Round:</p>
                      <p className="text-xl text-white font-bold">Round {currentRound + 1}</p>
                  </div>
              </div>
          );
      }

      return (
          <div className="h-screen flex flex-col p-4 relative">
             <div className="flex justify-between items-center mb-6">
                 <span className="text-slate-500 font-mono">Round {currentRound}/{dayData.rounds}</span>
                 <button onClick={onCancel} className="text-slate-500 text-sm">Quit</button>
             </div>

             <div className="flex-1 flex flex-col items-center text-center">
                 <h2 className="text-3xl font-bold text-white mb-2">{exercise.name}</h2>
                 <div className="bg-slate-900 rounded-lg px-4 py-2 mb-6 border border-slate-800">
                     <span className="text-powder-400 font-bold text-lg">
                        {exercise.time ? `${exercise.time}s` : ""}
                        {exercise.time && exercise.weight && exercise.weight !== "Bodyweight" ? " • " : ""}
                        {exercise.weight && exercise.weight !== "Bodyweight" ? exercise.weight : ""}
                        {(exercise.time || (exercise.weight && exercise.weight !== "Bodyweight")) && exercise.reps ? " • " : ""}
                        {exercise.reps ? exercise.reps : ""}
                     </span>
                 </div>

                 <p className="text-slate-300 text-lg mb-8 px-4">{exercise.instruction}</p>

                 {exercise.time ? (
                     <Timer
                        duration={exercise.time}
                        label="Work"
                        onComplete={handleExerciseComplete}
                     />
                 ) : (
                     <button
                        onClick={handleExerciseComplete}
                        className="btn-primary py-8 text-xl"
                     >
                        <CheckCircle /> Done
                     </button>
                 )}
             </div>

             <button
                onClick={() => setShowSafety(true)}
                className="mt-auto mb-4 flex items-center justify-center gap-2 text-red-400 font-bold p-4 bg-red-900/20 border border-red-900/50 rounded-lg w-full"
             >
                <ShieldAlert /> Back Check
             </button>

             {showSafety && (
                 <div className="absolute inset-0 bg-slate-950/95 z-50 flex flex-col items-center justify-center p-8 text-center">
                     <AlertTriangle className="w-20 h-20 text-red-500 mb-6" />
                     <h3 className="text-3xl font-bold text-white mb-4">Safety First</h3>
                     <ul className="text-left space-y-4 text-lg text-slate-300 mb-8">
                         <li>• Engage Core constantly.</li>
                         <li>• No twisting under load.</li>
                         <li>• Stop immediately if sharp pain.</li>
                     </ul>
                     <button onClick={() => setShowSafety(false)} className="btn-danger">
                         I Understand
                     </button>
                 </div>
             )}
          </div>
      );
  }

  if (phase === 'finisher') {
      return (
          <div className="h-screen flex flex-col items-center p-4 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Cardio Finisher</h2>
              <p className="text-slate-400 mb-8">Tabata: 20s Work / 10s Rest x 8 Rounds</p>
               <TabataPlayer onComplete={() => setPhase('cooldown')} />
          </div>
      );
  }

  if (phase === 'cooldown') {
      return (
          <div className="h-screen flex flex-col p-4">
              <h2 className="text-xl font-bold text-white mb-4">Cooldown</h2>
              <Checklist
                items={COOLDOWN}
                onComplete={onComplete}
              />
          </div>
      );
  }

  return null;
};

const TabataPlayer = ({ onComplete }) => {
    const [round, setRound] = useState(1);
    const [isWork, setIsWork] = useState(true);
    const [timeLeft, setTimeLeft] = useState(20);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(t => {
                   if (t <= 4 && t > 1) playCountdownBeep();
                   return t - 1;
                });
            }, 1000);
        } else if (timeLeft === 0) {
            playStopBeep();
            hapticStop();
            if (isWork) {
                setIsWork(false);
                setTimeLeft(10);
            } else {
                if (round < 8) {
                    setRound(r => r + 1);
                    setIsWork(true);
                    setTimeLeft(20);
                    playStartBeep();
                    hapticStart();
                } else {
                    setIsActive(false);
                    onComplete();
                }
            }
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft, isWork, round, onComplete]);

    return (
        <div className="flex flex-col items-center w-full">
            <div className={clsx(
                "w-64 h-64 rounded-full flex flex-col items-center justify-center border-8 mb-8 transition-colors duration-300",
                isWork ? "border-red-500 bg-red-900/20" : "border-blue-500 bg-blue-900/20"
            )}>
                <span className="text-6xl font-bold font-mono text-white">{timeLeft}</span>
                <span className="text-xl font-bold uppercase">{isWork ? "WORK" : "REST"}</span>
                <span className="text-sm mt-2 text-slate-400">Round {round}/8</span>
            </div>

            <button
                onClick={() => setIsActive(!isActive)}
                className="btn-primary"
            >
                {isActive ? "Pause" : "Start Tabata"}
            </button>
        </div>
    );
};

export default WorkoutPlayer;
