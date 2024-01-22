import styles from './style.module.scss';
import Link from 'next/link';
import { TNavItem } from '@/app/constants';

type Props = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: TNavItem[];
};

const NavLinks = ({ setIsActive, navItems }: Props) => (
  <div className={styles.navlinksContainer}>
    {navItems.map(({ id, name, path }) => (
      <Link key={id} href={path} onClick={() => setIsActive(false)}>
        {name}
      </Link>
    ))}
  </div>
);

export default NavLinks;
