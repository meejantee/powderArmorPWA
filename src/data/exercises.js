
export const EXERCISES = {
  legBlaster: {
    name: "Leg Blaster Complex",
    description: "Legacy Complex Definition (Unused)",
    reps: "1 Complex",
    image: "leg-blaster.gif",
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
    image: "squats.gif",
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
    image: "lunges.gif",
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
    image: "speed-squats.gif",
    progression: {
      week1: {
        name: "Pulse Squats",
        reps: "5 reps",
        weight: "Bodyweight",
        instruction: "Stay low! Rise up halfway, drop back down. Constant tension.",
        image: "pulse-squats.gif"
      },
      week2: {
        name: "Pulse Squats",
        reps: "5 reps",
        weight: "6kg Dumbbell",
        instruction: "Stay low! Rise up halfway, drop back down. Constant tension.",
        image: "pulse-squats.gif"
      },
      week3: {
        name: "Speed Squats",
        reps: "10 reps",
        weight: "6kg Dumbbell",
        instruction: "Fast tempo, NO Jump. Explode up but feet stay flat.",
        image: "speed-squats.gif"
      },
      week4: {
        name: "Pulse Squats",
        reps: "5 reps",
        weight: "6kg Dumbbell",
        instruction: "Stay low! Rise up halfway, drop back down. Constant tension.",
        image: "pulse-squats.gif"
      }
    }
  },
  dynamicLunges: {
    name: "Dynamic Lunges",
    description: "Unilateral leg power.",
    reps: "10 reps (5/leg)",
    image: "split-pulses.gif",
    progression: {
      week1: {
        name: "Split Pulses",
        reps: "5 reps",
        weight: "Bodyweight",
        instruction: "Hold lunge bottom. Pulse 3 inches. Do not straighten legs.",
        image: "split-pulses.gif"
      },
      week2: {
        name: "Split Pulses",
        reps: "5 reps",
        weight: "3kg Dumbbells",
        instruction: "Hold lunge bottom. Pulse 3 inches. Do not straighten legs.",
        image: "split-pulses.gif"
      },
      week3: {
        name: "Pulse Lunges",
        reps: "10 reps (5/leg)",
        weight: "3kg Dumbbells",
        instruction: "Bottom pulses, NO Jump. Stay low.",
        image: "split-pulses.gif"
      },
      week4: {
        name: "Split Pulses",
        reps: "5 reps",
        weight: "3kg Dumbbells",
        instruction: "Hold lunge bottom. Pulse 3 inches. Do not straighten legs.",
        image: "split-pulses.gif"
      }
    },
    goofyInstruction: "Do 2 extra reps on LEFT leg."
  },
  rdl: {
    name: "Single-Leg Romanian Deadlift",
    description: "Hinge at hips. Keep back flat like a table. No rounding.",
    reps: "12 per leg",
    image: "single-leg-rdl.gif",
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
    image: "wall-sit.gif",
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
    image: "core-plank.gif",
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
        image: "medicine-ball-drag.gif"
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
    image: "dead-hang.gif",
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
    image: "joint-rotations.gif"
  },
  { name: "Cat-Cow", instruction: "Mobilize spine gently", reps: "10 reps", type: 'warmup', image: "cat-cow.gif" },
  { name: "Glute Bridges", instruction: "Squeeze at top", reps: "10 reps", type: 'warmup', image: "glute-bridges.gif" },
  { name: "High Knees", instruction: "Light impact", time: 20, type: 'warmup', image: "high-knees.gif" }
];

export const COOLDOWN = [
  { name: "Figure-4 Stretch", instruction: "Glutes", time: 30, type: 'cooldown', image: "figure-4.gif" },
  { name: "Lunge Stretch", instruction: "Hip Flexors", time: 30, type: 'cooldown', image: "lunge-stretch.gif" },
  { name: "Child's Pose", instruction: "Lower Back", time: 45, type: 'cooldown', image: "childs-pose.gif" },
  { name: "Doorway Stretch", instruction: "Chest/Pec", time: 30, type: 'cooldown', image: "doorway-stretch.gif" }
];
