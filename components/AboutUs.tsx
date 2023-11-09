import Image from "next/image";

import { LuShieldCheck } from "react-icons/lu";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = () => {
   return (
      <section className="custom-contaner max-sm:px-0 pb-28 max-md:pb-14">
         <div className="flex max-md:flex-col items-center justify-between gap-16 max-xl:gap-10 py-14 px-20 max-xl:px-10 max-md:px-5 bg-[#E6F6FE]">
            <div className="flex w-2/5 max-lg:w-1/2 max-md:w-full min-h-[420px]">
               <Image
                  className="w-auto h-auto object-cover rounded-lg"
                  src={"/images/160A2389.jpg"}
                  width={1000}
                  height={1000}
                  alt="about Us"
               />
            </div>
            <div className="w-1/2 max-md:w-full">
               <div className="">
                  <h2>Why choose Smile for all your dental treatments?</h2>
                  <p className="text-[18px] leading-[155%] text-[#3C4959]">
                     We use only the best quality materials on the market in
                     order to provide the best products to our patients.
                  </p>
                  <ul className="flex flex-col gap-3 mt-5">
                     {[0, 1, 2, 3].map((item: number) => {
                        return (
                           <li
                              key={item}
                              className="flex items-center gap-3 text-[18px] font-medium"
                           >
                              <LuShieldCheck className="text-[16px] text-[#1376F8]" />
                              Top quality dental teamfwe
                           </li>
                        );
                     })}
                  </ul>
                  <button className="mt-8 max-lg:text-[14px] max-sm:text-base mr-5 max-lg:mr-3 px-8 max-sm:px-4 max-md:px-6 py-4 max-lg:py-3 rounded-lg font-semibold tracking-[0.24px] duration-150 ease-in text-white bg-[#197dff] hover:bg-[#3f94fb]">
                     Book an appointment
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutUs;
