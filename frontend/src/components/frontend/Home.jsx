import React from "react";

import AboutImg from '../../assets/images/about-us.jpg';
import Header from "./common/Header";
import Footer from "./common/Footer";

const Home = () => {
    return (
        <>
            <Header />

            <main>
                {/* hero section */}
                <section className="section-1" >
                    <div className="hero d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="text-center">
                                <span>Welcome Amazing Constructions</span>
                                <h1>Crafting Dreams with precision and excellence.</h1>
                                <p>We Excel at transforming vision into reality.</p>
                                <div className="mt-4">
                                    <a href="#" className="btn btn-primary">Contact Now</a>
                                    <a href="#" className="btn btn-secondary ms-3">View Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Us section */}
                <section className="section-2 py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={AboutImg} alt="" className="w-100" />
                            </div>
                            <div className="col-md-6">
                                <span>About Us</span>
                                <h2>Crafting structures that last a lifetime</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non facilis id nemo cum totam quis veritatis repudiandae, sequi voluptatum soluta hic ut.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )

}

export default Home