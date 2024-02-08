import waves from "../assets/waves.svg";
import phoneWave from "../assets/phoneWave.svg";
import Sponsors from "../components/Sponsors.tsx";
import CallForSpeakers from "../components/CallForSpeakers.tsx";
import ConnectWithUs from "../components/ConnectWithUs.tsx";
import {Footer} from "../components/Footer.tsx";



export default function Home() {
  return (
    <>
      <div
        className={
          "h-[100vh] text-center flex flex-col items-center relative !w-[100vw]"
        }
      >
        <div className={"mt-20 md:mt-60"}>
          <h1 className={"text-4xl md:text-7xl font-bold text-secondary mb-1"}>
            Gophercon Africa
          </h1>
          <p className={"max-w-[800px] m-auto text-gray-500 mb-5 text-sm"}>
            The 1st Gophercon Africa event is here, bringing together the
            continent's top Go programming enthusiasts to for an <b>2 day</b>{" "}
            thrilling event in <b>Nairobi,Kenya.</b>
          </p>
          <button
            className={"px-6 py-4 bg-primary text-white font-bold md:text-lg"}
          >
            Tickets Coming soon
          </button>
        </div>

        <img
          src={waves}
          alt={"waves"}
          className={
            "absolute bottom-0 h-100px w-full object-cover hidden md:block"
          }
        />

        <img
          src={phoneWave}
          alt={"waves"}
          className={"absolute bottom-0 h-100px w-full object-cover md:hidden"}
        />
      </div>

      <Sponsors />

      <CallForSpeakers />

      <ConnectWithUs />

      <Footer />
    </>
  );
}
