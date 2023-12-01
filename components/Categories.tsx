import Image from "next/image";
import Item from "./children/Item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { BsArrowUp } from "react-icons/bs";

import { useState } from "react";

interface CategoriesProps {}
const Categories: React.FC<CategoriesProps> = () => {
   const arr = [
      {
         id: 0,
         titleRu: "Соляная пещера",
         titleUz: "TUZ G'ORI",
         titleTjk: "Соляная пещера",
         ru: "40-минутные сеансы дыхательной терапии в соляной пещере излечивают следующие заболевания: Аллергические заболевания, астматические заболевания, Заболевания легких и дыхательных путей, Псориаз, Нервные заболевания, Заболевания суставов и т.д. Это также очень полезно для маленьких детей.",
         uz: "Tuzli g'orda 40 daqiqalik nafas olish terapiyasi quyidagi kasalliklarni davolaydi: Allergik kasalliklar, astmatik kasalliklar, O'pka va nafas yo'llarining kasalliklari, Psoriaz, Nerv kasalliklari, Qo'shma kasalliklar va boshqalar. Bu yosh bolalar uchun ham juda foydali.",
         tjk: "40-минутное непрерывное дыхание лечение сессия касалликларга исцеление: аллергия касалликлари, астма касалликлари, Бакка и дыхание Алиш джулари касалликлари, Псориаз,неврологический касалликлари, Бохинлар касалликлари и башкалар. Йеш болалар как каждый томонлама фойдали счетланади.",
         img: "1",
      },
      {
         id: 1,
         titleRu: "йодированная морская соль",
         titleUz: "yodlangan dengiz tuzi",
         titleTjk: "йодированная морская соль",
         ru: "Остальные стены, потолок и пол покрыты йодированной морской солью.",
         uz: "Devorlarning qolgan qismlari, potolok va Pol yodlangan dengiz tuzi bilan qoplangan.",
         tjk: "Остальные стены, потолок и пол покрыты йодированной морской солью.",
         img: "2",
      },
      {
         id: 2,
         titleRu: "специальный микронутриент",
         titleUz: "maxsus elementlar",
         titleTjk: "специальный микронутриент",
         ru: "Под воздействием тепла эти плитки выделяют в воздух особые микроэлементы.",
         uz: "Issiqlik ta'sirida ushbu plitkalar havoga maxsus mikroelementlar ajratib chiqaradi.",
         tjk: "Под воздействием тепла эти плитки выделяют в воздух особые микроэлементы.",
         img: "3",
      },
      {
         id: 3,
         titleRu: "Гималайский розовый",
         titleUz: "Gimolay pushti rang",
         titleTjk: "Гималайский розовый",
         ru: "Галогениратор purcagichi каждого Бира сессда 40 мин, известный как Australian Keltirilgan специальный фармацевтик туз флагаларин purcab turadi. Дом епископов мавзолей балан длиннохвостый.",
         uz: "Australian Keltirilgan maxsus farmatsevtika Ace flagalarin purcab turadii sifatida tanilgan har bir bir sess 40 min purcagichi halogenerator. Yepiskoplar uyi balan maqbarasi uzun dumli.",
         tjk: "Галогениратор purcagichi каждого Бира сессда 40 мин, известный как Australian Keltirilgan специальный фармацевтик туз флагаларин purcab turadi. Дом епископов мавзолей балан длиннохвостый.",
         img: "4",
      },
      {
         id: 4,
         titleRu: "специальный микронутриент",
         titleUz: "TUZ G'ORI",
         titleTjk: "специальный микронутриент",
         ru: "Это также полезно во всех отношениях для маленьких детей.",
         uz: "Yosh bolalar uchun ham har tomonlama foydali hisoblanadi.",
         tjk: "Это также полезно во всех отношениях для маленьких детей.",
         img: "1",
      },
   ];

   const [swiperRef, setSwiperRef] = useState<any>(null);
   const prevHandler = () => {
      swiperRef.slidePrev();
   };
   const nextHandler = () => {
      swiperRef.slideNext();
   };

   return (
      <section className="custom-contaner categories pb-28 max-md:pb-14 p-none">
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
               {arr.map((item: any, idx: number) => (
                  <SwiperSlide key={idx}>
                     <Item item={item} />
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

export default Categories;
