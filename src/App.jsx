import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import MobileNav from './components/layout/MobileNav';
import Footer from './components/layout/Footer';
import Loader from './components/layout/Loader';
import StickyButtons from './components/layout/StickyButtons';
import EnquiryModal from './components/shared/EnquiryModal';

export default function App() {
  const [modalState, setModalState] = useState({ isOpen: false, title: '', subtitle: '' });
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const openModal = (title, subtitle) => {
    setModalState({ isOpen: true, title, subtitle });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <>
      <Loader />
      <Header />
      <MobileNav />
      
      {/* Outlet passing openModal down to pages via context context provider would be cleaner but we can pass it via React Router context */}
      <Outlet context={{ openModal }} />
      
      <Footer />
      <StickyButtons />
      
      <EnquiryModal 
        isOpen={modalState.isOpen}
        title={modalState.title}
        subtitle={modalState.subtitle}
        onClose={closeModal}
      />
    </>
  );
}
