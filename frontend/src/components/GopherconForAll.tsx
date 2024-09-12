import contactUs from "../assets/contactUs.png";

export default function GopherconForAll() {
  return (
    <section
      id="cfs"
      className="container mx-auto bg-accent flex flex-col lg:flex-row lg:px-6 h-fit  md:h-[50vh]"
    >
      <div className={"text-center md:w-1/2 p-6 md:text-left flex flex-col lg:justify-center md:ml-24 "}>
        <h2 className={"text-2xl lg:text-5xl  md:text-3xl font-bold text-secondary mb-3 text-wrap"}>
          GopherCon Africa 2024 Ticket Scholarships
        </h2>

        <div className={"text-justify lg:max-w-[500px] text-secondary text-sm mb-6"}>
          <p>We are committed to ensuring that everyone has the opportunity to attend GopherCon Africa. To support this, GoBridge has pledged to sponsor tickets for underrepresented and diverse Go enthusiasts.</p>
          <p className="mt-4 font-semibold">Apply with the link below</p>
        </div>

        <a href="https://forms.gle/13Csm1tFv5iRPvMX6" target={"_blank"} className="text-sm button w-fit mx-auto px-8 lg:m-0">Apply For GopherCon Africa 2024 Ticket Scholarships</a>
      </div>

      <div className="md:w-1/2 flex justify-center items-center p-6">
        <img
          src={contactUs}
          alt={"Call for speakers"}
          className={"object-cover rounded md:w-9/12 md:h-9/12"}
        />
      </div>
    </section>
  );
}
