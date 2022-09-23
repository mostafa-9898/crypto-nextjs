import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

// icons
import { HiOutlineStar } from 'react-icons/hi';
import { HiStar } from 'react-icons/hi';

// helpers
import { ShowPrice } from "../helpers/ShowPrice";

// context 
import { listContext } from '../context/WatchListContext';


const TableOfCoins = ({ coins }) => {

    const { watch, setWatch } = useContext(listContext)

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watch))
    }, [watch])


    return (
        <>
            <table className="table-auto w-[92%] m-auto">
                <thead>
                    <tr>
                        <th className='text-center lg:text-start text-gray-500 dark:text-gray-300 font-medium text-sm '>Watch</th>
                        <th className='text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 lg:p-2 font-medium text-sm'>Name</th>
                        <th className='text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm'>% 24H</th>
                        <th className='text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm hidden lg:flex'>Price</th>
                        <th className='text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm hidden lg:table-cell'>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map(coin =>
                        <tr key={coin.id} className='border-y border-gray-300'>
                            <td>
                                <button onClick={() => {
                                    const isExist = watch.find(item => item.id === coin.id)

                                    if (isExist) {
                                        const newWatch = watch.filter(item => item.id !== coin.id)
                                        setWatch(newWatch)
                                    } else {
                                        setWatch([...watch, coin])
                                    }

                                }}>

                                    {watch.find(item => item.id === coin.id) ?
                                        <div className=' w-12 lg:w-10 flex justify-center'>
                                            <HiStar className='text-orange-400' size={25} />
                                        </div>
                                        :
                                        <div className='w-12 lg:w-10 flex justify-center'>
                                            <HiOutlineStar size={22} />
                                        </div>
                                    }

                                </button>
                            </td>

                            <Link href={`/markets/${coin.id}`}>
                                <td className='flex items-center gap-2 my-1 py-3 cursor-pointer'>
                                    <Image src={coin.image} alt='icon'
                                        width={30} height={30} className='rounded-full'
                                    />
                                    <p className='text-sm font-bold'>
                                        {coin.name}
                                        <span className="text-gray-400 dark:text-gray-300 font-bold text-[12px] ml-2">{coin.symbol.toLocaleUpperCase()}</span>
                                    </p>
                                </td>
                            </Link>

                            <td>
                                <p className='text-[12px] lg:text-[14px] font-bold'>{ShowPrice(coin.price_change_percentage_24h.toFixed(3))}</p>
                            </td>
                            <td>
                                <p className='text-[12px] lg:text-[14px] font-bold hidden lg:flex'>$ {coin.current_price.toLocaleString()}</p>
                            </td>
                            <td>
                                <p className='text-[12px] lg:text-[14px] font-bold hidden lg:flex'>$ {coin.market_cap.toLocaleString()}</p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>



        </>
    );
}

export default TableOfCoins;