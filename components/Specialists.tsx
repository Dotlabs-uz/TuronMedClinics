import { useState } from "react";
import { useContext } from "react";
import Image from "next/image";
import TranslateContext from "@/context/useTranslate";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUp } from "react-icons/bs";
import Specialist from "./children/Specialist";

const doctors = [
   {
      id: 1,
      img: "doctor",
      firstName: "Насиба",
      lastName: "Абдурахимова",
      job: "Директор",
   },
   {
      id: 2,
      img: "doctor",
      firstName: "Шавкат ",
      lastName: "Хакимов",
      job: "бош врач, терапевт, олий тоифали врач",
   },
   {
      id: 14,
      img: "doctor",
      firstName: "Сабохат",
      lastName: "Сафарова",
      job: "Акушер гинеколог, олий тоифали врач",
   },
   {
      id: 15,
      img: "doctor",
      firstName: "Дусер",
      lastName: "Расулов",
      job: "Алерголок, пульмонолог, олий тоифали врач",
   },
   {
      id: 16,
      img: "doctor",
      firstName: "Диёра",
      lastName: "Саидова",
      job: "Кардиолог, бош врач уринбосари, тибиет фанлари номзоди, олий тоифали врач",
   },
   {
      id: 8,
      img: "doctor",
      firstName: "Азамжон",
      lastName: "Хамзаев",
      job: "Эндокринолог, олий тоифали врач",
   },
   {
      id: 4,
      img: "doctor",
      firstName: "Ихтиер",
      lastName: "Киемов",
      job: "оториноларинголог, олий тоифали врач",
   },
   {
      id: 3,
      img: "doctor",
      firstName: "Равшан",
      lastName: "Абиев",
      job: "Стоматолог, Украинада талим олган",
   },
   {
      id: 12,
      img: "doctor",
      firstName: "Гулнара",
      lastName: "Джураева",
      job: "Невролог, олий тоифали врач",
   },
   {
      id: 17,
      img: "doctor",
      firstName: "Суннатилло",
      lastName: "Хамидов",
      job: "Уролог, андролог, сексопатолог",
   },
   {
      id: 5,
      img: "doctor",
      firstName: "Мафиза",
      lastName: "Ахтамова",
      job: "Врач лаборант",
   },
   {
      id: 6,
      img: "doctor",
      firstName: "Шахноза",
      lastName: "Очилова",
      job: "Узист",
   },
   {
      id: 7,
      img: "doctor",
      firstName: "Диляра",
      lastName: "Иванченко",
      job: "Инструктор лфк",
   },

   {
      id: 10,
      img: "doctor",
      firstName: "Сурае",
      lastName: "Шакарова",
      job: "Врач лаборант, Эндокринолог",
   },
   {
      id: 13,
      img: "doctor",
      firstName: "Ориф",
      lastName: "Маннанов",
      job: "Оператор рентген кабинета",
   },
];

interface SpecialistsProps {}
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
               {doctors.map((item: any) => (
                  <SwiperSlide key={item.id}>
                     <Specialist item={item} />
                  </SwiperSlide>
               ))}
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
