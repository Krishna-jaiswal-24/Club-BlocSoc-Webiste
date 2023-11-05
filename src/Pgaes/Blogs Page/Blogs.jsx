import React from 'react'
import Blog from '../../components/Card'
import blogData from './data'

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}

const Blogs = () => {
  const chunkedData = chunkArray(blogData, 3);

  return (
    <div>
      <div className='display-3 text-white text-center pt-5 fw-bold'><span className='text-info'>Bloc</span>Soc Blogs</div>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedData.map((chunk, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="album py-5">
                <div className="container pt-5">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                    {chunk.map((blog, index) => (
                      <Blog
                        key={index}
                        imageSrc={blog.imageSrc}
                        title={blog.title}
                        authorName={blog.authorName}
                        href={blog.href}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Blogs
