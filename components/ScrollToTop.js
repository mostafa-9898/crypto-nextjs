import { useEffect, useState } from "react";


const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {showTopBtn &&
                <div className="fixed z-20 bottom-10 right-8 lg:right-12">
                    <button className="bg-gray-300 dark:bg-gray-600 w-12 h-12 flex items-center justify-center rounded-full" onClick={goToTop}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-black dark:text-white w-8 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                </div>
            }
        </div>
    );
}

export default ScrollToTop;