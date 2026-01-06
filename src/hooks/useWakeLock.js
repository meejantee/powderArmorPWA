import { useRef, useEffect, useState, useCallback } from 'react';

export const useWakeLock = () => {
  const [released, setReleased] = useState(false);
  const wakeLock = useRef(null);

  const requestWakeLock = useCallback(async () => {
    if ('wakeLock' in navigator) {
      try {
        wakeLock.current = await navigator.wakeLock.request('screen');
        setReleased(false);

        wakeLock.current.addEventListener('release', () => {
          console.log('Wake Lock was released');
          setReleased(true);
        });
        console.log('Wake Lock is active');
      } catch (err) {
        console.error(`${err.name}, ${err.message}`);
      }
    } else {
      console.warn('Wake Lock API not supported in this browser.');
    }
  }, []);

  const releaseWakeLock = useCallback(async () => {
    if (wakeLock.current) {
      await wakeLock.current.release();
      wakeLock.current = null;
    }
  }, []);

  useEffect(() => {
    // Re-acquire lock if visibility changes (e.g. user switches tabs and comes back)
    const handleVisibilityChange = () => {
      if (wakeLock.current !== null && document.visibilityState === 'visible') {
        requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      releaseWakeLock();
    };
  }, [requestWakeLock, releaseWakeLock]);

  return { requestWakeLock, releaseWakeLock, released };
};
