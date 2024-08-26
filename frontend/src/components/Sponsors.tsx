import APItoolkitSponsor from "./sponsors/APItoolkitSponsors";
import GoogleSponsor from "./sponsors/GoogleSponsor";
import PartnaSponsor from "./sponsors/PartnaSponsors";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center text-center text-secondary mt-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-6">
        Our Event Sponsors
      </h2>
      <p className="max-w-lg mb-8 text-sm md:text-base">
        Don't miss this chance to supercharge your brand and tap into the vibrant energy of Nairobi's Go programming community. Connect with over 100 senior Go developers and contact us today to explore more sponsorship opportunities. Join us in creating an unforgettable event!
      </p>

      <div className="flex flex-col md:flex-row gap-4 md-6">
        <a
          className="button w-full md:w-auto mb-4 md:mb-0"
          href="/sponsorship"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sponsorship Details
        </a>
        <a
          className="button w-full md:w-auto"
          href="mailto:hello@gophers.africa?subject=GopherCon%20Africa%20Sponsorship"
        >
          Become a Sponsor
        </a>
      </div>
      <div className="p-6 max-w-lg mx-auto ">
        <div className="flex items-center justify-between mt-20">
          <div>
            <h2 className="text-2xl font-bold text-black">Our Sponsors</h2>
          </div>
        </div>
      </div>
      <div className="mt-20">
      </div>
      <GoogleSponsor/>
      <APItoolkitSponsor/>
      <PartnaSponsor/>


    </section>
  );
}
