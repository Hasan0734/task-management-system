import React from "react";
import Card from "../ui/Card/Card";
import AvailabilityCard from "./AvailabilityCard";

export default function EmployeesAvailability() {
  return (
    <div className="col-span-2 md:col-span-1">
      <Card
        countNumber={""}
        titleAreaClass=""
        titleClass=""
        cardClass=""
        title="Employees Availability"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
          <AvailabilityCard
            count={400}
            title="Attendance"
            icon="basil:checked-box-outline"
            bodyClass=""
          />
          <AvailabilityCard
            count={17}
            title="Late Coming"
            icon="mdi:stopwatch-outline"
            bodyClass=""
          />
          <AvailabilityCard
            count={0o6}
            title="Absent"
            icon="mdi:ban"
            bodyClass=""
          />
            <AvailabilityCard
            count={14}
            title="Leave Apply"
            icon="pajamas:leave"
            bodyClass=""
          />
        </div>
      </Card>
    </div>
  );
}
