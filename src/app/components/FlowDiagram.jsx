import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const FlowDiagram = ({ currentStep, onStepClick }) => {
  gsap.registerPlugin(MotionPathPlugin);

  const moneyBagRef = useRef(null);
  const stepPositions = [
    { start: 0, stop: 0 }, 
    { start: 220, stop: 100 }, 
    { start: 180, stop: 200 }, 
    { start: 80, stop: 300 }, 
  ];

  useEffect(() => {
    if (moneyBagRef.current) {
      gsap.to(moneyBagRef.current, {
        motionPath: {
          path: "#path",
          align: "#path",
          autoRotate: false,
          alignOrigin: [0.5, 0.5],
          start: (currentStep===1?0:currentStep-(currentStep===2?2:1.7)) / 4,
          end: ((currentStep===4?(currentStep-.7):currentStep-1) * .3),
        },
        duration: 2,
        ease: "power2.inOut",
      });
    }
  }, [currentStep]); 

  return (
    <div className="flow-diagram-container">
      <svg
        height="auto"
        viewBox="-10 -10 479 380"
        fill="none"
        className="flow-diagram-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="path"
          d="M57.9231 1.02979H401.077C432.515 1.02979 458 26.5151 458 57.9529C458 89.3907 432.515 114.876 401.077 114.876L57.9231 114.069C26.4854 114.069 1 139.554 1 170.992C1 202.43 26.4854 227.915 57.9232 227.915L401.077 227.108C432.515 227.108 458 252.593 458 284.031C458 315.468 432.515 340.954 401.077 340.954H57.9232"
          stroke="url(#paint0_linear_2265_4150)"
          strokeWidth="1.61484"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_2265_4150"
            x1="128.169"
            y1="1.02978"
            x2="508.706"
            y2="241.902"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4765E6"></stop>
            <stop offset="0.46" stopColor="#5C4099"></stop>
            <stop offset="1" stopColor="#E31662"></stop>
          </linearGradient>
        </defs>
        <g className="highlight">
          <circle r="10" cx="50" cy="50"></circle>
          <image
            ref={moneyBagRef}
            href="/assets/moneybag.svg"
            x="-10"
            y="-10"
            width="25"
            height="30"
          ></image>
        </g>
      </svg>
      {[1, 2, 3, 4].map((step) => (
        <div className={`button-container button-${step}`} key={step}>
          <button
            className={`flow-button ${currentStep === step ? (step === 1 ? "active active-primary" : "active") : ""}`}
            onClick={() => {
              onStepClick(step);
            }}
          >
            Step {step}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FlowDiagram;
