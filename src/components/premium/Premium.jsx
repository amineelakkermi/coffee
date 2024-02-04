import React from 'react'
import styles, { layout } from '../../constants/style'
import { coffee1 } from '../../assets'
import { motion } from 'framer-motion'

const Premium = () => {
  return (
    <section id='premium'
    className={`${layout.sectionReverse} bg-bg2 px-6 sm:px-12  sm:py-12 py-20 `}>
      <div className={`${layout.sectionImgReverse}`}>
      <motion.img
        animate = {{ rotate : "360deg" }}
        transition={ { ease : "easeOut" , duration : 50  , repeat : Infinity }}
        src={coffee1} alt="Coffee" className='object-cover w-[450px] h-[350px]  '/>      </div>
      
      <div className={`${layout.sectionInfo}`}>
      <motion.h2
      initial = {{opacity : 0 , y : 100}}
      whileInView={{opacity : 1 , y : 0}}
      transition={{ ease : "easeInOut" , duration : 0.6 }}
      className='font-[cursive] font-bold text-[50px] mb-10 text-[#333]'>Premium Blen Coffe</motion.h2
      >
    <motion.p
     initial = {{opacity : 0 , y : 100}}
     whileInView={{opacity : 1 , y : 0}}
     transition={{ ease : "easeInOut" , duration : 0.8 }}
     className={`text-[#333]  text-[15px] `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat assumenda numquam reprehenderit harum laboriosam eum error sint magni mollitia.
    </motion.p>      
      
      
      <div className='w-[100%] my-8 flex flex-col md:flex-row justify-between items-start md:items-center'>
      <motion.div
       initial = {{ opacity : 0 , y : 100 }}
       whileInView={{ opacity : 1 , y : 0 }}
       transition={{ ease : "easeInOut" , duration : 0.8 }}
      >
        <ul className='flex flex-col gap-4 my-5'>
          <li className='text-[black] text-[18px] font-semibold'>Premium Coffe</li>
          <li className='text-[black] text-[18px] font-semibold'>Hot Coffe</li>
          <li className='text-[black] text-[18px] font-semibold'>Cold Coffe</li>
        </ul>
       </motion.div>

      
     
      <div className='relative flex flex-col md:flex-row gap-5 h-[100%]'>
      <div className='w-[5px]  bg-lineBg' />
      <motion.div
      initial = {{ opacity : 0 , x : 100 }}
      whileInView={{ opacity : 1 , x : 0 }}
      transition={{ ease : "easeInOut" , duration : 0.8 }}
      className='flex flex-col gap-2'>
      <h3 className='text-[black] font-bold text-[25px]'>Tea Lover</h3>
      <p className='text-[#666] text-[15px] max-w-[550px] md:max-w-[250px]  '>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum quasi blanditiis distinctio rem quibusdam impedit excepturi iusto! Nobis, vero.
      </p>
      </motion.div> 
      </div>
    
      </div>
        
      </div>
      
    </section>
  )
}

export default Premium