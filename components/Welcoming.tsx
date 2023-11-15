import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { BsTelephone } from "react-icons/bs";
import axios from "axios";

interface WelcomingProps {
   item: any;
}
type Inputs = {
   number: string;
};
const Welcoming: React.FC<WelcomingProps> = ({ item }) => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<Inputs>();

   const chat_id = "1024211914";
   const TOKEN = "6725539258:AAHu_pC-On2ktRIXbN_qs8sWXfI4oXaRAls";
   const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

   const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

   const onSubmit: SubmitHandler<Inputs> = (data) => {
      let OBJ = `Номер телефона: ${data.number} \n`;
      setIsSubmitSuccessful(!isSubmitSuccessful);

      axios
         .post(URL, {
            chat_id,
            parse_mode: "html",
            text: OBJ,
         })
         .then((res) => {
            if (res.status === 200 || res.status === 201) {
               console.log(res);
            }
         });
   };

   useEffect(() => {
      setTimeout(() => {
         reset({
            number: "",
         });
      }, 1000);
   }, [isSubmitSuccessful]);

   return (
      <section className="custom-contaner flex max-md:flex-col items-center justify-between gap-20 max-md:gap-10 pb-28 max-md:pb-14">
         <div className="w-1/2 max-md:w-full">
            <h2>{item.title}</h2>

            <p className="mb-10 text-[18px] max-md:text-[16px] tracking-[0.27px] leading-[155%] text-[#3C4959]">
               {item.text}
            </p>

            {item.hide ? (
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex w-full relative"
               >
                  <BsTelephone className="absolute top-3 max-sm:top-4 left-5 max-md:left-3 text-[24px] max-sm:text-[20px] pointer-events-none text-[#CFCFCF]" />
                  <input
                     style={
                        errors.number
                           ? { border: "1px solid red" }
                           : { border: "1px solid #CECECE" }
                     }
                     className="w-full max-sm:text-sm pl-14 max-md:pl-10 py-3 rounded-l-lg border border-[#CECECE] placeholder:text-[#CFCFCF] max-sm:placeholder:text-sm"
                     {...register("number", {
                        required: true,
                        pattern: /[0-9]{7}$/,
                     })}
                     type="text"
                     placeholder="Enter your Phone Number"
                  />
                  <button className="px-8 py-3 font-semibold tracking-[0.24px] rounded-r-lg border border-[#1376F8] bg-[#1376F8] text-white">
                     {item.button}
                  </button>
               </form>
            ) : (
               <button className="px-8 max-sm:px-2 max-md:px-6 py-4 max-lg:py-3 max-sm:py-2 rounded-lg font-semibold tracking-[0.24px] duration-150 ease-in text-white bg-[#197dff] hover:bg-[#3f94fb]">
                  {item.button}
               </button>
            )}
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
