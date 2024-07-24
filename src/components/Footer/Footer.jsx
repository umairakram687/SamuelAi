import { FacebookFilled, InstagramOutlined } from "@ant-design/icons";
import AutoFunnelLogo from "../../assets/img/autofunnel-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#000] py-[90px]">
      <div className="af-container flex flex-col gap-6 px-4 sm:px-2 md:px-0 pt-8">
        <div className="flex justify-center items-center">
          <img src={AutoFunnelLogo} alt="AutoFunnel" className="w-[135px]" />
        </div>
        <div className="flex justify-center items-center gap-12">
            <a href="https://www.facebook.com/autofunnelai">
              <FacebookFilled className="text-[42px] text-[#4719ff]" />
            </a>
            <a href="https://www.instagram.com/autofunnel.ai/">
              <InstagramOutlined className="text-[42px] text-[#4719ff] cursor-pointer" />
            </a>
        </div>
        <div className="flex justify-center items-center flex-wrap sm:flex-no-wrap gap-2">
          <a href="#" className="inter-thin text-[16px] text-[#BDBACC]"> Blog </a>
          <span className="inter-thin text-[16px] text-[#BDBACC]"> | </span>
          <a href="#" className="inter-thin text-[16px] text-[#BDBACC]"> Support </a>
          <span className="inter-thin text-[16px] text-[#BDBACC]"> | </span>
          <a href="#" className="inter-thin text-[16px] text-[#BDBACC]"> Contact </a>
          <span className="inter-thin text-[16px] text-[#BDBACC]"> | </span>
          <a href="#" className="inter-thin text-[16px] text-[#BDBACC]"> Partners </a>
          <span className="inter-thin text-[16px] text-[#BDBACC]"> | </span>
          <a href="#" className="inter-thin text-[16px] text-[#BDBACC]"> Affiliates </a>
        </div>
        <div className="flex justify-center items-center flex-wrap sm:flex-no-wrap gap-2">
          <a href="#" className="underline inter-thin text-[14px] text-[#766f92]"> Terms of Service </a>
          <span className="inter-thin text-[14px] text-[#766f92]"> | </span>
          <a href="#" className="underline inter-thin text-[14px] text-[#766f92]"> Privacy Policy </a>
          <span className="inter-thin text-[14px] text-[#766f92]"> | </span>
          <a href="#" className="underline inter-thin text-[14px] text-[#766f92]"> Refund & Trial Policy </a> 
        </div>
        <div className="flex justify-center items-center">
          <p className="inter-thin text-[14px] text-[#766f92]">PageCraft LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
