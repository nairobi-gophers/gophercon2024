import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import nairobiGophers from '../assets/Africa Gopher option 2.png';
import menu from '../assets/menu.png';
import close from '../assets/close.png';

const Navbar: React.FC = () => {
  function scroll(to: string) {
    const element = document.getElementById(to) as HTMLElement;
    element.scrollIntoView({ block: "start" });
  }

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="relative flex flex-row p-3 border-b lg:hidden items-center">
        <div className="w-1/3">
          <Dialog.Root>
            <Dialog.Trigger>
              <img src={menu} alt='menu' className="w-8 h-8" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className='bg-gray-800 data-[state=open]:animate-overlayShow fixed inset-0' />
              <Dialog.Content className="fixed top-[50vh] left-[50%] w-[100vw] translate-x-[-50%] translate-y-[-50%] bg-white h-[100vh] px-6 pt-3">
                <Dialog.Title className="sr-only">Navigation</Dialog.Title>
                <Dialog.Description className="sr-only">Navigation</Dialog.Description>

                <div className="flex flex-row items-center justify-center gap-3 relative">
                  <Dialog.Close className="absolute right-3 top-2">
                    <img src={close} className=" w-6 h-6 object-center object-cover" />
                  </Dialog.Close>
                </div>

                <div className="flex flex-col text-secondary items-center text-center">
                  <NavLink
                    to="/"
                    className={({ isActive }) => `border-b-2 w-fit p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
                    onClick={() => scroll('home')}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/agenda"
                    className={({ isActive }) => `border-b-2 w-fit p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
                  >
                    Agenda
                  </NavLink>
                  <NavLink
                    to="/speakers"
                    className={({ isActive }) => `border-b-2 w-fit p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
                    onClick={() => scroll('speakers')}
                  >
                    Speakers
                  </NavLink>
                  <NavLink
                    to="/tickets"
                    className={({ isActive }) => `border-b-2 w-fit p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
                    onClick={() => scroll('tickets')}
                  >
                    Tickets
                  </NavLink>
                  <NavLink
                    to="/sponsors"
                    className={({ isActive }) => `border-b-2 w-fit p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
                  >
                    Sponsors
                  </NavLink>
                  <NavLink
                    to="/connect"
                    className={({ isActive }) => `border-b-2 w-fit p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
                    onClick={() => scroll('contact')}
                  >
                    Social
                  </NavLink>
                  <NavLink
                    to="/travel-info"
                    className={({ isActive }) => `border-b-2 p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
                  >
                    Travel Info
                  </NavLink>
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

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex absolute top-0 p-3 w-fit mx-auto text-center left-0 right-0 text-secondary flex-row gap-3 text-sm items-center bg-white">
        <div className="mr-4 flex justify-center items-center" onClick={() => scroll('home')}>
          <img src={nairobiGophers} className="h-20 object-center object-cover" />
        </div>
        <NavLink
          to="/"
          className={({ isActive }) => `border-b-2 p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/agenda"
          className={({ isActive }) => `border-b-2 p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
        >
          Agenda
        </NavLink>
        <NavLink
          to="/speakers"
          className={({ isActive }) => `border-b-2 p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
        >
          Speakers
        </NavLink>
        <NavLink
          to="/tickets"
          className={({ isActive }) => `border-b-2 p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
        >
          Tickets
        </NavLink>
        <NavLink
          to="/sponsors"
          className={({ isActive }) => `border-b-2 p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
        >
          Sponsors
        </NavLink>
        <NavLink
          to="/connect"
          className={({ isActive }) => `border-b-2 p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
        >
          Social
        </NavLink>
        <NavLink
          to="/travel-info"
          className={({ isActive }) => `border-b-2 p-3 ${isActive ? 'border-secondary' : 'border-white'}`}
        >
          Travel Info
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;