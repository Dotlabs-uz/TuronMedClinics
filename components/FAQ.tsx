import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

interface FAQProps {}
const FAQ: React.FC<FAQProps> = () => {
   return (
      <section className="custom-contaner">
         <div className="">
            <div className="max-w-lg m-auto mb-10">
               <h2 className="sm:text-center">Frequently Ask Question </h2>

               <p className="px-6 max-lg:px-10 max-sm:p-0 text-[18px] max-md:text-[16px] tracking-[0.27px] sm:text-center leading-[155%] text-[#3C4959]">
                  We use only the best quality materials on the market in order
                  to provide the best products to our patients.
               </p>
            </div>

            <div className="">
               <div className="">
                  <div className="">
                     <div className="">
                        <p>Can I see who reads my email campaigns?</p>
                     </div>
                     <div className="">
                        <BiMinusCircle />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FAQ;
