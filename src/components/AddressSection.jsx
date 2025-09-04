import React from 'react';

const AddressSection = ({ currentAddress, newAddress, moveDate, transferType, onChange, errors }) => {
  return (
    <div className="slds-card slds-m-bottom_medium">
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__body">
            <h2 className="slds-card__header-title">
              <span>Move Details</span>
            </h2>
          </div>
        </header>
      </div>
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-form-element slds-m-bottom_medium">
          <label className="slds-form-element__label" htmlFor="move-date">
            <abbr className="slds-required" title="required">*</abbr>
            Move Date
          </label>
          <div className="slds-form-element__control">
            <input 
              type="date" 
              id="move-date" 
              className={`slds-input ${errors.moveDate ? 'slds-has-error' : ''}`}
              value={moveDate}
              onChange={(e) => onChange('', 'moveDate', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              data-name="move-date-input"
              data-description="Date when customer is moving to new address"
            />
          </div>
          {errors.moveDate && (
            <div className="slds-form-element__help">{errors.moveDate}</div>
          )}
        </div>

        <div className="slds-form-element slds-m-bottom_medium">
          <fieldset className="slds-form-element">
            <legend className="slds-form-element__legend slds-form-element__label">
              Service Type
            </legend>
            <div className="slds-form-element__control">
              <div className="slds-radio_button-group">
                <span className="slds-button slds-radio_button">
                  <input 
                    type="radio" 
                    name="transfer-type" 
                    id="new-service" 
                    value="new"
                    checked={transferType === 'new'}
                    onChange={(e) => onChange('', 'transferType', e.target.value)}
                    data-name="new-service-radio"
                    data-description="Setup new utility services at new address"
                  />
                  <label className="slds-radio_button__label" htmlFor="new-service">
                    <span className="slds-radio_faux">New Service</span>
                  </label>
                </span>
                <span className="slds-button slds-radio_button">
                  <input 
                    type="radio" 
                    name="transfer-type" 
                    id="transfer-service" 
                    value="transfer"
                    checked={transferType === 'transfer'}
                    onChange={(e) => onChange('', 'transferType', e.target.value)}
                    data-name="transfer-service-radio"
                    data-description="Transfer existing services to new address"
                  />
                  <label className="slds-radio_button__label" htmlFor="transfer-service">
                    <span className="slds-radio_faux">Transfer Service</span>
                  </label>
                </span>
              </div>
            </div>
          </fieldset>
        </div>

        {transferType === 'transfer' && (
          <div className="slds-form-element slds-m-bottom_medium">
            <label className="slds-form-element__label" htmlFor="current-address">
              <abbr className="slds-required" title="required">*</abbr>
              Current Address
            </label>
            <div className="slds-form-element__control">
              <textarea 
                id="current-address" 
                className={`slds-textarea ${errors.currentAddress ? 'slds-has-error' : ''}`}
                value={currentAddress}
                onChange={(e) => onChange('', 'currentAddress', e.target.value)}
                placeholder="Enter your current address"
                rows="3"
                data-name="current-address-textarea"
                data-description="Customer's current address for service transfer"
              />
            </div>
            {errors.currentAddress && (
              <div className="slds-form-element__help">{errors.currentAddress}</div>
            )}
          </div>
        )}

        <div className="slds-form-element">
          <label className="slds-form-element__label" htmlFor="new-address">
            <abbr className="slds-required" title="required">*</abbr>
            New Address
          </label>
          <div className="slds-form-element__control">
            <textarea 
              id="new-address" 
              className={`slds-textarea ${errors.newAddress ? 'slds-has-error' : ''}`}
              value={newAddress}
              onChange={(e) => onChange('', 'newAddress', e.target.value)}
              placeholder="Enter your new address"
              rows="3"
              data-name="new-address-textarea"
              data-description="Customer's new address for service setup"
            />
          </div>
          {errors.newAddress && (
            <div className="slds-form-element__help">{errors.newAddress}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
