const Ticket = () => {
  const tickets = [
    {
      title: "Early Gopher: Student",
      description:
        "This ticket grants complete conference access to a student who is self-funding. Students must present a valid student identification card at the time of conference check-in.",
      price: "Ksh 1,000",
      link: "https://appslab-qcpjjn.shop.chpter.co/product/481cc1c2-9793-4d97-9432-f04521537be8",
    },
    {
      title: "Early Gopher: Self-Paid",
      description:
        "This grants full conference access to Gophers who are covering their own expenses.",
      price: "Ksh 2,000",
      link: "https://appslab-qcpjjn.shop.chpter.co/product/bd9e697f-fb0b-4c1a-9fbc-d3d606e69487",
    },
    {
      title: "Early Gopher: Corporate",
      description:
        "This conference ticket is designated for Corporate Gophers and is available for purchase as a single ticket or in groups of five.",
      price: "Ksh 3,500",
      link: "https://appslab-qcpjjn.shop.chpter.co/product/3ccfbd3d-49bc-41d0-8b5c-4c2f3df71a0d",
    },
  ];
  return (
    <section
      id="tickets"
      className="py-4 mt-12 flex justify-center md:flex md:flex-row items-center md:gap-[150px] max-w-[1440px] mx-auto"
    >
      <div className="border  rounded-lg  w-full">
        <div className="px-4 md:px-8 py-2 md:py-3 bg-gray-200">
          <p className="text-lg md:text-xl font-bold text-secondary mb-2">
            Gophercon Africa Nairobi Ticket Type
          </p>
        </div>
        <ul>
          {tickets.map((ticket) => {
            return (
              <li className="border px-4 md:px-8 py-4">
                <div className="md:flex md:justify-between ">
                  <div className="md:w-[80%] pr-4 md:justify-between">
                    <p className="font-semibold">{ticket.title}</p>
                    <p>{ticket.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 justify-between flex md:space-x-2 md:items-center">
                    <p className="font-semibold">Price:</p>
                    <p className="font-bold text-xl">{ticket.price}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href={ticket.link}
                      target="_blank"
                      className="px-8 py-2 my-2 md:my-0 text-center w-full md:mt-0 rounded-full bg-primary cursor-pointer text-white font-bold md:text-lg"
                    >
                      Buy
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
          <li className="border px-4 md:px-8 py-4">
            <div className="md:flex md:justify-between ">
              <div className="pr-4 md:justify-between flex items-center justify-center">
                <p className="font-semibold">Sponsor tickets</p>
                <p></p>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="mailto:marvin@appslab.co.ke"
                  className="px-8 py-2 my-2 md:my-0 text-center w-full md:mt-0 rounded-full bg-primary cursor-pointer text-white font-bold md:text-lg"
                >
                  Contact Organizers
                </a>
              </div>
            </div>
          </li>
          <li className="border px-4 md:px-8 py-4">
            <div className="md:flex md:justify-between ">
              <div className="pr-4 md:justify-between flex items-center justify-center">
                <p className="font-semibold">Lipa Pole Pole</p>
                <p></p>
              </div>
              <div className="flex items-center justify-center">
                <a
                  href="mailto:marvin@appslab.co.ke"
                  className="px-8 py-2  my-2 md:my-0 text-center w-full md:mt-0 rounded-full bg-primary cursor-pointer text-white font-bold md:text-lg"
                >
                  Contact Organizers
                </a>
              </div>
            </div>
          </li>
        </ul>
        <div className="px-4 md:px-8 py-2 md:py-4 text-center bg-orange-200">
          <p>
            Our refund policy is up to 45 days prior to the event. Kindly note
            that transactions fees are not refundable
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
