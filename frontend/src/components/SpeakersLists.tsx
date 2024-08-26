import React from 'react';
import SpeakerCard from './SpeakerCard';


const profiles = [
    {
      name: 'Adam Scholey',
      twitterHandle: 'Adamalstotweets',
      company: 'Benefex',
      description: `Adam’s journey into software development began like many others - writing code in a web-based text editor on a shared hosting account for fun. After completing a few learn-to-programme books, he could build “literally anything” (in his head at least). Only once he’d landed his first role in a team of actual professionals did the merciless reality check set in! Over the last 10 years, he’s enjoyed migrating legacy applications to Go, leading an engineering team responsible for managing at-scale mission-critical systems, supporting Webby Award-winning apps, and mentoring others on their own developer journeys. Away from a keyboard that makes code, you'll find him at a keyboard that makes music - writing songs, and recording piano medleys of AFC Bournemouth football chants to the amusement of his 3-year old daughter. `,
      imageUrl: 'https://www.gophercon.co.uk/assets/images/2024/speakers/adam-scholey.png',
      companyLogoUrl: 'https://www.gophercon.co.uk/assets/images/2024/speaker-companies/Benefex.png',
    },
    {
        name: 'Adam Scholey',
        twitterHandle: 'Adamalstotweets',
        company: 'Benefex',
        description: `Adam’s journey into software development began like many others - writing code in a web-based text editor on a shared hosting account for fun. After completing a few learn-to-programme books, he could build “literally anything” (in his head at least). Only once he’d landed his first role in a team of actual professionals did the merciless reality check set in! Over the last 10 years, he’s enjoyed migrating legacy applications to Go, leading an engineering team responsible for managing at-scale mission-critical systems, supporting Webby Award-winning apps, and mentoring others on their own developer journeys. Away from a keyboard that makes code, you'll find him at a keyboard that makes music - writing songs, and recording piano medleys of AFC Bournemouth football chants to the amusement of his 3-year old daughter. `,
        imageUrl: 'https://www.gophercon.co.uk/assets/images/2024/speakers/adam-scholey.png',
        companyLogoUrl: 'https://www.gophercon.co.uk/assets/images/2024/speaker-companies/Benefex.png',
      },
      {
        name: 'Adam Scholey',
        twitterHandle: 'Adamalstotweets',
        company: 'Benefex',
        description: `Adam’s journey into software development began like many others - writing code in a web-based text editor on a shared hosting account for fun. After completing a few learn-to-programme books, he could build “literally anything” (in his head at least). Only once he’d landed his first role in a team of actual professionals did the merciless reality check set in! Over the last 10 years, he’s enjoyed migrating legacy applications to Go, leading an engineering team responsible for managing at-scale mission-critical systems, supporting Webby Award-winning apps, and mentoring others on their own developer journeys. Away from a keyboard that makes code, you'll find him at a keyboard that makes music - writing songs, and recording piano medleys of AFC Bournemouth football chants to the amusement of his 3-year old daughter. `,
        imageUrl: 'https://www.gophercon.co.uk/assets/images/2024/speakers/adam-scholey.png',
        companyLogoUrl: 'https://www.gophercon.co.uk/assets/images/2024/speaker-companies/Benefex.png',
      },
      {
        name: 'Adam Scholey',
        twitterHandle: 'Adamalstotweets',
        company: 'Benefex',
        description: `Adam’s journey into software development began like many others - writing code in a web-based text editor on a shared hosting account for fun. After completing a few learn-to-programme books, he could build “literally anything” (in his head at least). Only once he’d landed his first role in a team of actual professionals did the merciless reality check set in! Over the last 10 years, he’s enjoyed migrating legacy applications to Go, leading an engineering team responsible for managing at-scale mission-critical systems, supporting Webby Award-winning apps, and mentoring others on their own developer journeys. Away from a keyboard that makes code, you'll find him at a keyboard that makes music - writing songs, and recording piano medleys of AFC Bournemouth football chants to the amusement of his 3-year old daughter. `,
        imageUrl: 'https://www.gophercon.co.uk/assets/images/2024/speakers/adam-scholey.png',
        companyLogoUrl: 'https://www.gophercon.co.uk/assets/images/2024/speaker-companies/Benefex.png',
      }
  ];

const SpeakersList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
          {profiles.map((profile, index) => (
            <SpeakerCard key={index} {...profile} />
          ))}
        </div>
      );
    }
export default SpeakersList;
