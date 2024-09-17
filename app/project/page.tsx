import React from 'react'
import CardPortofolio from '../components/CardPortofolio'
const Projects = () => {
  return (
    <div className='flex flex-col'>
    <div className='text-lg text-hitam font-bold mt-2 ml-2'>Portofolio Projects</div>
    <div className='text-sm text-hitam ml-2 mb-5 '>Some projects have not yet been registered, some also have Non-Disclosure Agreements, and many more projects are upcoming.</div>
    <div className='grid grid-cols-3 gap-4 overflow-y-scroll'>
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
        <CardPortofolio image={'/img/porto/buy-sell-game-acc.webp'} alt={'Platform for Buying and Selling Game Accounts'} 
        description={'A Platform for Buying and Selling Game Accounts, made for the community and using escrow as payment method.'}
      
        content={<><p>This project was created to solve issues in the buying and selling of online game accounts, making it easier for buyers and sellers to trade accounts and avoid fraud.</p>

          <p>Technologies used:</p>
          <ul>
            <li>Next.js</li>
            <li>TypeScript + JavaScript</li>
            <li>Firebase</li>
            <li>MySQL</li>
            <li>Google Authentication</li>
            <li>Vercel</li>
            <li>Tailwind + DaisyUI</li>
          </ul>
          <p >Project Link: <a href='https://jebein.com' target="_blank" className='text-blue-600'>Jebein.com</a></p>
          </>}
        />
        <CardPortofolio image={'/img/porto/bot-seller-automation.webp'} alt={'Bot for the Digital Goods Market (Seller Automation)'} 
        description={'A bot for automating seller tasks on the digital goods market, using unofficial API and the seller accounts cookies.'}
      
        content={<>
        <p>This project was created to process transactions that enter the seller dashboard on a digital e-commerce platform, allowing the transaction completion process to be done automatically by retrieving cookies from the seller dashboard and Mocking API calls from the platform.</p>

<p>Technologies used:</p>
<ul>
  <li>Next.js</li>
  <li>TypeScript + JavaScript</li>
  <li>PHP Native on Backend</li>
  <li>MySQL</li>
  <li>Tailwind + DaisyUI</li>
  <li>Vercel</li>
</ul>

        </>}
        />
        <CardPortofolio image={'/img/porto/game-topup.webp'} alt={'Game Topup App for Android'} 
        description={'Android application that sell game topup cheaper than official google play topup. Feature: - Account Balance - Gaming Vendor API - Payment Gateway'}
       
        content={<>
        <p>An Android-based application for online game top-ups, integrating Ipaymu as a payment gateway for Indonesia. The verification and game top-up process are automated with the help of a game top-up API.</p>

<p>Technologies used:</p>
<ul>
  <li>Android Native (Java)</li>
  <li>XML UI Design</li>
  <li>MySQL</li>
  <li>PHP Backend</li>
  <li>Firebase Authentication</li>
  <li>OneSignal Push Notification</li>
  <li>Ipaymu Payment Gateway</li>
</ul>

        </>}/>
        <CardPortofolio image={'/img/porto/buy-sell-phone-credit.webp'} alt={'Platform for Buying and Selling Phone Credit'} 
        description={'Android application for selling phone credit and convert it into money. Backend using firebase PHP and Telegram Bot to process transaction'}
        
      content={<>
      <p>Android application for selling phone credit and convert it into money. Backend using firebase PHP and Telegram Bot to process transaction</p>

<p>Technologies used:</p>
<ul>
  <li>Android Native (Java)</li>
  <li>XML UI Design</li>
  <li>MySQL</li>
  <li>PHP Backend</li>
  <li>Firebase Authentication</li>
  <li>OneSignal Push Notification</li>
  
</ul>
<p>Project Link: <a href='https://play.google.com/store/apps/details?id=com.joondev.conversa2 ' target="_blank" className='text-blue-600'>Google Play Store Link</a></p>
      </>}
        />
       
    </div>
    </div>
  )
}

export default Projects