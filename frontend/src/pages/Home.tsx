import Sponsors from "../components/Sponsors.tsx";
import CallForSpeakers from "../components/CallForSpeakers.tsx";
import ConnectWithUs from "../components/ConnectWithUs.tsx";
import { Footer } from "../components/Footer.tsx";
import Ticket from "../components/Ticket.tsx";
import world from '../assets/world.svg';
import nairobiGophers from '../assets/nairobi-gophers.png';
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import * as Dialog from '@radix-ui/react-dialog';

import { useEffect, useState } from "react";
import GopherconForAll from "../components/GopherconForAll.tsx";
// import { HashLink } from 'react-router-hash-link';
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

  function scroll(to: string) {
    const element = document.getElementById(to);
    element.scrollIntoView({ block: "start" });
  }

  return (
    <div className="text-sm id" id='home'>
      <div className="h-[100vh] w-full relative">
        <nav className="relative flex flex-row p-3 border-b lg:hidden items-center">
          <div className="w-1/3">
            <Dialog.Root >
              <Dialog.Trigger >
                <img src={menu} alt='menu' className="w-8 h-8" />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className='bg-gray-800 data-[state=open]:animate-overlayShow fixed inset-0' />
                <Dialog.Content className="fixed top-[50%] left-[50%] w-[100vw]  translate-x-[-50%] translate-y-[-50%] bg-white h-[100vh] px-6 pt-3">
                  <Dialog.Title className="sr-only">
                    Navigation
                  </Dialog.Title>

                  <Dialog.Description className="sr-only">
                    Navigation
                  </Dialog.Description>

                  <div className="flex flex-row items-center justify-center gap-3 relative">
                    <img src={nairobiGophers} className=" w-12 h-12 object-center object-cover mb-3" />
                    <Dialog.Close className="absolute right-3 top-2">
                      <img src={close} className=" w-6 h-6 object-center object-cover" />
                    </Dialog.Close>
                  </div>
                  <div className="flex flex-col text-secondary *:text-left items-center text-center">
                    <Dialog.Close className="border-b-2 border-secondary w-fit p-3" onClick={() => scroll('home')}>
                      Home
                    </Dialog.Close>
                    <Dialog.Close className="border-b-2 border-white w-fit p-3" onClick={() => scroll('speakers')}>
                      Speakers
                    </Dialog.Close>
                    <Dialog.Close className="border-b-2 border-white w-fit p-3" onClick={() => scroll('tickets')}>
                      Tickets
                    </Dialog.Close>
                    <Dialog.Close className="border-b-2 border-white w-fit p-3" onClick={() => scroll('sponsors')}>
                      Sponsors
                    </Dialog.Close>
                    <Dialog.Close className="border-b-2 border-white w-fit p-3" onClick={() => scroll('contact')}>
                      Contact
                    </Dialog.Close>
                  </div>

                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

          </div>

          <div className="w-1/3 flex flex-row items-center justify-center gap-3">
            <img src={nairobiGophers} className=" w-12 h-12 object-center object-cover" />
          </div>

          <div className="w-1/3"></div>
        </nav>
        <nav className="hidden lg:flex absolute top-0 p-3 w-fit mx-auto text-center left-0 right-0 text-secondary flex-row gap-3 text-sm items-center bg-white">
          <button className=" mr-4" onClick={() => scroll('home')}>
            <img src={nairobiGophers} className=" w-20 h-20 object-center object-cover" />
          </button>
          <button className="border-b-2 border-secondary p-3" onClick={() => scroll('home')}>Home</button>

          <button className="border-b-2 border-white p-3" onClick={() => scroll('speakers')}>Speakers</button>
          <button className="border-b-2 border-white p-3" onClick={() => scroll('tickets')}> Tickets</button>
          <button className="border-b-2 border-white p-3" onClick={() => scroll('sponsors')}>Sponsors</button>
          <button className="border-b-2 border-white p-3" onClick={() => scroll('contact')}>Contact</button>
        </nav>

        <img src={world} alt='world' className="lg:w-full h-full object-cover" />

        <div className="absolute top-16 lg:top-0 lg:bottom-0 my-auto p-6 lg:p-3 lg:w-[750px] mx-auto text-center left-0 right-0 h-fit flex flex-col gap-6">
          <h1 className="text-5xl lg:text-7xl font-bold text-primary">Gophercon Africa</h1>
          <p className="lg:w-[600px]  text-pretty mx-auto">
            Africa's first Gophercon arrives! Join local & international Go enthusiasts, experts, and rising stars for an unforgettable celebration of the Go programming language. Grab your ticket or become a sponsor - let's make history together!
          </p>

          <div className="w-fit p-8 mx-auto border border-secondary rounded-md bg-white">
            <p><b>Date:</b> 19-20th October 2024</p>
            <p><b>City:</b> Nairobi, Kenya</p>
            <p><b>Venue:</b> To be announced</p>
          </div>

          <button className="px-8 py-3 text-white bg-primary  w-fit mx-auto rounded shadow font-semibold"
            onClick={() => scroll('tickets')}
          >Get Tickets</button>
        </div>
      </div>

      <CallForSpeakers />
      <Ticket />
      <GopherconForAll />
      <Sponsors />
      <ConnectWithUs />
      <Footer />
    </div>
  );
};

export default Home;
