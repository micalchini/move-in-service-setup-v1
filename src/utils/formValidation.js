export const validateForm = (formData) => {
  const errors = {};

  // Customer info validation
  if (!formData.customerInfo.firstName.trim()) {
    errors['customerInfo.firstName'] = 'First name is required';
  }

  if (!formData.customerInfo.lastName.trim()) {
    errors['customerInfo.lastName'] = 'Last name is required';
  }

  if (!formData.customerInfo.email.trim()) {
    errors['customerInfo.email'] = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerInfo.email)) {
    errors['customerInfo.email'] = 'Please enter a valid email address';
  }

  if (!formData.customerInfo.phone.trim()) {
    errors['customerInfo.phone'] = 'Phone number is required';
  } else if (!/^[\d\s\-\(\)]+$/.test(formData.customerInfo.phone)) {
    errors['customerInfo.phone'] = 'Please enter a valid phone number';
  }

  // Move details validation
  if (!formData.moveDate) {
    errors.moveDate = 'Move date is required';
  } else {
    const moveDate = new Date(formData.moveDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (moveDate < today) {
      errors.moveDate = 'Move date cannot be in the past';
    }
  }

  if (!formData.newAddress.trim()) {
    errors.newAddress = 'New address is required';
  }

  if (formData.transferType === 'transfer' && !formData.currentAddress.trim()) {
    errors.currentAddress = 'Current address is required for service transfers';
  }

  // Services validation
  const selectedServices = Object.values(formData.services).filter(Boolean);
  if (selectedServices.length === 0) {
    errors.services = 'Please select at least one service';
  }

  return errors;
};
