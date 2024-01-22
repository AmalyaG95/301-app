'use client';

import Image from 'next/image';
import { useState } from 'react';
import NavLinks from './NavLinks';
import { logo, menuIcon, notifications, xIcon } from '@/public/assets';

import styles from './style.module.scss';
import ButtonsGroup from '../../common/ButtonsGroup';
import { BUTTONS, NAV_ITEMS } from '@/app/constants';
import useScreenWidth from '@/hooks/useScreenWidth';
import useMediaWidth from '@/hooks/useMediaWidth';
import Button from '../../common/Button';
import Link from 'next/link';

const Navbar = () => {
  const windowWidth = useScreenWidth();
  const isMobileMenu = useMediaWidth(windowWidth < 950);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.menuIcon} onClick={() => setIsActive(true)}>
          <Image
            alt="menuIcon"
            src={menuIcon}
            width={25}
            height={14}
            priority
          />
        </div>

        <Link href="/">
          <Image alt="logo" src={logo} width={52} height={25} priority />
        </Link>

        {isMobileMenu && (
          <div className={styles.notifications}>
            <span className={styles.number}>3</span>
            <Image
              alt="notifications"
              src={notifications}
              width={52}
              height={25}
              priority
            />
          </div>
        )}

        {isMobileMenu && <button className={styles.language}>ENG</button>}

        <NavLinks navItems={NAV_ITEMS} setIsActive={setIsActive} />

        {!isMobileMenu && (
          <div className={styles.langAndButtons}>
            <button className={styles.language}>ENG</button>
            <ButtonsGroup buttons={BUTTONS} />
          </div>
        )}
      </nav>

      <div
        className={`${styles.mobileMenuContainer} ${
          isActive ? styles.active : ''
        }`}
      >
        <div className={styles.xIcon} onClick={() => setIsActive(false)}>
          <Image alt="xIcon" src={xIcon} width={25} height={25} priority />
        </div>

        <NavLinks navItems={NAV_ITEMS} setIsActive={setIsActive} />
        <ButtonsGroup buttons={BUTTONS} />
      </div>
    </>
  );
};

export default Navbar;
