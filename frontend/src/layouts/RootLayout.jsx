import Footer from '@/components/ui/common/Footer';
import Header from '@/components/ui/common/Header';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* {showHero && <Hero />} */}
      <div className="container mx-auto flex-1 py-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;