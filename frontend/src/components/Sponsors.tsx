import blackGoLogo from "../assets/blackGoLogo.png";

export default function Sponsors() {
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