import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from '../components/AdminNavbar';



const AdminDashboard = () => {
  return (<>
    <div className="flex h-full">
      {/* Sidebar */}

      <AdminSidebar sidebarToggle={false} />

      {/* Navbar */}
    
         <AdminNavbar sidebarToogle={false} setSidebarToggle={() => {}} />
     
    

     
   
    </div>
    <div className='z-10 flex items-center justify-between w-[90%] h-[200px]'>
<h1 className='text-4xl font-bold mx-72 mb-16 items-center'>Admin Dashboard</h1>
<button className='text-3xl bg-[#D9D9D9] text-black mr-16 py-3 px-16 rounded-lg'>Add</button>
</div>
    </>
  );
};

export default AdminDashboard;



