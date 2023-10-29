import React from 'react'
import HeroImg from '../assests/BlocSoc-Transparent.png';

export const Footer = () => {
    return (
        <div>
            <div class="container">
                <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top d-flex align-items-center">
                    <div class="col mb-3">
                        <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <img src={HeroImg} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </a>
                        <p class="text-body-secondary"></p>
                    </div>

                    <div class="col mb-3">
                    </div>
                    <div class="col mb-3">
                    </div>

                    <div class="col mb-3">
                        <h5 className='text-white'>About Us</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white-50">Aim</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white-50">Vision</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white-50">Team</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white-50">Recruitment</a></li>
                        </ul>
                    </div>

                    <div class="col mb-3">
                        <h5 className='text-white'>Resources</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white-50">E-Books</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white-50">Youtube Courses</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white-50">Documentation</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0  text-white-50">Blogs</a></li>
                        </ul>
                    </div>

                </footer>
            </div>
        </div>
    )
}
