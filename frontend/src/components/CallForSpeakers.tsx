import speakersImage from "../assets/speakersImage.png";

export default function CallForSpeakers() {
  return (
    <section
      id="speakers"
      className="container mx-auto bg-accent flex flex-col lg:flex-row lg:px-6 h-fit  lg:h-[50vh]"
    >
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={speakersImage}
          alt={"Call for speakers"}
          className={"object-cover"}
        />
      </div>

      <div className={"text-center md:w-1/2 p-6 md:text-left flex flex-col lg:justify-center"}>
        <h2 className={"text-5xl  md:text-3xl font-bold text-secondary mb-3"}>
          Call For Speakers
        </h2>

        <p className={"text-justify lg:max-w-[500px] text-secondary text-sm mb-6"}>
          We're looking for speakers to share their expertise with our
          enthusiastic audience. If you have a topic you'd like to present, we'd
          love to hear from you. Submit your proposal today!
        </p>

        <a href="https://www.papercall.io/gophercon-africa" target={"_blank"} className="button w-fit mx-auto lg:m-0">Submit a Proposal</a>
      </div>
    </section>
  );
}
