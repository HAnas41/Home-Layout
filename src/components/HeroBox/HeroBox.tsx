import { heroItems } from "@/utils/helper/helper";


function HeroBox() {
  return (
    <div className=" flex justify-center flex-wrap    gap-4">
       {
        heroItems.map((e,i) => {
            return(
                <div className="flex flex-col items-center text-center p-8 gap-3 shadow-md">
                <h3 className="text-2xl font-bold ">{e.title}</h3>

      <p className="text-gray-700 text-sm leading-relaxed w-[300px]">{e.description}</p>
                </div>
            )
        })
     }

    </div>
  );
}

export default HeroBox;
