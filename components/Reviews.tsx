import { Swiper, SwiperSlide } from "swiper/react";
import TranslateContext from "@/context/useTranslate";
import { useState, useContext } from "react";

import "swiper/css";
import { BsArrowUp } from "react-icons/bs";

interface ReviewsProps {}
const Reviews: React.FC<ReviewsProps> = () => {
   const translation: any = useContext(TranslateContext);

   const [swiperRef, setSwiperRef] = useState<any>(null);
   const prevHandler = () => {
      swiperRef.slidePrev();
   };
   const nextHandler = () => {
      swiperRef.slideNext();
   };

   return (
      <section className="overflow-hidden mb-28 max-md:mb-14">
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
               slidesPerView={3}
               breakpoints={{
                  0: {
                     slidesPerView: 1,
                  },
                  768: {
                     slidesPerView: 2,
                  },
                  1280: {
                     slidesPerView: 3,
                  },
               }}
            >
               {[0, 1, 2, 3, 4, 5].map((item: number) => {
                  return (
                     <SwiperSlide key={item}>
                        <div className="px-8 py-6 shadow-[0px_10px_40px_#00000014] rounded-lg">
                           <div className="flex items-center gap-2 mb-3">
                              <div className="w-16 h-16 rounded-full bg-slate-400"></div>
                              <div className="">
                                 <p className="text-[24px] leading-[155%] tracking-[0.48px]">
                                    Thomas daniel
                                 </p>
                                 <p className="text-[20px] text-[#EC942C]">
                                    ★★★★★
                                 </p>
                              </div>
                           </div>
                           <div className="">
                              <p className="leading-[155%] tracking-[0.24px] text-[#3C4959]">
                                 Phosfluorescently synergize covalent
                                 outsourcing through functional strategic theme
                                 areas. Assertively scale strategic portals
                                 without distinctive relationships. Holisticly
                                 cultivate tactical e-services before fully
                                 researched sources.
                              </p>
                           </div>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
            <div className="flex items-center justify-center">
               <button
                  onClick={prevHandler}
                  className="mr-20 py-7 px-1 text-[30px] -rotate-90 cursor-pointer bg-[#011632]"
               >
                  <BsArrowUp color="white" />
               </button>

               <button
                  onClick={nextHandler}
                  className="py-7 px-1 text-[30px] rotate-90 cursor-pointer bg-[#011632]"
               >
                  <BsArrowUp color="white" />
               </button>
            </div>
         </div>
      </section>
   );
};

export default Reviews;
