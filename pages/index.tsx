import { useContext, useEffect, useRef } from "react";
import TranslateContext from "@/context/useTranslate";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

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
import Head from "next/head";
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
         <Head>
            <meta charSet="UTF-8" />
            <title>Турон мед премиум</title>
            <link rel="icon" type="image/x-icon" href="/images/logo.png"></link>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <meta
               name="description"
               content="Медицинская клиника Турон в Самарканде – качественные услуги от опытных врачей. Заботимся о вашем здоровье с преданностью и профессионализмом."
            />
            <meta
               name="keywords"
               content="клиники в Самарканде,клиника Турон, медицина, Самарканд, здоровье, врачи, лечение"
            />
            <meta name="author" content="Клиника Турон" />
         </Head>
         <Header />
         <main className="">
            <Hero />
            <section className="custom-contaner">
               <div className="mb-28 max-md:mb-14">
                  <Image
                     className="w-full h-full rounded-lg"
                     src={"/images/all.webp"}
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
            <section>
               <div className="custom-contaner w-full py-10 max-md:py-5">
                  <Fancybox
                     options={{
                        Carousel: {
                           infinite: false,
                        },
                     }}
                  >
                     <div className="flex justify-center gap-5 max-sm:gap-2">
                        <a
                           className="block w-fit"
                           data-fancybox="gallery"
                           href="/video/video-1.mp4"
                        >
                           <video
                              controls
                              className="max-w-sm w-full object-cover"
                           >
                              <source src="/video/video-1.mp4" />
                           </video>
                        </a>
                        <a
                           className="block w-fit"
                           data-fancybox="gallery"
                           href="/video/video-2.mp4"
                        >
                           <video
                              controls
                              className="max-w-sm w-full object-cover"
                           >
                              <source src="/video/video-2.mp4" />
                           </video>
                        </a>
                     </div>
                  </Fancybox>
               </div>
            </section>
            <Form />
            <Promo />
         </main>
         <Footer />
      </>
   );
}

function Fancybox(props) {
   const containerRef = useRef(null);

   useEffect(() => {
      const container = containerRef.current;

      const delegate = props.delegate || "[data-fancybox]";
      const options = props.options || {};

      NativeFancybox.bind(container, delegate, options);

      return () => {
         NativeFancybox.unbind(container);
         NativeFancybox.close();
      };
   });

   return <div ref={containerRef}>{props.children}</div>;
}
