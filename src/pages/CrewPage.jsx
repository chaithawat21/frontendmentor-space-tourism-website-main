
import React, { useState } from 'react'
import data from '../data/data.json'
import douglas from '../assets/img/crew/image-douglas-hurley.png'
import mark from '../assets/img/crew/image-mark-shuttleworth.png'
import victor from '../assets/img/crew/image-victor-glover.png'
import anousheh from '../assets/img/crew/image-anousheh-ansari.png'

const images = [douglas, mark, victor, anousheh];

function CrewPage() {
  const [index, setIndex] = useState(0);

  const crew = data.crew[index];

  const handleChangeCrew = (newIndex) => {
    setIndex(newIndex)
  }

  return (
    <div className='flex justify-center '>
      <div className='text-white flex flex-col items-center  p-[3rem] tablet:p-[2.5rem] mobile:p-[2.5rem]' >
        <p className='self-start text-white text-[1.75rem] tracking-[0.25rem] font-BarlowCondensed mobile:text-[1rem] mobile:tracking-[0.15rem] mobile:self-center '><span className=' font-[700] pr-[1.5rem] tracking-[0.29531rem] opacity-[0.25]'>02</span>MEET YOUR CREW</p>
        <div className=' flex gap-[5rem] items-center h-[40rem] tablet:flex-col tablet:h-[51rem] tablet:text-center mobile:flex-col mobile:h-[45rem] mobile:text-center '>
          <div className='self-end tablet:self-center mobile:self-center'>
            <p className='font-Bellefair text-[rgba(255,255,255,.25)] text-[2rem] tablet:pt-[2rem] tablet:text-[1.5rem] mobile:pt-[2rem] mobile:text-[1.125rem]'>{crew.role.toLocaleUpperCase()}</p>
            <h1 className='font-Bellefair text-[3.5rem] pt-[1rem] pb-[1.5rem] tablet:text-[2.5rem] mobile:text-[1.5rem] mobile:pt-0'>{crew.name.toLocaleUpperCase()}</h1>
            <p className='text-lightBlue  text-[1.125rem] max-w-[33.69rem] leading-[180%] pb-[2.5rem] tablet:text-[1rem] mobile:text-[0.9375rem]'>{crew.bio}</p>
            <div className='dot flex gap-[2.5rem] pt-[5rem] tablet:pt-[1rem] tablet:justify-center mobile:pt-[1rem] mobile:justify-center mobile:gap-[1rem]'>
              <button onClick={() => handleChangeCrew(0)} className={`${index === 0 ? 'bg-white' : 'bg-[rgba(255,255,255,.175)]'} hover:bg-[rgba(255,255,255,.5)] rounded-[50%] w-[1rem] h-[1rem] mobile:w-[10px] mobile:h-[10px]`}></button>
              <button onClick={() => handleChangeCrew(1)} className={`${index === 1 ? 'bg-white' : 'bg-[rgba(255,255,255,.175)]'} hover:bg-[rgba(255,255,255,.5)] rounded-[50%] w-[1rem] h-[1rem] mobile:w-[10px] mobile:h-[10px]`}></button>
              <button onClick={() => handleChangeCrew(2)} className={`${index === 2 ? 'bg-white' : 'bg-[rgba(255,255,255,.175)]'} hover:bg-[rgba(255,255,255,.5)] rounded-[50%] w-[1rem] h-[1rem] mobile:w-[10px] mobile:h-[10px]`}></button>
              <button onClick={() => handleChangeCrew(3)} className={`${index === 3 ? 'bg-white' : 'bg-[rgba(255,255,255,.175)]'} hover:bg-[rgba(255,255,255,.5)] rounded-[50%] w-[1rem] h-[1rem] mobile:w-[10px] mobile:h-[10px]`}></button>
            </div>
          </div>
          <div className='self-end  tablet:self-center mobile:self-center '>
            <img className='tablet:h-[28rem] mobile:h-[21rem]' src={images[index]} alt={crew.name} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default CrewPage