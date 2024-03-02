import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import client from '../src/apolloClient.ts';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext.js';


// React application need access to..
//Client
// Authorization context
// Browser Router (React Router) /Login

ReactDOM.createRoot(document.getElementById('root')!).render(
 <AuthProvider>
  <ApolloProvider client={client}>
    <BrowserRouter>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
    </BrowserRouter>
     
  </ApolloProvider>
 </AuthProvider>
 
 
);
