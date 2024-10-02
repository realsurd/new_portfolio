import Link from 'next/link';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
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

export function LandingPage() {
  const { width } = useWindowDimensions();
  const isMobile = width ? width < 768 : false;

  return (
    <div className="flex flex-col bg-[#DFF8FE] w-[100%] h-[100vh] overflow-y-scroll ">
      <div className="flex flex-col w-full h-full bg-[#000] rounded-bl-[18%] rounded-br-[8%] shadow-lg">
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
              <Link className="mr-[100px] "href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#0687b1] mr-20 w-[100px] text-white rounded-md p-3 text-lg hover:motion-safe:animate-zoom-in">
          <Link href={'https://x.com/surd_web3Dev'} target='_blank'>
                <FaTwitter className="text-4xl " />
              </Link>
          </div>
        </div>

        {/* Hello Section */}
        <div className="flex justify-between items-center m-10 ">
          <div className="m-20 w-[50%]  text-white">
            <h1 className="text-4xl text-[#faf9f6af] mb-2">Hello 🖐️</h1>
            <p className="text-xl  leading-1">
              I am Sadiq, a frontend developer specializing in React,Taiwind and
              TypeScript. I'm also a passionate Web3 developer with a strong
              background in blockchain technology and decentralized
              applications. I thrive on creating innovative solutions that
              leverage the power of decentralized networks. My goal is to drive
              the adoption of Web3 by developing secure, efficient, and
              user-friendly applications that redefine the future of the
              internet.{' '}
            </p>

            <div className="flex justify-between items-center font-bold w-full text-[#24A1DE] rounded-md p-2 mt-2 text-sm">
              <Link href={'https://x.com/surd_web3Dev'}>
                <RiTailwindCssFill className="text-3xl" />
              </Link>

              <Link
                href={'https://www.fiverr.com/sadiqadeyemi?up_rollout=true'}
              >
                <FaReact className="text-3xl" />
              </Link>

              <Link href={'https://github.com/realsurd'}>
                <FaGithub className="text-3xl" />
              </Link>

              <Link href={'https://www.instagram.com/therealsurd_'}>
                <SiTypescript className="text-3xl" />
              </Link>

              <Link href={'https://www.instagram.com/therealsurd_'}>
                <SiSolana className="text-3xl" />
              </Link>

              <Link href={'https://www.instagram.com/therealsurd_'}>
                <FaEthereum className="text-3xl" />
              </Link>

              <Link href={'https://www.instagram.com/therealsurd_'}>
                <FaBitcoin className="text-3xl" />
              </Link>
            </div>
          </div>

          <div className=" w-[50%]">
            <img
              src="https://res.cloudinary.com/dlinprg6k/image/upload/v1719426251/computer_nohuvx.avif"
              alt="image"
              width={'350px'}
              height={100}
            />

            {/* Icons */}
            <div className="flex justify-between items-center text-[#24A1DE] m-10">
              <Link href={'https://x.com/surd_web3Dev'}>
                <FaTwitter className="text-6xl hover:motion-safe:animate-zoom-in" />
              </Link>

              <Link
                href={'https://www.fiverr.com/sadiqadeyemi?up_rollout=true'}
              >
                <TbBrandFiverr className="text-5xl hover:motion-safe:animate-zoom-in" />
              </Link>

              <Link href={'https://github.com/realsurd'}>
                <FaGithub className="text-6xl hover:motion-safe:animate-zoom-in" />
              </Link>

              <Link href={'https://www.instagram.com/therealsurd_'}>
                <FaInstagram className="text-6xl hover:motion-safe:animate-zoom-in" />
              </Link>
            </div>
          </div>
        </div>
         {/* About Section */}
      <div className="w-full h-full ">
        <div className="flex justify-center items-center text-6xl m-20 hover:motion-safe:animate-zoom-in">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1720438289/Rectangle_6_hcvene.png"
            alt="left"
          />
          <h1 className="text-4xl font-bold font-montserrat">About Me</h1>
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1720438314/Rectangle_7_lfxx1j.png"
            alt="right"
          />
        </div>

        <div className="flex  flex-col items-center justify-center mx-[120px]">
          <p className="text-2xl font-roboto font-medium text-[#061211]">
            Hello, I'm realSurd, a software and DAPP developer specializing in
            React,CSS, and JavaScript. with a strong background in blockchain
            technology and decentralized applications. I thrive on creating
            innovative solutions that leverage the power of decentralized
            networks.
            <br />
            <br />
            My journey into Software and Blockchain Development began with a
            curiosity for the digital world, driving me to continually refine my
            skills through education and hands-on experience. I thrive on
            collaborative environments and enjoy pushing the boundaries of
            creativity to deliver exceptional solutions.
            <br />
            <br />
            When I'm not coding, I'm exploring new technologies, contributing to
            open-source projects, or engaging in continuous learning. I'm
            excited about the possibilities in web development and eager to make
            a meaningful impact through my work.
          </p>
        </div>
        {/* Top Skills */}
        <div className="w-full max-h-screen ">
          <div className="flex justify-center items-center text-6xl m-20 hover:motion-safe:animate-zoom-in">
            <img
              src="https://res.cloudinary.com/du153mzwk/image/upload/v1720438289/Rectangle_6_hcvene.png"
              alt="left"
            />
            <h1 className="text-4xl font-bold font-montserrat "> Top Skills</h1>
            <img
              src="https://res.cloudinary.com/du153mzwk/image/upload/v1720438314/Rectangle_7_lfxx1j.png"
              alt="right"
            />
          </div>
          <div className="flex justify-between items-center font-bold  rounded-md p-2 m-[80px] text-sm">
            <img
              src="https://res.cloudinary.com/du153mzwk/image/upload/v1721000435/JavaScript_skgzdx.png"
              className="text-6xl"
            />

            <img
              src="https://res.cloudinary.com/du153mzwk/image/upload/v1721000435/TypeScript_ofp1kr.png"
              className="text-6xl"
            />

            <img
              src="https://res.cloudinary.com/du153mzwk/image/upload/v1721000435/VsCode_zpjutr.png"
              className="text-6xl"
            />

            <img
              src="https://res.cloudinary.com/du153mzwk/image/upload/v1721000435/Frame_6_ocvgp7.png"
              className="text-6xl"
            />

            <img
              src="https://res.cloudinary.com/du153mzwk/image/upload/v1721000435/React_qzb7ds.png"
              className="text-6xl"
            />

            <img
              src="https://res.cloudinary.com/du153mzwk/image/upload/v1721000435/GitHub_mzuwdh.png"
              className="text-6xl"
            />
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
