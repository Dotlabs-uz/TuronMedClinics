import { useState } from "react";
import { useRouter } from "next/router";

import { FaTooth } from "react-icons/fa";

interface ItemProps {
   item: any;
}

const Item: React.FC<ItemProps> = ({ item }) => {
   const router = useRouter();
   const { locale } = router;
   const [more, setMore] = useState(false);

   return (
      <div className="min-h-[350px] flex flex-col gap-5 items-center justify-between rounded-lg px-10 max-md:px-5 py-8 bg-white">
         <div className="flex flex-col items-center">
            <div className="w-fit p-2 rounded-full bg-[#25B4F8]">
               <FaTooth className="text-white text-[40px]" />
            </div>
            <div className="">
               <h3 className="my-2 text-[22px] font-medium text-center">
                  {item.titleRu}
                  {locale === "ru"
                     ? item.titleRu
                     : locale === "uz"
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
