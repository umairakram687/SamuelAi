import MarketersBg from "../../assets/img/markers-bg.jpeg";
import FullFunnel from "../../assets/img/full-funnel-generation.png";
import LeadMagnet from "../../assets/img/lead-magnet.png";

const Marketers = () => {
  const BgStyle = {
    backgroundImage: `url(${MarketersBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  };
  return (
    <section className="w-full bg-[#1c0e3f] py-[90px] relative px-4 sm:px-2 md:px-0" style={BgStyle}>
      <div className="af-container flex flex-col justify-center items-center">
        <h3 className="text-center text-[#fff] text-[32px] sm:text-[47px] inter-bold leading-[34px] sm:leading-[54px] mb-0">
          Why marketers love Autofunnel
        </h3>
        <p className="text-[#d5d5d5] text-[19px] mt-4">
          Autofunnel makes funnel building the easiest and fastest part of
          marketing.
        </p>
      </div>
      <div className="af-container flex flex-col sm:flex-row gap-12 w-full pt-12">
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-5">
          <img src={FullFunnel} alt="Full Funnel Generation" className="w-full" />
          <h4 className="text-center text-[#fff] mb-0">
            Full Funnel Generation
          </h4>
          <p className="text-[#d7d7d7] inter-thin text-[18px] text-justify">
            Quickly and easily have a full funnel built for any product or service built for you. Autofunnel will build every single page you need to maximize your funnels results, starting from Lead Pages, to Sales Pages, Checkout Pages, One-click Upsells and Thank You Pages.
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-5">
          <img src={LeadMagnet} alt="Full Funnel Generation" className="w-full" />
          <h4 className="text-center text-[#fff] mb-0">
          Lead Magnet & Copy Generation
          </h4>
          <p className="text-[#d7d7d7] inter-thin text-[18px] text-center">
          Autofunnel solves all parts of the sales funnel. Need a quick ebook or lead magnet to generate leads? Autofunnel has tools inside of it that will generate entire ebooks for you. Need your follow up emails and new sales copy written? Autofunnel will let you generate unlimited amounts of new emails and sales copy too.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Marketers;
