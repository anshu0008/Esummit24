import React from "react";
import { SponsorTeams } from "../constants";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import Pc from '../assets/sponsors/pc.jpg';
import bc from '../assets/sponsors/burger company.jpg';
import ek from '../assets/sponsors/entertainment kingdom.jpeg';
import nex from '../assets/sponsors/nextgen.jpeg';
import scomm from '../assets/sponsors/scomm india.jpeg';
import unstop from '../assets/sponsors/unstop.jpg';
import vk from '../assets/sponsors/village Kraft.jpeg';



const Sponsors = () => {
  return (
    <div className="bg-[#001530]">
      <div className="h-[100%] w-[100%] bg-[url('https://t3.ftcdn.net/jpg/02/32/64/60/360_F_232646034_erlW1pNQw6vlPZlarM504wUbOFClpfTJ.jpg')] bg-no-repeat bg-cover mb-[100px]">
        <div className="hero-container">
          <div className="background">
            {/* <img src='https://www.ecell.in/esummit/assets/images/top-left.png' className='top-left'/> */}
            <img
              src="	https://www.ecell.in/esummit/assets/images/bottom-left.png"
              className="bottom-left"
            />
            {/* <img src="https://www.ecell.in/esummit/assets/images/bottom-right.png" className='bottom-right'/> */}
          </div>
          <div className="reg-button">
            <div className="header">
              <span className="green ">SPONSORS</span>
              <br />
              <span className="white">& PARTNERS</span>
            </div>
            {/* <div className='button'>
                <button className="main-font">REGISTER</button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-y-10">
        <div className="flex justify-center items-center flex-wrap pl-[10px] pr-[10px]">
          <p className="mb-6 text-lg main-font font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 hover:dark:text-gray-300">
            We are proud to collaborate with a diverse group of sponsors and
            partners who share our commitment to innovation, entrepreneurship,
            and technology. Their support and expertise play a crucial role in
            making E-Summit 2K24 a success. Our sponsors and partners represent
            a wide range of industries and sectors, bringing unique perspectives
            and opportunities to our event. Join us in acknowledging and
            thanking these invaluable contributors for their dedication to
            fostering a culture of entrepreneurship and innovation.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="mb-4 text-4xl main-font2 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
            Sponsors
          </h1>
          <div className="flex justify-center items-center gap-5 flex-wrap mb-[10px]">
          <div className="flex flex-col s-transform justify-center items-center gap-10">
              <h1 className="text-md sm:text-2xl text-white">Co-Powered By</h1>
              <div className="w-[330px] h-[2.5px] bg-[#cded09] mt-[10px] mb-[10px]"></div>
              <div className="flex justify-center items-center flex-wrap">
                <div className="h-[200px] w-[300px] flex justify-center items-center bg-[#fff] rounded-xl border border-solid border-yellow-300 overflow-hidden">
                  <img src={unstop} />
                </div>
              </div>
            </div>
          </div>

    <div className="flex justify-center items-center gap-5 gap-y-20 flex-wrap mb-[100px]">

    <div className="flex flex-col s-transform justify-center items-center gap-10 ">
              <h1 className="text-md sm:text-2xl text-white">Hospitality Sponsors</h1>
              <div className="w-[330px] h-[2.5px] bg-[#cded09] mt-[10px] mb-[10px]">
            </div>
            <div className="flex justify-center items-center flex-wrap">
              <div className="h-[200px] w-[300px] flex justify-center items-center bg-[#fff] rounded-xl border border-solid border-yellow-300 overflow-hidden">
                <img src={Pc} />
              </div>
            </div>
          </div>



            <div className="flex flex-col s-transform justify-center items-center gap-10">
              <h1 className="text-md sm:text-2xl text-white">Electronics Partner</h1>
              <div className="w-[330px] h-[2.5px] bg-[#cded09] mt-[10px] mb-[10px]"></div>
              <div className="flex justify-center items-center flex-wrap">
                <div className="h-[200px] w-[300px] flex justify-center items-center bg-[#fff] rounded-xl border border-solid border-yellow-300 overflow-hidden">
                  <img src={nex} />
                </div>
              </div>
            </div>

            <div className="flex flex-col s-transform justify-center items-center gap-10">
              <h1 className="text-md sm:text-2xl text-white">Gifting Partner</h1>
              <div className="w-[330px] h-[2.5px] bg-[#cded09] mt-[10px] mb-[10px]"></div>
              <div className="flex justify-center items-center flex-wrap">
                <div className="h-[200px] w-[300px] flex justify-center items-center bg-[#fff] rounded-xl border border-solid border-yellow-300 overflow-hidden">
                  <img src={vk} />
                </div>
              </div>
            </div>

            <div className="flex flex-col s-transform justify-center items-center gap-10">
              <h1 className="text-md sm:text-2xl text-white">Community Partner</h1>
              <div className="w-[330px] h-[2.5px] bg-[#cded09] mt-[10px] mb-[10px]"></div>
              <div className="flex justify-center items-center flex-wrap">
                <div className="h-[200px] w-[300px] flex justify-center items-center bg-[#fff] rounded-xl border border-solid border-yellow-300 overflow-hidden">
                  <img src={scomm} />
                </div>
              </div>
            </div>

            <div className="flex flex-col s-transform justify-center items-center gap-10">
              <h1 className="text-md sm:text-2xl text-white">Fooding Partner</h1>
              <div className="w-[330px] h-[2.5px] bg-[#cded09] mt-[10px] mb-[10px]"></div>
              <div className="flex justify-center items-center flex-wrap">
                <div className="h-[200px] w-[300px] flex justify-center items-center bg-[#fff] rounded-xl border border-solid border-yellow-300 overflow-hidden">
                  <img src={bc} />
                </div>
              </div>
            </div>

            <div className="flex flex-col s-transform justify-center items-center gap-10">
              <h1 className="text-md sm:text-2xl text-white">Outing Partner</h1>
              <div className="w-[330px] h-[2.5px] bg-[#cded09] mt-[10px] mb-[10px]"></div>
              <div className="flex justify-center items-center flex-wrap">
                <div className="h-[200px] w-[300px] flex justify-center items-center bg-[#fff] rounded-xl border border-solid border-yellow-300 overflow-hidden">
                  <img src={ek} />
                </div>
              </div>
            </div>

          
            
          </div>
          {/* contact */}
          <div className="flex justify-center items-center flex-wrap flex-col gap-[100px] lg:gap-0">
            <h1 className=" text-4xl main-font2 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Contact Us</h1>
          <div className="team_container ">
          {SponsorTeams.lead.map((team) => (
            <div class="wrapper ">
              <div class="img-area">
                <div class="inner-area">
                  <img src={team.url} alt="" />
                </div>
              </div>
              <div class="effect"></div>
              <div class="name">{team.name}</div>
              <div class="secname">{team.name}</div>
              <div class="about">{team.designation}</div>
              <div class="social-icons">
                <a
                  href="#"
                  className=" XTwitter flex justify-center items-center text-2xl"
                >
                  <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat ">
                    <FaXTwitter />
                  </div>
                </a>
                <a
                  href="#"
                  className="Facebook flex justify-center items-center text-2xl"
                >
                  <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat ">
                    <FaFacebook />
                  </div>
                </a>
                <a
                  href="#"
                  className="Linkedin flex justify-center items-center text-2xl"
                >
                  <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat ">
                    <LiaLinkedinIn />
                  </div>
                </a>
                <a
                  href="#"
                  className="Instagram flex justify-center items-center text-2xl"
                >
                  <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat ">
                    <CiInstagram />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
