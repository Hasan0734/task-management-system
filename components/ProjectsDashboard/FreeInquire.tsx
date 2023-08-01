import React from 'react';
import Card from '../ui/Card/Card';
import Link from 'next/link';
import Image from 'next/image';

const FreeInquire = () => {
  return (
    <Card cardClass="p-8 col-span-12 lg:col-span-8">
      <div className="grid  md:grid-cols-2 items-center gap-5">
        <div className="order-2 md:order-1">
          <h1 className="font-bold text-gray-900 text-3xl leading-9">
            Dylan Hunter
          </h1>
          <p className="text-sm  leading-6 mt-5">
            Welcome back Dylan Hunter.Integer molestie, arcu non porta
          </p>
          <div className="mt-5">
            <Link
              href={'/'}
              className="bg-secondary px-3 py-3 text-white rounded-md hover:shadow-md duration-300 hover:-translate-y-1 inline-block"
            >
              Free Inquire
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-end ">
          <img
            className="max-w-[400px] lg:max-w-[286px] 2xl:max-w-[400px]"
            src={'/assets/task-view.svg'}
            alt="Task view"
          />
        </div>
      </div>
    </Card>
  );
};

export default FreeInquire;
