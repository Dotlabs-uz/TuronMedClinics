/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import TranslateContext from "@/context/useTranslate";
import { useContext } from "react";

import "swiper/css";
import "swiper/css/effect-fade";

import { FaPhoneVolume } from "react-icons/fa6";
import axios from "axios";
import Link from "next/link";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
   const translation: any = useContext(TranslateContext);
   const doctors = [
      {
         id: 1,
         img: "photo",
      },
      {
         id: 2,
         img: "photo",
      },
      {
         id: 3,
         img: "photo",
      },
      {
         id: 4,
         img: "photo",
      },
      {
         id: 5,
         img: "photo",
      },
      {
         id: 6,
         img: "photo",
      },
      {
         id: 7,
         img: "photo",
      },
      {
         id: 8,
         img: "photo",
      },
      {
         id: 10,
         img: "photo",
      },
      {
         id: 11,
         img: "photo",
      },
      {
         id: 12,
         img: "photo",
      },
      {
         id: 13,
         img: "photo",
      },
      {
         id: 14,
         img: "photo",
      },
      {
         id: 15,
         img: "photo",
      },
      {
         id: 16,
         img: "photo",
      },
      {
         id: 17,
         img: "photo",
      },
   ];

   return (
      <section className="custom-contaner hero">
         <div className="hero-left">
            <div className="hero-left-texts">
               <h1>{translation.hero.title}</h1>
               <p className="max-w-lg w-full text-[18px] max-lg:text-[12px] max-sm:text-[18px] tracking-[0.27px] leading-[135%] text-[#3C4959]">
                  {translation.hero.title2}
               </p>
               <p className="mt-1 text-[18px] max-lg:text-[12px] max-sm:text-[18px] tracking-[0.27px] leading-[135%] text-[#3C4959]">
                  {translation.hero.price}
               </p>
            </div>

            <div className="conect">
               <div className="btns">
                  <Link href={"#toBook"}>
                     <button className="btn">{translation.hero.button}</button>
                  </Link>
                  <a href="tel:+998(55)703-03-03">
                     <button className="phone">
                        <FaPhoneVolume className="icon" />
                     </button>
                  </a>
               </div>

               <div className="conect-number">
                  <p className="text">{translation.hero.text}</p>
                  <a href="tel:+998(55)703-03-03 " className="number">
                     +998(55)703-03-03
                  </a>
               </div>
            </div>
         </div>

         <div className="hero-right relative">
            <div className="w-full h-full absolute top-0 left-0 z-10"></div>
            <Swiper
               spaceBetween={50}
               slidesPerView={1}
               effect="fade"
               modules={[EffectFade, Autoplay]}
               autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
               }}
            >
               {doctors.map((item: any, idx: number) => {
                  return (
                     <SwiperSlide className="bg-white " key={idx}>
                        <Image
                           priority
                           className="select-none pointer-events-none"
                           src={`/images/doctors/doctor-${item.id}.webp`}
                           width={1000}
                           height={1000}
                           alt="doctor"
                        />
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </section>
   );
};

export default Hero;
