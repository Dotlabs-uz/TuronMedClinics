import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUp } from "react-icons/bs";
import { FaTooth } from "react-icons/fa";

import Link from "next/link";
import { useState } from "react";

interface CotegorisProps {}
const Cotegoris: React.FC<CotegorisProps> = () => {
   const [swiperRef, setSwiperRef] = useState<any>(null);
   const prevHandler = () => {
      swiperRef.slidePrev();
   };
   const nextHandler = () => {
      swiperRef.slideNext();
   };

   return (
      <section className="custom-contaner pb-40 max-md:pb-24 max-sm:px-0">
         <div className="py-10 px-9 max-sm:px-5 rounded-lg bg-[#E6F6FE]">
            <Swiper
               id="cotegoris"
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
               {[0, 1, 2].map((item: number) => {
                  return (
                     <SwiperSlide key={item}>
                        <div className="flex flex-col items-center justify-center rounded-lg px-10 max-md:px-5 py-8 bg-white">
                           <div className="w-fit p-2 rounded-full bg-[#25B4F8]">
                              <FaTooth className="text-white text-[40px]" />
                           </div>
                           <div className="">
                              <h3 className="my-2 text-[24px] font-medium text-center">
                                 Root Canal Treatment
                              </h3>
                              <p className="text-center">
                                 Root canal treatment (endodontics) is a dental
                                 procedure used to treat infection at the centre
                                 of a tooth.
                              </p>
                           </div>
                           <div className="mt-5">
                              <Link
                                 href={"#"}
                                 className="font-medium underline underline-offset-2"
                              >
                                 Learn More →
                              </Link>
                           </div>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
            <div className="xl:hidden flex items-center justify-center">
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

export default Cotegoris;
