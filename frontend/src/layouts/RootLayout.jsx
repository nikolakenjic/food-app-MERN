import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Hero from '@/components/common/Hero';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  const showHero = true;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
