import React, { useState, useEffect } from 'react'
import data from '../data/data.json'
import launchVehiclePortrait from '../assets/img/technology/image-launch-vehicle-portrait.jpg'
import launchVehicleLandscape from '../assets/img/technology/image-launch-vehicle-landscape.jpg'
import spaceCapsulePortrait from '../assets/img/technology/image-space-capsule-portrait.jpg'
import spaceCapsuleLandscape from '../assets/img/technology/image-space-capsule-landscape.jpg'
import spaceportPortrait from '../assets/img/technology/image-spaceport-portrait.jpg'
import spaceportLandscape from '../assets/img/technology/image-spaceport-landscape.jpg'



const imagesLandscape = [launchVehicleLandscape,  spaceportLandscape, spaceCapsuleLandscape];
const imagesPortrait = [launchVehiclePortrait, spaceportPortrait, spaceCapsulePortrait];

function TechnologyPage() {
  const [index, setIndex] = useState(0);
  const [isPortrait, setIsPortrait] = useState(window.innerWidth > 768 || window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth > 768 || window.innerWidth <= 375);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 


  const technology = data.technology[index];

  const handleChangeTechnology= (newIndex) => {
    setIndex(newIndex)
  }

  return (
    <div className='flex justify-end '>
      <div className='text-white flex flex-col items-center  py-[3rem] '       >
        <p className='self-start text-white text-[1.75rem] tracking-[0.25rem] font-BarlowCondensed mobile:text-[1rem] mobile:tracking-[0.15rem mobile:self-center '><span className=' font-[700] pr-[1.5rem] tracking-[0.29531rem] opacity-[0.25]'>03</span>SPACE LAUNCH 101</p>
        <div className=' flex gap-[5rem] items-center h-[40rem] tablet:flex-col-reverse tablet:h-[46rem] tablet:gap-[1rem] mobile:flex-col-reverse mobile:h-[42rem] mobile:gap-[1rem]'>
          <div className='flex gap-[5rem] tablet:flex-col  tablet:items-center tablet:text-center tablet:gap-[1rem] mobile:flex-col mobile:items-center mobile:text-center mobile:gap-[1rem]'>
        <div className='dot flex  flex-col gap-[2.5rem] font-Bellefair text-[2rem] text-veryDarkNavy border-[rgba(255,255,255,.175)]  tablet:flex-row mobile:flex-row  mobile:text-[1.125rem] mobile:gap-[1rem]'>
              <button onClick={() => handleChangeTechnology(0)} className={`${index === 0 ? 'bg-white' : 'border-[rgba(255,255,255,.175)] border-solid border-[1px] text-white'} hover:border-white rounded-[50%] w-[5rem] h-[5rem] mobile:w-[2.5rem] mobile:h-[2.5rem]`}>1</button>
              <button onClick={() => handleChangeTechnology(1)} className={`${index === 1 ? 'bg-white' : 'border-[rgba(255,255,255,.175)] border-solid border-[1px] text-white'} hover:border-white rounded-[50%] w-[5rem] h-[5rem] mobile:w-[2.5rem] mobile:h-[2.5rem]`}>2</button>
              <button onClick={() => handleChangeTechnology(2)} className={`${index === 2 ? 'bg-white' : 'border-[rgba(255,255,255,.175)] border-solid border-[1px] text-white'} hover:border-white rounded-[50%] w-[5rem] h-[5rem] mobile:w-[2.5rem] mobile:h-[2.5rem]`}>3</button>
            </div>
          <div >
            <p className='font-Bellefair text-white opacity-[.5] text-[2rem] tablet:text-[1.5rem] mobile:text-[1.125rem]'>THE TERMINOLOGY...</p>
            <h1 className='font-Bellefair text-[3.5rem] pt-[1rem] pb-[1.5rem] tablet:text-[2.5rem] mobile:text-[1.5rem]'>{technology.name.toLocaleUpperCase()}</h1>
            <p className='text-lightBlue  text-[1.125rem] max-w-[31rem] leading-[180%] pb-[2.5rem] tablet:pb-[1rem] mobile:pb-[1rem]  tablet:text-[1rem] mobile:text-[0.9375rem] mobile:max-w-[21rem] '>{technology.description}</p>
          </div>
          </div>
          <div  >
            <img className={`mobile:object-cover ${index === 2 ? 'mobile:object-center ': 'mobile:object-bottom'} mobile:object-bottom   mobile:h-[17.5rem] mobile:w-[23.325rem]`}  src={isPortrait ? imagesPortrait[index] : imagesLandscape[index]} alt={technology.name} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default TechnologyPage