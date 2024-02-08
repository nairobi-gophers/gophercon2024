import meetupLogo from "../assets/meetupLogo.png";
import xLogo from "../assets/xLogo.png";

export  default  function ConnectWithUs() {
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
