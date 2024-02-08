import speakersImage from "../assets/speakersImage.png";

export default function CallForSpeakers() {
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