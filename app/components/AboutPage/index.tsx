import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';

export function AboutPage() {
  return (
    <div className="w-[100%] h-[100vh] overflow-y-scroll">
      <div className="flex flex-col w-full h-full bg-[#000]">
        <div className="flex justify-center items-center m-[50px] text-white">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1720438289/Rectangle_6_hcvene.png"
            alt="left"
          />
          <h1 className="text-white p-5 ">About Me</h1>
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1720438314/Rectangle_7_lfxx1j.png"
            alt="right"
          />
        </div>
      </div>
    </div>
  );
}
