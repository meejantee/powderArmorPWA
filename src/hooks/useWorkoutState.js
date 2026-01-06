
import { useState, useEffect } from 'react';
import { TOTAL_DAYS } from '../data/schedule';

const STORAGE_KEY = 'powder_armor_state';
const TRIP_DATE = new Date('2026-02-08T00:00:00');

export const useWorkoutState = () => {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      stance: null,
      completedDays: [],
      currentDay: 1,
      hasCompletedProgram: false
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const setStance = (stance) => {
    setState(prev => ({ ...prev, stance }));
  };

  const completeDay = (dayNumber) => {
    setState(prev => {
      const newCompleted = [...new Set([...prev.completedDays, dayNumber])];
      const nextDay = dayNumber < TOTAL_DAYS ? dayNumber + 1 : dayNumber;
      const isFinished = newCompleted.length >= TOTAL_DAYS;

      return {
        ...prev,
        completedDays: newCompleted,
        currentDay: nextDay,
        hasCompletedProgram: isFinished
      };
    });
  };

  const resetProgress = () => {
    if (confirm("Are you sure you want to reset all progress?")) {
       setState({
        stance: state.stance,
        completedDays: [],
        currentDay: 1,
        hasCompletedProgram: false
      });
    }
  };

  const getDaysUntilTrip = () => {
    const now = new Date();
    const diffTime = TRIP_DATE - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return {
    state,
    setStance,
    completeDay,
    resetProgress,
    daysUntilTrip: getDaysUntilTrip()
  };
};
