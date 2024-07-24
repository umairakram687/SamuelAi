import {
  DiscordOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";


const Footer = () => {
  return (
    <footer>
      <div className="voxe-container flex flex-col gap-4 px-4 sm:px-2 md:px-0 pt-8">
        <div className="flex flex-col gap-0 sm:gap-4">
          <div className="inter-extrabold text-[36px] leading-[36px] text-left">
            VOXE
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-6 pt-[24px] pb-[24px] sm:pb-[56px]">
            <div className="flex gap-4">
              <div className="h-[40px] w-[40px] bg-[#efecff] flex justify-center items-center rounded-[50%]">
                <DiscordOutlined className="text-[20px]" />
              </div>

              <div className="h-[40px] w-[40px] bg-[#efecff] flex justify-center items-center rounded-[50%]">
                <TwitterOutlined className="text-[20px]" />
              </div>
              <div className="h-[40px] w-[40px] bg-[#efecff] flex justify-center items-center rounded-[50%]">
                <InstagramOutlined className="text-[20px]" />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-1">
              <p className="inter-regular text-[14px] text-[#09001cb3]">
                VOXE Finance s.r.o I Příčná 1892/4 I 110 00
              </p>
              <p className="inter-regular text-[14px] text-[#09001cb3]">
                Praha, Czech Republic I ID: 14235528
              </p>
              <a
                href="#"
                className="cursor-pointer text-[12px] text-[#969697] border border-[#eeeef1] w-max px-[8px] py-[1px] rounded-[4px] hover:bg-[#ddd]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="cursor-pointer text-[12px] text-[#969697] border border-[#eeeef1] w-max px-[8px] py-[1px] rounded-[4px] hover:bg-[#ddd]"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-t-[1px] border-[#e1e0e8] py-3">
          <p className="inter-regular text-[12px] text-[#09001cb3]">
            © 2023, VOXE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
