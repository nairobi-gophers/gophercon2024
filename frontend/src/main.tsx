import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Error from "./pages/Error.tsx";
import SponsorshipRedirect from './pages/SponsorshipRedirect';
import Sponsorship from './pages/Sponsorship.tsx';
import SpeakersList from './pages/SpeakersList.tsx';
import TicketList from './pages/TicketsList.tsx';
import SocialsList from './pages/SocialsList.tsx';
import TravelInfo from "./pages/TravelInfo.tsx";
import Agenda from "./pages/Agenda.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/sponsorship",
    element: <SponsorshipRedirect />,
  },
  {
    path: "/agenda",
    element: <Agenda />,
  },
  {
    path: "/sponsors",
    element: <Sponsorship />,
  },
  {
    path: "/tickets",
    element: <TicketList />,
  },
  {
    path: "/connect",
    element: <SocialsList />,
  },
   {
    path: "/travel-info",
    element: <TravelInfo />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
