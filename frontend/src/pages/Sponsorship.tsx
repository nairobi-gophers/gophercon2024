import React from 'react';
import Sponsors from "../components/Sponsors";
import ConnectWithUs from "../components/ConnectWithUs";
import { Footer } from "../components/Footer";

const Sponsorship: React.FC = () => {
  return (
    <div className="text-sm id" id='sponsorship'>
      <Sponsors />
      <ConnectWithUs />
      <Footer />
    </div>
  );
};

export default Sponsorship;
