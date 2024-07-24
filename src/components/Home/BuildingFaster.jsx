import BtnStartFreeTrail from "../BtnStartFreeTrail/BtnStartFreeTrail";

const BuildingFaster = () => {
  return (
    <section className="w-full bg-[#1c0e3f] relative px-4 sm:px-2 md:px-0">
      <div className="af-container py-[100px] sm:py-[180px]">
        <div className="flex flex-col justify-center items-center gap-6 w-full sm:w-[80%] mx-auto">
            <h3 className="text-center text-[#fff] text-[32px] sm:text-[47px] inter-bold leading-[38px] sm:leading-[54px] mb-0"> 
                Start Building FASTER, BETTER & EASIER than ever with Autofunnel
            </h3>
            <h4 className="text-[#1cffff] my-4"> Try Autofunnel Pro for FREE </h4>
            <BtnStartFreeTrail />
            <p className="text-[#584c76] mt-4"> No Charge • Cancel Anytime </p>
        </div>
      </div>
    </section>
  );
};

export default BuildingFaster;