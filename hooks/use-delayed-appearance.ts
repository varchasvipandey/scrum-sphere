import { useEffect, useRef, useState } from "react";

export const useDelayedAppearance = (delay = 500) => {
  const visibilityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const clearTimer = () => {
    if (visibilityTimer.current) clearTimeout(visibilityTimer.current);
  };

  useEffect(() => {
    clearTimer();

    visibilityTimer.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => {
      clearTimer();
    };
  }, []);

  return isVisible;
};
