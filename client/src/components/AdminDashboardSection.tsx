import React from "react";



const DashboardSection = () => {
  return (
    
    <div className='flex justify-start h-[10%] items-center w-[100%]'>
    <div className='h-[80%] w-[70%] px-4  bg-[#D9D9D9] text-black flex items-center justify-between '>
      <div>
        <span className='text-xl'>Admin 1</span>
      </div>
      <div className=' flex  justify-end items-center w-[3px] h-full  bg-black '>|</div>
      <div>
        <span className='text-xl'>Brand Email Address</span>
      </div>
      <div className=' flex  justify-end items-center w-[3px] h-full bg-black '>|</div>
      <div>
        <span className='text-xl'>Additional Information</span>
      </div>
      
      <div className='flex justify-end items-center w-[44%]'>
          <button className='text-xl items-center text-white font-semibold w-[30%] bg-[#C91111] p-2'>Delete</button>
      </div>


      


      
      

      
    
    </div>
  </div>
  )
}

export default DashboardSection