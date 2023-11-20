import TranslateContext from "@/context/useTranslate";
import { useContext } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Welcoming from "@/components/Welcoming";
import AboutUs from "@/components/AboutUs";
import Video from "@/components/Vidoe";
import Specialists from "@/components/Specialists";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Form from "@/components/Form";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   const translation: any = useContext(TranslateContext);

   const arr = [
      {
         id: 0,
         title: translation.welcoming.consultation,
         text: translation.welcoming.title2,
         button: translation.welcoming.submit,
         placeholder: translation.welcoming.placeholder,
         img: "160A2400",
         hide: true,
      },
      {
         id: 1,
         title: translation.welcoming.title,
         text: translation.welcoming.text,
         button: translation.welcoming.button,
         placeholder: translation.welcoming.placeholder,
         img: "160A2427",
         hide: false,
      },
   ];

   return (
      <>
         <Header />
         <main className="">
            <Hero />
            <section className="custom-contaner">
               <div className="mb-28 max-md:mb-14">
                  <Image
                     className="w-full h-full rounded-lg"
                     src={"/images/all.jpg"}
                     width={1000}
                     height={1000}
                     alt="doctors"
                  />
               </div>
            </section>
            <Categories />
            {arr.slice(0, 1).map((item) => (
               <Welcoming item={item} key={item.id} />
            ))}
            <AboutUs />
            {arr.slice(1, 2).map((item) => (
               <Welcoming item={item} key={item.id} />
            ))}
            <Video />
            <Specialists />
            {/* <Reviews /> */}
            <FAQ />
            <Form />
            <Promo />
         </main>
         <Footer />
      </>
   );
}
