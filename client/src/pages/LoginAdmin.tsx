import React from 'react';
import LoginImage from '../assets/image 6.png'
import LoginForm from '../components/LoginForm';



const LoginAdmin: React.FC = () => {
  

  return (
    <div className="flex max-h-screen  h-screen flex-row-reverse items-center justify-center bg-gray-100">
      <div className="w-1/2 h-full max-h-full flex justify-center items-center">
        <img src={LoginImage} alt="Logo" className="w-[300px] h-auto " />
      </div>
      <div className="w-1/2 max-h-full h-full flex justify-center items-center">
        <LoginForm />
          
     
      </div>
    </div>
  );
};

export default LoginAdmin;

