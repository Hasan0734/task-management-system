'use client';
import React from 'react';
import Card from '../ui/Card/Card';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { twMerge } from 'tailwind-merge';

interface PropsType {
  title: string;
  countNumber: number;
  icon: string;
  iconClass: string;
  href: string;
}

const TaskCountCard = ({
  title,
  countNumber,
  icon,
  iconClass,
  href,
}: PropsType) => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-x-3">
          <div className={twMerge(' p-3 text-gray-900 rounded-sm', iconClass)}>
            <Icon icon={icon} width={30} />
          </div>
          <div>
            <h5 className="text-base font-normal text-gray-900">{title}</h5>
            <p className="text-lg font-medium text-gray-900">{countNumber}</p>
          </div>
        </div>
        <div>
          <Link href={href} title="View-task">
            <Icon icon="material-symbols:chevron-right" width={30} />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default TaskCountCard;
