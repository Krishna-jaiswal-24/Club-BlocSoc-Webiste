import React from 'react'
import Blog from './Blog'
const Blogs = () => {
    return (
        <div>

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="album py-5">
                            <div class="container">

                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                    <Blog />
                                    <Blog />
                                    <Blog />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="album py-5">
                            <div class="container">

                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                    <Blog />
                                    <Blog />
                                    <Blog />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* <div class="album py-5">
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <Blog />                        
                        <Blog />                        
                        <Blog />                        
                        <Blog />                        
                        <Blog />                        
                        <Blog />                        
                        <Blog />                        
                        <Blog />                        
                        <Blog />                        

                    </div>
                </div>
            </div> */}
        </div >
    )
}

export default Blogs