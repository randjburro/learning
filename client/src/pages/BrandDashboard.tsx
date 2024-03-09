import React from 'react';
import BrandNavbar from '../components/BrandNavbar';
import BrandSidebar from '../components/BrandSidebar';


const BrandDashboard = () => {
  return (
    <>
    <div className="flex h-full">
      <BrandSidebar  sidebarToggle={false}/>
      <BrandNavbar sidebarToogle={false} setSidebarToggle={() => {}}/>
    </div>

<div className='z-10 flex items-center justify-between w-[90%] h-[200px]'>
<h1 className='text-4xl font-bold mx-72 mb-16 items-center'>Brand Dashboard</h1>
<button className='text-3xl bg-[#D9D9D9] text-black mr-16 py-3 px-16 rounded-lg'>Add</button>
</div>
</>
  );
};

export default BrandDashboard;