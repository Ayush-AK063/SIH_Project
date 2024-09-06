import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import {
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Signup from './pages/Signup';

const Applayout = () => {
  return(
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    element: <Applayout />,
    children:[
      {path: "/", element: <Home />},
      {path: "/Signup", element: <Signup />}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

