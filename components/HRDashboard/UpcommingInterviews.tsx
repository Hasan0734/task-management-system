import React from "react";
import Card from "../ui/Card/Card";

const applicants = [
  {
    id: 1,
    name: "Jahid Hasan",
    position: "Frontend Developer",
    inteviewDate: new Date(),
    time: { from: "1:30", to: "2:00" },
    avatar: 'assets/avatars/avatar1.jpg'
  },
  {
    id: 2,
    name: "Natalie Gibson",
    position: "Ui/UX Designer",
    inteviewDate: new Date(),
    time: { from: "9:30", to: "1:30" },
    avatar: 'assets/avatars/avatar2.jpg'
  },
  {
    id: 3,
    name: "Peter Piperg",
    position: "Web Design",
    inteviewDate: new Date(),
    time: { from: "1:30", to: "2:30" },
    avatar: 'assets/avatars/avatar3.jpg'
  },
  {
    id: 4,
    name: "Robert Young",
    position: "PHP Developer",
    inteviewDate: new Date(),
    time: { from: "1:30", to: "2:30" },
    avatar: 'assets/avatars/avatar4.jpg'
  },
  {
    id: 5,
    name: "Victoria Vbell",
    position: "IOS Developer",
    inteviewDate: new Date(),
    time: { from: "2:00", to: "3:30" },
    avatar: 'assets/avatars/avatar5.jpg'
  },
  {
    id: 6,
    name: "Mary Butler",
    position: "Writer",
    inteviewDate: new Date(),
    time: { from: "7:00", to: "8:30" },
    avatar: 'assets/avatars/avatar6.jpg'
  },
  {
    id: 7,
    name: "Gibson Butler",
    position: "Networking",
    inteviewDate: new Date(),
    time: { from: "8:00", to: "9:30" },
    avatar: 'assets/avatars/avatar12.jpg'
  },
];

export default function UpcommingInterviews() {
  return (
    <div className="col-span-2">
      <Card
        countNumber={""}
        titleAreaClass=""
        titleClass=""
        cardClass=""
        title="Upcomming Interviews"
      >
        <div className="mt-2">
          <ul className="divide-y h-auto lg:h-[320px]  overflow-y-scroll  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-500 scrollbar-thumb-rounded-md scrollbar-w-1.5">
            {applicants.map((applicant) => (
              <li
                key={applicant.id}
                className="flex items-center justify-between py-4 pr-3"
              >
                <div className="flex items-center gap-5">
                  <img
                    className="w-14 h-14 bg-white rounded-full border border-gray-200 p-1"
                    src={applicant.avatar}
                    alt="applicant-avatar"
                  />

                  <div>
                    <h4 className="text-gray-800 text-lg font-bold">
                      Natalie Gibson
                    </h4>
                    <p className="text-gray-300 text-base">Ui/UX Designer</p>
                  </div>
                </div>
                <p>1.30 - 1:30</p>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}
