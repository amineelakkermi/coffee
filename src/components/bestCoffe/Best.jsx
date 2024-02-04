import React from 'react'
import { coffee } from '../../assets'
import styles, { layout } from '../../constants/style'
import { motion } from "framer-motion"

const cardsInfo = [
  {
    img: coffee,
    title: "Espresso",
    detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, placeat....",
  },
  {
    img: coffee,
    title: "Americano",
    detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, placeat....",
  },
  {
    img: coffee,
    title: "Cappuccino",
    detail: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, placeat....",
  },
]

const Best = () => {
  return (
    <section id='best' className={`${layout.section} ${styles.padding}`}>
      <div className="container">
      <motion.h1
      initial = {{ opacity : 0 , y : 100}}
      whileInView={ { opacity : 1 , y : 0} }
      transition={{ ease : "easeIn"  , duration : 0.5 }}
      className='text-center font-[cursive] font-bold text-[50px] mb-10 text-[#333]'>
        Best Coffee For You
      </motion.h1>
        <div className="cardsContainer ">
          <div className=" relative allCard grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[50px] gap-y-[150px] justify-center items-center  mt-[140px] ">
            {
              cardsInfo.map((item , index) => (
                <motion.div
                key={index}
                initial = {{ opacity : 0 , y : 100 }}
                whileInView={{ opacity : 1 , y : 0}}
                transition={{ ease : "easeOut" , delay : index * 0.3 }}
                className="  group relative min-h-[300px]  cards  flex flex-col  justify-center  items-center shadow-2xl  max-w-[350px]  rounded-[20px] hover:bg-cardHover transition-all duration-[400ms]  ">
                  <img src={item.img} alt="coffe" className='absolute -top-[100px] group-hover:rotate-[20deg] group-hover:scale-90 transition-all duration-[400ms]   w-[220px] h-[220px] object-cover' />
                  <div className="textPart w-full  mt-[50px]">
                  <h3 className='text-[black] text-center group-hover:text-[white]  text-[25px] font-semibold'>{item.title}</h3>
                  <p className='text-[#333] group-hover:text-[white]  text-center'>{item.detail}</p>
                  </div>
                </motion.div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Best