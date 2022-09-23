import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

// component
import TableOfCoins from "../../components/TableOfCoins";



const Markets = ({ coins, page }) => {

    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true)
        }
    }, []);

    return (
        <div className="max-w-screen-lg m-auto">

            {hasWindow &&
                <>
                    <div>
                        <TableOfCoins coins={coins} />
                    </div>


                    {coins.length >= 50 ?
                        <div className="flex justify-center lg:justify-end items-center gap-5 mb-10 mt-5">

                            <Link href={`/markets?page=${page > 1 ? page - 1 : page = 1}`}>
                                <a className="border border-gray-400 rounded-lg my-3 py-2 px-4">
                                    Previous page
                                </a>
                            </Link>

                            <p className="bg-indigo-500 text-white py-1 px-2 rounded-md">
                                {page}
                            </p>

                            <Link href={`/markets?page=${page + 1}`}>
                                <a className="border border-gray-400 rounded-lg my-3 py-2 px-6">
                                    Next page
                                </a>
                            </Link>

                        </div>
                        :
                        <div className="mb-10 mt-5"></div>
                    }
                </>
            }

        </div>
    );
}

export default Markets;


export const getServerSideProps = async ({ query }) => {

    let page = +query.page || 1

    const result = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`)
    const coins = result.data

    return {
        props: {
            coins,
            page
        }
    }

}