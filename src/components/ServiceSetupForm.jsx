import React, { useState } from 'react';
import CustomerInfoSection from './CustomerInfoSection';
import AddressSection from './AddressSection';
import ServiceSelection from './ServiceSelection';
import { validateForm } from '../utils/formValidation';

const ServiceSetupForm = ({ onSubmit, initialData, isLoading }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleInputChange = (section, field, value) => {
    if (section === '') {
      // Handle root level fields like currentAddress, newAddress, moveDate
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    } else {
      // Handle nested fields like customerInfo.firstName
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    }
    
    // Clear error when user starts typing
    if (errors[`${section}.${field}`] || errors[field]) {
      setErrors(prev => ({
        ...prev,
        [`${section}.${field}`]: '',
        [field]: ''
      }));
    }
  };

  const handleServiceChange = (service, checked) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="slds-grid slds-gutters slds-wrap">
        <div className="slds-col slds-size_1-of-1 slds-large-size_1-of-2">
          <CustomerInfoSection 
            data={formData.customerInfo}
            onChange={handleInputChange}
            errors={errors}
          />
          
          <AddressSection 
            currentAddress={formData.currentAddress}
            newAddress={formData.newAddress}
            moveDate={formData.moveDate}
            transferType={formData.transferType}
            onChange={handleInputChange}
            errors={errors}
          />
        </div>
        
        <div className="slds-col slds-size_1-of-1 slds-large-size_1-of-2">
          <ServiceSelection 
            services={formData.services}
            onChange={handleServiceChange}
            errors={errors}
          />
        </div>
      </div>

      <div className="slds-m-top_large slds-text-align_center">
        <button 
          type="submit" 
          className="slds-button slds-button_brand slds-button_stretch-small"
          disabled={isLoading}
          data-name="get-quotes-button"
          data-description="Submit form to get utility service quotes"
        >
          {isLoading ? (
            <>
              <span className="slds-spinner slds-spinner_x-small slds-spinner_inline slds-m-right_x-small" role="status">
                <span className="slds-assistive-text">Loading</span>
                <div className="slds-spinner__dot-a"></div>
                <div className="slds-spinner__dot-b"></div>
              </span>
              Getting Quotes...
            </>
          ) : (
            'Get Service Quotes'
          )}
        </button>
      </div>
    </form>
  );
};

export default ServiceSetupForm;
