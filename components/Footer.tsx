import TranslateContext from "@/context/useTranslate";
import { useContext } from "react";

import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

interface FooterProps {}
const Footer: React.FC<FooterProps> = () => {
   const translation: any = useContext(TranslateContext);

   return (
      <footer className="custom-contaner">
         <div className="footer">
            <div className="footer-top">
               <div className="">
                  <div className="logo w-32 max-sm:w-2/4">
                     <Image
                        src={"/images/logo.png"}
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </div>
                  <div id="contacts">
                     <ul>
                        <li className="text-2xl font-semibold mt-5">
                           <a href="tel:+998(55)703-03-03">+998(55)703-03-03</a>
                        </li>
                        <li className="text-2xl font-semibold mt-2">
                           <a href="tel:+998(55)703-03-04">+998(55)703-03-04</a>
                        </li>
                        <li className="text-lg">
                           {translation.footer.location}
                        </li>
                     </ul>
                  </div>
               </div>
               <nav>
                  <ul>
                     <li>
                        <Link href={"#specialists"}>
                           {translation?.nav?.specialists}
                        </Link>
                     </li>
                     <li>
                        <Link href={"#aboutUs"}>{translation.nav.AboutUs}</Link>
                     </li>
                     <li>
                        <Link href={"#FAQ"}>{translation.nav.FAQ}</Link>
                     </li>
                     <li>
                        <Link href={"#cotegoris"}>
                           {translation.nav.Cotegoris}
                        </Link>
                     </li>
                     <li>
                        <Link href={"#contacts"}>
                           {translation.nav.contact}
                        </Link>
                     </li>
                  </ul>
               </nav>
            </div>
            <hr />
            <div className="footer-bottom">
               <div>
                  <p>{translation.footer.uifry}</p>
               </div>
               <div>
                  <ul className="social">
                     <Link
                        href={"https://www.instagram.com/turon.med.premium/"}
                     >
                        <li>
                           <FiInstagram className="icon" />
                        </li>
                     </Link>
                     <Link className="link" href={"t.me/turonmedpremium"}>
                        <li>
                           <FaTelegramPlane className="icon" />
                        </li>
                     </Link>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
