import { Link } from "react-router-dom";

function SponsorCard(props: { title: string, price: string, body: string, isPopular: boolean, link: string }) {
  const { title, price, body, isPopular, link } = props;

  return (
    <div className={`p-6 rounded-lg  border text-center flex flex-col gap-6 h-[350px] justify-center relative ${isPopular ? ` bg-primary text-white border-white` : ' border-secondary mt-6'}`}>
      {isPopular ? <div className="bg-white text-primary px-2 py-1 w-fit text-xs absolute top-3 left-3 rounded-3xl font-semibold">Popular</div> : null}
      <h3 className="text-lg">{title}</h3>
      <p className="font-bold text-3xl">{price}</p>
      <p className="text-sm text-pretty md:w-[300px]">{body}</p>
      <Link
        className={`min-w-48 py-4 rounded-full capitalize text-sm  text-center w-fit mx-auto font-semibold ${isPopular ? ` bg-white text-primary ` : ' bg-primary text-white '}`}
        to={link}
        target="_blank"
      >
        buy
      </Link>
    </div >
  )
}
const Ticket = () => {
  return (
    <section
      id="tickets"
      className="text-secondary container mx-auto flex flex-col justify-center gap-3 md:gap-16"
    >
      <div className="w-fit mx-auto mt-12 text-center">
        <p className="text-xl font-semibold">Get your tickets today!</p>
      </div>

      <div className="mx-4 flex flex-col lg:flex-row gap-6 justify-center">
        <SponsorCard
          title="Student Ticket"
          price="2,000 KSH"
          body='In a bid to encourage students we have a package specific for you.'
          link='https://paystack.com/buy/student-ticket-qvbzec'
          isPopular={false}
        />
        <SponsorCard
          title="Regular Ticket"
          price="5,000 KSH"
          body='This package is for our veteran gophers who want to join us for our 2 day thrilling Gophercon event'
          link='https://paystack.com/buy/regular-ticket-pjeyye'
          isPopular={true}
        />
        <SponsorCard
          title="Corporate Ticket"
          price="7,500 KSH"
          body='This conference ticket is designated for Corporate Gophers and is available for purchase as a single ticket or in groups of five.'
          link='https://paystack.com/buy/corporate-ticket-znbmom'
          isPopular={false}
        />
      </div>
      <div className="mx-4 flex flex-col lg:flex-row gap-6 justify-center">
        <SponsorCard
          title="Group of 5"
          price="21,250 KSH"
          body='This package is for a group of five people who want to join us for our 2 day thrilling Gophercon event.'
          link='https://paystack.com/buy/group-of-five-15-off-wjvosb'
          isPopular={false}
        />
      </div>

      <p className="bg-[#FFF4E5] text-[#663C00] lg:w-[700px] mx-auto p-6 my-8 text-sm rounded text-justify">
        All student must present a student identification card at the conference during check-in
        Our refund policy is up to 45 days prior to the event. Kindly note that transactions fees are not refundable.
      </p>
    </section>
  );
};

export default Ticket;
