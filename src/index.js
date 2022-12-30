import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import { Contact, OrderHistory } from './pages/index';

import { createBrowserRouter,RouterProvider } from "react-router-dom";




const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/order",
        element: <OrderHistory />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

