import ru from "@/languages/ru/ru";
import tjk from "@/languages/tjk/tjk";
import uz from "@/languages/uz/uz";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import TranslateContext from "@/context/useTranslate";

export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   const { locale } = router;
   
   const translation = locale === "uz" ? uz : locale === "ru" ? ru : tjk;

   return (
      <TranslateContext.Provider value={translation}>
         <Component {...pageProps} />;
      </TranslateContext.Provider>
   );
}
