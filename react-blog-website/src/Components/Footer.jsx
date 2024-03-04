import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa6'
const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
                <div className='grid pb-8 lg:grid-cols-6'>
                    <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                        {/* Category - 1 */}
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Category</p>
                            <ul>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Referances</a>
                                </li>
                            </ul>
                        </div>
                        {/* Category - 2 */}
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Apple</p>
                            <ul>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>eCommerce</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        {/* Category - 3 */}
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Studying</p>
                            <ul>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Media</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>NonProfit</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brouchers</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                                </li>
                            </ul>
                        </div>
                        {/* Category - 4 */}
                        <div>
                            <p className='font-medium tracking-wide text-gray-300'>Business</p>
                            <ul>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Infoprenuer</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Personal</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a>
                                </li>
                                <li>
                                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Subcription - 1 */}
                    <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                        <p className='font-medium tracking-wide text-gray-300'>Subcription for update </p>
                        <form className='mt-4 flex flex-col md:flex-row'>
                            <input type="text" name='email' id='email' placeholder='Enter Email' className='flex-grow w-full h-12 px-4 mb-3 transition duration-300 bg-white border-gray-300 border rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
                            <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border'>
                                Subcription
                            </button>
                        </form>
                        <p className='text-sm mt-4 text-gray-500'>Welcome to <span className='text-orange-500'><a href="/">StoryStroll</a></span>, your digital haven for captivating narratives and thought-provoking tales. Immerse yourself in a world of words as we embark on a journey through the realms of fiction, non-fiction, and everything in between.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
                    <p className='text-sm text-gray-500'>© Copyright 2023 | All right resereved</p>
                    <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                        <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaFacebook className='h-6 w-6'/></a>
                        <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaTwitter className='h-6 w-6'/></a>
                        <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaInstagram className='h-6 w-6'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
