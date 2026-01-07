
import { EXERCISES } from './exercises';

export const TOTAL_DAYS = 30;

const PHASES = {
  1: { name: "BASE PHASE", intensity: "Low", rest: 120 },
  2: { name: "LOAD PHASE", intensity: "Medium", rest: 120 },
  3: { name: "ENDURANCE PHASE", intensity: "High", rest: 90 },
  4: { name: "TAPER PHASE", intensity: "Low", rest: 120 }
};

const WEEKLY_SPLIT = [
  { dayOfWeek: 1, type: 'workout', rounds: 3, label: 'Standard Workout' },
  { dayOfWeek: 2, type: 'workout', rounds: 4, label: 'Standard Workout' },
  { dayOfWeek: 3, type: 'recovery', label: 'Active Recovery' },
  { dayOfWeek: 4, type: 'workout', rounds: 4, label: 'Standard Workout' },
  { dayOfWeek: 5, type: 'workout', rounds: 3, label: 'Standard Workout' },
  { dayOfWeek: 6, type: 'workout', rounds: 4, label: 'Max Effort', note: "Speed + Power. Minimize rest. Stop if form breaks." },
  { dayOfWeek: 7, type: 'rest', label: 'Rest Day' }
];

export const generateSchedule = () => {
  const schedule = [];

  for (let day = 1; day <= TOTAL_DAYS; day++) {
    const weekNum = Math.ceil(day / 7);
    const dayOfWeek = (day - 1) % 7 + 1;

    let dayConfig = {
      day,
      week: weekNum,
      phase: PHASES[Math.min(weekNum, 4)],
      isComplete: false
    };

    const splitData = WEEKLY_SPLIT.find(s => s.dayOfWeek === dayOfWeek);
    dayConfig = { ...dayConfig, ...splitData };

    // Immediate Schedule Fix: Hardcode Day 2 to 3 rounds due to user fatigue
    if (day === 2) {
      dayConfig.rounds = 3;
    }

    if (day >= 22) {
      if (day === 27) {
        dayConfig.type = 'workout';
        dayConfig.rounds = 3;
        dayConfig.label = 'Light Intensity';
        dayConfig.note = "Keep it smooth. No grinding.";
      }

      if (day === 28) {
        dayConfig.type = 'rest';
        dayConfig.label = 'Strict Rest';
        dayConfig.note = "No workout allowed.";
      }

      if (day === 29 || day === 30) {
        dayConfig.type = 'workout';
        dayConfig.rounds = 2;
        dayConfig.label = 'Activation Mode';
        dayConfig.isActivation = true;
        dayConfig.note = "Prime the muscles, do not fatigue them.";
        dayConfig.forceWeek2Weights = true;
      }
    }

    schedule.push(dayConfig);
  }

  return schedule;
};

export const getDailyExercises = (dayNumber, stance) => {
  const schedule = generateSchedule();
  const dayData = schedule.find(d => d.day === dayNumber);

  if (!dayData || dayData.type === 'rest' || dayData.type === 'recovery') return [];

  const progressionKey = dayData.forceWeek2Weights ? 'week2' : `week${Math.min(dayData.week, 4)}`;

  const buildExercise = (key, exerciseDef) => {
    const prog = exerciseDef.progression[progressionKey] || exerciseDef.progression.all;
    let instruction = prog.instruction;

    // Also apply goofy instruction to dynamicLunges if present
    if ((key === 'lunges' || key === 'dynamicLunges') && stance === 'goofy' && exerciseDef.goofyInstruction) {
      instruction += ` ${exerciseDef.goofyInstruction}`;
    }

    return {
      id: key,
      name: prog.name || exerciseDef.name, // Use progression name if available (for Pulse/Speed/Jump Squats)
      description: exerciseDef.description,
      weight: prog.weight,
      instruction: instruction,
      reps: prog.reps || exerciseDef.reps,
      time: prog.time || exerciseDef.time,
      variant: prog.variant,
      image: prog.image || exerciseDef.image // Use progression image if available
    };
  };

  return [
    buildExercise('squats', EXERCISES.squats),
    buildExercise('lunges', EXERCISES.lunges),
    buildExercise('dynamicSquats', EXERCISES.dynamicSquats),
    buildExercise('dynamicLunges', EXERCISES.dynamicLunges),
    buildExercise('rdl', EXERCISES.rdl),
    buildExercise('wallSit', EXERCISES.wallSit),
    buildExercise('core', EXERCISES.core),
    buildExercise('deadHang', EXERCISES.deadHang)
  ];
};
