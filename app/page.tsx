'use client';

import HomeLayout from './components/HomeLayout';
import Sections from './components/Sections';
import { SECTIONS } from './constants';

export default function Home() {
  return (
    <HomeLayout>
      <Sections sections={SECTIONS} />
    </HomeLayout>
  );
}
