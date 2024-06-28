export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className={
        "container mx-auto px-6 h-[50vh] flex flex-col justify-center text-secondary lg:w-[700px]"
      }
    >
      <div className="w-fit mx-auto text-center">
        <h2 className="text-5xl  md:text-3xl font-bold text-secondary mb-3">Sponsors</h2>
        <p className="mb-6 text-justify text-sm"> Don't miss this chance to supercharge your brand and tap into the
          vibrant energy of Nairobi's Go programming community. Contact us today
          to explore sponsorship opportunities and join us in creating an
          unforgettable event.</p>
      </div>

      <button className="button w-fit mx-auto">Sponsor The Event</button>
    </section>
  );
}
