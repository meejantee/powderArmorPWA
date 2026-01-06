
export const triggerHaptic = (pattern) => {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
};

export const hapticStart = () => {
  triggerHaptic([100, 50, 100]);
};

export const hapticStop = () => {
  triggerHaptic([500]);
};

export const hapticTick = () => {
  triggerHaptic([20]);
};
