'use client';

import { Link } from '@/navigation';
import { useLocale } from 'next-intl';
import { locales } from '@/navigation';
import React from 'react';

const NotFound = () => {
  const locale = useLocale();
  const linkLocale = !locales.includes(locale as 'en' | 'cz') ? 'en' : locale;

  return (
    <div>
      <h1>NotFound</h1>
      <Link locale={linkLocale as 'en' | 'cz'} href={'/'}>
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
