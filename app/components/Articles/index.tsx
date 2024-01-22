import { TArticle } from '@/app/constants';
import React from 'react';
import styles from './style.module.scss';
import Article from './Article';

type Props = {
  articles: TArticle[];
};

const Articles = ({ articles }: Props) => {
  return (
    <section className={styles.container}>
      {articles.map(({ id, ...rest }) => (
        <Article key={id} {...rest} />
      ))}
    </section>
  );
};

export default Articles;
