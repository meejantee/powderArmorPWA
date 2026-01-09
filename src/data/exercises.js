
export const EXERCISES = {
  legBlaster: {
    name: "Leg Blaster Complex",
    description: "Legacy Complex Definition (Unused)",
    reps: "1 Complex",
    video: "leg-blaster.mp4",
    progression: {
      week1: { weight: "Bodyweight", instruction: "Hands on hips. Focus on perfect alignment." },
      week2: { weight: "12kg Kettlebell", instruction: "Goblet Hold. Keep chest up." },
      week3: { weight: "12kg Kettlebell", instruction: "Goblet Hold + 1 sec PAUSE at bottom of squats." },
      week4: { weight: "Bodyweight", instruction: "Hands on hips. Focus on speed and control." }
    },
    goofyInstruction: "Do 2 extra lunges on LEFT leg."
  },
  squats: {
    name: "Squats",
    description: "Keep weight in heels. Chest up. Break parallel.",
    reps: "20 reps",
    video: "squats.mp4",
    progression: {
      week1: {
        reps: "10 reps",
        weight: "Bodyweight",
        instruction: "Hands on hips. Focus on perfect alignment."
      },
      week2: {
        reps: "10 reps",
        weight: "6kg Dumbbell",
        instruction: "Goblet Hold. Keep chest up."
      },
      week3: {
        reps: "20 reps",
        weight: "6kg Dumbbell",
        instruction: "Goblet Hold. Grind it out."
      },
      week4: {
        reps: "10 reps",
        weight: "6kg Dumbbell",
        instruction: "Goblet Hold. Focus on control."
      }
    }
  },
  lunges: {
    name: "Lunges",
    description: "Step forward. Back knee kisses the ground. Keep torso upright.",
    reps: "20 reps (10/leg)",
    isUnilateral: true,
    video: "lunges.mp4",
    progression: {
      week1: {
        reps: "10 reps (5/leg)",
        weight: "Bodyweight",
        instruction: "Hands on hips."
      },
      week2: {
        reps: "10 reps (5/leg)",
        weight: "3kg Dumbbells",
        instruction: "Hold in hands."
      },
      week3: {
        reps: "20 reps (10/leg)",
        weight: "3kg Dumbbells",
        instruction: "Hold in hands. Stay stable."
      },
      week4: {
        reps: "10 reps (5/leg)",
        weight: "3kg Dumbbells",
        instruction: "Hold in hands."
      }
    },
    goofyInstruction: "Do 2 extra lunges on LEFT leg."
  },
  dynamicSquats: {
    name: "Dynamic Squats",
    description: "Explosive movement pattern.",
    reps: "10 reps",
    video: "speed-squats.mp4",
    progression: {
      week1: {
        name: "Pulse Squats",
        reps: "5 reps",
        weight: "Bodyweight",
        instruction: "Stay low! Rise up halfway, drop back down. Constant tension.",
        video: "pulse-squats.mp4"
      },
      week2: {
        name: "Pulse Squats",
        reps: "5 reps",
        weight: "6kg Dumbbell",
        instruction: "Stay low! Rise up halfway, drop back down. Constant tension.",
        video: "pulse-squats.mp4"
      },
      week3: {
        name: "Speed Squats",
        reps: "10 reps",
        weight: "6kg Dumbbell",
        instruction: "Fast tempo, NO Jump. Explode up but feet stay flat.",
        video: "speed-squats.mp4"
      },
      week4: {
        name: "Pulse Squats",
        reps: "5 reps",
        weight: "6kg Dumbbell",
        instruction: "Stay low! Rise up halfway, drop back down. Constant tension.",
        video: "pulse-squats.mp4"
      }
    }
  },
  dynamicLunges: {
    name: "Dynamic Lunges",
    description: "Unilateral leg power.",
    reps: "10 reps (5/leg)",
    isUnilateral: true,
    video: "split-pulses.mp4",
    progression: {
      week1: {
        name: "Split Pulses",
        reps: "5 reps",
        weight: "Bodyweight",
        instruction: "Hold lunge bottom. Pulse 3 inches. Do not straighten legs.",
        video: "split-pulses.mp4"
      },
      week2: {
        name: "Split Pulses",
        reps: "5 reps",
        weight: "3kg Dumbbells",
        instruction: "Hold lunge bottom. Pulse 3 inches. Do not straighten legs.",
        video: "split-pulses.mp4"
      },
      week3: {
        name: "Pulse Lunges",
        reps: "10 reps (5/leg)",
        weight: "3kg Dumbbells",
        instruction: "Bottom pulses, NO Jump. Stay low.",
        video: "split-pulses.mp4"
      },
      week4: {
        name: "Split Pulses",
        reps: "5 reps",
        weight: "3kg Dumbbells",
        instruction: "Hold lunge bottom. Pulse 3 inches. Do not straighten legs.",
        video: "split-pulses.mp4"
      }
    },
    goofyInstruction: "Do 2 extra reps on LEFT leg."
  },
  rdl: {
    name: "Single-Leg Romanian Deadlift",
    description: "Hinge at hips. Keep back flat like a table. No rounding.",
    reps: "12 per leg",
    isUnilateral: true,
    video: "single-leg-rdl.mp4",
    progression: {
      week1: {
        weight: "Bodyweight",
        instruction: "Focus on balance and hamstring stretch."
      },
      week2: {
        weight: "12kg Kettlebell",
        instruction: "Opposite hand holds weight."
      },
      week3: {
        weight: "12kg Kettlebell",
        instruction: "Opposite hand holds weight."
      },
      week4: {
        weight: "Bodyweight",
        instruction: "Focus on balance."
      }
    }
  },
  wallSit: {
    name: "Wall Sit",
    description: "Knees at 90 degrees. Press lower back into the wall.",
    time: 60,
    video: "wall-sit.mp4",
    progression: {
      week1: {
        weight: "Bodyweight",
        instruction: "Hands on wall or thighs (no pushing)."
      },
      week2: {
        weight: "6kg Dumbbell",
        instruction: "Hold on lap."
      },
      week3: {
        weight: "12kg Kettlebell",
        instruction: "Hold on lap."
      },
      week4: {
        weight: "Bodyweight",
        instruction: "Hands on wall."
      }
    }
  },
  core: {
    name: "Core Anti-Rotation",
    description: "Imagine a glass of water on your lower back. Don't spill it.",
    video: "core-plank.mp4",
    progression: {
      week1: {
        variant: "Shoulder Taps",
        weight: "Bodyweight",
        reps: "20 reps",
        instruction: "High Plank. Tap opposite shoulder slowly."
      },
      week2: {
        variant: "Plank Ball Roll",
        weight: "8kg Ball",
        reps: "12 reps",
        instruction: "Roll ball from left to right hand under chest."
      },
      week3: {
        variant: "Plank Medicine Ball Drag",
        weight: "12kg Medicine Ball",
        reps: "12 reps",
        instruction: "Drag ball across body (High friction).",
        video: "medicine-ball-drag.mp4"
      },
      week4: {
        variant: "Shoulder Taps",
        weight: "Bodyweight",
        reps: "20 reps",
        instruction: "High Plank. Tap opposite shoulder slowly."
      }
    }
  },
  deadHang: {
    name: "Dead Hang",
    description: "Decompress Spine. Relax shoulders.",
    time: 60,
    video: "dead-hang.mp4",
    progression: {
      all: {
        weight: "Bodyweight",
        instruction: "Just hang."
      }
    }
  }
};

