import React from 'react'
import { useNavigate,useOutletContext } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();
  const { handleChangeBackground } = useOutletContext();

  const handleExploreClick = () => {
    handleChangeBackground('destination');
    navigate('/destination');
  };

  return (
    <div className='flex justify-center'>
    <div className='h-[35.5rem] w-[69.38rem] tablet:w-[42rem] tablet:h-[43rem] mobile:w-auto mobile:h-[48rem] flex flex-row tablet:flex-col mobile:flex-col  items-end tablet:items-center mobile:tems-center justify-between tablet:justify-center tablet:text-center my-[7rem] tablet:my-[5.5rem] mobile:justify-center mobile:text-center mobile:my-0 mobile:mt-[0rem] mobile:mx-[1.5rem] text-white font-Barlow' >
      <div className='max-w-[33.75rem] max-h-[21.44rem]  '>
        <p className='text-[1.25rem] text-lightBlue tracking-[0.25rem] font-BarlowCondensed mobile:text-[1rem]'>SO, YOU WANT TO TRAVEL TO</p>
        <h1 className='text-[9rem] font-[400] font-Bellefair mobile:text-[5rem] mobile:pt-[1rem]'>SPACE</h1>
        <p className='text-[1.125rem] text-lightBlue leading-[180%] mobile:text-[0.9375rem]'>Let's face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we'll give you a truly out of this world experience!</p>
      </div>
      <button className='text-[2rem] font-Bellefair text-veryDarkNavy bg-white w-[17rem] h-[17rem] rounded-[50%] px-[2.22rem] tablet:mt-[4rem] tablet:self-center mobile:mt-[7rem] mobile:mb-[7rem] mobile:self-center mobile:w-[9rem] mobile:h-[9rem] mobile:text-[1.125rem]   hover:shadow-buttonExplore'
      onClick={handleExploreClick} >EXPLORE</button>
    </div>
    </div>
  )
}

export default HomePage