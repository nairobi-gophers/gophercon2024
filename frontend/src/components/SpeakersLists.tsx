import React from 'react';
import SpeakerCard from './SpeakerCard';

import speakerCecilia from '../assets/speakers/Cecilia.jpeg';
import speakerChigozie from '../assets/speakers/Chigozie.jpeg';
import speakerChris from '../assets/speakers/Chris Otta.jpg';
import speakerEhi from '../assets/speakers/Ehi Enabs.jpg';
import speakerJoseph from '../assets/speakers/Joseph Augustine.jpeg';
import speakerKen from '../assets/speakers/Kennedy Njagi.jpg';
import speakerPrince from '../assets/speakers/PrinceWell.jpeg';
import speakerImage from '../assets/speakers/placeholder.png';
import speakerAmarachi from '../assets/speakers/Amarachi.jpeg'

const profiles = [
    {
        name: 'Chris Otta',
        twitterHandle: '@otta_chris',
        company: 'Safaricom PLC || SDET',
        description: `Innate teacher with a bias in STEM education. Community Lead and Technical Mentor; worked with the Mozilla Foundation. Pioneered a Coding Bootcamp, LakeHub Academy (now Zone01 Kisumu). Moderator GDG Kisumu events. SDET at Safaricom PLC. Speaker at AWS Community Day Kenya 2024. Cloud & Infrastructure Engineering aficionado.`,
        imageUrl: speakerChris,
        companyLogoUrl: 'https://myaccount.safaricom.co.ke/_next/static/media/saf-logo.b574a92f.png?w=256&q=75',
    },
    {
        name: 'Rodney Osodo',
        twitterHandle: 'b1ackd0t',
        company: 'Software Engineer',
        description: `Backend wizard and Golang enthusiast, skilled at building distributed systems that scale faster than your morning caffeine rush.`,
        imageUrl: speakerImage,
        companyLogoUrl: '',
    },
    {
        name: 'Joseph Augustine Asuquo',
        twitterHandle: 'kjasuquo',
        company: 'Partna || Backend Engineer',
        description: `With an engineering background from the Federal University of Technology, Owerri, Nigeria, I began my tech career at Decagon as a full-stack developer with a strong focus on backend development using Golang. Since then, I've built applications for various organizations, including Propchain, BEFREE Africa, and several other startups. I am currently working as a Backend Engineer at Partna.`,
        imageUrl: speakerJoseph, 
        companyLogoUrl: 'https://gophers.africa/assets/wordmark_primary-B6eTT4Ct.svg',
    },
    {
        name: 'Rasheed Mudasiru',
        twitterHandle: 'taiwrash',
        company: 'DevOps Engineer',
        description: `Rasheed is a DevOps Engineer and a master of automation, consistently delivering cutting-edge solutions that drive innovation. His impact extends beyond code and servers as he curates speakers at major events, leads as an AWS Ambassador, GitHub Campus Expert, and Microsoft Learn Student Ambassador.`,
        imageUrl: speakerImage,
        companyLogoUrl: '',
    },
    {
        name: 'Amarachi Iheanacho',
        twitterHandle: 'amaraIheanach0',
        company: 'Developer Advocate',
        description: `Amarachi Iheanacho is a seasoned developer advocate, technical writer, community contributor, and speaker. She has over four years of experience in building and advocating for solutions while simplifying complex topics for a broader audience.`,
        imageUrl: speakerAmarachi,
        companyLogoUrl: '',
    },
    {
        name: 'Ehi Enabulele',
        twitterHandle: 'ehienabs',
        company: 'Wikimedia Foundation || Software Engineer',
        description: `Ehi Enabulele is a Software Engineer at the Wikimedia Foundation, primarily focused on cloud-native and backend engineering. She is passionate about knowledge accessibility and equity and works to maintain APIs for high-volume Wikipedia data reusers.`,
        imageUrl: speakerEhi,
        companyLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Wikimedia_Foundation_logo_-_vertical.svg/220px-Wikimedia_Foundation_logo_-_vertical.svg.png',
    },
    {
        name: 'Princewill Kalio',
        twitterHandle: '0xkalio',
        company: 'Software Developer',
        description: `Kalio Princewill is an experienced full-stack developer with expertise in designing scalable applications using TypeScript and Go. He integrates robust testing practices to ensure maintainable, high-performance code.`,
        imageUrl: speakerPrince,
        companyLogoUrl: '',
    },
    {
        name: 'Kennedy Karoko',
        twitterHandle: 'kennedy_karoko',
        company: 'Software Engineer',
        description: `I am constantly seeking innovative solutions to everyday problems. I advocate for collaborative efforts to create successful products and deliver long-lasting solutions to large-scale technical problems.`,
        imageUrl: speakerKen,
        companyLogoUrl: '',
    },
    {
        name: 'Kathurima Kimathi',
        twitterHandle: '',
        company: 'Software Engineer',
        description: `Software solution craftsman, committed to building reliable and scalable systems.`,
        imageUrl: speakerImage,
        companyLogoUrl: '',
    },
    {
        name: 'Nwokoye Chigozie',
        twitterHandle: 'Grego_dev',
        company: 'Vesicash || Senior Backend Engineer',
        description: `Senior Backend Engineer @Vesicash, specialized in building scalable backend systems.`,
        imageUrl: speakerChigozie,
        companyLogoUrl: '',
    },
    {
        name: 'Orji Cecilia Olanma',
        twitterHandle: '',
        company: 'Software Engineer',
        description: `I am a software engineer who transitioned from a customer support agent role into programming. I enjoy contributing to open-source projects and recently developed a keen interest in Bitcoin.`,
        imageUrl: speakerCecilia ,
        companyLogoUrl: '',
    },
    {
        name: 'Sammy Oina',
        twitterHandle: 'sg_ga_',
        company: 'Ultraviolet || Technical Lead',
        description: `Passionate about open source and Golang. Current tech lead at Ultraviolet, building and leading teams in the open-source space.`,
        imageUrl: speakerImage,
        companyLogoUrl: '',
    },
    {
        name: 'Desmond Obisi',
        twitterHandle: '',
        company: 'Resilis || Software Engineer',
        description: `Desmond is a software engineer and open-source enthusiast building digital products with over five years of experience. His focus is on UX, performance, and code interoperability.`,
        imageUrl: speakerImage,
        companyLogoUrl: '',
    },
    {
        name: 'Aryan Mehrotra',
        twitterHandle: '_aryanmehrotra',
        company: 'GoFr || Maintainer || SDE 2',
        description: `Aryan Mehrotra specializes in building distributed systems that have scaled to millions of users globally. He is currently putting his skills to use at GoFr.`,
        imageUrl: speakerImage,
        companyLogoUrl: 'https://gofr.dev/_next/static/media/blur-cyan.d28a5585.png',
    },
    {
        name: 'Umang Mundhra',
        twitterHandle: '',
        company: 'GoFr || SDE 2',
        description: `An accomplished software developer with a background in backend development, Umang is skilled at developing fast, reusable micro-services with proper testing and CI/CD integration.`,
        imageUrl: speakerImage,
        companyLogoUrl: 'https://gofr.dev/_next/static/media/blur-cyan.d28a5585.png',
    },
];


const SpeakersList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4 sm:p-6">
            {profiles.map((profile, index) => (
                <SpeakerCard key={index} {...profile} />
            ))}
        </div>
    );
}
export default SpeakersList;
