import meetupLogo from "../assets/meetupLogo.png";
import xLogo from "../assets/xLogo.png";

export default function ConnectWithUs() {
  return (
    <section className={"container mx-auto bg-accent h-[50vh] text-secondary flex flex-col justify-center text-center px-6"}>
      <h2 className={"text-4xl  md:text-4xl font-bold  mb-3"}>
        Connect With Us
      </h2>
      <p
        className={
          "text-center mb-6 text-sm"
        }
      >
        Stay in the loop. Engage with us on social media to get the latest
        events.
      </p>

      <div className={"flex flex-col items-center lg:items-start lg:flex-row lg:justify-center gap-3 "}>
        <a href={"https://www.meetup.com/Nairobi-Gophers/"} className="bg-white p-3 rounded-lg w-48 flex flex-col items-center gap-3">

          <img
            src={meetupLogo}
            alt={"meetup logo"}
            className={"object-cover  h-12"}
          />
          <p className="text-sm text-secondary font-bold h-full">Meetup</p>
        </a>

        <a href={"https://twitter.com/nairobi_gophers"} className="bg-white p-3 rounded-lg w-48 flex flex-col items-center gap-3">
          <img
            src={xLogo}
            alt={"twitter logo"}
            className={"object-cover h-12"}
          />

          <p className="text-sm text-secondary font-bold h-full ">X</p>
        </a>
      </div>
    </section>
  );
}
