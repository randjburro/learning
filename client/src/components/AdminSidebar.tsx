import React, { FC } from "react";

interface SidebarProps {
  sidebarToggle: boolean;
}

const AdminSidebar: FC<SidebarProps> = () => {
  return (
    <div
      className="w-64 bg-gray-800 fixed h-full text-white  px-4 py-2"
    >
      <div className="my-2 mb-4"></div>

      <ul className="mt-20 flex flex-col gap-6 items-center justify-center text-3xl font-semibold">
        <li className="mb-2  rounded hover:shadow hover:bg-white py-2  hover:text-black ">
          <a className="px-3" href="">
            Home
          </a>
        </li>
        <li className="mb-2  rounded hover:shadow hover:bg-white py-2  hover:text-black">
          <a className="px-3" href="">
            Brand
          </a>
        </li>
        <li className="mb-2  rounded hover:shadow hover:bg-white py-2  hover:text-black">
          <a className="px-3" href="">
          Store
          </a>
        </li>
        <li className="mb-2  rounded hover:shadow hover:bg-white py-2  hover:text-black">
          <a className="px-3" href="">
            Employee
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
