'use client';
import React from 'react';
import Card from '../ui/Card/Card';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { twMerge } from 'tailwind-merge';

interface PropsType {
  title: string;
  countNumber: number | string;
  icon: string;
  iconClass?: string;
}

const CounterCard = ({ title, countNumber, icon, iconClass }: PropsType) => {
  return (
    <Card cardClass="bg-primary">
      <div className="flex items-center gap-x-3">
        <div className={twMerge(' text-white', iconClass)}>
          <Icon icon={icon} width={30} />
        </div>
        <div>
          <h5 className="text-base font-normal text-white">{title}</h5>
          <p className="text-sm text-white">{countNumber}</p>
        </div>
      </div>
    </Card>
  );
};

export default CounterCard;
