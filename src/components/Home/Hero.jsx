import HeroBg from "../../assets/img/hero-bg.jpeg";
import ThumbLogo from "../../assets/img/logo-thumb.png";

const Hero = () => {
  const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  };
  return (
    <section className="w-full relative pt-[150px] pb-[70px]" style={BgStyle}>
      <div className="af-container flex flex-col justify-center items-center gap-2 w-[90%]">
        <img src={ThumbLogo} alt="auto funnel thumg logo" className="w-[150px]" />
        <h2 className="text-center text-[#fff]">
          <i> Create Insanely </i> High Converting Websites In <u> Minutes </u> With AI
        </h2>
        <p className="text-[22px] inter-regular w-[60%] text-[#fff] text-center"> 
            Autofunnel creates landing pages, sales copy, funnels, one click upsells, and more with AI. <br />
            <span> Try it now for free!  </span>
        </p>

        <button> Start Free Trial </button>

        <h2 className="text-center text-[#fff]">
            Better. Faster. Easier.
        </h2>
        <p className="text-[#d5d5d5] text-[18px] inter-regular w-[55%] text-center">
             Build complete website marketing funnels, with images and copy, in under 60 seconds. 
        </p>
      </div>
    </section>
  );
};

export default Hero;
