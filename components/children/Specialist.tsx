import { useState } from "react";

interface SpecialistProps {
   item: {
      id: number;
      firstName: string;
      lastName: string;
      job: string;
   };
}

const Specialist: React.FC<SpecialistProps> = ({ item }) => {
   const [hide, setHide] = useState(false);

   return (
      <div
         onMouseLeave={() => setHide(false)}
         onMouseEnter={() => setHide(true)}
         style={{
            backgroundImage: `url('/images/doctors/doctor-${item.id}.webp')`,
         }}
         className={`min-h-[390px] flex rounded-lg p-5 bg-center bg-no-repeat bg-cover bg-blue-200`}
      >
         <div className="block-name backdrop-blur-3xl rounded-lg w-full mt-auto px-6 py-3">
            <p className="text-[22px] text-ellipsis font-semibold text-[#011632]">
               {item.firstName}
               <br />
               {item.lastName}
            </p>
            <p className={`${hide ? "" : "truncate"} text-sm text-gray-600`}>
               {item.job}
            </p>
         </div>
      </div>
   );
};

export default Specialist;
