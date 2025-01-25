import React from "react";
import Navigation from "./Navigation";

const StepCard = ({ step, onPrev, onNext, setActiveStep }) => {
  const content = {
    1: "This is content for Step 1",
    2: "This is content for Step 2",
    3: "This is content for Step 3",
    4: "This is content for Step 4",
  };

  return (
    <div className="step-card">
      <h2>Step {step}:</h2>
      <p>{content[step]}</p>
      <Navigation
        currentStep={step}
        onPrev={onPrev}
        onNext={onNext}
        setActiveStep={setActiveStep}
      />
    </div>
  );
};

export default StepCard;
