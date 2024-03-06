import React from 'react';
import StoreDashboardSection from '../components/StoreDashboardSection';

const StoreDashboard = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="bg-[#292930] h-screen flex flex-col space-y-10 w-1/5 text-white p-4">
        <button className="text-4xl font-semibold">Home</button>
        <button className="text-4xl font-semibold">Employee</button>
      </div>

      {/* DashboardSection on the right */}
      <div className='flex mt-[90px] ml-[30px] gap-5 flex-col h-max-screen w-full p-6'>
        <div className='text-4xl font-bold text-left'>
          <h1 className='items-start '>Store Dashboard</h1>
          <div className='flex justify-end'>
          <button className='text-xl text-black mr-[350px] mb-20 items-center justify-end font-semibold min-w-[10%] rounded-lg bg-[#D9D9D9] p-2 ml-auto'>
            Add
          </button>
          </div>
          
        </div>
        <StoreDashboardSection />
        <StoreDashboardSection />
        <StoreDashboardSection />
        <StoreDashboardSection />
        <StoreDashboardSection />
      </div>
    </div>
  );
};

export default StoreDashboard;