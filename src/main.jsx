import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto' style={{backgroundImage: 'url(https://i.ibb.co/hRDV2j3/pexels-elijah-o-donnell-3473569.jpg)'}}>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
