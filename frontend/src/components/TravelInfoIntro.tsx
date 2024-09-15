import nairobiImage from "../assets/nairobi.jpg";

export default function TravelInfoIntro() {
  return (
    <section
      id="travel-info"
      className="container mx-auto flex flex-col lg:flex-row lg:px-6 h-fit mb-16"
    >
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={nairobiImage}
          alt={"nairobi image"}
          className={"object-cover size-[300px] md:size-[350px] rounded-lg"}
        />
      </div>

      <div className={"text-center md:w-1/2 p-6 md:text-left flex flex-col lg:justify-center"}>
        <h2 className={"text-2xl lg:text-5xl  md:text-3xl font-bold text-secondary mb-3"}>
          Travel Info
        </h2>

        <p
          className={"text-justify lg:max-w-[500px] text-secondary text-sm mb-6"}>
          We're thrilled that you've decided to join us for GopherCon Africa
          2024 in <b>Nairobi, Kenya.</b>
          In order to make your experience as smooth and enjoyable as possible,
          we've put together some essential travel information. This guide will
          cover 2 key areas accommodation and transport. We want to
          ensure that your trip to <b>Nairobi</b> is memorable for all
          the right reasons,
          so please take a moment to review the details below. Safe travels,
          and we look forward to welcoming you to an unforgettable event!
        </p>
        <a
          className="button w-fit mx-auto lg:mx-0"
          href="/travel-info"
        >
          View More
        </a>
      </div>
    </section>
  );
}

