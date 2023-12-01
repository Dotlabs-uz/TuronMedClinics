import Image from "next/image";
import TranslateContext from "@/context/useTranslate";
import { useContext } from "react";
import { useRouter } from "next/router";

import { LuShieldCheck } from "react-icons/lu";
import Link from "next/link";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
   const translation: any = useContext(TranslateContext);
   const router = useRouter();
   const { locale } = router;

   const arr = [
      {
         id: 0,
         ru: "Кардиология",
         uz: "Kardiologiya",
      },
      {
         id: 1,
         ru: "Терапия",
         uz: "Terapiya",
      },
      {
         id: 2,
         ru: "Гастроэнтерология и гепатология",
         uz: "Gastroenterologiya va gepatologiya",
      },
      {
         id: 3,
         ru: "Физиотерапия",
         uz: "Fizioterapiya",
      },
      {
         id: 4,
         ru: "Урология",
         uz: "Urologiya",
      },
      {
         id: 5,
         ru: "Офтальмология",
         uz: "Oftalmologiya",
      },
      {
         id: 6,
         ru: "Лор",
         uz: "Lor",
      },
      {
         id: 7,
         ru: "Лечение бесплодия и дисфункции.",
         uz: "Bepushtlik va disfunktsiyani davolash.",
      },
      {
         id: 8,
         ru: "Гинекология",
         uz: "Ginekologiya",
      },
      {
         id: 9,
         ru: "Неврология",
         uz: "Nevrologiya",
      },
      {
         id: 10,
         ru: "Эндокринология",
         uz: "Endokrinologiya",
      },
      {
         id: 11,
         ru: "Аллерголория",
         uz: "Allergiya",
      },
      {
         id: 12,
         ru: "Стоматология",
         uz: "Stomatologiya",
      },
      {
         id: 13,
         ru: "Гастроэнтерология и гепотология",
         uz: "Gastroenterologiya va gepotologiya",
      },
      {
         id: 14,
         ru: "Лечение дисфункции бесплодия",
         uz: "Bepushtlik disfunktsiyasini davolash",
      },
      {
         id: 15,
         ru: "Стационар",
         uz: "Kasalxona",
      },
      {
         id: 16,
         ru: "Соляная пещера",
         uz: "tuz g'ori",
      },
      {
         id: 17,
         ru: "ЛФК",
         uz: "Jismoniy mashqlar terapiyasi",
      },
      {
         id: 18,
         ru: "Рентген ",
         uz: "rentgen",
      },
      {
         id: 19,
         ru: "Лаборатория",
         uz: "Laboratoriya",
      },
      {
         id: 20,
         ru: "УЗИ",
         uz: "UZI",
      },
   ];

   return (
      <section className="custom-contaner pb-28 max-md:pb-14 p-none">
         <div
            id="aboutUs"
            className="flex max-lg:flex-col items-center justify-between gap-16 max-xl:gap-10 py-14 px-20 max-xl:px-10 max-md:px-5 bg-[#E6F6FE]"
         >
            <div className="flex w-2/5 max-lg:w-full min-h-[420px] max-sm:min-h-[320px]">
               <Image
                  className="w-auto h-auto object-cover rounded-lg"
                  src={"/images/160A2389.webp"}
                  width={1000}
                  height={1000}
                  alt="about Us"
               />
            </div>
            <div className="w-3/5 max-lg:w-full">
               <div className="">
                  <h2 className="text-4xl">{translation.about.title}</h2>
                  <p className="text-[18px] leading-[155%] text-[#3C4959]">
                     {translation.about.title2}
                  </p>
                  <div className="flex max-sml justify-between">
                     <ul className="flex flex-col gap-3 max-sm:gap-2 mt-5">
                        {arr.slice(0, 10).map((item: any, idx: number) => {
                           return (
                              <li
                                 key={idx}
                                 className="flex items-center max-sm:items-start gap-3 max-sm:gap-1 text-[18px] max-sm:text-sm font-medium"
                              >
                                 <div className="">
                                    <LuShieldCheck className="text-[16px]  text-[#1376F8]" />
                                 </div>
                                 {locale === "ru"
                                    ? item.ru
                                    : locale === "uz"
                                    ? item.uz
                                    : item.ru}
                              </li>
                           );
                        })}
                     </ul>
                     <ul className="flex flex-col gap-3 max-sm:gap-2 mt-5 max-sm:mt-1">
                        {arr.slice(10).map((item: any, idx: number) => {
                           return (
                              <li
                                 key={idx}
                                 className="flex items-center max-sm:items-start gap-3 max-sm:gap-1 text-[18px] max-sm:text-sm font-medium"
                              >
                                 <div className="">
                                    <LuShieldCheck className="text-[16px] text-[#1376F8]" />
                                 </div>
                                 {locale === "ru"
                                    ? item.ru
                                    : locale === "uz"
                                    ? item.uz
                                    : item.ru}
                              </li>
                           );
                        })}
                     </ul>
                  </div>
                  <Link href={"#toBook"}>
                     <button className="mt-8 max-lg:text-[14px] max-sm:text-base mr-5 max-lg:mr-3 px-8 max-sm:px-4 max-md:px-6 py-4 max-lg:py-3 rounded-lg font-semibold tracking-[0.24px] duration-150 ease-in text-white bg-[#197dff] hover:bg-[#3f94fb]">
                        {translation.about.button}
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutUs;
