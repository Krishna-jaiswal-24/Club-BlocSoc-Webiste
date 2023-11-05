import React from 'react'
import './hero.css' // Import the stylesheet that contains the .card-hover class

const Blog = (props) => {
    return (
        <div>
            <div class="col">
                <a href={props.href} className='text-decoration-none ' target='_blank'>
                    <div class="card shadow-sm custom-bg-3 m-4 rounded-5 card-hover">
                        <img class="bd-placeholder-img card-img-top" width="100%" height="100%" src={props.imageSrc} alt="A description of the image" />

                        <div class="card-body">
                            <p class="card-text text-white text-wrap">{props.title}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm text-primary outline-nonegit">{props.authorName}</button>
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
