import TranslateContext from "@/context/useTranslate";
import { useContext } from "react";

import type { CollapseProps } from "antd";
import { Collapse } from "antd";

import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

interface FAQProps {}
const FAQ: React.FC<FAQProps> = () => {
   const translation: any = useContext(TranslateContext);

   const items: CollapseProps["items"] = [
      {
         key: "1",
         label: "This is panel header 1",
         children:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi facilis quasi voluptatum maxime, incidunt fugiat dolorum autem omnis labore, expedita, natus nesciunt eos aliquam alias! Sed, esse. Porro, ipsum error.",
      },
      {
         key: "2",
         label: "This is panel header 2",
         children:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi facilis quasi voluptatum maxime, incidunt fugiat dolorum autem omnis labore, expedita, natus nesciunt eos aliquam alias! Sed, esse. Porro, ipsum error.",
      },
      {
         key: "3",
         label: "This is panel header 3",
         children:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi facilis quasi voluptatum maxime, incidunt fugiat dolorum autem omnis labore, expedita, natus nesciunt eos aliquam alias! Sed, esse. Porro, ipsum error.",
      },
   ];

   return (
      <section className="custom-contaner pb-28 max-md:pb-14">
         <div id="FAQ">
            <div className="max-w-lg m-auto mb-14">
               <h2 className="sm:text-center">{translation.FAQ.title}</h2>
            </div>
            <div className="max-w-2xl m-auto">
               <Collapse
                  items={items}
                  bordered={false}
                  defaultActiveKey={["1"]}
               />
            </div>
         </div>
      </section>
   );
};

export default FAQ;
