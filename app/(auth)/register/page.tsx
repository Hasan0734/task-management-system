'use client';

import React from 'react';
import AuthPage from '../../components/AuthPage/AuthPage';
import RegisterForm from '@/app/components/Register/RegisterForm';

const page = () => {
  return (
    <AuthPage>
      <RegisterForm />
    </AuthPage>
  );
};

export default page;
