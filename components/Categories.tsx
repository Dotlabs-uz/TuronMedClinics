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
         icon: "",
         titleRu: "ТУЗ ГОРИ",
         titleUz: "TUZ G'ORI",
         titleTjk: "ТУЗ ГОРИ",
         ru: "Туз ғорида 40 минут давомида нафас олиш муолажаси сеанслари қуйидаги касалликларга шифо бўлади: Аллергия касалликлари, Астма касалликлари, Ўпка ва нафас олиш йўллари касалликлари, Псориаз, Асаб касалликлари,Бўғинлар касалликлари ва бошқалар. Ёш болалар учун ҳам ҳар томонлама фойдали ҳисобланади.",
         uz: "40-daqiqa uzluksiz nafas davolash sessiyasi kasalliklarga shifo: allergiya kasalliklari, astma kasalliklari, Bakka va nafas olish yo'llari kasalliklari, psoriaz, nevrologik kasalliklari, bohinlar kasalliklari va boshqalar. Har tomonlama foidali billanadi sifatida Yesh bolalar.",
         tjk: "Туз ғорида 40 минут давомида нафас олиш муолажаси сеанслари қуйидаги касалликларга шифо бўлади: Аллергия касалликлари, Астма касалликлари, Ўпка ва нафас олиш йўллари касалликлари, Псориаз, Асаб касалликлари,Бўғинлар касалликлари ва бошқалар. Ёш болалар учун ҳам ҳар томонлама фойдали ҳисобланади.",
      },
      {
         id: 1,
         icon: "",
         titleRu: "йодированная морская соль",
         titleUz: "yodlangan dengiz tuzi",
         titleTjk: "йодированная морская соль",
         ru: "Остальные стены, потолок и пол покрыты йодированной морской солью.",
         uz: "Devorlarning qolgan qismlari, potolok va Pol yodlangan dengiz tuzi bilan qoplangan.",
         tjk: "Остальные стены, потолок и пол покрыты йодированной морской солью.",
      },
      {
         id: 2,
         icon: "",
         titleRu: "специальный микронутриент",
         titleUz: "maxsus iz elementlari",
         titleTjk: "специальный микронутриент",
         ru: "Под воздействием тепла эти плитки выделяют в воздух особые микроэлементы.",
         uz: "Issiqlik ta'sirida ushbu plitkalar havoga maxsus mikroelementlar ajratib chiqaradi.",
         tjk: "Под воздействием тепла эти плитки выделяют в воздух особые микроэлементы.",
      },
      {
         icon: "",
         id: 3,
         titleRu: "Гималайский розовый",
         titleUz: "Gimolay pushti rang",
         titleTjk: "Гималайский розовый",
         ru: "Галогениратор purcagichi каждого Бира сессда 40 мин, известный как Australian Keltirilgan специальный фармацевтик туз флагаларин purcab turadi. Дом епископов мавзолей балан длиннохвостый.",
         uz: "Australian Keltirilgan maxsus farmatsevtika Ace flagalarin purcab turadii sifatida tanilgan har bir bir sess 40 min purcagichi halogenerator. Yepiskoplar uyi balan maqbarasi uzun dumli.",
         tjk: "Галогениратор purcagichi каждого Бира сессда 40 мин, известный как Australian Keltirilgan специальный фармацевтик туз флагаларин purcab turadi. Дом епископов мавзолей балан длиннохвостый.",
      },
      {
         id: 4,
         icon: "",
         titleRu: "ТУЗ ГОРИ",
         titleUz: "TUZ G'ORI",
         titleTjk: "ТУЗ ГОРИ",
         ru: "Это также полезно во всех отношениях для маленьких детей.",
         uz: "Yosh bolalar uchun ham har tomonlama foydali hisoblanadi.",
         tjk: "Это также полезно во всех отношениях для маленьких детей.",
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
               className="mb-10 max-sm:mb-5"
               onSwiper={(swiper) => setSwiperRef(swiper)}
               autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
               }}
               loop
               modules={[Autoplay]}
               spaceBetween={30}
               slidesPerView={4}
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
               {[1, 2, 3, 4].map((item: any) => {
                  return (
                     <SwiperSlide key={item} className="">
                        <div className="h-full flex">
                           <Image
                              className="object-cover h-[300px]"
                              src={`/images/salt/photo-${item}.jpg`}
                              width={1000}
                              height={1000}
                              alt="salt"
                           />
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>

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
