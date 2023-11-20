import TranslateContext from "@/context/useTranslate";
import { Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

import { BiCategory } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
   const [hide, setHide] = useState<boolean>(false);
   const router = useRouter();
   const { locale } = router;
   const [localeValue, setLocaleValue] = useState<any>(locale);
   const translation: any = useContext(TranslateContext);

   const changeLang = (e: any) => {
      const locale = e;
      router.push(
         { pathname: router.pathname, query: router.query },
         router.asPath,
         { locale }
      );
      setLocaleValue(locale);
   };

   return (
      <header className="custom-contaner">
         <div className="header">
            <Link className="logo" href={"/"}>
               <Image
                  src={"/images/logo.png"}
                  width={1000}
                  height={1000}
                  alt="logo"
               />
            </Link>
            <nav>
               <ul
                  className={`${
                     hide ? "flex" : "max-lg:hidden"
                  } max-lg:w-full max-lg:h-full max-lg:p-5 flex max-lg:flex-col items-center max-lg:items-start gap-7 max-lg:pt-14 max-lg:gap-5 max-sm:w-full max-lg:fixed z-50 top-0 left-0 max-lg:backdrop-blur-md max-lg:bg-white/50`}
               >
                  <li onClick={() => setHide(false)}>
                     <Link href={"#specialists"}>
                        {translation?.nav?.specialists}
                     </Link>
                  </li>
                  <li onClick={() => setHide(false)}>
                     <Link href={"#aboutUs"}>{translation.nav.AboutUs}</Link>
                  </li>
                  <li onClick={() => setHide(false)}>
                     <Link href={"#FAQ"}>{translation.nav.FAQ}</Link>
                  </li>
                  <li onClick={() => setHide(false)}>
                     <Link href={"#cotegoris"}>
                        {translation.nav.Cotegoris}
                     </Link>
                  </li>
                  <li onClick={() => setHide(false)}>
                     <Link href={"#contacts"}>{translation.nav.contact}</Link>
                  </li>
                  <li>
                     <button className="py-3 px-5 rounded-lg max-md:block hidden text-white bg-[#197dff]">
                        {translation.header.button}
                     </button>
                  </li>
                  <li>
                     <button
                        onClick={() => setHide(false)}
                        className="absolute top-5 right-5 max-lg:block hidden"
                     >
                        <IoClose color="red" size={25} />
                     </button>
                  </li>
               </ul>
            </nav>
            <div className="header-btns">
               <Select
                  defaultValue={localeValue}
                  style={{
                     width: "80px",
                     display: "flex",
                     justifyItems: "center",
                     justifyContent: "center",
                  }}
                  value={localeValue}
                  onChange={(e: any) => changeLang(e)}
                  options={[
                     {
                        value: "ru",
                        label: (
                           <p className="flex items-center gap-1">
                              {/* <Image
                                 width={100}
                                 height={100}
                                 src="/images/russia.svg"
                                 alt="russia"
                                 className="w-[20px]"
                              /> */}
                              {"RU"}
                           </p>
                        ),
                     },
                     {
                        value: "uz",
                        label: (
                           <span className="flex items-center gap-1">
                              {/* <Image
                                 width={100}
                                 height={100}
                                 src="/images/uzb.png"
                                 alt="uzb"
                                 className="w-[20px]"
                              /> */}
                              {"UZ"}
                           </span>
                        ),
                     },
                     {
                        value: "tjk",
                        label: (
                           <span className="flex items-center gap-1">
                              {/* <Image
                                 width={100}
                                 height={100}
                                 src="/images/eng_flag.webp"
                                 alt="eng"
                                 className="w-[20px] h-[20px] rounded-full"
                              /> */}
                              {"TJK"}
                           </span>
                        ),
                     },
                  ]}
               />
               <button onClick={() => setHide(true)} className="btn-md">
                  <BiCategory size={24} />
               </button>
               <button className="btn-pk">{translation.header.button}</button>
            </div>
         </div>
      </header>
   );
};

export default Header;
