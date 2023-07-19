'use client';

import { Icon } from '@iconify/react';
import React from 'react';
import LoginForm from '../components/login/LoginForm';

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className=" px-4 lg:px-0 w-full lg:w-4/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full">
          <div className="text-center hidden lg:block">
            <div className="flex flex-col items-center space-y-3">
              <Icon icon="solar:clipboard-check-linear" width={60} />
              <h2 className="text-3xl font-semibold">
                My-Task Let's <br /> Management Better
              </h2>
            </div>
            <div className="flex justify-center">
              <img className="" src="/assets/login-img.svg" alt="login-image" />
            </div>
          </div>
          <div className="bg-primary rounded-md p-12 max-w-md justify-self-center w-full lg:justify-self-start">
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
