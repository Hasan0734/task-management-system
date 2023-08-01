import React from "react";
import Modal from "../ui/Modal/Modal";
import TextField from "../ui/inputs/TextField";
import InviteCard from "./InviteCard";

interface PropsType {
  addEmployee: boolean;
  setAddEmployee: (addEmployee: boolean) => void;
}

const initialProps = {
  title: "",
  panelClass: "",
  closeIcon: false,
  titleClass: "",
  headerClass: "",
};

const invitedlist = [
  {
    id: 1,
    name: "Jahid Hasan",
    email: "Jahid0734@gmail.com",
    image: "/assets/avatars/avatar3.jpg",
    role: 'admin'
  },
  {
    id: 2,
    name: "Lucas Baker",
    email: "Lucasbaker@gmail.com",
    image: "/assets/avatars/avatar4.jpg",
    role: 'members'
  },
  {
    id: 3,
    name: "Una Coleman",
    email: "Unacoleman@gmail.com",
    image: "/assets/avatars/avatar5.jpg",
    role: 'members'
  },
];

export default function InviteEmployee({
  addEmployee,
  setAddEmployee,
}: PropsType) {
  return (
    <Modal
      {...initialProps}
      open={addEmployee}
      onClose={setAddEmployee}
      title="Employee Invitation"
      panelClass="p-0 rounded-xl max-w-2xl bg-ofLight "
      closeIcon={true}
      headerClass="p-4 border-b border-gray-300"
      titleClass="font-semibold"
    >
      <div className="mt-3 p-4">
        <form className="flex items-center ">
          <TextField
            outsideClass="mt-0"
            containerClass="w-full"
            name="email"
            placeholder="Email Address"
            className="rounded-l-md rounded-r-none rounded- w-full focus:outline
           focus:outline-gray-400 focus:-outline-offset-1 focus:outline-1"
          />
          <button className="bg-primary px-2 py-1.5 text-white rounded-r-md">
            Sent
          </button>
        </form>

        <div className="mt-5">
          <h5 className="text-base text-semibold">Employee</h5>

          <ul className="mt-4 space-y-2">
            {invitedlist.map((list) => (
              <InviteCard
                key={list.id}
                invite={list}
              />
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
