'use clinet';

import CounterCard from '@/components/ProjectsDashboard/CounterCard';
import CreateCredential from '@/components/ProjectsDashboard/CreateCredential';
import FreeInquire from '@/components/ProjectsDashboard/FreeInquire';
import IncomeAnalytics from '@/components/ProjectsDashboard/IncomeAnalytics';
import ProjectTimeline from '@/components/ProjectsDashboard/ProjectTimeline';
import TaskCountCard from '@/components/ProjectsDashboard/TaskCountCard';
import React from 'react';

const page = () => {
  return (
    <div className="grid  gap-5 py-5">
      <div className=" grid lg:grid-cols-3 gap-4">
        <TaskCountCard
          href="/task"
          title="Total Task"
          countNumber={122}
          iconClass="bg-[#ffe28c]"
          icon="material-symbols:fact-check-outline"
        />
        <TaskCountCard
          href="/task"
          title="Completed Task"
          countNumber={376}
          iconClass="bg-[#a7daff]"
          icon="ph:list-checks-light"
        />
        <TaskCountCard
          href="/task"
          title="Progress Task"
          countNumber={74}
          iconClass="bg-[#a8d7e0]"
          icon="bi:clipboard-data"
        />
      </div>
      <div className=" grid grid-cols-12 gap-4">
        <FreeInquire />
        <CreateCredential />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <IncomeAnalytics />
        <ProjectTimeline />
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        <CounterCard
          title="Total Projects"
          countNumber={550}
          icon="carbon:report-data"
        />
        <CounterCard
          title="Coming Projects"
          countNumber={210}
          icon="mdi:flowchart"
        />

        <CounterCard
          title="Progress Projects"
          countNumber={'8456 Files'}
          icon="fluent:flowchart-20-filled"
        />
        <CounterCard
          title="Finished Projects"
          countNumber={'88 Files'}
          icon="fluent:clipboard-task-list-20-regular"
        />
      </div>
    </div>
  );
};

export default page;
