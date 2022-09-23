import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

// context
import { ResultSearchContext } from "../context/SearchContext";


const Search = () => {

    const { resultSearch } = useContext(ResultSearchContext)

    return (
        <div className="max-w-screen-lg m-auto min-h-[80vh]">

            {resultSearch.length > 0 ?
                <table className="table-auto w-[92%] m-auto mb-20">
                    <thead>
                        <tr>
                            <th className='text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 lg:p-2 font-medium text-sm'>Name</th>
                            <th className='text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm hidden lg:table-cell'>Symbol</th>
                            <th className='text-start text-gray-500 dark:text-gray-300 pb-2 pl-6 font-medium text-sm hidden lg:table-cell'>Market Cap Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultSearch.map(coin =>
                            <tr key={coin.id} className='border-y border-gray-300'>

                                <Link href={`/markets/${coin.id}`}>
                                    <td className='flex items-center gap-2 my-1 py-3 cursor-pointer'>
                                        <Image src={coin.large} alt='icon'
                                            width={30} height={30} className='rounded-full'
                                        />
                                        <p className='text-sm font-bold'>
                                            {coin.name}
                                            <span className="text-gray-400 dark:text-gray-300 font-bold text-[12px] ml-2">{coin.symbol.toLocaleUpperCase()}</span>
                                        </p>
                                    </td>
                                </Link>

                                <td>
                                    <p className='text-[12px] lg:text-[14px] font-bold hidden lg:table-cell'>{coin.api_symbol}</p>
                                </td>
                                <td>
                                    <p className='text-[12px] lg:text-[14px] font-bold hidden lg:table-cell'>{coin.market_cap_rank}</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                :

                <h1 className="font-bold text-3xl text-center mt-10">
                    You should search something.
                </h1>
            }

        </div>
    );
}

export default Search;