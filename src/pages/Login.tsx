import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import LoginImage from '../assets/image 6.png';

type Props = {};

const Login = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <>
    <div className="flex max-h-screen  h-screen flex-row-reverse items-center justify-center bg-gray-100">
    <div className="w-1/2 h-full max-h-full flex justify-center items-center">
      <img src={LoginImage} alt="Logo" className="w-[300px] h-auto " />
    </div>
    <div className="w-1/2 max-h-full h-full flex justify-center items-center">
    <div className="w-1/2">
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <h1 className="text-2xl font-bold text-left mb-4">Welcome back</h1>
        <div className='flex text-sm justify-between w-[320px] h-[50px] items-center mb-5 py-2 px-4 font-semibold rounded-full bg-gray-300'>
                <button className='hover:bg-black hover:text-white rounded-full text-black py-3 px-4 w-auto'>Company</button>
                <button className='hover:bg-black hover:text-white rounded-full text-black py-3 px-7 w-auto'>Brand</button>
                <button className='hover:bg-black hover:text-white rounded-full text-black py-3 px-7 w-auto'>Store</button>
              </div>
        <input
          className="shadow appearance-none border rounded w-[320px] py-2 px-3 placeholder-black leading-tight focus:outline-none mb-3"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />

        <input
          className="shadow appearance-none border rounded w-[320px] py-2 px-3 placeholder-black mb-5 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button
          className="bg-black hover:bg-blue-700 text-white font-normal py-3 px-[140px] rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
        <p className="text-start w-full text-xs text-black mt-2">
              Do not remember your password?{' '}
              <a
                href="#"
                className="text-black  hover:underline"
                
              >
                Forgot password
              </a>
            </p>
      </form>
    </div>
        
   
    </div>
  </div>
    
    </>
  );
};

export default Login;
