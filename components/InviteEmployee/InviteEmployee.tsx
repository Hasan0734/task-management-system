import React from "react";
import Modal from "../ui/Modal/Modal";
import TextField from "../ui/inputs/TextField";
import { Icon } from "@iconify/react/dist/iconify.js";
import MenuDropdown from "../ui/MenuDropdown/MenuDropdown";

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

          <ul className="mt-4">
            <li className="flex items-center justify-between bg-white p-3 rounded-lg">
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="/assets/avatars/avatar3.jpg"
                  alt="avatar"
                />

                <div>
                  <h5 className="text-base font-semibold text-gray-600">
                    Jahid Hasan
                  </h5>
                  <span className="text-gray-600">jahid.0175@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-sm">Admin</p>

                <div>
                  <MenuDropdown
                    button={
                      <Icon icon="ic:outline-settings-suggest" width={23} />
                    }
                  ></MenuDropdown>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
