import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUp } from "react-icons/bs";

interface SpecialistsProps {}
const Specialists: React.FC<SpecialistsProps> = () => {
   const [swiperRef, setSwiperRef] = useState<any>(null);
   const prevHandler = () => {
      swiperRef.slidePrev();
   };
   const nextHandler = () => {
      swiperRef.slideNext();
   };
   return (
      <section className="bg-[#E6F6FE] py-16 overflow-hidden mb-28 max-md:mb-14">
         <div className="custom-contaner">
            <div className="max-w-2xl m-auto mb-10">
               <h2 className="sm:text-center">Meet our specialists </h2>

               <p className="px-20 max-lg:px-10 max-sm:p-0 text-[18px] max-md:text-[16px] max-sm:text-[18px] tracking-[0.27px] sm:text-center leading-[155%] text-[#3C4959]">
                  We use only the best quality materials on the market in order
                  to provide the best products to our patients.
               </p>
            </div>

            <Swiper
               className="swiper-visible"
               onSwiper={(swiper) => setSwiperRef(swiper)}
               spaceBetween={30}
               slidesPerView={4}
               breakpoints={{
                  0: {
                     slidesPerView: 1,
                  },
                  500: {
                     slidesPerView: 2,
                  },
                  768: {
                     slidesPerView: 3,
                  },
                  1280: {
                     slidesPerView: 4,
                  },
               }}
            >
               {[0, 1, 2, 3, 4, 5].map((item: number) => {
                  return (
                     <SwiperSlide key={item}>
                        <div className="min-h-[390px] flex p-4 rounded-lg bg-[url('/images/160A2185.jpg')] bg-center bg-no-repeat bg-cover">
                           <div className="block-name backdrop-blur-3xl rounded-lg w-full mt-auto px-6 py-3">
                              <p className="text-[24px] font-semibold text-white">
                                 Jim Carry
                              </p>
                              <p className="text-white">Orthodontist.</p>
                           </div>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
            <div className="flex items-center justify-center">
               <button
                  onClick={prevHandler}
                  className="mr-20 py-7 px-1 text-[30px] -rotate-90 cursor-pointer bg-white"
               >
                  <BsArrowUp />
               </button>

               <button
                  onClick={nextHandler}
                  className="py-7 px-1 text-[30px] rotate-90 cursor-pointer bg-white"
               >
                  <BsArrowUp />
               </button>
            </div>
         </div>
      </section>
   );
};

export default Specialists;
