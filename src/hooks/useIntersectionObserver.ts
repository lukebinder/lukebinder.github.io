import React, { useState } from "react";

const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  React.useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);

      if (ref.current) {
        observer.observe(ref.current);
      }

      // return () => {
      //   observer.unobserve(ref.current);
      // };
    }
  }, [options, ref]);

  return isIntersecting;
};

export default useIntersectionObserver;
