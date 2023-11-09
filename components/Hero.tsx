import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";

interface HeroProps {}
const Hero: React.FC<HeroProps> = () => {
   return (
      <section className="custom-contaner hero">
         <div className="hero-left">
            <div className="hero-left-texts">
               <h1>
                  Get Ready For Four Best Ever Dental
                  <span>Experience!</span>
               </h1>

               <p className="max-w-lg w-full text-[18px] max-lg:text-[12px] max-sm:text-[18px] tracking-[0.27px] leading-[155%] text-[#3C4959]">
                  We use only the best quality materials on the market in order
                  to provide the best products to our patients, So don’t worry
                  about anything and book yourself.
               </p>
            </div>

            <div className="conect">
               <div className="btns">
                  <button className="btn">Book an appointment</button>
                  <button className="phone">
                     <FaPhoneVolume className="icon" />
                  </button>
               </div>

               <div className="conect-number">
                  <p className="text">Dental 24H Emergency</p>
                  <p className="number">0900-78601</p>
               </div>
            </div>
         </div>

         <div className="hero-right">
            <Image
               src={"/images/photo.png"}
               width={1000}
               height={1000}
               alt="doctor"
            />
         </div>
      </section>
   );
};

export default Hero;
