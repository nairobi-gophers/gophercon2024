import Sponsors from "../components/Sponsors.tsx";
import CallForSpeakers from "../components/CallForSpeakers.tsx";
import ConnectWithUs from "../components/ConnectWithUs.tsx";
import { Footer } from "../components/Footer.tsx";
import Ticket from "../components/Ticket.tsx";
import world from '../assets/world.svg';
import { useEffect, useState } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <div className="h-[100vh] w-full relative">
        <nav className="hidden lg:flex absolute top-0 p-3 w-fit mx-auto text-center left-0 right-0 text-secondary flex-row gap-3 text-sm">
          <a>Home</a>
          <a>Speakers</a>
          <a>Tickets</a>
          <a>Contact</a>
        </nav>

        <img src={world} alt='world' className="lg:w-full h-full object-cover" />

        <div className="absolute top-16 lg:top-0 lg:bottom-0 my-auto p-6 lg:p-3 lg:w-[750px] mx-auto text-center left-0 right-0 h-fit flex flex-col gap-6">
          <h1 className="text-5xl lg:text-7xl font-bold text-primary">Gophercon Africa</h1>
          <p className="lg:w-[600px]  text-justify mx-auto">
            Africa's first Gophercon arrives! Join local & international Go enthusiasts, experts, and rising stars for an unforgettable celebration of the Go programming language. Grab your ticket or become a sponsor - let's make history together!
          </p>

          <div className="w-fit p-8 mx-auto border border-secondary rounded-md bg-white">
            <p><b>Date:</b> 19-20th October 2024</p>
            <p><b>City:</b> Nairobi, Kenya</p>
            <p><b>Venue:</b> To be announced</p>
          </div>


          <button className="px-8 py-3 text-white bg-primary  w-fit mx-auto rounded shadow ">Get Tickets</button>
        </div>
      </div>



      <CallForSpeakers />
      <Ticket />
      <Sponsors />
      <ConnectWithUs />
      <Footer />
    </>
  );
};

export default Home;
