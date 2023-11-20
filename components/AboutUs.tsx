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
         ru: "кардиология",
         uz: "kardiologiya",
         tjk: "кардиология",
      },
      {
         id: 1,
         ru: "терапия",
         uz: "terapiya",
         tjk: "терапия",
      },
      {
         id: 2,
         ru: "гастроэнторология ва гепатология",
         uz: "gastroenterologiya va gepatologiya",
         tjk: "гастроэнторология ва гепатология",
      },
      {
         id: 3,
         ru: "физиотерапия",
         uz: "fizioterapiya",
         tjk: "физиотерапия",
      },
      {
         id: 4,
         ru: "урология",
         uz: "urologiya",
         tjk: "урология",
      },
      {
         id: 5,
         ru: "офтальмология",
         uz: "oftalmologiya",
         tjk: "офтальмология",
      },
      {
         id: 6,
         ru: "лор",
         uz: "lor",
         tjk: "лор",
      },
      {
         id: 7,
         ru: "бепуштлик ва дисфункцияни даволаш.",
         uz: "bepushtlik va disfunktsiyani davolash.",
         tjk: "бепуштлик ва дисфункцияни даволаш.",
      },
      {
         id: 8,
         ru: "гинекология",
         uz: "ginekologiya",
         tjk: "гинекология",
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
                  src={"/images/160A2389.jpg"}
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
                  <div className="flex max-sm:flex-col justify-between">
                     <ul className="flex flex-col gap-3 mt-5">
                        {arr.slice(0, 5).map((item: any, idx: number) => {
                           return (
                              <li
                                 key={idx}
                                 className="flex items-center gap-3 text-[18px] font-medium"
                              >
                                 <LuShieldCheck className="text-[16px] text-[#1376F8]" />
                                 {locale === "ru"
                                    ? item.ru
                                    : locale === "uz"
                                    ? item.uz
                                    : item.tjk}
                              </li>
                           );
                        })}
                     </ul>
                     <ul className="flex flex-col gap-3 mt-5">
                        {arr.slice(5).map((item: any, idx: number) => {
                           return (
                              <li
                                 key={idx}
                                 className="flex items-center gap-3 text-[18px] font-medium"
                              >
                                 <LuShieldCheck className="text-[16px] text-[#1376F8]" />
                                 {locale === "ru"
                                    ? item.ru
                                    : locale === "uz"
                                    ? item.uz
                                    : item.tjk}
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
