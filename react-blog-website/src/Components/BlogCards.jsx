import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6'

const BlogCards = ({ blogs, currentPage, pageSize, selectedCategory }) => {
  const filterBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
  console.log(filterBlogs);
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8'>
      {
        filterBlogs.map((blog) => <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
          <div>
            <img src={blog.image} alt='' className='w-full' />
          </div>
          <h2 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h2>
          <p className='mb-2 text-gray-500'><FaUser className='inline-flex items-center mr-2' />{blog.author}</p>
        </Link>
        )
      }
    </div>
  )
}

export default BlogCards
