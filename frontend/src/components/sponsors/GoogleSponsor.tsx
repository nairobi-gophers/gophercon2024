import React from "react";
import { FaGlobe } from "react-icons/fa";
import googleImageUrl from "../../assets/google.png";

const GoogleSponsor: React.FC = () => {
  return (
    <div className="border-2 rounded-lg border-black p-4 mt-4 relative">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center">
        <img
          src={googleImageUrl}
          alt="Google"
          className="h-40 w-auto mx-auto md:mx-0 md:mr-8 mb-4 md:mb-0"
        />
        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-xl font-bold text-black mb-4 md:mb-8">Google</h3>
          <p className="text-gray-600 text-sm">
            Google is a leading technology company, renowned for its search engine and a broad range of products, including Android, Google Chrome, and Google Cloud. It also owns YouTube, the world’s largest video platform, and offers essential tools like Gmail, Google Maps, and Google Drive. Google is a key player in online advertising and is advancing AI and machine learning in various applications.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <a href="https://google.com" className="text-blue-500 hover:underline flex items-center space-x-2">
              <FaGlobe className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleSponsor;
