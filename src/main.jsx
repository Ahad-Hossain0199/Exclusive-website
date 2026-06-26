import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop.jsx'
import RootLayout from './Components/RootLayout.jsx'



import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Contact from './Pages/Contact.jsx'


const router = createBrowserRouter([
   {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "shopNow", Component: Shop },
      { path: "Contact", Component: Contact },
       
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
