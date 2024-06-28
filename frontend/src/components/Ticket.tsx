function SponsorCard(props: { title: string, price: string, body: string, isPopular: boolean }) {
  const { title, price, body, isPopular } = props;

  return (
    <div className={`p-6 rounded-lg  border text-center flex flex-col gap-6 h-[350px] justify-center relative ${isPopular ? ` bg-primary text-white border-white` : ' border-secondary mt-6 '}`}>
      {isPopular ? <div className="bg-white text-primary px-2 py-1 w-fit text-xs absolute top-3 left-3 rounded-3xl font-bold">Popular</div> : null}
      <h3 className="">{title}</h3>
      <p className="font-bold text-3xl">{price}</p>
      <p className="text-sm text-justify md:w-[300px]">{body}</p>
      <button className={`min-w-48 py-4 rounded-full capitalize text-sm  text-center w-fit mx-auto ${isPopular ? ` bg-white text-primary ` : ' bg-primary text-white '}`}> buy</button>
    </div >
  )
}
const Ticket = () => {
  return (
    <section
      id="tickets"
      className="text-secondary container mx-auto p-6 my-3 flex flex-col justify-center gap-3 md:gap-16"
    >
      <div className="w-fit mx-auto text-center">
        <h2 className="text-5xl  md:text-3xl font-bold text-secondary ">Tickets</h2>
        <p>Get your  early bird tickets today!</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        <SponsorCard
          title="Student Ticket"
          price="1500 KSH"
          body='In a bid to encourage students we have a package specific for you.'
          isPopular={false}
        />
        <SponsorCard
          title="Regular Ticket"
          price="2000 KSH"
          body='This package is for our veteran gophers who want to join us for our 2 day thrilling Gophercon event'
          isPopular={true}
        />
        <SponsorCard
          title="Corporate Ticket"
          price="3500 KSH"
          body='This conference ticket is designated for Corporate Gophers and is available for purchase as a single ticket or in groups of five.'
          isPopular={false}
        />
      </div>

      <p className="bg-[#FFF4E5] text-[#663C00] lg:w-[700px] mx-auto p-6 text-sm rounded text-justify">
        All student must present a student identification card at the conference during check-in
        Our refund policy is up to 45 days prior to the event. Kindly note that transactions fees are not refundable.
      </p>
    </section>
  );
};

export default Ticket;
