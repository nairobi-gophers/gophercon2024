// src/SponsorshipRedirect.tsx
import React from 'react';

const SponsorshipRedirect: React.FC = () => {
  React.useEffect(() => {
    window.location.href = '/Gophercon Africa 2024 Sponsorship Prospectus.pdf';
  }, []);

  return null;
};

export default SponsorshipRedirect;
