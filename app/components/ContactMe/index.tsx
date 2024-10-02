import Link from 'next/link';
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import { TbBrandFiverr } from 'react-icons/tb';

export function ContactMe() {
  return (
    <div className="bg-[#000] w-[100%] h-[100vh] overflow-y-scroll">
      <div className="flex flex-col w-full h-full bg-[#000]">
      <div className="flex justify-between items-center font-lora w-full ">
        <Link href="/">
          <div className="flex items-center m-5 text-3xl">
            <img
              src="https://res.cloudinary.com/du153mzwk/image/upload/v1720438289/Rectangle_6_hcvene.png"
              alt="left"
            />
            <h1 className="text-white p-5 ">Sadiq</h1>
            <img
              src="https://res.cloudinary.com/du153mzwk/image/upload/v1720438314/Rectangle_7_lfxx1j.png"
              alt="right"
            />
          </div>
        </Link>

          <div className="flex justify-center items-center text-white">
            <div className="items-center ml-[100px] text-3xl">
              <Link className="mr-[100px]" href="/projects">
                Projects
              </Link>
              {/* <Link className="mr-[100px]" href="/about">
                About
              </Link> */}
              <Link className="mr-[100px]"href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="bg-[#0687b1] mr-20 text-white rounded-md p-3 text-lg">
            <button>Download CV</button>
          </div>
        </div>


        <div className="flex justify-between items-start m-[80px] text-white">
          <div className='w-[50%]'>
          <h1 className="text-white text-4xl font-montserrat font-bold">Connect With Me</h1>
            <div className='flex flex-col mt-10'>
            <form>
              <div className='my-5'>
              <input
                type="email"
                className="h-10 bg-[#213237] w-full p-5 rounded-sm"
                placeholder="Send me a Mail"
              />
              </div>
             
             <div className='my-5'>
             <input
                type="text"
                className="h-10 bg-[#213237] p-8 w-full rounded-sm"
                placeholder="Message"
              />
             </div>
              
            </form>
            <button className='bg-[#4EB6D3] font-roboto text-white p-2 rounded-lg'>
              Connect Now
            </button>
            </div>
          </div>

          {/* Socials */}
          <div className='w-50% '>
            <h1 className="text-white text-4xl font-montserrat font-bold">Link To My Socials</h1>

              {/* Icons */}
              <div className=" w-full flex  justify-between items-center text-[#24A1DE] mr-[120px] my-[120px]">
              <Link href={'https://x.com/surd_web3Dev'}>
                <FaTwitter className="text-6xl  hover:motion-safe:animate-zoom-in" />
              </Link>

              <Link
                href={'https://www.fiverr.com/sadiqadeyemi?up_rollout=true'}
              >
                <TbBrandFiverr className="text-5xl hover:motion-safe:animate-zoom-in" />
              </Link>

              <Link href={'https://github.com/realsurd'}>
                <FaGithub className="text-6xl  hover:motion-safe:animate-zoom-in" />
              </Link>

              <Link href={'https://www.instagram.com/therealsurd_'}>
                <FaInstagram className="text-6xl  hover:motion-safe:animate-zoom-in" />
              </Link>
            </div>
          </div>
  
        </div>
        <div className="container mx-auto text-white text-center ">
        <p className="text-sm">&copy; {new Date().getFullYear()} Real_Surd. All rights reserved.</p>
      </div>
      </div>
    </div>
  );
}
