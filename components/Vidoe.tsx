import TranslateContext from "@/context/useTranslate";
import { useContext, useState } from "react";

interface VideoProps {}
const Video: React.FC<VideoProps> = () => {
   const translation: any = useContext(TranslateContext);

   return (
      <section className="custom-contaner pb-28 max-md:pb-14">
         <div className="max-w-2xl m-auto mb-10 max-md:mb-5">
            <h2 className="sm:text-center">{translation.video.title}</h2>

            <p className="px-20 max-lg:px-10 max-sm:p-0 text-[18px] max-md:text-[16px] tracking-[0.27px] sm:text-center leading-[155%] text-[#3C4959]">
               {translation.video.title2}
            </p>
         </div>

         <div className="w-full  rounded-lg bg-slate-400">
            <video controls className="w-full object-cover">
               <source src="/video/turon.mp4" />
            </video>
         </div>

         {/* <div className="w-fit m-auto">
            <button
               onClick={() => setPlay(true)}
               className="mt-8 max-lg:text-[14px] max-sm:text-base mr-5 max-lg:mr-3 px-8 max-sm:px-4 max-md:px-6 py-4 max-lg:py-3 rounded-lg font-semibold tracking-[0.24px] duration-150 ease-in text-white bg-[#197dff] hover:bg-[#3f94fb]"
            >
               {translation.video.button}
            </button>
         </div> */}
      </section>
   );
};

export default Video;
