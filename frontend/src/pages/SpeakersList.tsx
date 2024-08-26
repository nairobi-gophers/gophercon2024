import React from 'react';
import Speakers from '../components/Speakers';
import ConnectWithUs from '../components/ConnectWithUs';
import { Footer } from '../components/Footer';

const SpeakersList: React.FC = () => {
    return (
        <div className="text-sm id" id='sponsorship'>
            <Speakers />
            <ConnectWithUs />
            <Footer />
        </div>
    );
};

export default SpeakersList;
