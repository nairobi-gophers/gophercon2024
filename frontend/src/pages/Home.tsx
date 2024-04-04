import Sponsors from "../components/Sponsors.tsx";
import CallForSpeakers from "../components/CallForSpeakers.tsx";
import ConnectWithUs from "../components/ConnectWithUs.tsx";
import { Footer } from "../components/Footer.tsx";
import Logo from "../assets/nairobi-gophers.png";
import Ticket from "../components/Ticket.tsx";
import {useEffect, useState} from "react";

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
      <div
        className={
          "relative min-h-screen text-center flex flex-col items-center !w-[100vw]"
        }
      >
        <div className={"mt-12 md:mt-20"}>
          <div className="my-4 text-center leading-8 md:leading-10">
            <h1 className={"text-3xl md:text-5xl font-bold text-gray-600"}>
              GOPHERCON AFRICA
            </h1>
            <p className="text-4xl md:text-7xl tracking-wide text-secondary font-bold md:my-4">
              NAIROBI
            </p>
            <p className="italic text-2xl md:text-4xl font-semibold text-gray-900 text-shadow-lg animate-pulse shadow-primary">
              OCT 18-19
            </p>
          </div>
          <div className="flex justify-center items-center p-1 md:p-4">
            <img
              src={Logo}
              alt={"go lang logo"}
              className="w-[50%] md:w-[40%] lg:w-[20%]"
            />
          </div>
          <p
            className={
              "max-w-[800px] px-4 md:text-xl my-2 m-auto text-gray-700 mb-2"
            }
          >
            We are proud to announce the 1st Gophercon conference in Africa, to
            highlight the continent's premier Go programming talent, experts,
            and enthusiasts. And we invites both local and international
            participants. Centered on the Go programming language and related
            subjects, let's join forces and turn this into an unforgettable Go
            event by grabbing your ticket or coming on board as a sponsor.
          </p>
          <p className="font-semibold">
            Venue:
            <span className="font-normal"> Daystar University(tentative)</span>
          </p>
          <div className="flex md:space-x-8 flex-col mt-4 md:mt-8 md:flex-row items-center justify-center md:justify-center">
            <a
              href="#tickets"
              className={
                "px-6 py-4 mt-4 mb-2 md:mb-0 md:mt-16 rounded-full bg-primary cursor-pointer text-white font-bold md:text-lg"
              }
            >
              Buy Your Ticket
            </a>
            <a href='#cfs'
              className={
                "px-6 py-4 mt-4 md:mt-16 rounded-full bg-primary cursor-pointer text-white font-bold md:text-lg"
              }
            >
              Call for speakers
            </a>
          </div>

          {isVisible && <div className="fixed inset-x-0 pb-4 flex w-full bottom-0 justify-center items-center cursor-pointer">
            <a href="#cfs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-16 text-gray-600 stroke-1 stroke-cyan-500 fill-primary animate-bounce"
              >
                <g data-name="Layer 2">
                  <g data-name="arrow-ios-downward">
                    <rect width="12" height="12" opacity="0" />
                    <path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z" />
                  </g>
                </g>
              </svg>
            </a>
          </div>}
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
