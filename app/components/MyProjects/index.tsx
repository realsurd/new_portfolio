import Link from 'next/link';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Card } from './projectCards';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandFiverr } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiSolana } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaEthereum } from 'react-icons/fa';
import { FaBitcoin } from 'react-icons/fa';

export function MyProjects() {
  const { width } = useWindowDimensions();
  const isMobile = width ? width < 768 : false;

  return (
    <div className="flex flex-col bg-[#000] w-[100%] h-[100vh] overflow-y-scroll ">
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
              <Link className="mr-[100px]" href={''}>
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


        {/* Projects Section */}
        <div className='flex flex-col items-center justify-center text-white text-4xl font-montserrat font-bold" m-10'>
          <div className='m-10'>
          <h1>My Projects</h1>
          </div>
          <div className='grid grid-cols-2 text-sm grid-rows-2 gap-6'>
            <Link href="https://www.daowakanda.com/" target='_blank'>   
          <Card
              title="DaoWakanda"
              image="https://res.cloudinary.com/du153mzwk/image/upload/v1722037051/Screenshot_34_cfwe2f.png"
              description="Daowakanda is a project that is currently being built under Algorand Blockchain.
              This is a decentralized autonomous organization to revolutionize community engagement and participation within the with Algorand Ecosystem."
            />
            </Link>

            <Link href="https://fortescrow.vercel.app/" target='_blank'>   
          <Card
              title="Fortescrow"
              image="https://res.cloudinary.com/du153mzwk/image/upload/v1731290398/Screenshot_58_e9yura.png"
              description="ForteScrow is an escrow platform which enhances security and trust in online marketplace transactions, providing a reliable solution for buyers and sellers alike.."
            />
            </Link>

         <Link href="https://realsurd.github.io/Gpt3/" target='_blank'>   
          <Card
              title="ChatGPT AI"
              image="https://res.cloudinary.com/du153mzwk/image/upload/v1727739149/Screenshot_50_m6ejcw.png"
              description="A Frontend ChatGPT AI Website, displaying my attention to details and ability to work with availiable design, built with ReactJS and Tailwind CSS ."
            />
            </Link>

            <Link href="https://realsurd.github.io/restaurant//"  target='_blank'>   
          <Card
              title="Gericht"
              image="https://res.cloudinary.com/du153mzwk/image/upload/v1727739704/Screenshot_51_jcveix.png"
              description="The key to Fine dining.
              Restaurant website for Kevin Luo, A chef and founder of Gericht. Website wes built using tailwind CSS and ReactJS"
            />
            </Link>
            <Link href="https://realsurd.github.io/pelzclothings/index.html"  target='_blank'>   
          <Card
              title="Clothing Website"
              image="https://res.cloudinary.com/du153mzwk/image/upload/v1727740048/Screenshot_53_oycsjo.png"
              description="E-Commerce Website.
             An e-commerce clothing website where users can come to shop for their clothes, the website has multiple pages and a features page, it is a responsive across all 
             screen sizes, the wensite was created using HTML, CSS and Javascript."
            />
            </Link>

            <Link href="https://realsurd.github.io/realsurdKrypt/"  target='_blank'>   
          <Card
              title="Mini CryptoWallet"
              image="https://res.cloudinary.com/du153mzwk/image/upload/v1727738358/Screenshot_49_njqcbk.png"
              description="A Web3 dApp website that allows users send transactions through metamask and records the completed transactions."
            />
            </Link>
          

          </div>
        </div>
      </div>
    </div>
  );
}
