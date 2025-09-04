import React from 'react';

const QuoteCard = ({ quote, isSelected, onSelect }) => {
  const handleSelection = () => {
    onSelect(quote.id, !isSelected);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`slds-icon_container slds-icon_x-small ${
          index < rating ? 'slds-icon-text-warning' : 'slds-icon-text-light'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={`slds-card slds-m-bottom_medium ${isSelected ? 'slds-card_boundary' : ''}`}>
      <div className="slds-card__header slds-grid">
        <header className="slds-media slds-media_center slds-has-flexi-truncate">
          <div className="slds-media__body">
            <h2 className="slds-card__header-title">
              <span>{quote.service}</span>
            </h2>
            <p className="slds-card__header-meta">
              {quote.provider}
            </p>
          </div>
        </header>
        <div className="slds-no-flex">
          <div className="slds-form-element">
            <div className="slds-form-element__control">
              <div className="slds-checkbox">
                <input 
                  type="checkbox" 
                  id={`quote-${quote.id}`}
                  checked={isSelected}
                  onChange={handleSelection}
                  data-name={`select-quote-${quote.service.toLowerCase()}`}
                  data-description={`Select ${quote.service} service from ${quote.provider}`}
                />
                <label className="slds-checkbox__label" htmlFor={`quote-${quote.id}`}>
                  <span className="slds-checkbox_faux"></span>
                  <span className="slds-assistive-text">Select this quote</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slds-card__body slds-card__body_inner">
        <div className="slds-grid slds-gutters slds-m-bottom_small">
          <div className="slds-col slds-size_1-of-2">
            <div className="slds-text-align_center">
              <div className="slds-text-heading_medium slds-text-color_success">
                ${quote.setupFee}
              </div>
              <div className="slds-text-body_small slds-text-color_weak">
                Setup Fee
              </div>
            </div>
          </div>
          <div className="slds-col slds-size_1-of-2">
            <div className="slds-text-align_center">
              <div className="slds-text-heading_medium">
                ${quote.monthlyRate}
              </div>
              <div className="slds-text-body_small slds-text-color_weak">
                Per Month
              </div>
            </div>
          </div>
        </div>

        <div className="slds-m-bottom_small">
          <div className="slds-grid slds-grid_align-spread slds-grid_vertical-align-center">
            <div className="slds-col">
              <div className="slds-media slds-media_small">
                <div className="slds-media__body">
                  <div className="slds-text-body_small">
                    Connection: {new Date(quote.connectionDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
            <div className="slds-col slds-no-flex">
              <div className="slds-media slds-media_small">
                <div className="slds-media__body">
                  <div className="slds-grid slds-grid_align-end">
                    {renderStars(quote.rating)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {quote.transferAvailable && (
          <div className="slds-notify slds-notify_alert slds-theme_info slds-m-bottom_small" role="alert">
            <span className="slds-assistive-text">Info</span>
            <h2 className="slds-text-body_small">
              <strong>Transfer Available:</strong> Keep your existing account
            </h2>
          </div>
        )}

        <div className="slds-m-bottom_small">
          <h3 className="slds-text-heading_x-small slds-m-bottom_x-small">Features:</h3>
          <ul className="slds-list_dotted">
            {quote.features.map((feature, index) => (
              <li key={index} className="slds-text-body_small">{feature}</li>
            ))}
          </ul>
        </div>

        <button 
          className={`slds-button slds-button_stretch ${
            isSelected ? 'slds-button_success' : 'slds-button_brand'
          }`}
          onClick={handleSelection}
          data-name={`toggle-quote-${quote.service.toLowerCase()}`}
          data-description={`${isSelected ? 'Deselect' : 'Select'} ${quote.service} service quote`}
        >
          {isSelected ? 'Selected ✓' : 'Select Service'}
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
