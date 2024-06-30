import contactUs from "../assets/contactUs.png";

export default function GopherconForAll() {
  return (
    <section
      id="cfs"
      className="container mx-auto bg-accent flex flex-col lg:flex-row lg:px-6 h-fit  md:h-[50vh]"
    >
      <div className={"text-center md:w-1/2 p-6 md:text-left flex flex-col lg:justify-center md:ml-24 "}>
        <h2 className={"text-5xl  md:text-3xl font-bold text-secondary mb-3 text-wrap"}>
          #gophercon for all
        </h2>

        <div className={"text-justify lg:max-w-[500px] text-secondary text-sm mb-6"}>
          We are committed to ensuring everyone has the opportunity to join us for gophercon.
          Inline with this we have introduced two new ways  to purchase tickets.

          <br />
          <br />
          <b>Sponsored Tickets: </b>This allows for anyone in our gopher community to sponsor our fellow gophers for the event.
          <br />
          <b>Lipa pole pole: </b>This allows you to pay for your ticket in installments

          <br />
          <br />
          For more info, kindly contact us at <b>hello@gophers.africa</b>
        </div>

        <a href={"mailto:hello@gophers.africa"} target={"_blank"} className="button w-fit mx-auto lg:m-0">Contact Us</a>
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
