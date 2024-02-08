import blackGoLogo from "../assets/blackGoLogo.png";
import meetupLogo from "../assets/meetupLogo.png";
import xLogo from "../assets/xLogo.png";
import waves from "../assets/waves.svg";
import speakersImage from "../assets/speakersImage.png";
import phoneWave from "../assets/phoneWave.svg";

// function Nav() {
//   return (
//     <nav className={"p-3 flex flex-row items-center justify-start"}>
//       <a href="/" className={"text-primary border-b-2 border-primary p-2"}>
//         Home
//       </a>
//     </nav>
//   );
// }

function Sponsors() {
  return (
    <section
      className={
        "py-8 md:flex md:flex-row items-center md:h-[50vh] md:px-12 md:gap-[150px] max-w-[1440px] mx-auto px-4"
      }
    >
      <div className={"md:w-1/2 text-center md:text-left"}>
        <h2 className={"text-4xl  md:text-4xl font-bold text-secondary mb-2"}>
          Sponsors
        </h2>
        <p className={"text-gray-500 mb-5 text-justify text-sm max-w-[500px]"}>
          Attention sponsors! Don't miss this chance to supercharge your brand
          and tap into the vibrant energy of Nairobi's Go programming community.
          Contact us today to explore sponsorship opportunities and join us in
          creating an unforgettable event.
        </p>
        <button className={"section-button"}>Sponsor The Event</button>
      </div>

      <div className={"flex flex-col md:w-1/2"}>
        <div
          className={
            "flex flex-col md:flex-row gap-3 overflow-x-scroll w-full md:px-6"
          }
        >
          <div className={"sponsor-card"}>
            <img src={blackGoLogo} alt={"go lang logo"} />
          </div>

          <div className={"sponsor-card"}>
            <img src={blackGoLogo} alt={"go lang logo"} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CallForSpeakers() {
  return (
    <section className=" py-8 md:flex md:flex-row items-center md:h-[50vh] md:px-12 md:gap-[150px] bg-accent max-w-[1440px] mx-auto px-4">
      <div className={"md:w-1/2"}>
        <img
          src={speakersImage}
          alt={"go lang logo"}
          className={"object-cover"}
        />
      </div>
      <div className={"text-center md:w-1/2 md:text-left"}>
        <h2 className={"text-4xl  md:text-4xl font-bold text-secondary mb-2"}>
          Call for Speakers
        </h2>
        <p className={"text-gray-500 mb-5 text-justify text-sm max-w-[500px]"}>
          We're looking for speakers to share their expertise with our
          enthusiastic audience. If you have a topic you'd like to present, we'd
          love to hear from you. Submit your proposal today!
        </p>
        <button className={"section-button"}>Submit a Proposal</button>
      </div>
    </section>
  );
}

function ConnectWithUs() {
  return (
    <section className={"py-8 text-center max-w-[1440px] mx-auto px-4"}>
      <div>
        <h2 className={"text-4xl  md:text-4xl font-bold text-secondary mb-2"}>
          Connect with us
        </h2>
        <hr className={"bg-primary w-[80px] h-2 m-auto mb-2"} />
        <p
          className={
            "text-gray-500 mb-5 text-center text-sm max-w-[500px] m-auto"
          }
        >
          Stay in the loop! Engage with us on social media to get the latest
          events
        </p>
      </div>

      <div className={"flex flex-row h-50px items-center justify-center"}>
        <a href={"https://www.meetup.com/Nairobi-Gophers/"}>
          <img
            src={meetupLogo}
            alt={"meetup logo"}
            className={"object-cover w-16"}
          />
        </a>

        <a href={"https://twitter.com/nairobi_gophers"}>
          <img
            src={xLogo}
            alt={"twitter logo"}
            className={"object-cover w-16"}
          />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={"bg-secondary py-6 text-center"}>
      <p className={"text-white text-sm"}>
        &copy; 2024 Nairobi gophers. All rights reserved.
      </p>
    </footer>
  );
}
export default function Home() {
  return (
    <>
      {/*<Nav />*/}

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
