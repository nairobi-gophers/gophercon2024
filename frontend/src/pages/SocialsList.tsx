import React from 'react';
import ConnectWithUs from '../components/ConnectWithUs';
import { Footer } from '../components/Footer';
import Socials from '../components/Socials';

const SocialsList: React.FC = () => {
    return (
        <div className="text-sm id" id='sponsorship'>
            <Socials/>
            <ConnectWithUs />
            <Footer />
        </div>
    );
};

export default SocialsList;
