import { useEffect } from "react";

export const useDelayedScroll = (delay: number) => {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();

      setTimeout(() => {
        window.scrollTo({
          top: window.scrollY + 100, // Adjust the offset as needed
          behavior: "smooth",
        });
      }, delay);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [delay]);
};
