import React from 'react';
import ConnectWithUs from '../components/ConnectWithUs';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import Sessions from "../components/Agenda.tsx";

const Agenda: React.FC = () => {
    return (
        <div className="text-sm id" id='sponsorship'>
            <Navbar/>
            <Sessions />
            <ConnectWithUs />
            <Footer />
        </div>
    );
};

export default Agenda;
