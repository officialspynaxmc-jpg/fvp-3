import React from 'react';
import { Check } from 'lucide-react';
import './VerificationCard.css';

interface VerificationCardProps {
  verifiedBadge: string;
  verifiedHeading: string;
  statusBadge: string;
}

export const VerificationCard: React.FC<VerificationCardProps> = ({
  verifiedBadge,
  verifiedHeading,
  statusBadge,
}) => {
  return (
    <section className="verification-card" aria-label="যাচাইকরণ ফলাফল">
      {/* Centered green checkmark */}
      <div className="check-circle" aria-hidden="true">
        <Check className="w-5 h-5 stroke-[2.6]" />
      </div>

      {/* Verified subtitle badge */}
      <span className="verification-status-label">{verifiedBadge}</span>

      {/* Primary verification heading */}
      <h1 className="verification-heading">{verifiedHeading}</h1>

      {/* Active license status pill */}
      <div className="status-pill">
        <span>{statusBadge}</span>
      </div>
    </section>
  );
};
