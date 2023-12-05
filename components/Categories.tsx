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
         ru: "40-минутные сеансы дыхательной терапии в соляной пещере излечивают следующие заболевания: Аллергические заболевания, астматические заболевания, Заболевания легких и дыхательных путей, Псориаз, Нервные заболевания, Заболевания суставов и т.д. Это также очень полезно для маленьких детей.",
         uz: "Tuzli g'orda 40 daqiqalik nafas olish terapiyasi quyidagi kasalliklarni davolaydi: Allergik kasalliklar, astmatik kasalliklar, O'pka va nafas yo'llarining kasalliklari, Psoriaz, Nerv kasalliklari, Qo'shma kasalliklar va boshqalar. Bu yosh bolalar uchun ham juda foydali.",
         img: "1",
      },
      {
         id: 1,
         titleRu: "йодированная морская соль",
         titleUz: "yodlangan dengiz tuzi",
         ru: "Стены соляной пещеры покрыты плиткой из гималайской розовой соли. Под воздействием тепла такая плитка выделяет в воздух особые микроэлементы.",
         uz: "Tuz g'ori devorlari gimolay pushti rang tuz plitkalari bilan terilgan. Issiqlik tasirida ushbu plitkalar xavoga maxsus mikroelementlar ajratib chiqaradi.",
         img: "2",
      },
      {
         id: 2,
         titleRu: "Эстетика морской соли: роскошь в деталях",
         titleUz: "maxsus elementlar",
         ru: "Остальные стены, потолок и пол покрыты йодированной морской солью.",
         uz: "Devorlarning qolgan qisimlari, potolok va pol yodlangan dengiz tuzi bilan qoplangan.",
         img: "3",
      },
      {
         id: 3,
         titleRu: "Гималайский розовый",
         titleUz: "Gimolay pushti rang",
         ru: "Специальная галогенаторная распылительная установка распыляет определенное количество хлопьев специальной фармацевтической соли, импортированной из Австралии, в течение 40-минутного сеанса. Воздух в помещении наполнен этими солевыми частицами.",
         uz: "Maxsus galogenirator purkagichi o'rnatilishi 40 minut seans davomida ma'lum miqdorda Avstraliyadan keltirilgan maxsus farmatevtik tuz parchalarini purkab turadi. Xona xavosi ushbu tuz zarralari bilan to'ldiriladi.",
         img: "4",
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
               {arr.map(
                  (
                     item: {
                        id: number;
                        titleRu: string;
                        titleUz: string;
                        ru: string;
                        uz: string;
                        img: string;
                     },
                     idx: number
                  ) => (
                     <SwiperSlide key={idx}>
                        <Item item={item} />
                     </SwiperSlide>
                  )
               )}
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
