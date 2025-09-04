import React, { useState } from 'react';
import ServiceSetupForm from './ServiceSetupForm';
import QuoteResults from './QuoteResults';
import ProgressIndicator from './ProgressIndicator';
import { SETUP_STEPS } from '../constants/setupSteps';

const MoveInServiceApp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    moveDate: '',
    currentAddress: '',
    newAddress: '',
    customerInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    services: {
      electricity: false,
      gas: false,
      water: false,
      internet: false,
      cable: false,
      trash: false
    },
    transferType: 'new' // 'transfer' or 'new'
  });
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data) => {
    setIsLoading(true);
    setFormData(data);
    
    // Simulate API call for quotes
    setTimeout(() => {
      const mockQuotes = generateMockQuotes(data);
      setQuotes(mockQuotes);
      setCurrentStep(1);
      setIsLoading(false);
    }, 2000);
  };

  const generateMockQuotes = (data) => {
    const selectedServices = Object.entries(data.services)
      .filter(([_, selected]) => selected)
      .map(([service]) => service);

    return selectedServices.map(service => ({
      id: `${service}-${Date.now()}`,
      service: service.charAt(0).toUpperCase() + service.slice(1),
      provider: getProviderName(service),
      setupFee: getSetupFee(service),
      monthlyRate: getMonthlyRate(service),
      connectionDate: getConnectionDate(data.moveDate),
      features: getServiceFeatures(service),
      rating: Math.floor(Math.random() * 2) + 4, // 4-5 stars
      transferAvailable: data.transferType === 'transfer'
    }));
  };

  const getProviderName = (service) => {
    const providers = {
      electricity: 'PowerGrid Energy',
      gas: 'Metro Gas Company',
      water: 'City Water Services',
      internet: 'FastNet Broadband',
      cable: 'StreamVision Cable',
      trash: 'GreenWaste Solutions'
    };
    return providers[service] || 'Service Provider';
  };

  const getSetupFee = (service) => {
    const fees = {
      electricity: 45,
      gas: 35,
      water: 25,
      internet: 99,
      cable: 89,
      trash: 0
    };
    return fees[service] || 50;
  };

  const getMonthlyRate = (service) => {
    const rates = {
      electricity: 120,
      gas: 85,
      water: 45,
      internet: 79,
      cable: 129,
      trash: 35
    };
    return rates[service] || 75;
  };

  const getConnectionDate = (moveDate) => {
    const date = new Date(moveDate);
    date.setDate(date.getDate() - 1); // Day before move
    return date.toISOString().split('T')[0];
  };

  const getServiceFeatures = (service) => {
    const features = {
      electricity: ['24/7 Customer Support', 'Green Energy Options', 'Online Account Management'],
      gas: ['Emergency Service', 'Budget Billing', 'Automatic Payments'],
      water: ['Water Quality Reports', '24/7 Emergency Service', 'Conservation Programs'],
      internet: ['High-Speed Fiber', 'Free Installation', '24/7 Tech Support'],
      cable: ['HD Channels', 'On-Demand Library', 'Mobile App Access'],
      trash: ['Recycling Included', 'Bulk Item Pickup', 'Flexible Scheduling']
    };
    return features[service] || ['Standard Service', 'Customer Support'];
  };

  const handleBackToForm = () => {
    setCurrentStep(0);
    setQuotes([]);
  };

  const handleQuoteSelection = (selectedQuotes) => {
    setCurrentStep(2);
    // Here you would typically process the selected quotes
    console.log('Selected quotes:', selectedQuotes);
  };

  return (
    <div className="slds-container_fluid">
      <div className="slds-page-header slds-m-bottom_large">
        <div className="slds-page-header__row">
          <div className="slds-page-header__col-title">
            <div className="slds-media">
              <div className="slds-media__body">
                <div className="slds-page-header__name">
                  <h1>
                    <span className="slds-page-header__title slds-truncate">
                      Move-In Service Setup
                    </span>
                  </h1>
                </div>
                <p className="slds-page-header__name-meta">
                  Get quotes for utility transfers and new service installations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProgressIndicator 
        steps={SETUP_STEPS} 
        currentStep={currentStep} 
      />

      <div className="slds-m-top_large">
        {currentStep === 0 && (
          <ServiceSetupForm 
            onSubmit={handleFormSubmit}
            initialData={formData}
            isLoading={isLoading}
          />
        )}
        
        {currentStep === 1 && (
          <QuoteResults 
            quotes={quotes}
            moveDate={formData.moveDate}
            onBack={handleBackToForm}
            onSelectQuotes={handleQuoteSelection}
          />
        )}

        {currentStep === 2 && (
          <div className="slds-card">
            <div className="slds-card__header slds-grid">
              <header className="slds-media slds-media_center slds-has-flexi-truncate">
                <div className="slds-media__body">
                  <h2 className="slds-card__header-title">
                    <span>Setup Complete!</span>
                  </h2>
                </div>
              </header>
            </div>
            <div className="slds-card__body slds-card__body_inner slds-text-align_center">
              <div className="slds-illustration slds-illustration_large">
                <div className="slds-m-bottom_medium">
                  <div className="slds-icon_container slds-icon-utility-success" title="Success">
                    <span className="slds-assistive-text">Success</span>
                  </div>
                </div>
                <h3 className="slds-text-heading_medium slds-m-bottom_small">
                  Your service requests have been submitted!
                </h3>
                <p className="slds-text-body_regular">
                  You'll receive confirmation emails with setup details and contact information for each provider.
                </p>
              </div>
              <div className="slds-m-top_large">
                <button 
                  className="slds-button slds-button_brand"
                  onClick={() => {
                    setCurrentStep(0);
                    setFormData({
                      moveDate: '',
                      currentAddress: '',
                      newAddress: '',
                      customerInfo: {
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: ''
                      },
                      services: {
                        electricity: false,
                        gas: false,
                        water: false,
                        internet: false,
                        cable: false,
                        trash: false
                      },
                      transferType: 'new'
                    });
                    setQuotes([]);
                  }}
                  data-name="start-new-setup-button"
                  data-description="Start a new move-in service setup process"
                >
                  Start New Setup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoveInServiceApp;
