import Ticket from "./Ticket";

export default function TicketHome() {
  return (
    <section
      id="sponsors"
      className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center text-center text-secondary"
    >
      <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-6">
        Tickets
      </h2>
      <p className="w-full lg:w-[60%] mb-8 text-sm md:text-base">
        Buy your tickets to GopherCon Africa 2024 and join hundreds of leading developers from across the Go community for 2 days of talks, networking and socials.      </p>

      <Ticket />
    </section>
  );
}
