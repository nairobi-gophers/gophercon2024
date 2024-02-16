import blackGoLogo from "../assets/blackGoLogo.png";

export default function Sponsors() {
  return (
    <section
        id="sponsors"
      className={
        "py-8 mt-4 md:mt-8 md:flex md:flex-row items-center md:px-12 max-w-[1440px] mx-auto px-4"
      }
    >
      <div className={"md:w-1/2 text-center md:text-left"}>
        <h2 className={"text-2xl md:text-4xl font-bold text-secondary my-2"}>
          We Are Accepting Sponsors
        </h2>
        <p className={"text-gray-600 px-2 mb-12 md:mb-16 text-justify max-w-[500px]"}>
          Don't miss this chance to supercharge your brand
          and tap into the vibrant energy of Nairobi's Go programming community.
          Contact us today to explore sponsorship opportunities and join us in
          creating an unforgettable event.
        </p>
        <a href="" className={"section-button"}>Sponsor The Event</a>
      </div>
      <div className={"flex flex-col mt-12 md:mt-0 md:w-1/2"}>
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