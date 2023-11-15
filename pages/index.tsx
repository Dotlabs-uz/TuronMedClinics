import TranslateContext from "@/context/useTranslate";
import { useContext } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cotegoris from "@/components/Cotegoris";
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
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   const translation: any = useContext(TranslateContext);

   const arr = [
      {
         id: 0,
         title: translation.welcoming.consultation,
         text: translation.welcoming.title2,
         button: translation.welcoming.submit,
         img: "",
         hide: true,
      },
      {
         id: 0,
         title: translation.welcoming.title,
         text: translation.welcoming.text,
         button: translation.welcoming.button,
         img: "",
         hide: false,
      },
   ];

   return (
      <>
         <Header />
         <main className="">
            <Hero />
            <Cotegoris />
            {arr.slice(0, 1).map((item) => (
               <Welcoming item={item} key={item.id} />
            ))}
            <AboutUs />
            {arr.slice(1, 2).map((item) => (
               <Welcoming item={item} key={item.id} />
            ))}
            <Video />
            <Specialists />
            <Reviews />
            <FAQ />
            <Form />
            <Promo />
         </main>
         <Footer />
      </>
   );
}
