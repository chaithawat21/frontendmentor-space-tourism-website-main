import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/shared/logo.svg'
import hamburger from '../assets/img/shared/icon-hamburger.svg'
import close from '../assets/img/shared/icon-close.svg'


function Header({ handleChangeBackground,toggleDropdown,isOpen }) {



  return (
    <header className='  pt-[2.5rem]  font-BarlowCondensed flex flex-row  items-center tablet:justify-between mobile:justify-between'>

      <img className='logo pl-[4rem] pr-[4rem] tablet:pl-[2.5rem] tablet:pr-[3rem] mobile:pl-[2.5rem] mobile:pr-[3rem]' src={logo} alt="logo" />
      <div className='line bg-white flex-grow h-[1px] opacity-[.25] tablet:hidden mobile:hidden'></div>
      <img className={`hamburger hidden cursor-pointer pr-[2rem] ${isOpen ?  'mobile:inline':'mobile:hidden' }`} src={hamburger} alt="hamburger" onClick={toggleDropdown}/>
      <nav className={`menubar flex flex-row justify-between items-center  bg-[rgba(255,255,255, 0.05)] backdrop-blur-[40px] ${isOpen ? 'mobile:hidden' : 'mobile:flex-col'} mobile:absolute mobile:top-0 mobile:right-0  mobile:h-[100%] mobile:justify-start `} >
        <img className={`close hidden self-end pt-[3rem] pr-[2rem]  cursor-pointer mobile:inline `} src={close} alt="close" onClick={toggleDropdown}/>
        <div className='line-inside-box bg-white w-[2rem] h-[1px] opacity-[.25] tablet:hidden mobile:hidden'></div>
        <ul className='  flex flex-row items-center gap-[3rem] text-white pl-[7.94rem] tablet:pl-[6rem]  pr-[4rem] tablet:pr-[2.5rem] mobile:pr-[0rem] mobile:flex-col mobile:items-start mobile:pl-0 mobile:gap-0 mobile:mt-[4rem]'>
      
          <li className='font-[400]  h-[6rem] mobile:h-[2rem] pt-[36px] mobile:pt-[6px] mobile:pl-[2rem] tracking-[2px] hover:border-b-[3px] mobile:w-[12rem]  mobile:mt-[2rem]   mobile:hover:border-b-0  mobile:hover:border-r-[3px] '
            onClick={() => handleChangeBackground('home')}
          ><Link to='/' ><span><span className='pr-[12px] font-[700] tracking-[2.7px] tablet:hidden mobile:inline'>00</span>HOME</span></Link></li>
          <li className='font-[400]  h-[6rem] mobile:h-[2rem] pt-[36px] mobile:pt-[6px] mobile:pl-[2rem]  tracking-[2px] hover:border-b-[3px] mobile:w-[12rem] mobile:mt-[2rem]   mobile:hover:border-b-0 mobile:hover:border-r-[3px] ' 
            onClick={() => handleChangeBackground('destination')}
          ><Link to='/destination' ><span><span className='pr-[12px] font-[700] tracking-[2.7px] '>01</span>DESTINATION</span></Link></li>
          <li className='font-[400]  h-[6rem] mobile:h-[2rem] pt-[36px] mobile:pt-[6px] mobile:pl-[2rem]  tracking-[2px] hover:border-b-[3px] mobile:w-[12rem] mobile:mt-[2rem] mobile:hover:border-b-0 mobile:hover:border-r-[3px]'
            onClick={() => handleChangeBackground('crew')}
          ><Link to='/crew' ><span><span className='pr-[12px] font-[700] tracking-[2.7px] '>02</span>CREW</span></Link></li>
          <li className='font-[400] h-[6rem] mobile:h-[2rem] pt-[36px] mobile:pt-[6px] mobile:pl-[2rem]  tracking-[2px] hover:border-b-[3px] mobile:w-[12rem] mobile:mt-[2rem]   mobile:hover:border-b-0 mobile:hover:border-r-[3px] '
            onClick={() => handleChangeBackground('technology')}
          ><Link to='/technology' ><span><span className='pr-[12px] font-[700] tracking-[2.7px] '>03</span>TECHNOLOGY</span></Link></li>
        </ul>
      </nav>


    </header>
  )
}

export default Header