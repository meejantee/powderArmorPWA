
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const playTone = (freq, duration, type = 'sine') => {
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.value = freq;

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + duration);

  oscillator.stop(audioContext.currentTime + duration);
};

export const playStartBeep = () => {
  playTone(880, 0.1);
};

export const playStopBeep = () => {
  playTone(440, 0.3);
};

export const playCountdownBeep = () => {
  playTone(660, 0.05);
};
