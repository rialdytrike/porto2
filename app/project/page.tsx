import React from 'react'
import CardPortofolio from '../components/CardPortofolio'
const Projects = () => {
  return (
    <div className='flex flex-col'>
    <div className='text-lg text-hitam font-bold mt-2 ml-2'>Portofolio Projects</div>
    <div className='text-sm text-hitam ml-2 mb-5 '>Some projects have not yet been registered, some also have Non-Disclosure Agreements, and many more projects are upcoming.</div>
    <div className='grid grid-cols-3 gap-4 overflow-y-scroll'>
      <CardPortofolio image={'/img/porto/guestbook-dapp.webp'} alt={'Guestbook DApp'} description={'A guestbook made using BSC Testnet Blockchain with Next.js as the frontend.'}/>
        <CardPortofolio image={'/img/porto/buy-sell-game-acc.webp'} alt={'Platform for Buying and Selling Game Accounts'} description={'A Platform for Buying and Selling Game Accounts, made for the community and using escrow as payment method.'}/>
        <CardPortofolio image={'/img/porto/bot-seller-automation.webp'} alt={'Bot for the Digital Goods Market (Seller Automation)'} description={'A bot for automating seller tasks on the digital goods market, using unofficial API and the seller accounts cookies.'}/>
        <CardPortofolio image={'/img/porto/game-topup.webp'} alt={'App for game topup'} description={'Android application that sell game topup cheaper than official google play topup. Feature: - Account Balance - Gaming Vendor API - Payment Gateway'}/>
        <CardPortofolio image={'/img/porto/buy-sell-phone-credit.webp'} alt={'Platform for Buying and Selling Phone Credit'} description={'Android application for selling phone credit and convert it into money. Backend using firebase PHP and Telegram Bot to process transaction'}/>
       
    </div>
    </div>
  )
}

export default Projects