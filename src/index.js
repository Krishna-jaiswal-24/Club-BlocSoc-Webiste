import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import Team from './Pgaes/Teams Page/Team';
import BlogsPage from './Pgaes/Blogs Page/BlogsPage';
import Events from './Pgaes/Events Page/Events'
import Register from './Pgaes/Register/register.jsx'
import Login from './Pgaes/LoginPage/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/team",
    element:<Team />
  },{
    path:"/blogs",
    element:<BlogsPage />
  },{
    path:"/events",
    element:<Events />
  },{
    path:"/register",
    element:<Register />
  },{
    path:"/login",
    element:<Login />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

