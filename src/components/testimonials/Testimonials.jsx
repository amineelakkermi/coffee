import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles, { layout } from '../../constants/style'
import { coffee, nature, pon, shop } from '../../assets'
import { motion } from "framer-motion"

const testimonials = [
  {
   img: coffee,
   detail: "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam maiores minima iure, veritatis aut consectetur.",
   title: "Elakkermi Amine"
  },
  {
    img: shop,
    detail: "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam maiores minima iure, veritatis aut consectetur.",
    title: "Elakkermi Amine"
   },
   {
    img: nature,
    detail: "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam maiores minima iure, veritatis aut consectetur.",
    title: "Elakkermi"
   },
   {
    img: pon,
    detail: "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam maiores minima iure, veritatis aut consectetur.",
    title: "ozkdsp"
   },
   {
    img: coffee,
    detail: "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam maiores minima iure, veritatis aut consectetur.",
    title: "ozkdsp"
   },
   {
    img: shop,
    detail: "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam maiores minima iure, veritatis aut consectetur.",
    title: "ozkdsp"
   },
   {
    img: pon,
    detail: "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam maiores minima iure, veritatis aut consectetur.",
    title: "ozkdsp"
   },
]

const Testimonials = () => {
  return (
    <section id='testimonials' className={`min-h-screen w-full ${styles.padding} mt-10`}>
    <motion.h1
      initial = {{ opacity : 0 , y : 100}}
      whileInView={ { opacity : 1 , y : 0} }
      transition={{ ease : "easeIn"  , duration : 0.5 }}
      className='text-center font-[cursive] font-bold text-[50px] mb-10 text-[#333]'> 
      Testimonials
    </motion.h1>
     <motion.div
    initial = {{ opacity : 0 , y : 100 }}
    whileInView = {{ opacity : 1 , y : 0 }}
    transition={{ ease : "easeInOut" , duration : 0.6 }}
    className="cardContainer">
     
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      breakpoints={{

        0: {
          slidesPerView : 1,
        },
        641: {
          slidesPerView : 2,
        },
        1025 : {
          slidesPerView : 3,
        }
      }}
      pagination={
      {
         clickable: true,
         
      }
     
    
    }
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='bg-testBg mb-[60px] rounded-lg px-4 py-2 flex  justify-between items-center '>
      <div className='flex flex-col gap-5'>
       <img src={coffee} alt="Coffe" className='w-[180px] h-[180px] object-cover' />
      <div className='flex flex-col gap-3'>
      <p className='text-[#666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni?</p>
      <h3 className='text-[#666] font-bold'>Lorem Ipsum</h3>
      </div> 
      
      </div>
      <div>
        <p className='text-[100px] text-[#666]'>,,</p>
      </div>
      
      </SwiperSlide>

      <SwiperSlide className='bg-testBg mb-[60px] rounded-lg px-4 py-2 flex  justify-between items-center '>
      <div className='flex flex-col gap-5'>
       <img src={coffee} alt="Coffe" className='w-[180px] h-[180px] object-cover ' />
      <div className='flex flex-col gap-3'>
        <p className='text-[#666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni?</p>
        <h3 className='text-[#666] font-bold'>Lorem Ipsum</h3>
      </div> 
      
      </div>
      <div>
      <p className='text-[100px] text-[#666]'>,,</p>
      </div>
      
      </SwiperSlide>

      <SwiperSlide className='bg-testBg mb-[60px] rounded-lg px-4 py-2 flex  justify-between items-center '>
      <div className='flex flex-col gap-5'>
       <img src={coffee} alt="Coffe" className='w-[180px] h-[180px] object-cover' />
      <div className='flex flex-col gap-3'>
      <p className='text-[#666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni?</p>
      <h3 className='text-[#666] font-bold'>Lorem Ipsum</h3>
      </div> 
      
      </div>
      <div>
      <p className='text-[100px] text-[#666]'>,,</p>
      </div>
      
      </SwiperSlide>

      <SwiperSlide className='bg-testBg mb-[60px] rounded-lg px-4 py-2 flex  justify-between items-center '>
      <div className='flex flex-col gap-5'>
       <img src={coffee} alt="Coffe" className='w-[180px] h-[180px] object-cover' />
      <div className='flex flex-col gap-3'>
      <p className='text-[#666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni?</p>
      <h3 className='text-[#666] font-bold'>Lorem Ipsum</h3>
      </div> 
      
      </div>
      <div>
      <p className='text-[100px] text-[#666]'>,,</p>
      </div>
      
      </SwiperSlide>

      <SwiperSlide className='bg-testBg mb-[60px] rounded-lg px-4 py-2 flex  justify-between items-center '>
      <div className='flex flex-col gap-5'>
       <img src={coffee} alt="Coffe" className='w-[180px] h-[180px] object-cover' />
      <div className='flex flex-col gap-3'>
      <p className='text-[#666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni?</p>
      <h3 className='text-[#666] font-bold'>Lorem Ipsum</h3>
      </div> 
      
      </div>
      <div>
      <p className='text-[100px] text-[#666]'>,,</p>
      </div>
      
      </SwiperSlide>

      <SwiperSlide className='bg-testBg mb-[60px] rounded-lg px-4 py-2 flex  justify-between items-center '>
      <div className='flex flex-col gap-5'>
       <img src={coffee} alt="Coffe" className='w-[180px] h-[180px] object-cover' />
      <div className='flex flex-col gap-3'>
      <p className='text-[#666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni?</p>
      <h3 className='text-[#666] font-bold'>Lorem Ipsum</h3>
      </div> 
      
      </div>
      <div>
      <p className='text-[100px] text-[#666]'>,,</p>
      </div>
      
      </SwiperSlide>

      <SwiperSlide className='bg-testBg mb-[60px] rounded-lg px-4 py-2 flex  justify-between items-center '>
      <div className='flex flex-col gap-5'>
       <img src={coffee} alt="Coffe" className='w-[180px] h-[180px] object-cover' />
      <div className='flex flex-col gap-3'>
      <p className='text-[#666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni?</p>
      <h3 className='text-[#666] font-bold'>Lorem Ipsum</h3>
      </div> 
      
      </div>
      <div>
      <p className='text-[100px] text-[#666]'>,,</p>
      </div>
      
      </SwiperSlide>

      
    

    </Swiper>  
    
   
     </motion.div>
    </section>
  )
}

export default Testimonials