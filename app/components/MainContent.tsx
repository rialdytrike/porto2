import React from "react";
import CardPortofolio from './CardPortofolio'
import Link from "next/link";
const MainContent = () => {
  return (
    <>
      <div className="flex flex-col basis-1/3 justify-evenly">
        <div className="card bg-latar border border-r-4 border-b-4 border-hitam h-44 ml-2 mt-2">
        <div className="text text-md font-semibold ml-2 mt-2">Education</div>
        <ul className="text-sm mx-2">
          
            <li>Bachelor Degree from Bandung State Polytechnic (2016-2020)</li>
            
          </ul>
          <div className="text text-md font-semibold ml-2 ">Certification</div>
        <ul className="text-sm mx-2">
            <li>Android & Javascript Certification - Dicoding</li>
            <li>AWS Cloud Certification - AWS</li>
            <li>English TOEIC Certification (800)</li>
          </ul>
        </div>
        <div className="card border border-r-4 border-b-4 border-hitam  grow ml-2 my-2 bg-[url('/img/bg-card2.png')] bg-cover overflow-y-scroll">
          <div className="text text-md font-semibold ml-2 mt-2">Skills</div>
          <ul className="text-sm mx-2">
            <li>Android Java Mobile Programming</li>
            <li>AWS Cloud Configuration</li>
            <li>API Scraping & Implementation</li>
            <li>Cryptocurrency DAPP</li>
            <li>Crypto Smart Contract (EVM)</li>
            <li>Firebase Auth, Database, Storage</li>
            <li>Figma UI/UX Design</li>
            <li>Flutter </li>
            <li>HTML & CSS</li>
            <li>Javascript </li>
            <li>Kotlin</li>
            <li>Linux Webserver Configuration</li>
            <li>Laravel</li>
            <li>MySQL Database</li>
            <li>Nginx Server Config</li>
            <li>Node.js Application</li>
            <li>Next.js </li>
            <li>Python Programming</li>
            <li>PHP</li>
            <li>React.js</li>
            <li>Solidity</li>
            <li>Tailwind CSS</li>
            <li>Wordpress</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col basis-1/3">
        <div className="card bg-latar border border-r-4 border-b-4 border-hitam basis-1/5  mt-2">
        <div className="text text-md font-semibold ml-2 mt-2">Work Experience</div>
        <ul className="text-sm mx-2">
            <li>Business Owner [Running my own Apps] <br/> (2020 - Present)</li>
            <li>Digital Strategist Intern (2020)</li>
            <li>IT Network Administrator Intern (2015)</li>
          </ul>
        </div>
        <div className="card bg-latar border border-r-4 border-b-4 border-hitam  max-h-72 mt-2 overflow-y-scroll">
        <div className="text text-md font-semibold ml-2 mt-2">Project Experience</div>
        <ul className="text-sm mx-2">
          <li>Built a Bot for the Digital Goods Market (Seller Automation)</li>
          <li>Built a Bot for Twitter Account
(Mass Tweet, Retweet)</li>
          <li>Built a Bot for Whatsapp & Telegram Account</li>
          <li>Built a VPS server for business and learning purpose
(AWS, DO, Linode, Contabo)</li>
          <li>Created a Tunneling Server for Internet Phreaking through 
V2Ray, OpenVPN, SSH, Shadow Sock </li>
          <li>Made an API from mobile operator APP
(Check and Transfer Balance)</li>
          <li>Made a Cryptocurrency faucet (DOGE and XML)</li>
          <li>Made a Guestbook Crypto DApp</li>
          <li>Participated in Crypto Testnet as Node Operator (DUSK)</li>
       
          </ul>
        </div>
        {/* <div className="card border border-r-4 border-b-4 border-hitam max-h-40  mt-2 mb-2 overflow-y-scroll"> */}
        <div className="card border bg-latar border-r-4 border-b-4 border-hitam grow  mt-2 mb-2 overflow-y-scroll">
        <div className="text text-md font-semibold ml-2 mt-2">Business Experience</div>
        <ul className="text-sm mx-2">
            <li>Created an Anonymous Social Media App on Android</li>
            <li>Created an Offerwall App</li>
            <li>Created a Simple Task Reward Platform</li>
            <li>Buying and Selling Phone Credits in the B2B Market</li>
            <li>Created a Game Top-Up Platform</li>
            <li>Created a Platform for Buying and Selling Game Accounts</li>
           
          </ul>
        </div>
      </div>
      <div className="flex flex-col basis-1/3">
        {/* <div className="card border border-r-4 border-b-4 border-hitam grow max-h-[37rem] mr-2 my-2 py-2 bg-[url('/img/bg-card.png')] bg-cover "> */}
        <div className="card border border-r-4 border-b-4 border-hitam grow  mr-2 my-2 py-2 bg-[url('/img/bg-card.png')] bg-cover ">
        <div className="text text-hitam text-md font-semibold ml-2 flex flex-row justify-between ">
        <div className="text text-hitam text-md font-semibold">
        Portofolio Projects
        </div>
        {/* <Link href='/project'>
        <div className={`text text-white text-md font-semibold flex flex-row mr-2`}>
          
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
        More
          
        </div>
        </Link> */}
          </div>
      
          <CardPortofolio image={'/img/porto/joytopup.webp'} alt={'Game Topup Website - Joytopup'}
      description={'A Website to buy game topup with affordable price with mobile-first design using next.js'}
      content={<><p>A Website to buy game topup with affordable price with mobile-first design using next.js</p>

        <p>Technologies used:</p>
        <ul>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>Prisma ORM</li>
          <li>Zustand state manager</li>
          <li>MySQL</li>
          <li>Vercel</li>
          <li>Tailwind + DaisyUI</li>
        </ul>
        <p >Project Link: <a href='https://joytopup.com' target="_blank" className='text-blue-600'>Joytopup.com</a></p>
        </>}
      />
          <CardPortofolio image={'/img/porto/aff-joytopup.webp'} alt={'Affiliate Joytopup'}
      description={'A Website to earn money by sharing affiliate links of Joytopup created using next.js'}
      content={<><p>A Website to buy game topup with affordable price with mobile-first design using next.js</p>

        <p>Technologies used:</p>
        <ul>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>Prisma ORM</li>
          <li>Zustand state manager</li>
          <li>MySQL</li>
          <li>Vercel</li>
          <li>Tailwind + DaisyUI</li>
        </ul>
        <p >Project Link: <a href='https://aff.joytopup.com' target="_blank" className='text-blue-600'>aff.joytopup.com</a></p>
        </>}
      />
      <CardPortofolio image={'/img/porto/guestbook-dapp.webp'} alt={'Guestbook DApp'} 
     
      description={'A guestbook made using BSC Testnet Blockchain with Next.js as the frontend.'}
      content={<><p>This project, built using the Binance Smart Chain Testnet, demonstrates how blockchain can store user data and be implemented in interactive decentralized applications.</p>

        <p>Technologies used:</p>
        <ul>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>Remix Ethereum IDE</li>
          <li>RainbowKit Wallet Connect</li>
          <li>BSC Testnet</li>
        </ul>
        </>}
      />
        
        </div>
      </div>
    </>
  );
};

export default MainContent;
