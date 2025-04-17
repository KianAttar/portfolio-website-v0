import {Ref, RefObject, useEffect, useRef, useState} from "react";

type UseOnScreenOptions = {
  threshold?: number;
}
const checkSectionCoverage = (section : Element) => {
  const viewportHeight = window.innerHeight;
  const rect = section.getBoundingClientRect();
  // Calculate the intersection area
  const sectionHeight = section.clientHeight;
  const intersectionHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
  // Calculate the percentage of the viewport covered by the section
  return (intersectionHeight / sectionHeight) >= 0.55 || (intersectionHeight / viewportHeight) >= 0.7
};

export const useOnScreen = (ref: RefObject<HTMLElement>, options: UseOnScreenOptions = {}) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const {threshold} = options;
  useEffect(() => {
    const observer = new IntersectionObserver!(
      ([entry]) => {
        if(entry.isIntersecting) {
          setIsOnScreen(checkSectionCoverage(entry.target));
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.55, 0.6, 0.7 ,0.8],
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isOnScreen;
};
