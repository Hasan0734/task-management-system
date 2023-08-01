import React from 'react';
import Card from '../ui/Card/Card';

const IncomeAnalytics = () => {
  return (
    <Card title="Income Analytics" cardClass="col-span-12 lg:col-span-4">
      <div className="flex items-center justify-end gap-4">
        <div className="text-center">
          <h4 className="font-bold text-lg text-gray-900">$5,318</h4>
          <p className="text-sm text-gray-400">Income</p>
        </div>
        <div className="text-center">
          <h4 className="font-bold text-lg text-gray-900">$2,840</h4>
          <p className="text-sm text-gray-400"> Expense</p>
        </div>
      </div>

    </Card>
  );
};

export default IncomeAnalytics;
