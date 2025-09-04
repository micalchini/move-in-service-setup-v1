import React from 'react';

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="slds-progress slds-progress_shade">
      <ol className="slds-progress__list">
        {steps.map((step, index) => (
          <li 
            key={step.id}
            className={`slds-progress__item ${
              index < currentStep ? 'slds-is-completed' : 
              index === currentStep ? 'slds-is-active' : ''
            }`}
          >
            <button 
              className="slds-button slds-progress__marker slds-m-right_x-small"
              disabled={index > currentStep}
              data-name={`step-${step.id}-button`}
              data-description={`Navigate to ${step.label} step`}
            >
              <span className="slds-assistive-text">
                {index < currentStep ? 'Completed' : 
                 index === currentStep ? 'Current' : 'Not started'}: {step.label}
              </span>
            </button>
            <div className="slds-progress__item-content slds-grid slds-grid_align-spread">
              <div className="slds-size_3-of-4">
                <div className="slds-text-heading_x-small">{step.label}</div>
                <div className="slds-text-body_small slds-text-color_weak">
                  {step.description}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div 
        className="slds-progress__bar" 
        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
      >
        <span className="slds-assistive-text">Progress: {currentStep + 1} of {steps.length}</span>
      </div>
    </div>
  );
};

export default ProgressIndicator;
