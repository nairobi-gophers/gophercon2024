import APItoolkitSponsor from "./sponsors/APItoolkitSponsors";
import GoogleSponsor from "./sponsors/GoogleSponsor";
import PartnaSponsor from "./sponsors/PartnaSponsors";
import SponsorshipHeader from "./SponsorshipHeader.tsx";
import { SponsorBtn } from "./SponsorBtn.tsx";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="container mx-auto py-12 md:py-24 flex flex-col items-center text-center text-secondary"
    >
      <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-6">
        Sponsors
      </h2>
      <p className="mb-4 w-full lg:w-[60%] text-sm md:text-base">
        From the seas and mountains to the savannahs of Africa, we invite you to connect with the dynamic Go community in Africa and around the world. Don’t miss this chance to engage with a vibrant and growing network. We welcome your sponsorship and support!
      </p>

      <div className="flex flex-col md:flex-row gap-4 my-4">
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
      <div className="mt-8">
        <SponsorshipHeader title='Platinum Sponsor' />
        <SponsorBtn btnTitle='Become our Platinum Sponsor' />
        <SponsorshipHeader title='Gold Sponsor' />
        <GoogleSponsor />
        <SponsorshipHeader title='Silver Sponsor' />
        <SponsorBtn btnTitle='Become our Silver Sponsor' />
        <SponsorshipHeader title='Bronze Sponsor' />
        <APItoolkitSponsor />
        <PartnaSponsor />
        {/*<SponsorshipHeader title='Ticket Sponsor' />*/}
        {/*<SponsorshipHeader title='Venue Sponsor' />*/}
      </div>
    </section>
  );
}
