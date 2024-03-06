import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import client from '../src/apolloClient.ts';
import { ApolloProvider } from '@apollo/react-hooks';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login.tsx';
import  AdminDashboard  from './pages/AdminDashboard.tsx';
import LoginAdmin from './pages/LoginAdmin.tsx';
import BrandDashboard from './pages/BrandDashboard.tsx';
import StoreDashboard from './pages/StoreDashboard.tsx';



// React application need access to..
//Client
// Authorization context
// Browser Router (React Router) /Login





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LoginAdmin /> },
      { path: "/loginadmin", element: <LoginAdmin /> },
      { path: "/login", element: <Login /> },
      { path: "/admindashboard", element: <AdminDashboard brands={[]} entityRole="admin" onAddSidebar={() => {}} onDelete={() => {}} /> },
      { path: "/branddashboard", element: <BrandDashboard brands={[]} entityRole="admin" onAddSidebar={() => {}} onDelete={() => {}} /> },
      { path: "/storedashboard", element: <StoreDashboard brands={[]} entityRole="admin" onAddSidebar={() => {}} onDelete={() => {}} /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
 
  <ApolloProvider client={client}>
    <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
  </ApolloProvider>

 
 
);
