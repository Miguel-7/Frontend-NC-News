import { useState } from "react";

export default function CollapseWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(currentVisibility => {
      return !currentVisibility;
    });
  };

  return (
    <>
      {isVisible && children}
      <button onClick={handleClick}>
        {isVisible ? "...Show Less" : "...Details"}
      </button>
    </>
  );
}
