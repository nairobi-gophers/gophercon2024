import speakersImage from "../assets/speakersImage.png";

export default function CallForSpeakers() {
  return (
    <section
      id="cfs"
      className="py-4 mt-12 md:mt-4 md:flex md:flex-row items-center md:px-12 bg-accent max-w-[1440px] mx-auto px-4"
    >
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={speakersImage}
          alt={"go lang logo"}
          className={"object-cover"}
        />
      </div>
      <div className={"text-center md:w-1/2 md:text-left mb-4"}>
        <h2 className={"text-2xl  md:text-3xl font-bold text-secondary mb-2"}>
          Call for Speakers coming soon
        </h2>
        {/*<p className={"text-gray-900 my-6 text-justify max-w-[500px]"}>*/}
        {/*  We're looking for speakers to share their expertise with our*/}
        {/*  enthusiastic audience. If you have a topic you'd like to present, we'd*/}
        {/*  love to hear from you. Submit your proposal today!*/}
        {/*</p>*/}
        {/*<button className={"section-button"}>Submit a Proposal</button>*/}
      </div>
    </section>
  );
}
