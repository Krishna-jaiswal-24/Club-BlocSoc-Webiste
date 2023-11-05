import React from 'react'
import Navbar from '../../components/Navbar'
import Blog from '../../components/Card'
import blogData from './data'
import Footer from '../../components/Footer'

const BlogsPage = () => {
  return (
    <div>
        <Navbar />
        <div className="container mt-5">
          <div className="row">
            {blogData.map((blog, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <Blog
                  imageSrc={blog.imageSrc}
                  title={blog.title}
                  authorName={blog.authorName}
                  href={blog.href}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default BlogsPage
