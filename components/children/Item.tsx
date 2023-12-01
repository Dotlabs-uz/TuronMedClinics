import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface ItemProps {
   item: any;
}

const Item: React.FC<ItemProps> = ({ item }) => {
   const router = useRouter();
   const { locale } = router;
   const [more, setMore] = useState(false);

   return (
      <div
         className={`min-h-[350px] flex flex-col gap-5 items-center justify-between rounded-lg overflow-hidden px-10 max-md:px-5 py-8 relative z-10`}
      >
         <div className="w-full h-full absolute top-0 left-0 z-0 bg-black/50"></div>
         <Image
            className="w-full h-full object-cover absolute top-0 left-0 z-[-2]"
            src={`/images/salt/photo-${item.img}.webp`}
            width={1000}
            height={1000}
            alt="salt"
         />
         <div className="flex flex-col items-center relative z-20">
            <div className="">
               <h3 className="my-2 text-[22px] font-medium text-center text-white">
                  {locale == "ru"
                     ? item.titleRu
                     : locale == "uz"
                     ? item.titleUz
                     : item.titleRu}
               </h3>

               <p
                  className={`text-center text-white ${
                     item.ru.length > 80 && !more ? "title" : ""
                  }`}
               >
                  {locale === "ru"
                     ? item.ru
                     : locale === "uz"
                     ? item.uz
                     : item.ru}
               </p>
            </div>
         </div>

         {item.ru.length > 80 ? (
            <div className="mt-auto relative z-20">
               <button
                  onClick={() => setMore(!more)}
                  className="font-medium underline underline-offset-2 text-white"
               >
                  {!more
                     ? locale === "ru"
                        ? "подробнее →"
                        : locale === "uz"
                        ? "Batafsil →"
                        : item.ru
                     : locale === "ru"
                     ? "Скрыть →"
                     : locale === "uz"
                     ? "Yashirish"
                     : item.ru}
               </button>
            </div>
         ) : null}
      </div>
   );
};

export default Item;
