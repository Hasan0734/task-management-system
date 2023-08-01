import React from 'react';
import Card from '../ui/Card/Card';
import TextField from '../ui/inputs/TextField';

const CreateCredential = () => {
  return (
    <Card cardClass="bg-[#cfe2ff] col-span-12 lg:col-span-4">
      <div className="mb-8">
        <h2 className="text-[#084298] text-lg font-semibold">
          Create Project Credentials
        </h2>
        <p className="text-xs text-[#084298]">
          Create a Project credentials now and never miss
        </p>
      </div>
      <form className="space-y-4">
        <TextField type="text" 
        className="py-3.5" 
        placeholder="Enter Username" />
        <TextField
          type="password"
          className="py-3.5"
          placeholder="Enter Password"
        />
        <TextField
          type="password"
          className="py-3.5"
          placeholder="Confirm Password"
        />
        <button
          className="bg-[#084298] px-3 py-1.5 rounded-md text-sm text-white mt-5"
          type="submit"
        >
          Create Credential
        </button>
      </form>
    </Card>
  );
};

export default CreateCredential;
