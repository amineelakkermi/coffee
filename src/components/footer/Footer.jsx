import React from 'react'
import styles from '../../constants/style'
import { github, instagram } from '../../assets'
import { navLinks } from '../../constants'

const Footer = () => {
  return (
    <div className={`flex flex-col lg:flex-row justify-between items-center lg:items-start sm:px-16 px-6 sm:py-12 py-20 bgFooter gap-[40px]`}>
      <div className='left flex flex-col gap-3'>
        <h3 className='text-[white] text-center lg:text-start text-[35px] font-bold'>Coffee Cafe</h3>
        <p className='text-[white] text-center lg:text-start max-w-[420px] font-normal text-[18px] '>Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape</p>
        <div className='flex flex-row gap-5 justify-center md:justify-start items-center my-3'>
        <a href="https://www.instagram.com/amineelakkermi2/" target='ref'>
        <img src={instagram} alt="instagram" className='object-cover w-[75px] h-[75px] cursor-pointer' />
        </a>
        <a href="https://github.com/amineelakkermi" target='ref'>
        <img src={github} alt="github" className='object-cover w-[50px] h-[50px] cursor-pointer' />
        </a>
        </div>
      </div>

      <div className="right flex flex-col gap-4">
        <h3 className='text-[white] text-[25px] font-bold'>Footer Links</h3>
        {
          navLinks.map((item , index) => (
            <div className='flex flex-col gap-4'>
            <ul className='flex flex-col gap-4'>
            <li className='text-center md:text-start text-[white] text-[18px] font-semibold cursor-pointer hover:text-[orangered] transition-[1s]'><a href={`#${item.id}`}>{item.title}</a></li>
            </ul>
            </div>
          ))
        }
        
        
        
        
       
      </div>
    </div>
  )
}

export default Footer