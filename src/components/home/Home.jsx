import React from 'react'
import styles, { layout } from '../../constants/style'
import { coffee } from '../../assets'
import { motion } from "framer-motion"

const Home = () => {
  return (
    <section id='home' className={`${layout.section} bg-bg ${styles.padding} `}>
    <div className={`${layout.sectionInfo} gap-5`}>
      <h1 className={`${styles.heading2}`}>We serve the richest <br /> <span className='text-[rgb(79, 35, 8)]'>Coffee</span> in the city</h1>
      <button className='buttonHome  my-4 p-3 rounded-[20px]'>
        <a href="#" className='text-[white]'>Coffee And Code</a>
      </button>
    </div>
    <div className={`${layout.sectionImg} relative`}>
      <div>
        <button className='buttonHome absolute top-[5%] left-0   my-4 p-3 rounded-[20px]'>
          <a href="#" className='text-[white]'>Hey Coder</a>
        </button>
      </div>
      <div className="img">
        <motion.img
        animate = {{ rotate : "360deg" }}
        transition={ { ease : "easeOut" , duration : 50 , repeat : Infinity }}
        src={coffee} alt="Coffee" className='object-cover w-[330px] sm:w-[450px] '/>
      </div>
      <button className='buttonHome absolute bottom-[5%] right-0  my-4 p-3 rounded-[20px]'>
          <a href="#" className='text-[white]'>Hey Coder</a>
        </button>
    </div>
    </section>
  )
}

export default Home