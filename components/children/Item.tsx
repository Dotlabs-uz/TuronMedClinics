import { useState } from "react";
import { useRouter } from "next/router";

interface ItemProps {
   item: any;
}

const Item: React.FC<ItemProps> = ({ item }) => {
   const router = useRouter();
   const { locale } = router;
   const [more, setMore] = useState(false);

   console.log(locale);

   return (
      <div className="min-h-[350px] flex flex-col gap-5 items-center justify-between rounded-lg px-10 max-md:px-5 py-8 bg-white">
         <div className="flex flex-col items-center">
            <div className="">
               <h3 className="my-2 text-[22px] font-medium text-center">
                  {locale == "ru"
                     ? item.titleRu
                     : locale == "uz"
                     ? item.titleUz
                     : item.titleTjk}
               </h3>

               <p
                  className={`text-center ${
                     item.ru.length > 80 && !more ? "title" : ""
                  }`}
               >
                  {locale === "ru"
                     ? item.ru
                     : locale === "uz"
                     ? item.uz
                     : item.tjk}
               </p>
            </div>
         </div>

         {item.ru.length > 80 ? (
            <div className="mt-auto">
               <button
                  onClick={() => setMore(!more)}
                  className="font-medium underline underline-offset-2"
               >
                  {!more ? "Batafsil →" : "Yashirish"}
               </button>
            </div>
         ) : null}
      </div>
   );
};

export default Item;
