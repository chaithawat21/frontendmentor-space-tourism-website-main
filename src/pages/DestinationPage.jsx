import React, { useState } from 'react'
import data from '../data/data.json'
import moon from '../assets/img/destination/image-moon.png'
import mars from '../assets/img/destination/image-mars.png'
import europa from '../assets/img/destination/image-europa.png'
import titan from '../assets/img/destination/image-titan.png'

const images = [moon, mars, europa, titan];

function DestinationPage() {
  const [index ,setIndex] = useState(0);

  const destination = data.destinations[index];

 const handleChangePlanet = (newIndex) => {
  setIndex(newIndex)
 }

  return (
    <div className='flex justify-center'>
    <div className='text-white flex flex-col items-center w-[69.38rem] h-[49.5rem] tablet:h-[53rem] p-[3rem] tablet:p-[2.5] mobile:h-[56rem] mobile:p-[2.5]' >
      <p className='self-start text-white text-[1.75rem] tracking-[0.25rem] font-BarlowCondensed pb-[7rem] tablet:pb-[3rem] mobile:pb-[3rem] mobile:text-[1rem] mobile:self-center '><span className=' font-[700] pr-[1.5rem] tracking-[0.29531rem] opacity-[0.25]'>01</span>PICK YOUR DESTINATION</p>
      <div className=' flex tablet:flex-col mobile:flex-col gap-[7rem] tablet:gap-[3rem] mobile:gap-[3rem] items-center tablet:text-center mobile:text-center'>
        <div >
          <img className=' tablet:w-[15em] tablet:h-[15em] mobile:w-[12em] mobile:h-[12em]' src={images[index]} alt={destination.name} />
        </div>
        <div >
          <ul className='flex gap-[2rem] text-[1rem] tracking-[0.125rem] text-lightBlue font-BarlowCondensed tablet:justify-center mobile:justify-center mobile:text-[0.815rem]'>
            <li onClick={() => handleChangePlanet(0)} className={`${index === 0 && 'border-b-[3px] text-white'} pb-[.8rem] cursor-pointer hover:border-b-[3px] hover:border-[rgba(255,255,255,.5)]`}>MOON</li>
            <li onClick={() => handleChangePlanet(1)} className={`${index === 1 && 'border-b-[3px] text-white'} pb-[.8rem] cursor-pointer hover:border-b-[3px] hover:border-[rgba(255,255,255,.5)]`}>MARS</li>
            <li onClick={() => handleChangePlanet(2)} className={`${index === 2 && 'border-b-[3px] text-white'} pb-[.8rem] cursor-pointer hover:border-b-[3px] hover:border-[rgba(255,255,255,.5)]`}>EUROPA</li>
            <li onClick={() => handleChangePlanet(3)} className={`${index === 3 && 'border-b-[3px] text-white'} pb-[.8rem] cursor-pointer hover:border-b-[3px] hover:border-[rgba(255,255,255,.5)]`}>TITAN</li>
          </ul>
          <h1 className='font-Bellefair text-[6rem] pt-[2.5rem] tablet:pt-[1.5rem] tablet:leading-tight tablet:tracking-normal tablet:text-[5rem] mobile:pt-[1.5rem] mobile:leading-tight mobile:tracking-normal mobile:text-[3.5rem] pb-[1rem]'>{destination.name.toLocaleUpperCase()}</h1>
          <p className='text-lightBlue  text-[1.125rem] tablet:text-[1rem] mobile:text-[0.9375rem] max-w-[32rem] leading-[180%] pb-[2.5rem] tablet:pb-[1.5rem] mobile:pb-[1.5rem] border-b-[1px] border-[rgba(255,255,255,.25)]'>{destination.description}</p>
          <div className='flex gap-[1.5rem] pt-[2.56rem] tablet:pt-[1.5rem] mobile:pt-[1.5rem] tablet:justify-center mobile:flex-col mobile:justify-center'>
            <div className='flex flex-col gap-[0.75rem] mobile:items-center '>
              <p className='w-[13.16rem]  font-BarlowCondensed text-lightBlue text-[0.875rem] tracking-[0.125rem]'>AVG. DISTANCE</p>
              <p className='font-Bellefair text-[1.75rem]'>{destination.distance.toLocaleUpperCase()}</p>
            </div>
            <div className='flex flex-col gap-[0.75rem]'>
              <p className='text-lightBlue font-BarlowCondensed text-[0.875rem] tracking-[0.125rem]'>EST. TRAVEL TIME</p>
              <p className='font-Bellefair text-[1.75rem]'>{destination.travel.toLocaleUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DestinationPage