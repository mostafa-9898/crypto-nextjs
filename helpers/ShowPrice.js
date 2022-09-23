const ShowPrice = (price) => {

    return (
        <>
            {price > 0 ?
                <div className='flex items-center gap-2'>
                    <span>
                        <svg style={{ color: 'rgb(22 163 74)', width: '20px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                    </span>
                    <p className="text-green-600 dark:text-green-400 text-sm" >+{price}</p>
                </div>
                :
                <div className='flex items-center gap-2'>
                    <span>
                        <svg style={{ color: 'rgb(220 38 38)', width: '20px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                        </svg>
                    </span>
                    <p className='text-red-600 dark:text-red-400 text-sm' >{price}</p>
                </div>
            }
        </>
    );
}

export { ShowPrice };