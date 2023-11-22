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
         label: translation.FAQ.question1,
         children: translation.FAQ.answer1,
      },
      {
         key: "2",
         label: translation.FAQ.question2,
         children: translation.FAQ.answer2,
      },
      {
         key: "3",
         label: translation.FAQ.question3,
         children: translation.FAQ.answer3,
      },
      {
         key: "4",
         label: translation.FAQ.question4,
         children: translation.FAQ.answer4,
      },
      {
         key: "5",
         label: translation.FAQ.question5,
         children: translation.FAQ.answer5,
      },
      {
         key: "6",
         label: translation.FAQ.question6,
         children: translation.FAQ.answer6,
      },
      {
         key: "7",
         label: translation.FAQ.question7,
         children: translation.FAQ.answer7,
      },
      {
         key: "8",
         label: translation.FAQ.question8,
         children: translation.FAQ.answer8,
      },
   ];

   return (
      <section className="custom-contaner pb-28 max-md:pb-14">
         <div id="FAQ">
            <div className="max-w-lg m-auto mb-14">
               <h2 className="text-center">{translation.FAQ.title}</h2>
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
