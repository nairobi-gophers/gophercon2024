import React from "react";
import { FaGlobe, FaFileAlt, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaDiscord, FaYoutube } from 'react-icons/fa';
import apitoolkit from "../../assets/APItoolkit-01.png";

const PlatinumSponsor: React.FC = () => {
  return (
    <div className="border-2 rounded-lg border-black p-4 mt-4 relative">
      <div className="flex flex-wrap">
        <img
          src={apitoolkit}
          alt="API toolkit"
          className="max-w-full" />
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-black text-left mb-8">APItoolkit</h3>
          <p className="text-left text-gray-600 text-sm">
            Your all-in-one platform to observe, monitor, and test your backend and third-party APIs you depend on.

            One-line marketing pitch:
            APItoolkit is an end-to-end API and web services management toolkit for engineers and support teams. We use AI to help engineering teams observe, manage, monitor, and test their backend systems and any external APIs they depend on.
          </p>

          <div className="flex flex-wrap gap-4 mt-4 justify-center">
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

export default PlatinumSponsor;
