import Image from "next/image";
import TranslateContext from "@/context/useTranslate";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { BsTelephone } from "react-icons/bs";

interface WelcomingProps {}
type Inputs = {
   number: number;
};
const Welcoming: React.FC<WelcomingProps> = () => {
   const translation: any = useContext(TranslateContext);

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

   return (
      <section className="custom-contaner flex max-md:flex-col items-center justify-between gap-20 max-md:gap-10 pb-28 max-md:pb-14">
         <div className="w-1/2 max-md:w-full">
            <h2>{translation.welcoming.title}</h2>

            <p className="mb-10 text-[18px] max-md:text-[16px] tracking-[0.27px] leading-[155%] text-[#3C4959]">
               {translation.welcoming.title2}
            </p>

            <form
               onSubmit={handleSubmit(onSubmit)}
               className="flex w-full relative"
            >
               <BsTelephone className="absolute top-3 max-sm:top-4 left-5 max-md:left-3 text-[24px] max-sm:text-[20px] pointer-events-none text-[#CFCFCF]" />
               <input
                  className="w-full max-sm:text-sm pl-14 max-md:pl-10 py-3 rounded-l-lg border border-[#CECECE] placeholder:text-[#CFCFCF] max-sm:placeholder:text-sm"
                  {...register("number")}
                  type="text"
                  placeholder="Enter your Phone Number"
               />
               <button className="px-8 py-3 font-semibold tracking-[0.24px] rounded-r-lg border border-[#1376F8] bg-[#1376F8] text-white">
                  {translation.welcoming.button}
               </button>
            </form>
         </div>

         <div className="block-img flex relative max-w-[400px] min-h-[350px] max-md:min-h-[350px] mr-10 max-md:mr-5">
            <Image
               className="max-w-[450px] min-h-[350px] max-xl:max-w-[350px] max-sm:min-h-[330px] w-full object-cover rounded-lg mt-auto"
               src={"/images/160A2400.jpg"}
               width={1000}
               height={1000}
               alt="photo"
            />
         </div>
      </section>
   );
};

export default Welcoming;
