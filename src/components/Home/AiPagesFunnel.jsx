import PagesFunnel from "../../assets/img/pages-funnel.jpeg";
import LightLogo from "../../assets/img/light-funnel-logo.png";
import BtnStartFreeTrail from "../BtnStartFreeTrail/BtnStartFreeTrail";

const AiPagesFunnel = () => {
  return (
    <section className="w-full bg-[#050117] pt-[120px] relative px-4 sm:px-2 md:px-0">
      <div className="af-contaier absolute top-[-70px] left-0 right-0 w-full z-[99]">
        <h2 className="text-center text-[#fff]">Better. Faster. Easier.</h2>
        <p className="text-[#d5d5d5] text-[20px] inter-regular w-full sm:w-[49%] mx-auto text-center">
          Build complete website marketing funnels, with images and copy, in
          <u>under 60 seconds</u>.
        </p>
      </div>
      <div className="af-container flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-[40%]">
          <img
            src={LightLogo}
            alt="Auto Funnel Logo"
            className="w-[135px] h-[auto]"
          />
          <h3 className="text-[#fff]">AI Pages & Funnels</h3>
          <p className="text-[#d5d5d5] text-[18px]">
            If you're buying traffic, creating promotions, or selling products
            online, then you let Autofunnel instantly build your pages for you
            with AI.
          </p>
          <p className="text-[#d5d5d5] text-[18px] pt-8 pb-4">
            Our seamless prompt-based builder creates stunning pages with
            original copy that converts. Using our AI powered system, you'll
            build faster, convert higher and get more sales.
          </p>
          <div className="flex items-center text-[#fff] my-[25px] mx-[20px]">
            <button className="border-2 border-[#1cffff] text-[#1cffff] px-[30px] py-[15px] text-[18px] inter-medium">
              TRY FOR FREE
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[60%] flex justify-center items-center">
          <img src={PagesFunnel} alt="Ai Pages Funnel" />
        </div>
      </div>
      <div className="af-container flex flex-col justify-center items-center gap-6 pt-[100px] pb-[60px]">
        <h3 className="text-center text-[#fff]"> Building Funnels With AI: </h3>
        <img src={PagesFunnel} alt="Ai Pages Funnel" />
        <BtnStartFreeTrail />
      </div>
    </section>
  );
};

export default AiPagesFunnel;