export const WARMUP = [
  {
    name: "Joint Rotations",
    instruction: "10 Wrist Rotations (each side)\n10 Knee Rotations (each side)\n10 Ankle Rotations (each side)\n10 Neck Rotations (each side)",
    type: 'warmup',
    video: "joint-rotations.mp4"
  },
  { name: "Cat-Cow", instruction: "Mobilize spine gently", reps: "10 reps", type: 'warmup', video: "cat-cow.mp4" },
  { name: "Glute Bridges", instruction: "Squeeze at top", reps: "10 reps", type: 'warmup', video: "glute-bridges.mp4" },
  { name: "High Knees", instruction: "Light impact", time: 20, type: 'warmup', video: "high-knees.mp4" }
];

export const COOLDOWN = [
  { name: "Figure-4 Stretch", instruction: "Glutes", time: 30, type: 'cooldown', video: "figure-4.mp4", isUnilateral: true },
  { name: "Lunge Stretch", instruction: "Hip Flexors", time: 30, type: 'cooldown', video: "lunge-stretch.mp4", isUnilateral: true },
  { name: "Child's Pose", instruction: "Lower Back", time: 45, type: 'cooldown', video: "childs-pose.mp4" },
  { name: "Doorway Stretch", instruction: "Chest/Pec", time: 30, type: 'cooldown', video: "doorway-stretch.mp4", isUnilateral: true }
];
