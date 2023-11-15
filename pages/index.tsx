import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cotegoris from "@/components/Cotegoris";
import Welcoming from "@/components/Welcoming";
import AboutUs from "@/components/AboutUs";
import Video from "@/components/Vidoe";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";
import Specialists from "@/components/Specialists";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Form from "@/components/Form";
import Promo from "@/components/Promo";
const inter = Inter({ subsets: ["latin"] });
   
export default function Home() {
   return (
      <>
         <Header />
         <main className="">
            <Hero />
            <Cotegoris />
            <Welcoming />
            <AboutUs />
            <Welcoming />
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
