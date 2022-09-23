import Image from 'next/image';

// image
import fireSvg from '../public/fire-icon.svg'
import rocketSvg from '../public/rocket-icon.svg'

// helpers
import { ShowPrice } from '../helpers/ShowPrice';

const TrendingCoins = ({ trendingData, theTopData }) => {

    const { coins } = trendingData;

    return (
        <div className="flex flex-col justify-center items-center lg:flex-row">

            {/* Trending Coins */}
            <div className='w-full mb-10 lg:mb-0 lg:pr-6 lg:mr-6'>

                {/* Image */}
                <div className='flex items-center gap-3 mb-4'>
                    <Image src={rocketSvg} alt='fire' width={25} height={25} />
                    <h5 className='font-bold'>Trending</h5>
                </div>

                {/* Coins Table */}
                <div>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className='text-start text-gray-500 dark:text-gray-300 pb-2 font-medium text-[12px] lg:text-sm'>Name</th>
                                <th className='text-start text-gray-500 dark:text-gray-300 pb-2 font-medium text-[12px] lg:text-sm'>Price <small>(BTC)</small></th>
                                <th className='text-end md:text-start text-gray-500 dark:text-gray-300 pb-2 font-medium text-[12px] lg:text-sm'>Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map(coin =>
                                <tr key={coin.item.coin_id} className='border-b border-gray-300'>
                                    <td className='flex gap-2 my-1 py-1'>
                                        <Image src={coin.item.small} alt='icon'
                                            width={25} height={25} className='rounded-full'
                                        />
                                        <p className='text-[12px] lg:text-[14px]'>{coin.item.name}</p>
                                    </td>
                                    <td>
                                        <p className='text-[12px] lg:text-[14px]'>{coin.item.price_btc.toFixed(10)}</p>
                                    </td>
                                    <td>
                                        <p className='text-[12px] lg:text-[14px] pl-10 md:pl-0'>{coin.item.market_cap_rank}</p>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>


            {/* Top Coins */}
            <div className='w-full'>

                {/* Image */}
                <div className='flex items-center gap-3 mb-4'>
                    <Image src={fireSvg} alt='fire' width={25} height={25} />
                    <h5 className='font-bold'>Top Coins</h5>
                </div>

                {/* Coins Table */}
                <div>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className='text-start text-gray-500 dark:text-gray-300 pb-2 font-medium text-[12px] lg:text-sm'>Name</th>
                                <th className='text-start text-gray-500 dark:text-gray-300 pb-2 font-medium text-[12px] lg:text-sm'>% 24H</th>
                                <th className='text-start text-gray-500 dark:text-gray-300 pb-2 font-medium text-[12px] lg:text-sm'>Current Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {theTopData.map(coin =>
                                <tr key={coin.id} className='text-start lg:text-start border-b border-gray-300'>
                                    <td className='flex gap-2 my-1 py-1'>
                                        <Image src={coin.image} alt='icon'
                                            width={25} height={25} className='rounded-full'
                                        />
                                        <p className='text-[12px] lg:text-[14px]'>{coin.name}</p>
                                    </td>
                                    <td>
                                        {ShowPrice(coin.price_change_percentage_24h.toFixed(3))}
                                    </td>
                                    <td>
                                        <p className='text-[12px] lg:text-[14px]'><strong>$</strong> {coin.current_price}</p>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default TrendingCoins;

