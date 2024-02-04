import React from 'react'
import styles, { layout } from '../../constants/style'
import { appStore, playStore } from '../../assets'
import { motion } from "framer-motion"
const Store = () => {
  return (
    <section id='store' className={`flex flex-col justify-center items-center ${styles.paddingY} bg-[#222]`}>
    <motion.h1
     initial = {{ opacity : 0 , y : 100}}
     whileInView={ { opacity : 1 , y : 0} }
     transition={{ ease : "easeIn"  , duration : 0.6 }}
    className='font-bold text-[white] text-[45px] text-center max-w-[550px]'>
      Coffee Cafe is available for Android and IOS
    </motion.h1>
    <motion.div
    
    
    initial = {{ opacity : 0 , y : 100}}
    whileInView={ { opacity : 1 , y : 0} }
    transition={{ ease : "easeIn"  , duration : 0.8 }}
    className='flex gap-4 my-6'
    >

    <img src={appStore} alt="app store" className='object-cover w-[150px] cursor-pointer' />
    <img src={playStore} alt="app store" className='object-cover w-[150px] cursor-pointer' />
    </motion.div>
    </section>

  )
}

export default Store