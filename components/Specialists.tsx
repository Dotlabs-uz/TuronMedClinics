import { useState } from "react";
import TranslateContext from "@/context/useTranslate";
import { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUp } from "react-icons/bs";

interface SpecialistsProps {}
const doctors = [
   {
      id: 1,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 2,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 3,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 4,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 5,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 6,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 7,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 8,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 9,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 10,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 11,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 12,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 13,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 14,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 15,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 16,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
   {
      id: 17,
      img: "doctor",
      name: "Alex",
      job: "Orthodontist",
   },
];
const Specialists: React.FC<SpecialistsProps> = () => {
   const translation: any = useContext(TranslateContext);

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
               <h2 className="sm:text-center">
                  {translation.specialists.title}
               </h2>

               <p className="px-20 max-lg:px-10 max-sm:p-0 text-[18px] max-md:text-[16px] max-sm:text-[18px] tracking-[0.27px] sm:text-center leading-[155%] text-[#3C4959]">
                  {translation.specialists.info}
               </p>
               <p className="px-20 max-lg:px-10 max-sm:p-0 text-[18px] max-md:text-[16px] max-sm:text-[18px] font-semibold tracking-[0.27px] sm:text-center leading-[155%] text-[#3C4959]">
                  {translation.specialists.text}
               </p>
            </div>

            <Swiper
               id="specialists"
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
               {doctors.map((item: any) => {
                  return (
                     <SwiperSlide key={item.id}>
                        <div
                           style={{
                              backgroundImage: `url('/images/doctors/doctor-${item.id}.png')`,
                           }}
                           className={`min-h-[390px] flex p-4 rounded-lg  bg-center bg-no-repeat bg-cover`}
                        >
                           <div className="block-name backdrop-blur-3xl rounded-lg w-full mt-auto px-6 py-3">
                              <p className="text-[24px] font-semibold text-white">
                                 {item.name}
                              </p>
                              <p className="text-white">{item.job}.</p>
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
