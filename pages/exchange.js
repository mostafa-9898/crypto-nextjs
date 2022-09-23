import axios from 'axios';
import Image from 'next/image';

import { Fragment, useEffect, useState } from 'react'

// headlessui
import { Listbox, Transition } from '@headlessui/react'

// image
import exchangePic from '../public/exchange.svg'

const Exchange = ({ supportedCurrencies }) => {

    const [selected, setSelected] = useState(supportedCurrencies[0])
    const [inputCoinName, setInputCoinName] = useState('')
    const [allCurrencies, setAllCurrencies] = useState()
    const [changedCoin, setChangedCoin] = useState()

    useEffect(() => {

        // because of api , we need id of the coin that user type so we need all currencies and search the id of coin
        const fetchAllCurrencies = async () => {
            const result = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
            setAllCurrencies(result.data)
        }

        fetchAllCurrencies()

    }, [])


    const changedHandler = async () => {

        const coinName = allCurrencies.filter(item => item.name.toLocaleLowerCase() == inputCoinName.toLocaleLowerCase())

        if (coinName.length > 0) {
            const idCoin = coinName[0].id
            const result = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${idCoin}&vs_currencies=${selected}`)
            const data = result.data

            // this is how to access the dynamic keys of objects
            setChangedCoin(data[idCoin][selected])
        } else {
            setChangedCoin('Wrong Coin')
        }
    }

    return (
        <div className="max-w-screen-lg m-auto mb-8 lg:mb-0 lg:h-[83vh] p-2 lg:pt-[70px] flex items-start justify-center relative">
            <div className='flex flex-col gap-10 lg:gap-24 lg:flex-row relative'>

                {/* Image and Text */}
                <div className='w-full flex flex-col items-center justify-center '>

                    <Image src={exchangePic} alt='ExchangePic' width={250} height={250} />

                    <h2 className='text-xl lg:text-2xl font-bold w-[300px] lg:w-[350px] m-auto'>
                        Trusted and secure bitcoin and crypto exchange
                    </h2>
                </div>

                {/* Exchange */}
                <div className='w-full flex items-center justify-center relative'>
                    <div className='w-[340px] p-4 border-2 rounded-xl bg-zinc-100 relative'>

                        {/* type the coin name */}
                        <input
                            type="text"
                            name='coinName'
                            placeholder="Coin Name"
                            value={inputCoinName}
                            onChange={(e) => setInputCoinName(e.target.value)}
                            className="w-full p-3 text-gray-500 border rounded-md outline-none focus:bg-white focus:border-indigo-600"
                        />

                        {/* Selected Coin */}
                        <div className="relative max-w-xs mx-auto mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>


                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">

                                    <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-4 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="block truncate text-black font-medium">{selected}</span>
                                        <span className="pointer-events-none absolute inset-y-0 text-black right-0 flex items-center pr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {supportedCurrencies.map(coin => (
                                                <Listbox.Option
                                                    key={coin}
                                                    className={({ active }) =>
                                                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={coin}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {coin}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                                    </svg>
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>

                        </div>

                        {/* submit button */}
                        <div className='mt-6 text-center'>
                            <button
                                onClick={changedHandler}
                                className='border border-indigo-600 bg-indigo-600 hover:bg-indigo-700
                              rounded-lg py-2 w-full text-white '>
                                change
                            </button>
                        </div>

                        {/* show result */}
                        <div className='mt-6'>
                            <p className={`p-2 pt-4 border-t-2 border-black 
                                ${changedCoin === 'Wrong Coin' ? 'text-red-500' : 'text-slate-700 font-bold text-lg'}
                            `}>
                                <span className='font-bold text-[14px] mr-3 text-black'>{selected} :</span>
                                {changedCoin && changedCoin}

                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exchange;


export const getStaticProps = async () => {

    const result = await axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
    const supportedCurrencies = result.data

    return {
        props: {
            supportedCurrencies
        },
        revalidate: 3600
    }
}