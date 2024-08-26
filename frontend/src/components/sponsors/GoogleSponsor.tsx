import React from "react";
// import { FaGlobe, FaLinkedin, FaTwitter } from 'react-icons/fa';
import googleImageUrl from "../../assets/google.png";
import { FaGlobe } from "react-icons/fa";


const GoogleSponsor: React.FC = () => {
  return (
    <div className="border-2 rounded-lg border-black p-4 mt-4 relative">
      <div className="flex items-center space-x-4">
        <img
          src={googleImageUrl}
          alt="API toolkit"
          className="h-40"
        />
        <div>
          <h3 className="text-xl font-bold text-black text-left mb-8">Google</h3>
          <p className="text-left text-gray-600 text-sm">
            Google is a leading technology company, renowned for its search engine and a broad range of products, including Android, Google Chrome, and Google Cloud. It also owns YouTube, the world’s largest video platform, and offers essential tools like Gmail, Google Maps, and Google Drive. Google is a key player in online advertising and is advancing AI and machine learning in various applications.          </p>

          <div className="flex flex-wrap gap-4 mt-4 justify-center">
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
