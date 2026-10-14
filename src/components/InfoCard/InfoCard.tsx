import React from 'react';
import {
  Store,
  User,
  Tag,
  Landmark,
  MapPin,
  Calendar,
  ShieldCheck,
  Award,
  CalendarCheck,
} from 'lucide-react';
import { InfoItem } from '../../data/licenseData';
import './InfoCard.css';

interface InfoCardProps {
  items: InfoItem[];
  disclaimer: string;
}

const renderIcon = (iconName: InfoItem['iconName']) => {
  const iconProps = { className: 'w-[17px] h-[17px] stroke-[1.8]' };

  switch (iconName) {
    case 'credit-card':
      // Trade License / ID Card icon matching the screenshot
      return (
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="15" x="2" y="4.5" rx="2" />
          <line x1="2" x2="22" y1="9.5" y2="9.5" />
          <rect x="5.5" y="12" width="3" height="3" rx="0.5" />
          <line x1="12" x2="18.5" y1="13.5" y2="13.5" />
        </svg>
      );
    case 'store':
      return <Store {...iconProps} aria-hidden="true" />;
    case 'user':
      return <User {...iconProps} aria-hidden="true" />;
    case 'tag':
      return <Tag {...iconProps} aria-hidden="true" />;
    case 'landmark':
      return <Landmark {...iconProps} aria-hidden="true" />;
    case 'map-pin':
      return <MapPin {...iconProps} aria-hidden="true" />;
    case 'calendar':
      return <Calendar {...iconProps} aria-hidden="true" />;
    case 'shield-check':
      return <ShieldCheck {...iconProps} aria-hidden="true" />;
    case 'award':
      return <Award {...iconProps} aria-hidden="true" />;
    case 'calendar-check':
      return <CalendarCheck {...iconProps} aria-hidden="true" />;
    default:
      return null;
  }
};

export const InfoCard: React.FC<InfoCardProps> = ({ items, disclaimer }) => {
  return (
    <article className="info-card" aria-label="লাইসেন্স বিস্তারিত তথ্য">
      <div className="info-items-list">
        {items.map((item) => (
          <div key={item.id} className="info-item-row">
            <div className="info-item-icon">{renderIcon(item.iconName)}</div>
            <div className="info-item-content">
              <span className="info-item-label">{item.label}</span>
              <span className="info-item-value">{item.value}</span>
              {item.subValue && (
                <span className="info-item-subvalue">{item.subValue}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footnote / Disclaimer */}
      <footer className="info-card-disclaimer">
        <p>{disclaimer}</p>
      </footer>
    </article>
  );
};
