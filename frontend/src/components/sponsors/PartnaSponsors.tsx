import React from "react";
import { FaGlobe, FaLinkedin, FaTwitter } from 'react-icons/fa';
import partna from "../../assets/wordmark_primary.svg";

const PartnaSponsor: React.FC = () => {
  return (
    <div className="border-2 rounded-lg border-black p-4 mt-4 relative">
      <div className="flex items-center space-x-4">
        <img
          src={partna}
          alt="API toolkit"
          className="h-14"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900 text-left mb-8">Partna</h3>
          <p className="text-left text-gray-600 text-sm">
            Partna builds the digital finance tools, and infrastructure that make it simple for global businesses to easily access African markets and for African entrepreneurs to flourish globally

            Modern companies use Partna's API and B2B payment tools to smoothly launch and operate in Africa
            With one Partna account, you get all the payment tools you need to grow your business
            payments api illustration
            Payments API

            Collect and payout local currencies. Onramp and Offramp your users. All with one easy integration

          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <a href="https://getpartna.com" className="text-blue-500 hover:underline flex items-center space-x-2">
              <FaGlobe className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/company/getpartna" className="text-blue-500 hover:underline flex items-center space-x-2">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://x.com/getpartna" className="text-blue-500 hover:underline flex items-center space-x-2">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://forms.getpartna.com/get-started" className="text-blue-500 hover:underline flex items-center space-x-2">
              <a>get a demo</a>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnaSponsor;
