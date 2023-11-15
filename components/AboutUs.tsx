import Image from "next/image";
import TranslateContext from "@/context/useTranslate";
import { useContext } from "react";

import { LuShieldCheck } from "react-icons/lu";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
   const translation: any = useContext(TranslateContext);

   const arr = [
      {
         id: 0,
         titleRu: "кардиология",
         titleUz: "кардиология",
         titleTjk: "кардиология",
      },
      {
         id: 1,
         titleRu: "терапия",
         titleUz: "терапия",
         titleTjk: "терапия",
      },
      {
         id: 2,
         titleRu: "гастроэнторология ва гепатология",
         titleUz: "гастроэнторология ва гепатология",
         titleTjk: "гастроэнторология ва гепатология",
      },
      {
         id: 3,
         titleRu: "физиотерапия",
         titleUz: "физиотерапия",
         titleTjk: "физиотерапия",
      },
      {
         id: 4,
         titleRu: "урология",
         titleUz: "урология",
         titleTjk: "урология",
      },
      {
         id: 5,
         titleRu: "урология",
         titleUz: "урология",
         titleTjk: "урология",
      },
      {
         id: 6,
         titleRu: "офтальмология",
         titleUz: "офтальмология",
         titleTjk: "офтальмология",
      },
      {
         id: 7,
         titleRu: "лор",
         titleUz: "лор",
         titleTjk: "лор",
      },
      {
         id: 8,
         titleRu: "бепуштлик ва дисфункцияни даволаш.",
         titleUz: "бепуштлик ва дисфункцияни даволаш.",
         titleTjk: "бепуштлик ва дисфункцияни даволаш.",
      },
      {
         id: 8,
         titleRu: "гинекология",
         titleUz: "гинекология",
         titleTjk: "гинекология",
      },
   ];

   return (
      <section className="custom-contaner max-sm:px-0 pb-28 max-md:pb-14">
         <div id="aboutUs" className="flex max-lg:flex-col items-center justify-between gap-16 max-xl:gap-10 py-14 px-20 max-xl:px-10 max-md:px-5 bg-[#E6F6FE]">
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
                                 {item.titleRu}
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
                                 {item.titleRu}
                              </li>
                           );
                        })}
                     </ul>
                  </div>
                  <button className="mt-8 max-lg:text-[14px] max-sm:text-base mr-5 max-lg:mr-3 px-8 max-sm:px-4 max-md:px-6 py-4 max-lg:py-3 rounded-lg font-semibold tracking-[0.24px] duration-150 ease-in text-white bg-[#197dff] hover:bg-[#3f94fb]">
                     {translation.about.button}
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutUs;
