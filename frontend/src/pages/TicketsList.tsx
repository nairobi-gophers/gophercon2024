import React from 'react';
import ConnectWithUs from "../components/ConnectWithUs";
import { Footer } from "../components/Footer";
import Navbar from '../components/Navbar';
import TicketHome from '../components/TicketsHome';

const TicketList: React.FC = () => {
    return (
        <div className="text-sm id" id='sponsorship'>

            <Navbar />
            <TicketHome/>
            <ConnectWithUs />
            <Footer />
        </div>
    );
};

export default TicketList;
