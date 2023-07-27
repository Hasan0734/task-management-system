import React from "react";
import Card from "../ui/Card/Card";

export default function TotalEmployees() {
  return (
   <div className="col-span-1">
     <Card
      countNumber={423}
      titleAreaClass=""
      titleClass=""
      cardClass=""
      title="Total Employees"

    >
      <div className="w-full"></div>
    </Card>
   </div>
  );
}
