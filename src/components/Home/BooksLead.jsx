import WorldFuture from "../../assets/img/world-future.jpeg";
import BookleLogo from "../../assets/img/bookleLogo.png";
import BtnStartFreeTrail from "../BtnStartFreeTrail/BtnStartFreeTrail";

const BooksLead = () => {
  return (
    <section className="w-full bg-[#050117] pt-[120px] relative px-4 sm:px-2 md:px-0">
      <div className="af-container flex flex-col sm:flex-row gap-10">
        <div className="w-full sm:w-[55%] flex justify-start items-start">
          <img src={WorldFuture} alt="Creating Copy With AI" className="pt-5" />
        </div>
        <div className="w-full sm:w-[45%]">
          <img
            src={BookleLogo}
            alt="Auto Funnel Logo"
            className="w-[135px] h-[auto]"
          />
          <h3 className="text-[#fff]">AI Books, Lead Magnets, and More...</h3>
          <p className="text-[#d5d5d5] text-[18px]">
            Instantly make high quality books, lead magnets, white papers, newsletters, and more with Bookle AI.
          </p>
          <p className="text-[#d5d5d5] text-[18px] py-8">
            Simply enter in a few prompts and watch Bookle transform your original content into beautiful complete books. Bookle can easily create books that are over 100 pages long about any niche or market.
          </p>
          <p className="text-[#d5d5d5] text-[18px] pb-4">
            Our unique system also takes all of your focal points and notes - as well as your tone of voice - and writing. Bookle is like having a professional ghost writer by your side.
          </p>
          <div className="flex items-center text-[#fff] my-[25px] mx-[20px]">
            <button className="border-2 border-[#1cffff] text-[#1cffff] px-[30px] py-[15px] text-[18px] inter-medium">
              TRY FOR FREE
            </button>
          </div>
        </div>
      </div>
      <div className="af-container flex flex-col justify-center items-center gap-6 pt-[100px] pb-[60px]">
        <h3 className="text-center text-[#fff]"> Writing Books With AI: </h3>
        <img src={WorldFuture} alt="Creating Copy With AI" />
        <BtnStartFreeTrail />
      </div>
    </section>
  );
};

export default BooksLead;