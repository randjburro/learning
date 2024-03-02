import React, { useState } from 'react';
import LoginImage from '../src/assets/image 6.png';
import Login from './Login'; 


const LoginAdmin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle admin login logic here
  };

  const handleToggleForm = () => {
    setShowAdminLogin(!showAdminLogin);
  };

  return (
    <div className="flex max-h-screen  h-screen flex-row-reverse items-center justify-center bg-gray-100">
      <div className="w-1/2 h-full max-h-full flex justify-center items-center">
        <img src={LoginImage} alt="Logo" className="w-[300px] h-auto " />
      </div>
      <div className="w-1/2 max-h-full h-full flex justify-center items-center">
        {showAdminLogin ? (
          <form onSubmit={handleSubmit} className="w-full h-full max-w-xs flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-left mb-4">Welcome back</h1>
          
            {/* login Admin form elements */}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 placeholder-black leading-tight focus:outline-none mb-3 "
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 placeholder-black mb-5 leading-tight focus:outline-none focus:shadow-outline"
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
            <p className='text-start w-full text-xs text-black mt-2'>
              Not admin?{' '}
              <a
                href="#"
                className="text-blue-500 hover:underline"
                onClick={handleToggleForm}
              >
                <span className='text-black'>Login</span>  here
              </a>
            </p>
          </form>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};

export default LoginAdmin;

