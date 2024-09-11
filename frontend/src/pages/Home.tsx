import Sponsors from "../components/Sponsors.tsx";
import CallForSpeakers from "../components/CallForSpeakers.tsx";
import ConnectWithUs from "../components/ConnectWithUs.tsx";
import { Footer } from "../components/Footer.tsx";
import Ticket from "../components/Ticket.tsx";
import world from '../assets/world.svg';
import GopherconForAll from "../components/GopherconForAll.tsx";
import Navbar from "../components/Navbar.tsx";
import { HomeBanner } from "../components/HomeBanner.tsx";
import TravelInfoIntro from "../components/TravelInfoIntro.tsx";

const Home = () => {
  function scroll(to: string) {
    const element = document.getElementById(to) as HTMLElement;
    element.scrollIntoView({ block: "start" });
  }

  return (
    <div className="text-sm id" id='home'>
      <div className="h-[100vh] w-full relative">
        <Navbar />
        <img src={world} alt='world' className="lg:w-full h-full object-cover" />
        <div className="absolute top-16 lg:top-0 lg:bottom-0 my-auto p-6 lg:p-3 lg:w-[750px] mx-auto text-center left-0 right-0 h-fit flex flex-col gap-6">
          <HomeBanner />
          <button className="px-8 py-3 text-white bg-primary  w-fit mx-auto rounded shadow font-semibold"
            onClick={() => scroll('tickets')}
          >Get Tickets</button>
        </div>
      </div>
      <CallForSpeakers />
      <Ticket />
      <GopherconForAll />
      <Sponsors />
      <TravelInfoIntro />
      <ConnectWithUs />
      <Footer />
    </div>
  );
};

export default Home;