import React, { FC } from 'react';
import { FaUserCircle } from 'react-icons/fa';

interface NavbarProps {
  sidebarToogle: boolean;
  setSidebarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminNavbar: FC<NavbarProps> = () => {
  return (
    <nav className='bg-white w-full px-4 py-3 flex justify-between'>
      <div className='flex items-center text-xl' />
      <div className='flex items-center gap-x-5'>
        <div className='relative'>
          <button className='text-gray-800 flex items-center group'>
            <FaUserCircle className='w-10 h-10 mt-1' />
            <div className='z-10 hidden absolute bg-gray-300 rounded-lg shadow w-32 group-focus:block top-full right-0 gap-6'>
              <ul className='py-2 text-sm text-gray-800'>
                <li>
                  <a href="">Log Out</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
