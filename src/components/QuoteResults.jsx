import React, { useState } from 'react';
import QuoteCard from './QuoteCard';
import _ from 'lodash';

const QuoteResults = ({ quotes, moveDate, onBack, onSelectQuotes }) => {
  const [selectedQuotes, setSelectedQuotes] = useState([]);

  const handleQuoteSelection = (quoteId, selected) => {
    if (selected) {
      setSelectedQuotes(prev => [...prev, quoteId]);
    } else {
      setSelectedQuotes(prev => prev.filter(id => id !== quoteId));
    }
  };

  const handleProceed = () => {
    const selected = quotes.filter(quote => selectedQuotes.includes(quote.id));
    onSelectQuotes(selected);
  };

  const totalSetupCost = _.sumBy(
    quotes.filter(quote => selectedQuotes.includes(quote.id)), 
    'setupFee'
  );

  const totalMonthlyCost = _.sumBy(
    quotes.filter(quote => selectedQuotes.includes(quote.id)), 
    'monthlyRate'
  );

  return (
    <div>
      <div className="slds-card slds-m-bottom_large">
        <div className="slds-card__header slds-grid">
          <header className="slds-media slds-media_center slds-has-flexi-truncate">
            <div className="slds-media__body">
              <h2 className="slds-card__header-title">
                <span>Service Quotes</span>
              </h2>
              <p className="slds-card__header-meta">
                Move date: {new Date(moveDate).toLocaleDateString()}
              </p>
            </div>
          </header>
          <div className="slds-no-flex">
            <button 
              className="slds-button slds-button_neutral"
              onClick={onBack}
              data-name="back-to-form-button"
              data-description="Go back to edit service setup form"
            >
              Back to Form
            </button>
          </div>
        </div>
        <div className="slds-card__body slds-card__body_inner">
          <div className="slds-notify slds-notify_alert slds-theme_success" role="alert">
            <span className="slds-assistive-text">Success</span>
            <h2>
              Found {quotes.length} service provider{quotes.length !== 1 ? 's' : ''} for your move!
            </h2>
          </div>
        </div>
      </div>

      <div className="slds-grid slds-gutters slds-wrap">
        <div className="slds-col slds-size_1-of-1 slds-large-size_2-of-3">
          <div className="slds-grid slds-gutters slds-wrap">
            {quotes.map(quote => (
              <div key={quote.id} className="slds-col slds-size_1-of-1 slds-medium-size_1-of-2">
                <QuoteCard 
                  quote={quote}
                  isSelected={selectedQuotes.includes(quote.id)}
                  onSelect={handleQuoteSelection}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="slds-col slds-size_1-of-1 slds-large-size_1-of-3">
          <div className="slds-card slds-is-relative" style={{ position: 'sticky', top: '1rem' }}>
            <div className="slds-card__header slds-grid">
              <header className="slds-media slds-media_center slds-has-flexi-truncate">
                <div className="slds-media__body">
                  <h2 className="slds-card__header-title">
                    <span>Quote Summary</span>
                  </h2>
                </div>
              </header>
            </div>
            <div className="slds-card__body slds-card__body_inner">
              <div className="slds-text-align_center slds-m-bottom_medium">
                <div className="slds-text-heading_large slds-text-color_success">
                  {selectedQuotes.length}
                </div>
                <div className="slds-text-body_small slds-text-color_weak">
                  Services Selected
                </div>
              </div>

              {selectedQuotes.length > 0 && (
                <>
                  <div className="slds-border_top slds-p-top_medium slds-m-bottom_medium">
                    <dl className="slds-list_horizontal slds-wrap">
                      <dt className="slds-item_label slds-text-color_weak slds-truncate">
                        Total Setup Fees:
                      </dt>
                      <dd className="slds-item_detail slds-truncate">
                        ${totalSetupCost}
                      </dd>
                      <dt className="slds-item_label slds-text-color_weak slds-truncate">
                        Monthly Total:
                      </dt>
                      <dd className="slds-item_detail slds-truncate">
                        ${totalMonthlyCost}/month
                      </dd>
                    </dl>
                  </div>

                  <button 
                    className="slds-button slds-button_brand slds-button_stretch"
                    onClick={handleProceed}
                    data-name="proceed-with-quotes-button"
                    data-description="Proceed with selected utility service quotes"
                  >
                    Proceed with Selected Services
                  </button>
                </>
              )}

              {selectedQuotes.length === 0 && (
                <div className="slds-text-align_center">
                  <p className="slds-text-body_regular slds-text-color_weak">
                    Select services to see your total costs and proceed with setup.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteResults;
