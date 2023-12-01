import Image from "next/image";
import TranslateContext from "@/context/useTranslate";
import { useContext } from "react";

interface PromoProps {}

const Promo: React.FC<PromoProps> = () => {
   const translation: any = useContext(TranslateContext);

   return (
      <section className="custom-contaner max-md:bg-[#011632]">
         <div className="flex max-md:flex-col items-center justify-between gap-5 max-md:gap-9 mx-10 max-lg:mx-5 max-md:mx-0 mt-28 max-md:mt-14 px-11 py-12 max-lg:px-7 max-lg:py-8 max-md:px-0 rounded-lg md:bg-[#011632]">
            <div className="max-w-xl w-full">
               <h2 className="text-white">{translation.promo.title}</h2>
               <p className="text-[18px] text-[#FFFFFF]">
                  {translation.promo.text}
               </p>
            </div>
            <div className="">
               <Image
                  className="max-w-[350px] min-h-[300px] max-lg:max-w-[300px] max-lg:max-h-[200px] object-cover rounded-lg"
                  src={"/images/160A2332.webp"}
                  width={1000}
                  height={1000}
                  alt="photo"
               />
            </div>
         </div>
      </section>
   );
};

export default Promo;
