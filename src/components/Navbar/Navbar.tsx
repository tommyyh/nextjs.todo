'use client';
import { Link } from '@/navigation';
import React from 'react';
import style from './navbar.module.scss';
import { locales } from '../../navigation';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1];
  const newLocale = locales.includes(currentLocale)
    ? currentLocale
    : locales[0];

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link locale={newLocale} href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link locale={newLocale} href={'/user'}>
            User
          </Link>
        </li>
        <li></li>
        <li></li>
        <li>
          <Link locale="cz" href={'/'}>
            Czech
          </Link>
        </li>
        <li>
          <Link locale="en" href={'/'}>
            English
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
