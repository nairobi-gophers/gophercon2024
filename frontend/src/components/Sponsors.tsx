import React from 'react';

export default function Sponsors() {
  const handleButtonClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // Prevents the default behavior of the anchor tag (navigation)

  };

  return (
    <section
      id="sponsors"
      className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center text-center text-secondary"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Sponsor The Event
      </h2>
      <p className="max-w-lg mb-8 text-sm md:text-base">
        Don't miss this chance to supercharge your brand and tap into the vibrant energy of Nairobi's Go programming community. Contact us today to explore more sponsorship opportunities and join us in creating an unforgettable event.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <a
          className="button w-full md:w-auto mb-4 md:mb-0"
          href="/sponsorship"
          onClick={handleButtonClick} // Call the function to handle button click
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
    </section>
  );
}
