import React from 'react';
import Speakers from '../components/Speakers';
import ConnectWithUs from '../components/ConnectWithUs';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';

const SpeakersList: React.FC = () => {
    return (
        <div className="text-sm id" id='sponsorship'>
            <Navbar/>
            <Speakers />
            <ConnectWithUs />
            <Footer />
        </div>
    );
};

export default SpeakersList;
