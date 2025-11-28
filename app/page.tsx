'use client';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuickAccess from './components/QuickAccess';
import DynamicSections from './components/DynamicSections';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <QuickAccess />
      <DynamicSections />
      <Footer />
    </main>
  );
}
