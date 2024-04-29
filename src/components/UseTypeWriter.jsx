import { useState, useEffect } from "react";

const useTypewriter = (delay = 1500) => {
  const word = "ArtisanAura";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cycleCompleted, setCycleCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentLetter = word[currentIndex];
      const length = displayText.length;

      if (!isDeleting) {
        setDisplayText((prevText) => prevText + currentLetter);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % word.length);
        if (length === word.length) {
          setIsDeleting(true);
          setTimeout(() => setCycleCompleted(true), delay);
        }
      } else {
        setDisplayText((prevText) => prevText.slice(0, -1));
        setCurrentIndex((prevIndex) => (prevIndex + 1) % word.length);
        if (length === 0 && cycleCompleted) {
          setDisplayText("");
          setCurrentIndex(0);
          setIsDeleting(false);
          setCycleCompleted(false);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [displayText, currentIndex, isDeleting, word, delay, cycleCompleted]);

  return displayText;
};

export default useTypewriter;
