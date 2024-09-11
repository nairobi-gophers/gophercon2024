import React from "react";
import { FaGlobe, FaFileAlt, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaDiscord, FaYoutube } from 'react-icons/fa';
import apitoolkit from "../../assets/APItoolkit-01.png";

const APItoolkitSponsor: React.FC = () => {
  return (
    <div className="rounded-lg p-4 mt-4 relative">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center">
        <img
          src={apitoolkit}
          alt="API toolkit"
          className="h-60 w-auto mx-auto md:mx-0 md:mr-8 mb-4 md:mb-0"        
          />
        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-xl font-bold text-black mb-4 md:mb-8">APItoolkit</h3>
          <p className="text-gray-600 text-sm">
            Your all-in-one platform to observe, monitor, and test your backend and third-party APIs you depend on.
            <br /><br />
            One-line marketing pitch:
            APItoolkit is an end-to-end API and web services management toolkit for engineers and support teams. We use AI to help engineering teams observe, manage, monitor, and test their backend systems and any external APIs they depend on.
          </p>

          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <a href="https://apitoolkit.io" className="text-blue-500 hover:underline flex items-center space-x-2">
              <FaGlobe className="text-xl" />
            </a>
            <a href="https://apitoolkit.io/docs" className="text-blue-500 hover:underline flex items-center space-x-2">
              <FaFileAlt className="text-xl" />
            </a>
            <a href="https://linkedin.com/company/apitoolkit" className="text-blue-500 hover:underline flex items-center space-x-2">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://x.com/apitoolkithq" className="text-blue-500 hover:underline flex items-center space-x-2">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://instagram.com/apitoolkit" className="text-blue-500 hover:underline flex items-center space-x-2">
              <FaInstagram className="text-xl" />
            </a>
            <a href="https://github.com/apitoolkit" className="text-blue-500 hover:underline flex items-center space-x-2">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://discord.gg/dEB6EjQnKB" className="text-blue-500 hover:underline flex items-center space-x-2">
              <FaDiscord className="text-xl" />
            </a>
            <a href="https://youtube.com/@APItoolkit" className="text-blue-500 hover:underline flex items-center space-x-2">
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  APItoolkitSponsor;
