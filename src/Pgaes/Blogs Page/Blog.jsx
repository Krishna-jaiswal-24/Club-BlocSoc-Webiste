import React from 'react'
import Dummy from '../../assests/Checks.png'
const Blog = () => {
    return (
        <div>
            <div class="col  ">
                <div class="card shadow-sm  custom-bg-3">
                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={Dummy} alt="A description of the image" />

                    <div class="card-body">
                        <p class="card-text text-white">This is a blog that covers this and that.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm text-primary outline-nonegit">Writer</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog