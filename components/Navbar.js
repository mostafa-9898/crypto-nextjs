import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// tailwind
import { Dialog } from '@headlessui/react'
import { Transition } from '@headlessui/react'

// image
import theLogo from '../public/logo.png'

// theme context 
import { useTheme } from "../context/themeContext"

// components
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import SearchBox from "./SearchBox";



const Navbar = () => {

    const router = useRouter()

    const { theme, setTheme } = useTheme()
    const [openMenu, setOpenMenu] = useState(false)
    const [profileModal, setProfileModal] = useState(false)
    const [profileSignUp, setprofileSignUp] = useState(true)
    const [profileLogIn, setprofileLogIn] = useState(false)

    const signUpHandler = () => {
        setprofileSignUp(true)
        setprofileLogIn(false)
    }
    const logInHandler = () => {
        setprofileLogIn(true)
        setprofileSignUp(false)
    }

    const menuItems = [
        { id: 1, name: "Home", path: '/' },
        { id: 2, name: "Markets", path: '/markets' },
        { id: 3, name: "Exchange", path: '/exchange' },
        { id: 4, name: "Watchlist", path: '/watchList' }
    ]


    return (
        <nav className="flex items-center gap-5 max-w-screen-lg m-auto p-2 lg:pt-2 pt-4 pb-14">

            {/* Logo */}
            <div className="hidden lg:flex">
                <Image className="rounded-[50%]" src={theLogo} alt='logo picture' width='60px' height='60px' />
            </div>

            {/* laptop Menu */}
            <div className="hidden lg:flex lg:flex-1">
                <ul className="flex items-center gap-6">
                    {menuItems.map(item =>
                        <Link key={item.id} href={item.path}>
                            <a className={`hover:border-b-2 border-sky-500
                                ${router.pathname === item.path && 'border-b-2 border-sky-500'}
                             `}>{item.name}</a>
                        </Link>)}
                </ul>
            </div>

            {/* Search */}
            <SearchBox />


            {/* Mode Dark/Light */}
            <button onClick={() => setTheme(!theme)}>
                {
                    theme === 'light' || theme === true ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                }
            </button>

            {/* Profile */}
            <div>
                <button onClick={() => setProfileModal(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
                {profileModal ? (
                    <div className="fixed inset-0 z-30 overflow-y-auto">

                        <div className="fixed inset-0 w-full h-full bg-black opacity-60"
                            onClick={() => setProfileModal(false)}>
                        </div>

                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-[360px] p-4 mx-auto bg-white dark:bg-slate-700 rounded-md shadow-lg">
                                <div className="mt-3">

                                    <div className="flex items-center justify-evenly mx-auto border-b border-gray-400 pb-4">
                                        <button onClick={signUpHandler}
                                            className={`text-lg font-medium px-6 py-2 rounded-lg ${profileSignUp && 'bg-blue-500 text-white'}`}>Sign Up</button>

                                        <button onClick={logInHandler}
                                            className={`text-lg font-medium px-6 py-2 rounded-lg ${profileLogIn && 'bg-blue-500 text-white'}`}>Log In</button>
                                    </div>

                                    <div className="mt-2 text-center">
                                        {profileSignUp && <SignUp />}
                                        {profileLogIn && <LogIn />}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                ) : ''}
            </div>

            {/* Responsive Menu */}
            <>
                <div className="flex pr-3 lg:hidden">
                    <button
                        type="button"
                        onClick={() => setOpenMenu(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <Transition.Root show={openMenu} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpenMenu}>

                        {/* dark opacity the screen for showing the menu */}
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-50" />
                        </Transition.Child>

                        {/* menu */}
                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-[250px] flex-col overflow-y-auto bg-white dark:bg-gray-800 shadow-xl">

                                    {/* close button */}
                                    <div className="flex flex-row-reverse px-4 pt-5 pb-2">
                                        <button
                                            type="button"
                                            onClick={() => setOpenMenu(false)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>

                                        </button>
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-col space-y-6 mt-12">
                                        {menuItems.map(item => (
                                            <Link key={item.id} href={item.path}>

                                                <button className="py-3" onClick={() => setOpenMenu(false)}>
                                                    {item.name}
                                                </button>

                                            </Link>
                                        ))}
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
            </>


        </nav>
    );
}

export default Navbar;