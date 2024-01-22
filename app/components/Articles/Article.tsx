import { TButton } from '@/app/constants';
import React from 'react';
import Title from '../common/Title';
import styles from './style.module.scss';
import Image from 'next/image';
import ButtonsGroup from '../common/ButtonsGroup';
import useMediaWidth from '@/hooks/useMediaWidth';
import useScreenWidth from '@/hooks/useScreenWidth';

export type ArticleProps = {
  name: string;
  titleIcon: string;
  image: string;
  mainText?: string;
  actionButtons?: TButton[];
  component?: React.ReactNode;
};
const Article = ({
  name,
  titleIcon,
  image,
  mainText,
  actionButtons,
  component: Component,
}: ArticleProps) => {
  const windowWidth = useScreenWidth();
  const isMobile = useMediaWidth(windowWidth < 600);

  return (
    <article>
      {/* TODO: change background image size when desktop */}
      <div className={styles.mainContainer}>
        <div className={styles.mainWrapper}>
          {!isMobile && (
            <Image
              src={image}
              width={425}
              height={355}
              alt={name}
              layout="responsive"
            />
          )}
          <article className={styles.wrapper}>
            <Title title={name} icon={titleIcon} variant="h2" />
            {isMobile && <Image src={image} alt={name} layout="responsive" />}

            {!!mainText && <p>{mainText}</p>}

            {isMobile && <>{Component}</>}

            {!!actionButtons?.length && (
              <ButtonsGroup buttons={actionButtons} />
            )}

            {!isMobile && <>{Component}</>}
          </article>
        </div>
      </div>
    </article>
  );
};

export default Article;
