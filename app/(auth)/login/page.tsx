'use client';

import React from 'react';
import LoginForm from '../../components/Login/LoginForm';
import AuthPage from '../../components/AuthPage/AuthPage';

const page = () => {
  return (
    <AuthPage>
      <LoginForm />
    </AuthPage>
  );
};

export default page;
