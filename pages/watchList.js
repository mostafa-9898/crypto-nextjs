import { useContext } from "react";

// component
import TableOfCoins from "../components/TableOfCoins";

// context
import { listContext } from "../context/WatchListContext";

const WatchList = () => {

    const { watch } = useContext(listContext)

    return (
        <div className="max-w-screen-lg m-auto min-h-[87vh]">
            {
                watch.length ? <TableOfCoins coins={watch} />
                    :
                    <h3 className="text-center mt-8 font-medium text-xl lg:text-4xl ">
                        Empty List.
                    </h3>
            }
        </div>
    );
}

export default WatchList;