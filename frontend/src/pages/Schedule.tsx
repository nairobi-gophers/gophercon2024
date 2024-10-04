import React from 'react';
import ConnectWithUs from '../components/ConnectWithUs.tsx';
import { Footer } from '../components/Footer.tsx';
import Navbar from '../components/Navbar.tsx';
import Sessions from "../components/Schedule.tsx";

const Schedule: React.FC = () => {
    return (
        <div className="text-sm id" id='sponsorship'>
            <Navbar/>
            <Sessions />
            <ConnectWithUs />
            <Footer />
        </div>
    );
};

export default Schedule;
