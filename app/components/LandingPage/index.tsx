import Link from 'next/link';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { CiMail } from "react-icons/ci";
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiSolana } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaEthereum } from 'react-icons/fa';
import { FaBitcoin } from 'react-icons/fa';
import { Card } from '../MyProjects/projectCards';

export function LandingPage() {
  const { width } = useWindowDimensions();
  const isMobile = width ? width < 768 : false;

  return (
    <div  className="flex flex-col w-full h-[100vh] overflow-y-scroll p-5"
    style={{
      backgroundImage: 'url(https://res.cloudinary.com/du153mzwk/image/upload/v1731968888/bg.732ba4b173a49b03ad01_fzedhh.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
      <div className="flex flex-col rounded-bl-[18%] rounded-br-[8%] m-5 shadow-lg">
      <div className="fixed top-2 bg-[#ffffff26] rounded-lg p-5  font-lora w-[85%] md:w-[95%] text-white z-50 px-6 py-4">
      <div className="flex md:flex-row md:justify-between items-center w-full text-sm md:text-[28px] md:w-full gap-[70px] md:gap-0">
       
        <div className="flex items-center text-sm md:text-3xl text-white">
          <Link href={'/'}>
            <h1 className="text-lg md:text-3xl font-bold border border-r-white p-1">REALSURD</h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-3 mr-[120px] md:mr-0 md:flex-row justify-between items-center text-sm md:text-[28px]  md:gap-10">
          <div>
            <a href="#projects">
              <h1 className="cursor-pointer hover:underline">Projects</h1>
            </a>
          </div>
          <div>
            <a href="#skills">
              <h1 className="cursor-pointer hover:underline">Skills</h1>
            </a>
          </div>
        </div>
      </div>

</div>



        {/* Hello Section */}
          <div className=" mt-[120px] w-full  text-white">
            <h1 className="text-4xl text-[#faf9f6af] mb-2">Hello 🖐️ I am Adeyemi Sadiq</h1>
            <p className="text-xl  leading-1">
            A Frontend Web3 developer, i specialize in
            React,NextJS,Typescript. with a strong background in blockchain
            technology and decentralized applications (DApps). I thrive on creating
            innovative solutions that leverage the power of decentralized
            networks.
            </p>

            <div className="flex justify-between items-center font-bold w-full md:w-[30%] text-[#24A1DE] rounded-md mt-2 text-sm">
              <Link href={'https://x.com/realSurd_webDev'}>
                <FaTwitter className="text-4xl md:text-5xl hover:motion-safe:animate-zoom-in" />
              </Link>

              <Link href="mailto:adexsadiq01@gmail.com">
              <CiMail className="text-4xl md:text-5xl hover:motion-safe:animate-zoom-in" />
            </Link>


              <Link href={'https://github.com/realsurd'}>
                <FaGithub className="text-4xl md:text-5xl hover:motion-safe:animate-zoom-in" />
              </Link>

              <Link href={'https://www.instagram.com/therealsurd_'}>
                <FaInstagram className="text-4xl md:text-5xl hover:motion-safe:animate-zoom-in" />
              </Link>
            </div>     
        </div>
         {/* About Section */}
      <div className="w-full h-full  text-white">
        {/* Projects */}
        <div className='flex flex-col items-center justify-center text-white text-2xl md:text-4xl font-montserrat font-bold'>
          <div id='projects' className='m-10'>
          <h1>My Projects</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 text-sm grid-rows-2 gap-4'>
            <Link href="https://www.daowakanda.org/" target='_blank'>   
          <Card
              title="DaoWakanda"
              image="https://res.cloudinary.com/du153mzwk/image/upload/v1722037051/Screenshot_34_cfwe2f.png"
              description="Daowakanda is a web3 DAO project that is currently being built under Algorand Blockchain."
            />
            </Link>

            <Link href="https://fortescrow.vercel.app/" target='_blank'>   
          <Card
              title="Fortescrow"
              image="https://res.cloudinary.com/du153mzwk/image/upload/v1731290398/Screenshot_58_e9yura.png"
              description="ForteScrow is a web3 escrow platform which enhances security and..."
            />
            </Link>

         <Link href="https://realsurd.github.io/Gpt3/" target='_blank'>   
          <Card
              title="ChatGPT AI"
              image="https://res.cloudinary.com/du153mzwk/image/upload/v1727739149/Screenshot_50_m6ejcw.png"
              description="A Frontend ChatGPT AI Website, built with ReactJS and Tailwind CSS ."
            />
            </Link>

            <Link href="https://realsurd.github.io/restaurant//"  target='_blank'>   
          <Card
              title="Gericht"
              image="https://res.cloudinary.com/du153mzwk/image/upload/v1727739704/Screenshot_51_jcveix.png"
              description="The key to Fine dining. A restaurant Web App built using tailwind CSS and ReactJS"
            />
            </Link>
            <Link href="https://realsurd.github.io/pelzclothings/index.html"  target='_blank'>   
          <Card
              title="Clothing Website"
              image="https://res.cloudinary.com/du153mzwk/image/upload/v1727740048/Screenshot_53_oycsjo.png"
              description="An e-commerce clothing website where users can come to shop for their clothes,it was created using HTML, CSS and Javascript."
            />
            </Link>

            <Link href="https://realsurd.github.io/realsurdKrypt/"  target='_blank'>   
          <Card
              title="Mini CryptoWallet"
              image="https://res.cloudinary.com/du153mzwk/image/upload/v1727738358/Screenshot_49_njqcbk.png"
              description="A Web3 dApp website that allows users send transactions through metamask and ...."
            />
            </Link>
          

          </div>
        </div>
        {/* Skills */}
        <div className="w-full max-h-screen ">
          <div id='skills' className=" text-6xl mt-20 hover:motion-safe:animate-zoom-in">
            <h1 className="text-4xl font-bold font-montserrat "> My Skills</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-bold rounded-md pt-10 text-sm">
        <div className="flex flex-col justify-center items-center bg-[#ffffff26] p-5 rounded-lg">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1731971075/html_rdjcaw.webp"
            className="text-6xl w-[100px]"
            alt="HTML"
          />
          <h1 className="text-white text-lg">HTML</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#ffffff26] p-5 rounded-lg">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1731971075/css_gsu66y.webp"
            className="text-6xl w-[100px]"
            alt="CSS"
          />
          <h1 className="text-white text-lg">CSS</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#ffffff26] p-5 rounded-lg">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1731971075/js_ty4cy5.png"
            className="text-6xl w-[100px]"
            alt="JavaScript"
          />
          <h1 className="text-white text-lg">JavaScript</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#ffffff26] p-5 rounded-lg">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1731971075/React-icon.svg_w8uspk.png"
            className="text-6xl w-[100px]"
            alt="React"
          />
          <h1 className="text-white text-lg">React</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#ffffff26] p-5 rounded-lg">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1731971076/Github-desktop-logo-symbol.svg_uuwpyn.png"
            className="text-6xl w-[100px]"
            alt="GitHub"
          />
          <h1 className="text-white text-lg">GitHub</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#ffffff26] p-5 rounded-lg">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1731971890/Typescript_logo_2020.svg_bpk7am.png"
            className="text-6xl w-[100px]"
            alt="TypeScript"
          />
          <h1 className="text-white text-lg">TypeScript</h1>
        </div>
        </div>
          <div className="container mx-auto text-center mt-[50px] mb-[120px]">
        <p className="text-sm">&copy; {new Date().getFullYear()} Real_Surd. All rights reserved.</p>
      </div>
        </div>
      </div>
      </div>
    </div>
  );
}
