import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { headers } from "next/headers";
import UAParser from "ua-parser-js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrikersDev Portofolio",
  description: "Created by Rialdy Trike",
  icons: "/favicon.ico",
};
export const isMobileDevice = () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server')
  }

  const { get } = headers()
  const ua = get('user-agent')

  const device = new UAParser(ua || '').getDevice()

  return device.type === 'mobile'
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mobile = isMobileDevice();
  if(!mobile){
    return (
      <html lang="en">
        <body className={inter.className}>
        <div
        className="bg-cover bg-no-repeat bg-center h-screen py-2"
        style={{ backgroundImage: "url(/img/bg.png)" }}
      >
        <div className="flex flex-col  h-full">
          <div className=" flex flex-row mx-10 mb-5">
            <div className="rounded-lg bg-latar flex flex-row w-full">
              <div className="flex flex-col ml-5 basis-1/2">
                <div className="text text-hitam font-bold text-lg">
                  TrikersDev Portofolio
                </div>
                <div className="text text-hitam text-sm ml-1 mb-1 -mt-2">
                  by Rialdy Trike
                </div>
              </div>
              <div className="flex flex-col ml-5 basis-1/2 justify-center">
                <div className="flex flex-row">
                <Link href='/'>
                <div className="text text-hitam font-semibold text-md hover:underline">
                  Home
                </div>
                </Link>
               
                <Link href='/project'>
                <div className="text text-hitam font-semibold text-md ml-5 hover:underline">
                  Project 🚀
                </div>
                </Link>
             
                </div>
               
               
              </div>
            </div>
          </div>
          <div className="flex flex-row  h-full mx-10 ">
            <div className="flex flex-row  basis-1/6 h-full mr-5">
              <div className="card bg-latar shadow-lg w-full border-2 border-hitam flex flex-col">
                <div className="flex flex-row justify-center mt-5">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="/img/avatar.jpg" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center mt-2">
                  <div className="text text-lg font-bold text-hitam">
                   Rialdy Trike
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-center mt-2">
                    <div className="text text-md font-semibold underline">
                   Fullstack Developer
                  </div>
                    </div>
                
                  <div className="flex flex-row gap-1 ">
                  <div className="text text-sm  text-latar bg-tahiti border border-hitam p-1 rounded-lg ">
                   Mobile
                  </div>
                  <div className="text text-sm  text-latar bg-purple border border-hitam p-1 rounded-lg ">
                   Web
                  </div>
                  <div className="text text-sm  text-latar bg-bubble-gum border border-hitam p-1 rounded-lg ">
                   Cryptocurrency
                  </div>
                
                  </div>
               
                  <div className="flex flex-row justify-center mt-10">
                    <div className="text text-xs font-semibold text-hitam  hover:shadow-tahiti shadow-sm">
                    mail: rialdytrike@gmail.com
                  </div>
                    </div>
                    <div className="flex flex-row justify-center mt-5">
                    <div className="text text-xs font-semibold text-hitam ">
                    or
                  </div>
                    </div>
                  <div className="flex flex-row gap-2 justify-center mt-5">
                  <Link href='https://github.com/rialdytrike' target="_blank">
                    <img src='/img/github.png' alt="github" className="h-9 hover:shadow-bermuda shadow-lg"/>
                  </Link>
                  <Link href='https://warpcast.com/vandebronx' target="_blank">
                    <img src='/img/farcaster.png' alt="farcaster" className="h-9 hover:shadow-bermuda shadow-lg"/>
                  </Link>
                  <Link href='https://twitter.com/rialdy' target="_blank">
                    <img src='/img/twitter.png' alt="twitter" className="h-9 hover:shadow-bermuda shadow-lg"/>
                  </Link>
                  <Link href='https://t.me/rialdy' target="_blank">
                    <img src='/img/telegram.png' alt="telegram" className="h-9 hover:shadow-bermuda shadow-lg"/>
                  </Link>
                  </div>
                  
                  </div>
                 
                  
                </div>
              </div>
            </div>
            <div className="flex flex-row border-2 card bg-latar  border-hitam  basis-5/6 gap-5">
            {children}
            </div>
          </div>
        </div>
      </div>
        </body>
      </html>
    );
  }else{
    return (
      <html lang="en">
        <body className={inter.className}>
          <div className="bg-[url(/img/bg.png)]">
          <div className=" flex flex-row mx-2 mb-5">
            <div className="rounded-lg bg-latar flex flex-row w-full">
              <div className="flex flex-col ml-5 ">
                <div className="text text-hitam font-bold text-lg">
                  TrikersDev Portofolio 
                </div>
                <div className="text text-hitam text-sm ml-1 mb-1 -mt-2">
                  by Rialdy Trike
                </div>
              </div>
        
            </div>
          </div>
          <div className="flex flex-col h-full mx-2 ">
            <div className="flex flex-row  h-full ">
              <div className="card bg-latar shadow-lg w-full border-2 border-hitam flex flex-row justify-start gap-2 py-2">
                <div className="flex flex-col justify-center ml-2 ">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="/img/avatar.jpg" />
                    </div>
                  </div>
                  
                </div>
               
                <div className="flex flex-col justify-center">
                  <div className="flex flex-col justify-center">
                 
                  
                   
                
                
               
                  <div className="text text-lg font-bold text-hitam">
                   Rialdy Trike
                  </div>
                 
                    
                      
                    <div className="text text-md font-semibold underline">
                   Fullstack Developer
                  </div>
                  <div className="flex flex-row gap-2 justify-center ">
                  <Link href='https://github.com/rialdytrike' target="_blank">
                    <img src='/img/github.png' alt="github" className="h-9 hover:shadow-bermuda shadow-lg"/>
                  </Link>
                  <Link href='https://warpcast.com/vandebronx' target="_blank">
                    <img src='/img/farcaster.png' alt="farcaster" className="h-9 hover:shadow-bermuda shadow-lg"/>
                  </Link>
                  <Link href='https://twitter.com/rialdy' target="_blank">
                    <img src='/img/twitter.png' alt="twitter" className="h-9 hover:shadow-bermuda shadow-lg"/>
                  </Link>
                  <Link href='https://t.me/rialdy' target="_blank">
                    <img src='/img/telegram.png' alt="telegram" className="h-9 hover:shadow-bermuda shadow-lg"/>
                  </Link>
                  </div>
                  
                  </div>
                 
                  
                </div>
              </div>
            </div>
            </div>
        {children}

        </div>
        </body>
        </html>
    )
  }
 
}
