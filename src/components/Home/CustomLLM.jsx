import CustomLlm from "../../assets/img/Custom-llm.png";
import CraftLogo from "../../assets/img/copycraft-logo.png";
import BtnStartFreeTrail from "../BtnStartFreeTrail/BtnStartFreeTrail";

const CustomLLM = () => {
  return (
    <section className="w-full bg-[#1c0e3f] pt-[120px] relative px-4 sm:px-2 md:px-0">
      <div className="af-container flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-[60%] flex justify-start items-center">
          <img src={CustomLlm} alt="Creating Copy With AI" className="w-[80%]" />
        </div>
        <div className="w-full sm:w-[40%]">
          <img
            src={CraftLogo}
            alt="Auto Funnel Logo"
            className="w-[135px] h-[auto]"
          />
          <h3 className="text-[#fff]">Custom LLM For Sales Copy</h3>
          <p className="text-[#d5d5d5] text-[18px]">
            We built our own AI system (called an LLM or Large Language Model) that's trained on the highest converting sales copies in the world.
          </p>
          <p className="text-[#d5d5d5] text-[18px] pt-8 pb-4">
            It's called CopyCraft and you can write short form, long form, and even emails with AI that convert like crazy!
          </p>
          <div className="flex items-center text-[#fff] my-[25px] mx-[20px]">
            <button className="border-2 border-[#1cffff] text-[#1cffff] px-[30px] py-[15px] text-[18px] inter-medium">
              TRY FOR FREE
            </button>
          </div>
        </div>
      </div>
      <div className="af-container flex flex-col justify-center items-center gap-6 pt-[100px] pb-[60px]">
        <h3 className="text-center text-[#fff]"> Creating Copy With AI: </h3>
        <img src={CustomLlm} alt="Creating Copy With AI" />
        <BtnStartFreeTrail />
      </div>
    </section>
  );
};

export default CustomLLM;