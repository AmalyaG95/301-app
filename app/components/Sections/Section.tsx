import { TButton, TSection } from '@/app/constants';
import Title from '../common/Title';
import styles from './style.module.scss';
import Button from '../common/Button';

export type SectionProps = {
  name: string;
  titleIcon: string;
  importantNote?: string;
  mainText?: string;
  actionButton?: TButton;
  component?: React.ReactNode;
  background?: string;
};

const Section = ({
  name,
  titleIcon,
  importantNote,
  mainText,
  actionButton,
  component: Component,
  background = 'white',
}: SectionProps) => {
  return (
    <section>
      <div className={styles.customBorder} />
      {/* TODO: change background image size when desktop */}
      <div className={styles.mainContainer} style={{ background }}>
        <div className={styles.mainWrapper}>
          <Title title={name} icon={titleIcon} variant="h2" />
          <article className={styles.wrapper}>
            {!!importantNote && (
              <h3 className={styles.importantNote}>{importantNote}</h3>
            )}

            {!!mainText && <p>{mainText}</p>}
            {Component}

            {!!actionButton && (
              <Button {...actionButton}>{actionButton.name}</Button>
            )}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Section;
