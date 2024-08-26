import React from 'react';

interface ProfileCardProps {
  name: string;
  twitterHandle: string;
  company: string;
  description: string;
  imageUrl: string;
  companyLogoUrl?: string;
}

const SpeakerCard: React.FC<ProfileCardProps> = ({ name, twitterHandle, company, description, imageUrl, companyLogoUrl }) => {
  return (
    <div className="border-4 rounded-lg border-black p-4 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={imageUrl} alt={name} className="w-16 h-16 rounded-full mr-4" />
          <div className="text-left">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-500 flex items-center">
              @{twitterHandle} <span className="mx-2">|</span> {company}
            </p>
          </div>
        </div>
        {companyLogoUrl && <img src={companyLogoUrl} alt={company} className="w-10 h-10" />}
      </div>
      <div className="mt-4 text-left">
        <p>{description}</p>
      </div>
    </div>
  );
};
export default SpeakerCard;
