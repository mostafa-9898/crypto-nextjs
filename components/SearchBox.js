import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

// Context
import { ResultSearchContext } from "../context/SearchContext";


const SearchBox = () => {

    const { setResultSearch } = useContext(ResultSearchContext)
    const [inputSearch, setInputSearch] = useState('')

    const router = useRouter()

    const fetchSearch = async () => {
        const result = await axios.get(`https://api.coingecko.com/api/v3/search?query=${inputSearch.toLocaleLowerCase()}`)
        const data = result.data
        setResultSearch(data.coins)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        fetchSearch()
        setInputSearch('')
        router.push('/search')
    }

    return (
        <form
            onSubmit={submitHandler}
            className="flex-1 lg:max-w-[370px]">
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6
                     my-auto text-gray-400 left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21
                         21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                    className="w-[200px] md:w-full lg:w-full py-2 pl-10 pr-4 text-gray-500 border rounded-md outline-none
                         bg-gray-50 focus:bg-white focus:border-gray-500"
                />
            </div>
        </form>
    );
}

export default SearchBox;