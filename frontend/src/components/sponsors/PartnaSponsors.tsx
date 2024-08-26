import React from "react";
import { FaGlobe, FaLinkedin, FaTwitter } from 'react-icons/fa';
import partna from "../../assets/wordmark_primary.svg";

const PartnaSponsor: React.FC = () => {
  return (
    <div className="border-2 rounded-lg border-black p-4 mt-4 relative">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center">  
        <img
          src={partna}
          alt="Partna"
          className="h-16 w-auto mx-auto mb-4 md:mb-0 md:mr-8"
        />
        <div className="flex flex-col text-center md:text-left">  
          <h3 className="text-xl font-bold text-gray-900 mb-4 md:mb-8">Partna</h3>
          <p className="text-gray-600 text-sm">
            Partna simplifies global business access to African markets and empowers African entrepreneurs through digital finance tools and infrastructure. Companies use Partna's API and B2B payment tools to efficiently launch and operate in Africa. With one Partna account, businesses can access all necessary payment tools. The Payments API allows for seamless collection and payout of local currencies, enabling easy onramping and offramping of users through a single integration.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
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
              <span>Get a demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnaSponsor;
