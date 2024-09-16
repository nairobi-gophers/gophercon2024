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
          <a href={'https://www.etakenya.go.ke/en'} target='_blank'
            className={'font-bold underline'}>etakenya</a>
          {' '}
          The Ministry of Interior and National Administration, State Department for Immigration and Citizen Services, Directorate of Immigration Services has developed and is operating the Republic of Kenya Electronic Travel Authorisation (eTA).

          Kenya eTA is a semi-automated system that determines the eligibility of visitors to travel to Kenya. An eTA offers permission to travel and is authorised by the Government of the Republic of Kenya. The possession of an eTA is not the final authority to enter the Republic of Kenya.
           Admissibility will be determined at the point of entry
        </p>

        <a href={'https://www.etakenya.go.ke/en/enroll/launch-screen'} target='_blank'
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
      <Navbar />
      <div
        className={"container mx-auto md:w-1/2 p-6 md:text-left flex flex-col lg:mt-[104px]"}>
        <h2 className="text-lg lg:text-3xl md:text-5xl font-bold mb-6 text-center">
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
      <AccommodationInfo />
      <VisaInfo />
      <Footer />
    </div>
  );
};

export default TravelInfo;
