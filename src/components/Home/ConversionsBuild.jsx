import BtnStartFreeTrail from "../BtnStartFreeTrail/BtnStartFreeTrail";

const ConversionsBuild = () => {
  return (
    <section className="w-full bg-[#1c0e3f] relative px-4 sm:px-2 md:px-0">
      <div className="af-container py-[90px]">
        <div className="flex flex-col justify-center items-center gap-6 w-full sm:w-[60%] mx-auto">
            <h2 className="text-center text-[#fff] text-[32px] sm:text-[64px] inter-extrabold leading-[38px] sm:leading-[80px]"> Ready To Increase Conversions & Build 10X FASTER? </h2>
            <h4 className="text-[#1cffff] my-4"> Free 14 Day Trial.  Get Autofunnel Now: </h4>
            <BtnStartFreeTrail />
            <p className="text-[#584c76] mt-4"> No Charge • Cancel Anytime </p>
        </div>
      </div>
    </section>
  );
};

export default ConversionsBuild;