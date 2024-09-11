import React from 'react';
import { Footer } from '../components/Footer';
import Navbar from "../components/Navbar.tsx";
import accommodationImage from "../assets/accomodation.jpg";
import passportImage from "../assets/passport.jpg";

function AccommodationInfo() {
  return (
    <section
      className="container mx-auto bg-accent flex flex-col lg:flex-row lg:px-6 h-fit  lg:h-[50vh]"
    >
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={accommodationImage}
          alt={"Call for speakers"}
          className={"object-cover size-[300px] md:size-[350px] rounded-lg"}
        />
      </div>

      <div className={"text-center md:w-1/2 p-6 md:text-left flex flex-col lg:justify-center"}>
        <h2 className={"text-3xl font-bold text-secondary mb-3"}>
          Accommodation
        </h2>

        <p className={"text-justify lg:max-w-[500px] text-secondary text-sm mb-6"}>
          We are currently in the process of creating a comprehensive guide for
          accommodation options that strike a nice balance between comfort, convenience, and affordability.
          So stay tuned we will be updating this section soon. However, you can proceed to book
          any area within <b>Nairobi county</b>.
        </p>
      </div>
    </section>
  );
}

function VisaInfo() {
  return (
    <section
      className="container mx-auto flex flex-col lg:flex-row lg:px-6 h-fit  lg:h-[50vh]"
    >
      <div
        className={"text-center md:w-1/2 p-6 md:text-left flex flex-col lg:justify-center"}>
        <h2 className={"text-3xl font-bold text-secondary mb-3"}>
          Acquiring a Visa
        </h2>

        <p
          className={"text-justify lg:max-w-[500px] text-secondary text-sm mb-6"}>
          Visa applications in Kenya are done online through the
          {' '}
          <a href={'https://www.ecitizen.go.ke'} target='_blank'
             className={'font-bold underline'}>ecitizen</a>
          {' '}
          website, which is the official service portal for the Kenyan
          Government.
          You will be required to register as a as a foreigner in order to
          access the
          visa application portal. The visa process is outlined in the in the
          page linked below.

        </p>

        <a href={'https://immigration.ecitizen.go.ke/index.php?id=5'} target='_blank'
           className="button w-fit mx-auto lg:m-0">Visa Process</a>

      </div>

      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={passportImage}
          alt={"Call for speakers"}
          className={"object-cover size-[300px] md:size-[350px] rounded-lg"}
        />
      </div>

    </section>
  );
}


const TravelInfo: React.FC = () => {
  return (
    <div className="text-sm id" id='sponsorship'>
      <Navbar/>
      <div
          className={"container mx-auto md:w-1/2 p-6 md:text-left flex flex-col lg:mt-[104px]"}>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Travel Info
        </h2>

        <p
            className={"w-full lg:w-[70%] mx-auto text-secondary text-sm mb-6 text-justify lg:text-center"}>
          We're thrilled that you've decided to join us for GopherCon
          Africa
          2024!
          In order to make your experience as smooth and enjoyable as
          possible,
          we've put together some essential travel information. This guide
          will
          cover 2 key areas accommodation and transport. We want to
          ensure that your trip to Africa is memorable for all the right
          reasons,
          so please take a moment to review the details below. Safe
          travels, and
          we look forward to welcoming you to an unforgettable event!
        </p>
      </div>

      <AccommodationInfo/>
      <VisaInfo/>
      <Footer/>
    </div>
    );
};

export default TravelInfo;
