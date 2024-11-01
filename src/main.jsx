import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Prices from './assets/Prices/Prices.jsx';
import NAvbar from './assets/Navbar/NAvbar.jsx';
import Home from './assets/Home/Home.jsx';
import Chart from './assets/Chart/Chart.jsx';
import OtherChart from './assets/BarChart/OtherChart.jsx';
import Contact from './assets/Contact/Contact.jsx';
import Posts from './assets/Posts/Posts.jsx';
import Details from './assets/Details/Details.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
       path:"/card",
       element:<Prices></Prices>
      },
      {
        path:"/Chart1",
        element:<Chart></Chart>
      },
      {
        path:"/chart2",
        element:<OtherChart></OtherChart>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/posts",
        loader:()=>fetch('public.json'),
        element:<Posts></Posts>
      },
      {
        path:"/post/:userId",
        loader:({params})=>fetch(`public.json/post/${params.userId}`),
        element:<Details></Details>
      }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
