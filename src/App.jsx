
import React, { useState } from 'react';
import { useWorkoutState } from './hooks/useWorkoutState';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import WorkoutPlayer from './components/WorkoutPlayer';
import TaperScreen from './components/TaperScreen';
import WeeklyPreview from './components/WeeklyPreview';

const Toast = ({ message }) => {
    if (!message) return null;
    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-full shadow-lg border border-slate-700 animate-fade-in-up z-50">
            {message}
        </div>
    );
};

function App() {
  const { state, setStance, completeDay, daysUntilTrip } = useWorkoutState();
  const [view, setView] = useState('dashboard');
  const [activeDay, setActiveDay] = useState(null);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
      setToastMessage(msg);
      setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSetVideoMode = (mode) => {
      setIsVideoMode(mode);
      showToast(mode ? "Video Mode Activated" : "Video Mode Disabled");
  };

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
        isVideoMode={isVideoMode}
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
    <>
        <Dashboard
        state={state}
        daysUntilTrip={daysUntilTrip}
        onStartDay={startDay}
        onViewWeekly={() => setView('weeklyPreview')}
        onSetVideoMode={handleSetVideoMode}
        isVideoMode={isVideoMode}
        />
        <Toast message={toastMessage} />
    </>
  );
}

export default App;
