import { TSection } from '@/app/constants';
import Section from './Section';
import styles from './style.module.scss';

type Props = {
  sections: TSection[];
};

const Sections = ({ sections }: Props) => {
  return (
    <main className={styles.container}>
      {sections.map(({ id, ...rest }) => (
        <Section key={id} {...rest} />
      ))}
    </main>
  );
};

export default Sections;
