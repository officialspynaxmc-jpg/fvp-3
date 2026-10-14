/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { MainContent } from './components/MainContent/MainContent';
import { licenseVerificationData, VerificationData } from './data/licenseData';

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  // English translation data when toggled
  const englishData: VerificationData = {
    verifiedBadge: 'Verified',
    verifiedHeading: 'This certificate was found in Sylhet City Corporation records',
    statusBadge: 'License is active.',
    items: [
      {
        id: 'license-number',
        iconName: 'credit-card',
        label: 'License Number',
        value: '1230056443',
      },
      {
        id: 'org-name',
        iconName: 'store',
        label: 'Organization Name',
        value: 'Al Modina Store',
      },
      {
        id: 'owner-name',
        iconName: 'user',
        label: 'Owner Name',
        value: 'Aynul Islam',
      },
      {
        id: 'business-type',
        iconName: 'tag',
        label: 'Business Type',
        value: 'Grocery',
      },
      {
        id: 'ward',
        iconName: 'landmark',
        label: 'Ward',
        value: '14',
      },
      {
        id: 'address',
        iconName: 'map-pin',
        label: 'Address',
        value: 'Jallarpar, Sylhet',
      },
      {
        id: 'expiry-date',
        iconName: 'calendar',
        label: 'Expiry Date',
        value: '30 June 2027',
      },
      {
        id: 'issuer',
        iconName: 'shield-check',
        label: 'Issuer',
        value: 'Sylhet City Corporation',
      },
      {
        id: 'approver',
        iconName: 'award',
        label: 'Approver',
        value: 'Chief Revenue Officer',
      },
      {
        id: 'approval-date',
        iconName: 'calendar-check',
        label: 'Approval Date',
        value: '6 May 2026',
      },
    ],
    disclaimer:
      'No monetary amounts are displayed on this page — outstanding dues or paid amounts cannot be determined from here.',
  };

  const handleLanguageToggle = () => {
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const handleThemeToggle = () => {
    setIsDark((prev) => !prev);
  };

  const currentData = lang === 'bn' ? licenseVerificationData : englishData;

  return (
    <div
      className={`min-h-screen ${isDark ? 'dark' : 'light'} bg-[var(--bg-page)] text-[var(--text-info-primary)] transition-colors duration-200`}
    >
      <Navbar
        currentLang={lang}
        isDark={isDark}
        onLanguageToggle={handleLanguageToggle}
        onThemeToggle={handleThemeToggle}
      />
      <MainContent data={currentData} />
    </div>
  );
}
