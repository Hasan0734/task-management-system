export const sidebar = [
  {
    id: 1,
    title: "Dashboard",
    icon: "ic:round-home",
    children: [
      {
        id: 1,
        name: "Hr Dashboard",
        link: "/hr-dashboard",
      },
      {
        id: 2,
        name: "Projects Dashboard",
        link: "/projects-dashboard",
      },
    ],
  },
  {
    id: 2,
    title: "Projects",
    icon: "bxs:briefcase",
    children: [
      {
        id: 1,
        name: "Projects",
        link: "/projects",
      },
      {
        id: 2,
        name: "Task",
        link: "/task",
      },
      {
        id: 3,
        name: "Timesheet",
        link: "/timesheet",
      },
      {
        id: 4,
        name: "Leaders",
        link: "/leaders",
      },
    ],
  },
  {
    id: 3,
    title: "Tickets",
    icon: "arcticons:mtickets",
    children: [
      {
        id: 1,
        name: "Tickets View",
        link: "/tickets-view",
      },
    ],
  },
  {
    id: 4,
    title: "Our Clients",
    icon: "clarity:user-solid",
    children: [
      {
        id: 1,
        name: "Our Clients",
        link: "/our-clients",
      },
    ],
  },
  {
    id: 5,
    title: "Employess",
    icon: "fa-solid:users",
    children: [
      {
        id: 1,
        name: "Members",
        link: "/members",
      },
      {
        id: 2,
        name: "Holidays",
        link: "/holidays",
      },
      {
        id: 3,
        name: "Attendance Employees",
        link: "/attendance-employees",
      },
      {
        id: 4,
        name: "Attendance",
        link: "/attendance",
      },
      {
        id: 5,
        name: "Leave Request",
        link: "/leave-request",
      },
      {
        id: 8,
        name: "Department",
        link: "/department",
      },
      {
        id: 8,
        name: "Loan",
        link: "/loan",
      },
    ],
  },
];

export const notifications = [
  {
    id: 1,
    title: "Added  2021-02-19 my-Task ui/ux Design",
    category: "Review",
    user: {
      id: 1,
      firstName: "Jahid",
      lastName: "Hasan",
      avatar: "/assets/avatars/avatar1.jpg",
    },
  },
  {
    id: 2,
    title: "Task added Get Started with Fast Cad project",
    user: {
      id: 2,
      firstName: "Rasel",
      lastName: "Ahmed",
      avatar: "/assets/avatars/avatar3.jpg",
    },
  },
  {
    id: 3,
    title: "Quality Assurance Task Completed",
    user: {
      id: 3,
      firstName: "Nasir",
      lastName: "Mia",
      avatar: "/assets/avatars/avatar6.jpg",
    },
  },
  {
    id: 4,
    title: "Add New Project for App Developemnt",
    user: {
      id: 4,
      firstName: "Diane",
      lastName: "Fisher",
      avatar: "",
    },
  },
  {
    id: 5,
    title: "Add Timesheet For Rhinestone project",
    user: {
      id: 5,
      firstName: "Andrea",
      lastName: "Gill",
      avatar: "/assets/avatars/avatar6.jpg",
    },
  },
  {
    id: 6,
    title: "Add Calander Event",
    user: {
      id: 6,
      firstName: "Zoe",
      lastName: "Wright",
      avatar: "/assets/avatars/avatar7.jpg",
    },
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Rhinestone",
    dateStart: "18-02-2021",
    deadLine: "2 Months",
    leader: {
      name: "Adam",
      avatar: "/assets/avatars/avatar1.jpg",
    },
    completion: "90%",
    stage: "High",
  },
  {
    id: 2,
    title: "Gob Geeklords",
    dateStart: "16-03-2021",
    deadLine: "	10 Month",
    leader: {
      name: "Evan",
      avatar: "/assets/avatars/avatar2.jpg",
    },
    completion: "65%",
    stage: "Medium",
  },
  {
    id: 3,
    title: "Practice to Perfect",
    dateStart: "12-02-2021",
    deadLine: "1 Month",
    leader: {
      name: "Colin",
      avatar: "/assets/avatars/avatar3.jpg",
    },
    completion: "80%",
    stage: "Low",
  },
  {
    id: 4,
    title: "Java Dalia",
    dateStart: "17-03-2021",
    deadLine: "8 Month",
    leader: {
      name: "Connor",
      avatar: "/assets/avatars/avatar4.jpg",
    },
    completion: "45%",
    stage: "Low",
  },
  {
    id: 5,
    title: "Fast Cad",
    dateStart: "14-04-2021",
    deadLine: "2 Month",
    leader: {
      name: "Benjamin",
      avatar: "/assets/avatars/avatar5.jpg",
    },
    completion: "76%",
    stage: "Medium",
  },
  {
    id: 6,
    title: "Box of Crayons",
    dateStart: "10-01-2021",
    deadLine: "4 Month",
    leader: {
      name: "Keith",
      avatar: "/assets/avatars/avatar6.jpg",
    },
    completion: "58%",
    stage: "Medium",
  },
  {
    id: 7,
    title: "Social Geek Made",
    dateStart: "10-01-2021",
    deadLine: "4 Month",
    leader: {
      name: "Keith",
      avatar: "/assets/avatars/avatar6.jpg",
    },
    completion: "40%",
    stage: "Medium",
  },
  {
    id: 8,
    title: "Practice to Perfect",
    dateStart: "12-02-2021",
    deadLine: "1 Month",
    leader: {
      name: "Peter",
      avatar: "/assets/avatars/avatar7.jpg",
    },
    completion: "20%",
    stage: "Medium",
  },
];