import TranslateContext from "@/context/useTranslate";
import { useContext, useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type Inputs = {
   firstName: string;
   lastName: string;
   email: string;
   number: string;
   date: string;
   message: string;
};

interface FormProps {}
const Form: React.FC<FormProps> = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<Inputs>();

   const translation: any = useContext(TranslateContext);
   const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
   const chat_id = "1024211914";
   const TOKEN = "6725539258:AAHu_pC-On2ktRIXbN_qs8sWXfI4oXaRAls";
   const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

   const onSubmit: SubmitHandler<Inputs> = (data) => {
      let OBJ = `Имя: ${data.firstName} \n`;
      OBJ += `Фамилия: ${data.lastName} \n`;
      OBJ += `Электронная почта: ${data.email} \n`;
      OBJ += `Номер телефона: ${data.number} \n`;
      OBJ += `Датa: ${data.date} \n`;
      OBJ += `Сообщение: ${data.message}`;

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
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            date: "",
            message: "",
         });
      }, 1000);
   }, [isSubmitSuccessful]);

   return (
      <section className="bg-[#E6F6FE] py-20">
         <div className="custom-contaner">
            <div className="max-w-2xl m-auto mb-10">
               <h2 className="sm:text-center">{translation.form.title}</h2>

               <p className="px-20 max-lg:px-10 max-sm:p-0 text-[18px] max-md:text-[16px] max-sm:text-[18px] tracking-[0.27px] sm:text-center leading-[155%] text-[#3C4959]">
                  {translation.form.title2}
               </p>
            </div>
            <div className="flex max-lg:flex-col gap-9">
               <div className="w-full flex flex-col gap-5">
                  <div className="relative rounded-lg overflow-hidden border-2 border-[#25B4F8]">
                     <iframe
                        className="w-full min-h-[320px] rounded-lg"
                        src="https://yandex.uz/map-widget/v1/?ll=67.042036%2C39.649422&z=11.83"
                     ></iframe>
                     <div className="w-full absolute bottom-0 left-0 flex items-center gap-4 p-5 rounded-lg shadow-[0px_5px_50px_#00000014] bg-white">
                        <div className="w-12 h-12 rounded-full bg-[#1376F8]"></div>
                        <div className="max-w-[260px]">
                           <p className="text-[18px] font-medium leading-[155%]">
                              Office Timings
                           </p>
                           <p>
                              Monday - Saturday (9:00am to 5pm) Sunday (Closed)
                           </p>
                        </div>
                     </div>
                  </div>

                  {[0, 1, 2, 3].map((item: number) => {
                     return (
                        <div
                           key={item}
                           className="w-full flex items-center gap-4 p-5 rounded-lg shadow-[0px_5px_50px_#00000014] bg-white"
                        >
                           <div className="w-12 h-12 rounded-full bg-[#1376F8]"></div>
                           <div className="max-w-[260px]">
                              <p className="text-[18px] font-medium leading-[155%]">
                                 Office Timings
                              </p>
                              <p>
                                 Monday - Saturday (9:00am to 5pm) Sunday
                                 (Closed)
                              </p>
                           </div>
                        </div>
                     );
                  })}
               </div>

               <form
                  action={"telegram.php"}
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full sm:p-10 rounded-lg sm:border-2 sm:border-[#25B4F8]"
               >
                  <div className="w-full flex max-sm:flex-col items-center gap-8">
                     <label className="w-full relative" htmlFor="first">
                        <p className="mb-2 text-[18px] font-medium leading-[155%] tracking-[0.27px] cursor-pointer text-[#3C4959]">
                           {translation.form.firstName}
                        </p>
                        <input
                           {...register("firstName", { required: true })}
                           id="first"
                           type="text"
                           placeholder="First name"
                           className="w-full px-4 py-4 rounded-lg border-2 border-[#D0D5DD]"
                        />
                        {errors.firstName && (
                           <p className="absolute -bottom-5 left-2 text-sm text-red-600">
                              Напишите своё имя
                           </p>
                        )}
                     </label>

                     <label className="w-full relative" htmlFor="last">
                        <p className="mb-2 text-[18px] font-medium leading-[155%] tracking-[0.27px] cursor-pointer text-[#3C4959]">
                           {translation.form.lastName}
                        </p>
                        <input
                           {...register("lastName", { required: true })}
                           id="last"
                           type="text"
                           placeholder="Last name"
                           className="w-full px-4 py-4 rounded-lg border-2 border-[#D0D5DD]"
                        />
                        {errors.firstName && (
                           <p className="absolute -bottom-5 left-2 text-sm text-red-600">
                              Напишите свою фамилию
                           </p>
                        )}
                     </label>
                  </div>

                  <div className="w-full flex flex-col gap-5 mt-3">
                     <label className="relative" htmlFor="email">
                        <p className="mb-2 text-[18px] font-medium leading-[155%] tracking-[0.27px] cursor-pointer text-[#3C4959]">
                           {translation.form.email}
                        </p>
                        <input
                           {...register("email", { required: true })}
                           id="email"
                           type="text"
                           placeholder="you@company.com"
                           className="w-full px-4 py-4 rounded-lg border-2 border-[#D0D5DD]"
                        />
                        {errors.email && (
                           <p className="absolute -bottom-5 left-2 text-sm text-red-600">
                              Напишите свою электронную почту
                           </p>
                        )}
                     </label>
                     <label className="relative" htmlFor="number">
                        <p className="mb-2 text-[18px] font-medium leading-[155%] tracking-[0.27px] cursor-pointer text-[#3C4959]">
                           {translation.form.number}
                        </p>
                        <input
                           {...register("number", {
                              required: true,
                              pattern: /[0-9]{7}$/,
                           })}
                           id="number"
                           type="text"
                           placeholder="+1 (555) 000-0000"
                           className="w-full px-4 py-4 rounded-lg border-2 border-[#D0D5DD]"
                        />
                        {errors.number && (
                           <p className="absolute -bottom-5 left-2 text-sm text-red-600">
                              Напишите свой номер
                           </p>
                        )}
                     </label>
                     <label className="relative" htmlFor="date">
                        <p className="mb-2 text-[18px] font-medium leading-[155%] tracking-[0.27px] cursor-pointer text-[#3C4959]">
                           {translation.form.date}
                        </p>
                        <input
                           {...register("date", { required: true })}
                           id="date"
                           type="date"
                           placeholder="December - 02-2022"
                           className="w-full px-4 py-4 rounded-lg border-2 border-[#D0D5DD]"
                        />
                        {errors.date && (
                           <p className="absolute -bottom-5 left-2 text-sm text-red-600">
                              Выберите дату
                           </p>
                        )}
                     </label>
                     <label className="relative" htmlFor="message">
                        <p className="mb-2 text-[18px] font-medium leading-[155%] tracking-[0.27px] cursor-pointer text-[#3C4959]">
                           {translation.form.message}
                        </p>
                        <textarea
                           {...register("message")}
                           name="message"
                           id="message"
                           className="w-full h-[200px] px-4 py-4 rounded-lg border-2 borer-[#D0D5DD]"
                        ></textarea>
                     </label>
                  </div>

                  <div className="w-fit m-auto">
                     <button
                        onClick={() => setIsSubmitSuccessful(true)}
                        className="mt-8 max-lg:text-[14px] max-sm:text-base px-8 max-sm:px-4 max-md:px-6 py-4 max-lg:py-3 rounded-lg font-semibold tracking-[0.24px] duration-150 ease-in text-white bg-[#197dff] hover:bg-[#3f94fb]"
                     >
                        {translation.form.button}
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Form;
