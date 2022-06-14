import React from "react";

const useMedia = (media) => {
  const [matches, setMatches] = React.useState(null);

  React.useEffect(() => {
    const chageMatches = () => {
      const { matches } = window.matchMedia(media);
      setMatches(matches);
    };
    chageMatches();
    window.addEventListener("resize", chageMatches);
    return () => {
      window.removeEventListener("resize", chageMatches);
    };
  }, [media]);

  return matches;
};

export default useMedia;
