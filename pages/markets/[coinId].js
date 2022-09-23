import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";

// pare the links (string files)
import parse from 'html-react-parser';

// helpers
import { ShowPrice } from "../../helpers/ShowPrice";

// component
import CoinChart from "../../components/CoinChart";


const CoinDetails = ({ coin }) => {

    const [showMoreText, setShowMoreText] = useState(false)

    const router = useRouter()

    return (
        <div className="max-w-screen-lg m-auto relative pt-14">

            {/* Back to the Prev Page */}
            <div className="absolute -top-5 left-4">
                <button onClick={() => router.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </button>
            </div>

            <div className="flex flex-col relative">

                {/* Detail */}
                <div className="w-full flex flex-col lg:flex-row items-center gap-12">

                    <div className="w-[350px] text-center">
                        <Image src={coin.image.large} alt={coin.name} width={200} height={200} />
                    </div>

                    <div className="w-[350px] m-auto lg:w-full">
                        <h2 className="text-6xl pl-5 font-bold mb-10">
                            {coin.name}
                            <span className="ml-2 font-bold text-lg text-gray-600 dark:text-gray-400">
                                ({coin.symbol.toLocaleUpperCase()})
                            </span>
                        </h2>

                        <div className="flex flex-wrap items-center justify-center gap-4">

                            <div className="flex gap-3 w-[300px]">
                                <h2 className="text-md font-bold">Rank :</h2>
                                <h3 className="font-medium">{coin.market_data.market_cap_rank}</h3>
                            </div>

                            <div className="flex gap-3 w-[300px]">
                                <h2 className="text-md font-bold">% 24H :</h2>
                                <h3 className="font-medium">{ShowPrice(coin.market_data.price_change_percentage_24h.toFixed(3))}</h3>
                            </div>

                            <div className="flex gap-3 w-[300px]">
                                <h2 className="text-md font-bold">Current Price :</h2>
                                <h3 className="font-medium">$ {coin.market_data.current_price.usd.toLocaleString()}</h3>
                            </div>

                            <div className="flex gap-3 w-[300px]">
                                <h2 className="text-md font-bold">Market Cap :</h2>
                                <h3 className="font-medium">$ {coin.market_data.market_cap.usd.toLocaleString()}</h3>
                            </div>

                            <div className="flex gap-3 w-[300px]">
                                <h2 className="text-md font-bold">high 24H :</h2>
                                <h3 className="font-medium">$ {coin.market_data.high_24h.usd.toFixed(3)}</h3>
                            </div>

                            <div className="flex gap-3 w-[300px]">
                                <h2 className="text-md font-bold">low 24H :</h2>
                                <h3 className="font-medium">$ {coin.market_data.low_24h.usd.toFixed(3)}</h3>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-10 px-5 relative">
                    <p className="font-bold text-md mb-3">About Currency : </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                        {showMoreText ? parse(coin.description.en) :
                            parse(coin.description.en.slice(0, 500))
                        }
                        <button
                            onClick={() => setShowMoreText(!showMoreText)}
                            className='text-blue-500 text-md font-bold ml-4'
                        >
                            {showMoreText ? 'Less' : 'More'}
                        </button>
                    </p>
                </div>

                {/* Chart */}
                <div className="my-20">
                    <CoinChart coin={coin} />
                </div>

            </div>

        </div>
    );
}

export default CoinDetails;

export const getServerSideProps = async (context) => {

    const { params } = context

    const result = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.coinId}`)
    const coin = result.data

    return {
        props: {
            coin
        }
    }
}