import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import Pagination from './Pagination'
import CategorySelection from './CategorySelection'
import SideBar from './SideBar'

const BlogPage = () => {
    let [blogs, setBlogs] = useState([])
    let [currentPage, setCurrentPage] = useState(1)
    let pageSize = 12;
    let [selectedCategory, setSelectedCategory] = useState(null);
    let [activeCategory, setActiveCategory] = useState(null)
    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`

            //filter by Category
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }

            const response = await fetch(url)
            const data = await response.json()
            console.log(data);
            setBlogs(data)
        }

        fetchBlogs()
    }, [currentPage, pageSize, selectedCategory])
    console.log(blogs);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const handleCategoryChange = (category) => {
        setCurrentPage(1)
        setSelectedCategory(category)
        setActiveCategory(category)
    }
    return (
        <div>
            {/* Catogery Section */}
            <div>
                <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
            </div>

            {/* blogCards Section */}
            <div className='flex flex-col lg:flex-row gap-12'>

                {/* blog Cards Components */}
                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

                {/* Side Bar */}
                <div>
                    <SideBar />
                </div>
            </div>

            {/* Pagination Section */}
            <div>
                <Pagination onPageChange={handlePageChange} pageSize={pageSize} currentPage={currentPage} blogs={blogs} />
            </div>
        </div>
    )
}

export default BlogPage
