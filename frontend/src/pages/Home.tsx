import Sponsors from "../components/Sponsors.tsx";
import CallForSpeakers from "../components/CallForSpeakers.tsx";
import ConnectWithUs from "../components/ConnectWithUs.tsx";
import { Footer } from "../components/Footer.tsx";
import Logo from "../assets/nairobi-gophers.png";

export default function Home() {
  return (
    <>
      <div
        className={
          "h-[100vh] text-center flex flex-col items-center relative !w-[100vw]"
        }
      >
        <div className={"mt-12 md:mt-20"}>
          <div className="my-4 text-center leading-8 md:leading-10">
            <h1 className={"text-3xl md:text-5xl font-bold text-secondary"}>
              GOPHERCON AFRICA
            </h1>
            <p className="text-4xl md:text-7xl tracking-wide font-bold md:my-4">
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
              "max-w-[800px] px-4 md:text-xl my-6 m-auto text-gray-700 mb-5"
            }
          >
            The 1st Gophercon Africa event is here, bringing together the
            continent's top Go programming enthusiasts to for an <b>2 day</b>{" "}
            thrilling event in <b>Nairobi, Kenya.</b>
          </p>
          <button
            className={
              "px-6 py-4 mt-4 md:mt-16 rounded-full bg-primary cursor-pointer text-white font-bold md:text-lg"
            }
          >
            Tickets Coming soon
          </button>

          <div className="flex absolute w-full bottom-0 justify-center items-center cursor-pointer">
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
          </div>
        </div>
      </div>

      <CallForSpeakers />
      <Sponsors />
      <ConnectWithUs />
      <Footer />
    </>
  );
}
