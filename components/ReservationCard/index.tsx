import React, { useState } from 'react';
import { ReservationForm } from './ReservationForm';
import { ReservationSuccess } from './ReservationSuccess';

export const ReservationCard: React.FC = () => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: 2,
    date: '2024-05-20',
    dietary: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setStep('success'), 800);
  };

  if (step === 'success') {
    return <ReservationSuccess formData={formData} />;
  }

  return (
    <ReservationForm 
      formData={formData} 
      setFormData={setFormData} 
      onSubmit={handleSubmit} 
    />
  );
};