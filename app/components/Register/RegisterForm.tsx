import React from 'react';
import TextField from '../ui/inputs/TextField';
import Link from 'next/link';
import CheckBox from '../ui/inputs/CheckBox';

export default function RegisterForm() {
  return (
    <>
      <form action="">
        <div>
          <h1 className="text-4xl text-white text-center">
            Create your <br /> account
          </h1>
          <p className="text-sm mt-3 text-white text-center">
            Free access to our dashboard.
          </p>
        </div>

        <div className="gap-3 mt-5 grid grid-cols-2 ">
          <TextField
            placeholder="John"
            label="First Name"
            name="firstName"
            labelClass="text-white"
            className="py-3"
            containerClass="col-span-1"
          />
           <TextField
            placeholder="Parker"
            label="Last Name"
            name="lastName"
            labelClass="text-white"
            className="py-3"
            containerClass="col-span-1"
          />
          <TextField
            placeholder="name@example.com"
            label="Email Address"
            name="email"
            labelClass="text-white"
            className="py-3"
            containerClass="col-span-2"
          />
          <TextField
            type="password"
            placeholder="8+ characters required"
            label={'Password'}
            name="password"
            labelClass="text-white"
            className="py-3"
            containerClass="col-span-2"
          />
           <TextField
            type="confirmPassword"
            placeholder="8+ characters required"
            label={'Confirm Password'}
            name="confirmPassword"
            labelClass="text-white"
            className="py-3"
            containerClass="col-span-2"
          />
          <CheckBox bodyClass="col-span-2" label={<span className='flex items-center gap-2'>I accept the <Link className='text-secondary' href={'/terms-condition'}>Terms and Conditions</Link></span>} labelClass="text-white" />
        </div>
        <div className="text-center mt-8">
          <button className="uppercase px-4 py-3 bg-white rounded-lg text-sm">
            Sign up
          </button>

          <p className="text-gray-400 text-sm mt-8">
          Already have an account?{' '}
            <Link href={'/login'} className="text-secondary">
            Sign in here
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
