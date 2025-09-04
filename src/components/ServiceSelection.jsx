import React from 'react';
import { UTILITY_SERVICES } from '../constants/utilityServices';

const ServiceSelection = ({ services, onChange, errors }) => {
  const selectedCount = Object.values(services).filter(Boolean).length;

  return (
    <div className="slds-card">
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__body">
            <h2 className="slds-card__header-title">
              <span>Select Services</span>
            </h2>
            <p className="slds-card__header-meta">
              {selectedCount} service{selectedCount !== 1 ? 's' : ''} selected
            </p>
          </div>
        </header>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        {errors.services && (
          <div className="slds-notify slds-notify_alert slds-theme_error slds-m-bottom_medium" role="alert">
            <span className="slds-assistive-text">Error</span>
            <h2>{errors.services}</h2>
          </div>
        )}
        
        <div className="slds-grid slds-gutters slds-wrap">
          {UTILITY_SERVICES.map(service => (
            <div key={service.id} className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2">
              <div className={`slds-box slds-box_small slds-m-bottom_small ${services[service.id] ? 'slds-theme_success' : ''}`}>
                <div className="slds-form-element">
                  <div className="slds-form-element__control">
                    <div className="slds-checkbox">
                      <input 
                        type="checkbox" 
                        id={`service-${service.id}`}
                        checked={services[service.id] || false}
                        onChange={(e) => onChange(service.id, e.target.checked)}
                        data-name={`${service.id}-service-checkbox`}
                        data-description={`Select ${service.name} utility service`}
                      />
                      <label className="slds-checkbox__label" htmlFor={`service-${service.id}`}>
                        <span className="slds-checkbox_faux"></span>
                        <span className="slds-form-element__label slds-text-heading_small">
                          {service.name}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <p className="slds-text-body_small slds-text-color_weak slds-m-top_x-small">
                  {service.description}
                </p>
                <div className="slds-m-top_x-small">
                  <span className="slds-badge slds-badge_lightest">
                    Est. ${service.avgCost}/month
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slds-notify slds-notify_alert slds-theme_info slds-m-top_medium" role="alert">
          <span className="slds-assistive-text">Info</span>
          <h2>
            <strong>Tip:</strong> Select all services you need to get bundled quotes and potential discounts.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelection;
