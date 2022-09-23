
// Icons
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaReddit } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaVk } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className="max-w-screen-lg m-auto p-2 border-t pt-5">

            <h3 className="text-3xl text-center lg:text-start font-bold mb-12">Crypto NextJs</h3>

            <div className="flex flex-wrap gap-16 justify-center lg:justify-between px-2">

                {/* Corporate */}
                <div>
                    <h3 className="font-bold text-lg mb-6">Corporate</h3>
                    <ul className=" text-gray-500 dark:text-gray-300 flex flex-col gap-3">
                        <li className="cursor-pointer">About Us</li>
                        <li className="cursor-pointer">Join Us</li>
                        <li className="cursor-pointer">Affilate</li>
                        <li className="cursor-pointer">Referral</li>
                    </ul>
                </div>

                {/* Service */}
                <div>
                    <h3 className="font-bold text-lg mb-6">Service</h3>
                    <ul className=" text-gray-500 dark:text-gray-300 flex flex-col gap-3">
                        <li className="cursor-pointer">Support Center</li>
                        <li className="cursor-pointer">Submit a Ticket</li>
                        <li className="cursor-pointer">Fees</li>
                        <li className="cursor-pointer">Bug Bounty</li>
                        <li className="cursor-pointer">Identity Support</li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h3 className="font-bold text-lg mb-6">Products</h3>
                    <ul className=" text-gray-500 dark:text-gray-300 flex flex-col gap-3">
                        <li className="cursor-pointer">Spot Trading</li>
                        <li className="cursor-pointer">Margin Trading</li>
                        <li className="cursor-pointer">Convert</li>
                        <li className="cursor-pointer">Futures Trading</li>
                    </ul>
                </div>

                {/* App Download */}
                <div>
                    <h3 className="font-bold text-lg mb-6">App Download</h3>
                    <ul className=" text-gray-500 dark:text-gray-300 flex flex-col gap-3">
                        <li className="cursor-pointer">Android Download</li>
                        <li className="cursor-pointer">ios Download</li>
                        <li className="cursor-pointer">Desktop Download</li>
                    </ul>
                </div>

                {/* Community */}
                <div className='w-[200px]'>
                    <h3 className="font-bold text-lg mb-6 text-center lg:text-start">Community</h3>
                    <div className='flex flex-wrap gap-5'>
                        <FaFacebook size={30} className='text-gray-500 dark:text-gray-300 cursor-pointer' />
                        <FaTelegram size={30} className='text-gray-500 dark:text-gray-300 cursor-pointer' />
                        <FaTwitter size={30} className='text-gray-500 dark:text-gray-300 cursor-pointer' />
                        <FaYoutube size={30} className='text-gray-500 dark:text-gray-300 cursor-pointer' />
                        <FaDiscord size={30} className='text-gray-500 dark:text-gray-300 cursor-pointer' />
                        <FaReddit size={30} className='text-gray-500 dark:text-gray-300 cursor-pointer' />
                        <FaGithub size={30} className='text-gray-500 dark:text-gray-300 cursor-pointer' />
                        <FaLinkedinIn size={30} className='text-gray-500 dark:text-gray-300 cursor-pointer' />
                        <FaInstagram size={30} className='text-gray-500 dark:text-gray-300 cursor-pointer' />
                        <FaVk size={30} className='text-gray-500 dark:text-gray-300 cursor-pointer' />
                        <BsMedium size={30} className='text-gray-500 dark:text-gray-300 cursor-pointer' />
                    </div>
                </div>

            </div>

            <p className='text-[14px] text-center font-medium mt-8 mb-2'>
                Copyright © 2022, Crypto With NextJs
            </p>

        </div>
    );
}

export default Footer;