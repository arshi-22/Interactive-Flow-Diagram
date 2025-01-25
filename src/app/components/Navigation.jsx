import React, { useEffect } from "react";

const Navigation = ({ currentStep, onPrev, onNext, setActiveStep }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="card-controls">
      {currentStep !== 1 && (
        <>
          <button
            className="restart-button"
            onClick={() => {
              setActiveStep(1);
            }}
          >
            Restart
          </button>
          <div
            className={`arrow-button ${currentStep === 1 ? "disabled" : ""}`}
            onClick={onPrev }
          >
            &larr;
          </div>
        </>
      )}

      <div
        className={`arrow-button ${currentStep === 4 ? "disabled" : ""}`}
        onClick={onNext}
      >
        &rarr;
      </div>
    </div>
  );
};

export default Navigation;
