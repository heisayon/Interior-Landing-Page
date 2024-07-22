import Sample from "../assets/photo1.png";
import Designer from "../assets/photo2.png";

function Image() {
  return (
    <div className="lg:mt-16 max-lg:mt-9 relative">
      <img src={Sample} className="w-full h-full" />
      <div className=" absolute text-[#fff] bg-defaultBg w-4/6 right-0 mr-8 top-[90%] max-lg:w-[80%] pt-2 px-5 pb-2 shadow-xl">
        <header className=" flex gap-3 items-center">
          <img
            src={Designer}
            alt="Interior Designer"
            className="w-[50px] h-[50px] rounded-full"
          />
          <div className=" font-Montserrat">
            <h1 className=" font-medium text-sm">Aliza Webber</h1>
            <p className=" font-medium text-xs text-[#828282]">
              Interior designer
            </p>
          </div>
        </header>
        <section className="mt-2">
          <h1 className="font-Lora text-2xl font-bold lg:w-[287px] max-lg:w-[218px]">
            Designed in 2020 by Aliza Webber
          </h1>
        </section>
      </div>
    </div>
  );
}

export default Image;
