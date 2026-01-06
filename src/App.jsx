
import React, { useState } from 'react';
import { useWorkoutState } from './hooks/useWorkoutState';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import WorkoutPlayer from './components/WorkoutPlayer';
import TaperScreen from './components/TaperScreen';
import WeeklyPreview from './components/WeeklyPreview';

function App() {
  const { state, setStance, completeDay, daysUntilTrip } = useWorkoutState();
  const [view, setView] = useState('dashboard');
  const [activeDay, setActiveDay] = useState(null);

  if (!state.stance) {
    return <Onboarding onSelectStance={setStance} />;
  }

  if (state.hasCompletedProgram && daysUntilTrip > 0 && view !== 'player') {
     // Logic for taper screen redirection could go here if needed
  }

  const startDay = (day) => {
    setActiveDay(day);
    setView('player');
  };

  const finishWorkout = () => {
    if (activeDay) {
      completeDay(activeDay);
    }
    setView('dashboard');
    setActiveDay(null);
  };

  const cancelWorkout = () => {
    setView('dashboard');
    setActiveDay(null);
  };

  if (view === 'player' && activeDay) {
    return (
      <WorkoutPlayer
        dayNumber={activeDay}
        stance={state.stance}
        onComplete={finishWorkout}
        onCancel={cancelWorkout}
      />
    );
  }

  if (view === 'weeklyPreview') {
    return <WeeklyPreview onBack={() => setView('dashboard')} />;
  }

  if (state.hasCompletedProgram && daysUntilTrip > 0) {
    return <TaperScreen daysUntilTrip={daysUntilTrip} />;
  }

  return (
    <Dashboard
      state={state}
      daysUntilTrip={daysUntilTrip}
      onStartDay={startDay}
      onViewWeekly={() => setView('weeklyPreview')}
    />
  );
}

export default App;
