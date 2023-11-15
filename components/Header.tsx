import TranslateContext from "@/context/useTranslate";
import { Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

import { BiCategory } from "react-icons/bi";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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
            <div className="">
               <p className="logo">Logo</p>
            </div>
            <nav>
               <ul>
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
               <button className="btn-md">
                  <BiCategory size={24} />
               </button>
               <button className="btn-pk">{translation.header.button}</button>
            </div>
         </div>
      </header>
   );
};

export default Header;
