import React from 'react';
import { Moon, Sun, ExternalLink } from 'lucide-react';
import { Logo } from '../Logo/Logo';
import './Navbar.css';

interface NavbarProps {
  currentLang?: 'bn' | 'en';
  isDark?: boolean;
  onLanguageToggle?: () => void;
  onThemeToggle?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang = 'bn',
  isDark = true,
  onLanguageToggle,
  onThemeToggle,
}) => {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        {/* Brand logo & title on the left */}
        <div className="brand-section">
          <Logo size={32} />
          <span className="brand-title">সিলেট সিটি কর্পোরেশন</span>
        </div>

        {/* Action buttons on the right */}
        <div className="nav-actions">
          <button
            type="button"
            className="nav-btn-english"
            onClick={onLanguageToggle}
            aria-label={
              currentLang === 'bn'
                ? 'Switch language to English'
                : 'Switch language to Bengali'
            }
          >
            {currentLang === 'bn' ? 'English' : 'বাংলা'}
          </button>

          <button
            type="button"
            className="nav-btn-theme"
            onClick={onThemeToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <Moon className="w-3.5 h-3.5 stroke-[2]" />
            ) : (
              <Sun className="w-4 h-4 stroke-[2]" />
            )}
          </button>

          <a
            href="https://scc.gov.bd"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn-portal"
          >
            <ExternalLink className="w-3.5 h-3.5 stroke-[2] text-white" />
            <span>নাগরিক পোর্টাল</span>
          </a>
        </div>
      </div>

      {/* Bottom 3-color stripe matching reference */}
      <div className="bottom-strip" aria-hidden="true">
        <div className="bottom-strip-red" />
        <div className="bottom-strip-green" />
        <div className="bottom-strip-blue" />
      </div>
    </header>
  );
};
