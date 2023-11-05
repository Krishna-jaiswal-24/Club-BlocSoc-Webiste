import React from 'react'
import Dummy from '../assests/Checks.png'
import './hero.css' // Import the stylesheet that contains the .card-hover class

const Blog = (props) => {
    return (
        <div>
            <div class="col">
                <a href='https://ajay033.hashnode.dev/revolutionary-insights-exploring-the-graphs-power-in-blockchain' className='text-decoration-none ' target='_blank'>
                    <div class="card shadow-sm custom-bg-3 m-4 rounded-5 card-hover">
                        <img class="bd-placeholder-img card-img-top" width="100%" height="auto" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1686799853395/b20f117d-fa19-4876-8c36-edc6d2d958ff.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="A description of the image" />

                        <div class="card-body">

                            <p class="card-text text-white">Revolutionary Insights: Exploring the Graph's power in Blockchain.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm text-primary outline-nonegit">Ajay Bhakar</button>


                                </div>
                            </div>

                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Blog
