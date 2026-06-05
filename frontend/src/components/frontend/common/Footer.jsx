import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <h3>
                            Rootage Constructions
                        </h3>
                        <p>We the best</p>
                    </div>
                    <div className="col-md-3">
                        <h3>
                            Our Services
                        </h3>
                        <ul>
                            <li>
                                <a href="">Speciality Construction</a>
                            </li>
                            <li>
                                <a href="">Civil Construction</a>
                            </li>
                            <li>
                                <a href="">Residential Construction</a>
                            </li>
                            <li>
                                <a href="">Corporate Construction</a>
                            </li>
                            <li>
                                <a href="">Building Construction</a>
                            </li>
                            <li>
                                <a href="">Industrial Construction</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>
                            Quick Links
                        </h3>
                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Projects</a>
                            </li>
                            <li>
                                <a href="">Blogs</a>
                            </li>
                            <li>
                                <a href=""> Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>
                            Contact Us
                        </h3>
                        <p>
                            address here
                        </p>
                        <p>
                            another address here
                        </p>
                    </div>
                </div>
                <hr />
                <div className="text-center pt-4">Copyright &copy; {new Date().getFullYear()} Rootage Constructions. All Rights Reserved.</div>
            </div>
        </footer>
    );
}

export default Footer


