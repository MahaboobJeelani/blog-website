import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const Banner = () => {
    return (
        <div className='px-4 py-32 bg-black mx-auto'>
            <div className='text-center text-white'>
                <h1 className='font-bold text-5xl lg:text-7xl leading-snug mb-5'>Welcome to Our Blog</h1>
                <p className='font-primary text-gray-100 lg:w-3/5 mx-auto mb-5'>Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials</p>
                <div>
                    <Link to='/' className="font-medium hover:text-orange-500">Learn More <FaArrowRight className='inline-flex items-center' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner