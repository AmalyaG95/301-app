import React from 'react';
import Header from '../Header';

export type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HomeLayout;
