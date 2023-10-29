import React from 'react'
import { Footer } from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
const Team = () => {
    return (
        <div>
            <Navbar />
            <div className='album py-5 text-center' >
                <div class="container">

                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 d-flex flex-row justify-content-evenly p-6">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Team