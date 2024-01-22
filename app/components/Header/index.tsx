import Navbar from './Navbar';
import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
