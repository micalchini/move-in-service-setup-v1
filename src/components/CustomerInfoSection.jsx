import React from 'react';

const CustomerInfoSection = ({ data, onChange, errors }) => {
  return (
    <div className="slds-card slds-m-bottom_medium">
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__body">
            <h2 className="slds-card__header-title">
              <span>Customer Information</span>
            </h2>
          </div>
        </header>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-grid slds-gutters">
          <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2">
            <div className="slds-form-element">
              <label className="slds-form-element__label" htmlFor="first-name">
                <abbr className="slds-required" title="required">*</abbr>
                First Name
              </label>
              <div className="slds-form-element__control">
                <input 
                  type="text" 
                  id="first-name" 
                  className={`slds-input ${errors['customerInfo.firstName'] ? 'slds-has-error' : ''}`}
                  value={data.firstName}
                  onChange={(e) => onChange('customerInfo', 'firstName', e.target.value)}
                  placeholder="Enter your first name"
                  data-name="first-name-input"
                  data-description="Customer's first name for service setup"
                />
              </div>
              {errors['customerInfo.firstName'] && (
                <div className="slds-form-element__help">{errors['customerInfo.firstName']}</div>
              )}
            </div>
          </div>
          
          <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2">
            <div className="slds-form-element">
              <label className="slds-form-element__label" htmlFor="last-name">
                <abbr className="slds-required" title="required">*</abbr>
                Last Name
              </label>
              <div className="slds-form-element__control">
                <input 
                  type="text" 
                  id="last-name" 
                  className={`slds-input ${errors['customerInfo.lastName'] ? 'slds-has-error' : ''}`}
                  value={data.lastName}
                  onChange={(e) => onChange('customerInfo', 'lastName', e.target.value)}
                  placeholder="Enter your last name"
                  data-name="last-name-input"
                  data-description="Customer's last name for service setup"
                />
              </div>
              {errors['customerInfo.lastName'] && (
                <div className="slds-form-element__help">{errors['customerInfo.lastName']}</div>
              )}
            </div>
          </div>
        </div>

        <div className="slds-form-element slds-m-top_medium">
          <label className="slds-form-element__label" htmlFor="email">
            <abbr className="slds-required" title="required">*</abbr>
            Email Address
          </label>
          <div className="slds-form-element__control">
            <input 
              type="email" 
              id="email" 
              className={`slds-input ${errors['customerInfo.email'] ? 'slds-has-error' : ''}`}
              value={data.email}
              onChange={(e) => onChange('customerInfo', 'email', e.target.value)}
              placeholder="Enter your email address"
              data-name="email-input"
              data-description="Customer's email for service confirmations"
            />
          </div>
          {errors['customerInfo.email'] && (
            <div className="slds-form-element__help">{errors['customerInfo.email']}</div>
          )}
        </div>

        <div className="slds-form-element slds-m-top_medium">
          <label className="slds-form-element__label" htmlFor="phone">
            <abbr className="slds-required" title="required">*</abbr>
            Phone Number
          </label>
          <div className="slds-form-element__control">
            <input 
              type="tel" 
              id="phone" 
              className={`slds-input ${errors['customerInfo.phone'] ? 'slds-has-error' : ''}`}
              value={data.phone}
              onChange={(e) => onChange('customerInfo', 'phone', e.target.value)}
              placeholder="(555) 123-4567"
              data-name="phone-input"
              data-description="Customer's phone number for service contact"
            />
          </div>
          {errors['customerInfo.phone'] && (
            <div className="slds-form-element__help">{errors['customerInfo.phone']}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoSection;
