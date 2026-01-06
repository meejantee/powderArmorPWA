
export const EXERCISES = {
  legBlaster: {
    name: "Leg Blaster Complex",
    description: "20 Squats, 20 Lunges (10/leg), 10 Jump Squats, 10 Jump Lunges.",
    progression: {
      week1: {
        weight: "Bodyweight",
        instruction: "Hands on hips. Focus on perfect alignment."
      },
      week2: {
        weight: "12kg Kettlebell",
        instruction: "Goblet Hold. Keep chest up."
      },
      week3: {
        weight: "12kg Kettlebell",
        instruction: "Goblet Hold + 1 sec PAUSE at bottom of squats."
      },
      week4: {
        weight: "Bodyweight",
        instruction: "Hands on hips. Focus on speed and control."
      }
    },
    goofyInstruction: "Do 2 extra lunges on LEFT leg."
  },
  rdl: {
    name: "Single-Leg RDL",
    description: "Hinge at hips. Keep back flat like a table. No rounding.",
    reps: "12 per leg",
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
        variant: "Plank KB Drag",
        weight: "12kg Kettlebell",
        reps: "12 reps",
        instruction: "Drag bell across body (High friction)."
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
    progression: {
      all: {
        weight: "Bodyweight",
        instruction: "Just hang."
      }
    }
  }
};

export const WARMUP = [
  { name: "Joint Rotations", note: "Wrists, Ankles, Neck" },
  { name: "Cat-Cow", note: "Mobilize spine gently" },
  { name: "Glute Bridges", note: "10 reps, squeeze top" },
  { name: "High Knees", note: "20 seconds, light impact" }
];

export const COOLDOWN = [
  { name: "Figure-4 Stretch", note: "Glutes" },
  { name: "Lunge Stretch", note: "Hip Flexors" },
  { name: "Child's Pose", note: "Lower Back" },
  { name: "Doorway Stretch", note: "Chest/Pec" }
];
