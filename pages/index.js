import Image from "next/image";
import axios from 'axios';

// image
import bannerPic from '../public/homeBanner.svg'
import creditCardPic from '../public/credit-card.svg'
import signUpPic from '../public/sign-up-form.svg'
import fundPic from '../public/fund.svg'
import buyCryptoPic from '../public/buy-crypto.svg'

// components
import TrendingCoins from "../components/TrendingCoins";


export default function Home({ trendingData, theTopData }) {
  return (

    <div className="max-w-screen-lg m-auto">

      {/* Hedear */}
      <div className="flex flex-col-reverse justify-center items-center gap-3
      lg:flex-row lg:h-[75vh]">

        {/* Text */}
        <div className=" w-[80%]">
          <h6 className="text-blue-500 text-sm font-medium">SIGN UP TODAY</h6>
          <h1 className="text-4xl font-bold my-3 lg:text-5xl">
            The World&prime;s
            <span className="block text-sky-400">Fastest Growing</span>
            Crypto Web App
          </h1>
          <p className="text-gray-500 dark:text-gray-200 text-[14px] mt-8 w-[300px] lg:w-[450px]">Buy and sell 200+ cryptocurrencies with 20+ flat currenceis using
            bank transfers or your credit/debit card.
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <Image src={bannerPic} alt='banner' width={700} height={600} />
        </div>

      </div>

      {/* Trending */}
      <div className="w-[95%] lg:w-full my-20 m-auto p-4 bg-slate-100 dark:bg-gray-700 rounded-2xl shadow-[0px_0px_10px_3px_rgba(0,0,0,0.1)]">
        <TrendingCoins trendingData={trendingData} theTopData={theTopData} />
      </div>

      {/* Credit Card */}
      <div className="flex flex-col-reverse justify-center items-center gap-7 
      lg:flex-row lg:h-[75vh]">

        {/* Image */}
        <div className="w-full">
          <Image src={creditCardPic} className='rounded-2xl' alt='banner' width={700} height={400} />
        </div>

        {/* Text */}
        <div className=" w-[80%]">
          <h1 className="text-4xl font-bold mb-4">
            Introduction the
            <span className="text-sky-400"> Crypto </span>
            Credit Card
          </h1>
          <p className="text-gray-500 dark:text-gray-200 text-[14px] w-[300px] lg:w-[420px]">
            subject to the cardholder and rewards terms which will be availble
            at application.
          </p>

          <div className="mt-5">
            <p className="flex items-center gap-2 text-[15px]">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white bg-blue-500 rounded-full w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Up to 30% back on purchases
            </p>
            <p className="flex items-center gap-2 text-[15px] my-3">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white bg-blue-500 rounded-full w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Earn rewards in bitcoin or any crypto
            </p>
            <p className="flex items-center gap-2 text-[15px]">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white bg-blue-500 rounded-full w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              No annual free
            </p>
          </div>

          <button className="text-blue-500 border-2 border-blue-400 rounded-3xl mt-5 py-2 px-6">
            Join the waitlist
          </button>

        </div>


      </div>

      {/* Guide */}
      <div className="w-[95%] lg:w-full my-20 lg:mt-0 m-auto p-4 lg:p-2 bg-slate-100 dark:bg-gray-700 rounded-xl shadow-[0px_0px_10px_3px_rgba(0,0,0,0.1)]">

        <h2 className="font-bold text-2xl text-center mb-2 pt-3">Get started in just a few minutes</h2>

        <div className="flex flex-col lg:flex-row gap-10 justify-evenly items-center">

          <div className="w-[250px] text-center flex flex-col gap-4 py-3 border-b border-gray-400 lg:border-none">
            <Image src={signUpPic} alt='signUpPic' width={150} height={200} />
            <h5 className="font-bold">Sign Up</h5>
            <p className="text-[13px] text-gray-600 dark:text-gray-300">Buy Bitcoin or Ethereum, then securely store it in your
              Wallet or send it on easily to freind.Get started with the easiest way.
            </p>
          </div>

          <div className="w-[250px] text-center flex flex-col gap-4 pb-3 border-b border-gray-400 lg:border-none">
            <Image src={fundPic} alt='signUpPic' width={250} height={200} />
            <h5 className="font-bold">Fund</h5>
            <p className="text-[13px] text-gray-600 dark:text-gray-300">Choose your preferred payment method such as bank transfer
              or credit card to top up your Wallet.
            </p>
          </div>

          <div className="w-[250px] text-center flex flex-col gap-4 py-3">
            <Image src={buyCryptoPic} alt='signUpPic' width={210} height={200} />
            <h5 className="font-bold">Buy Crypto</h5>
            <p className="text-[13px] text-gray-600 dark:text-gray-300">Sign up for your free Wallet on web, ios or Android and
              follow our easy process to set up your profile.
            </p>
          </div>

        </div>
      </div>

    </div>

  )
}

export const getServerSideProps = async () => {

  const trending = await axios.get('https://api.coingecko.com/api/v3/search/trending')
  const trendingData = await trending.data

  const theTop = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false')
  const theTopData = await theTop.data

  return {
    props: {
      trendingData,
      theTopData
    }
  }
}
