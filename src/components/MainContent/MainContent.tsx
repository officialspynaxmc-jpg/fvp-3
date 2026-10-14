import React from 'react';
import { VerificationCard } from '../VerificationCard/VerificationCard';
import { InfoCard } from '../InfoCard/InfoCard';
import { VerificationData } from '../../data/licenseData';
import './MainContent.css';

interface MainContentProps {
  data: VerificationData;
}

export const MainContent: React.FC<MainContentProps> = ({ data }) => {
  return (
    <main className="main-container">
      <div className="cards-wrapper">
        <VerificationCard
          verifiedBadge={data.verifiedBadge}
          verifiedHeading={data.verifiedHeading}
          statusBadge={data.statusBadge}
        />
        <InfoCard items={data.items} disclaimer={data.disclaimer} />
      </div>
    </main>
  );
};
