"use client";
import React, { useState } from "react";
import FlowDiagram from "./components/FlowDiagram";
import StepCard from "./components/StepCard";
import "./styles/globals.css";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const handleStepClick = (step) => setCurrentStep(step);

  return (
    <div className="container">
      <div className="content">
        <StepCard step={currentStep} onPrev={handlePrev}
          onNext={handleNext}
          setActiveStep={setCurrentStep} />
       
      </div>
      <FlowDiagram currentStep={currentStep} onStepClick={handleStepClick} />
    </div>
  );
}
