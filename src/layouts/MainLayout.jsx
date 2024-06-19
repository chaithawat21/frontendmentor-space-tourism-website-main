import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'




function MainLayout() {
  const location = useLocation();
  const [background, setBackground] = useState('');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setBackground('bg-home-desktop tablet:bg-home-tablet mobile:bg-home-mobile');
    } else if (path.startsWith('/destination')) {
      setBackground('bg-destination-desktop tablet:bg-destination-tablet mobile:bg-destination-mobile');
    } else if (path.startsWith('/crew')) {
      setBackground('bg-crew-desktop tablet:bg-crew-tablet mobile:bg-crew-mobile');
    } else if (path.startsWith('/technology')) {
      setBackground('bg-technology-desktop tablet:bg-technology-tablet mobile:bg-technology-mobile');
    } else {
      setBackground('bg-home-desktop tablet:bg-home-tablet mobile:bg-home-mobile');
    }
  }, [location.pathname]);

  const handleChangeBackground = (newBackground) => {

    if (newBackground === 'home') {
      setBackground('bg-home-desktop tablet:bg-home-tablet mobile:bg-home-mobile')
      setIsOpen(!isOpen)
    } else if (newBackground === 'destination') {
      setBackground('bg-destination-desktop tablet:bg-destination-tablet mobile:bg-destination-mobile')
      setIsOpen(!isOpen)
    } else if (newBackground === 'crew') {
      setBackground('bg-crew-desktop tablet:bg-crew-tablet mobile:bg-crew-mobile')
      setIsOpen(!isOpen)
    } else if (newBackground === 'technology') {
      setBackground('bg-technology-desktop tablet:bg-technology-tablet mobile:bg-technology-mobile')
      setIsOpen(!isOpen)
    } else
      setBackground('bg-home-desktop tablet:bg-home-tablet mobile:bg-home-mobile')
      setIsOpen(!isOpen)
  };

  // dropdown menu
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  console.log(background)

  return (
    <div className={` min-h-[100vh] ${background} bg-no-repeat bg-cover bg-center font-Barlow`}>
      <Header handleChangeBackground={handleChangeBackground} toggleDropdown={toggleDropdown} isOpen={isOpen} />
      <main>
        <Outlet context={{ handleChangeBackground }} />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout