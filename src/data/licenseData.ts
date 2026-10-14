export interface InfoItem {
  id: string;
  iconName:
    | 'credit-card'
    | 'store'
    | 'user'
    | 'tag'
    | 'landmark'
    | 'map-pin'
    | 'calendar'
    | 'shield-check'
    | 'award'
    | 'calendar-check';
  label: string;
  value: string;
  subValue?: string;
}

export interface VerificationData {
  verifiedBadge: string;
  verifiedHeading: string;
  statusBadge: string;
  items: InfoItem[];
  disclaimer: string;
}

export const licenseVerificationData: VerificationData = {
  verifiedBadge: 'যাচাইকৃত',
  verifiedHeading: 'এই সনদটি সিলেট সিটি কর্পোরেশনের নথিতে পাওয়া গেছে',
  statusBadge: 'লাইসেন্সটি সচল আছে।',
  items: [
    {
      id: 'license-number',
      iconName: 'credit-card',
      label: 'লাইসেন্স নম্বর',
      value: '1230056443',
    },
    {
      id: 'org-name',
      iconName: 'store',
      label: 'প্রতিষ্ঠানের নাম',
      value: 'আল মদিনা স্টোর (Al Modina Store)',
    },
    {
      id: 'owner-name',
      iconName: 'user',
      label: 'মালিকের নাম',
      value: ' আইনুল ইসলাম',
    },
    {
      id: 'business-type',
      iconName: 'tag',
      label: 'ব্যবসায়ে ধরন',
      value: 'টেইলার্স',
      subValue: 'মুদি',
    },
    {
      id: 'ward',
      iconName: 'landmark',
      label: 'ওয়ার্ড',
      value: '১৪',
    },
    {
      id: 'address',
      iconName: 'map-pin',
      label: 'ঠিকানা',
      value: 'জল্লারপার, সিলেট',
    },
    {
      id: 'expiry-date',
      iconName: 'calendar',
      label: 'মেয়াদ শেষ',
      value: '৩০ জুন ২০২৭',
    },
    {
      id: 'issuer',
      iconName: 'shield-check',
      label: 'ইস্যুকারী',
      value: 'সিলেট সিটি কর্পোরেশন',
      subValue: 'Sylhet City Corporation',
    },
    {
      id: 'approver',
      iconName: 'award',
      label: 'অনুমোদনকারী',
      value: 'প্রধান রাজস্ব কর্মকর্তা',
    },
    {
      id: 'approval-date',
      iconName: 'calendar-check',
      label: 'অনুমোদনের তারিখ',
      value: '৬ মে ২০২৬',
    },
  ],
  disclaimer:
    'এই পাতায় কোনো টাকার অঙ্ক দেখানো হয় না — কত বকেয়া বা কত পরিশোধ হয়েছে, তা এখান থেকে জানা যাবে না।',
};
