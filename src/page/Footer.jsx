
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer text-center text-md-left">
                <div className="container">
                    <div className="row">
                        {/* Newsletter Signup Box */}
                        <div className="col-md-4 text-center">
                            <div className="newsletter-box">
                                <h5>Let's Stay In Touch</h5>
                                <p>Keep up to date with our latest news &amp; specials.</p>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary">→</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <img
                                    src="assets/image/footer-logo.JPG"
                                    alt="HIPAA Compliance"
                                    className="hipaa-badge"
                                />
                            </div>
                        </div>
                        {/* Quick Links */}
                        <div className="col-md-4 text-center text-md-left mt-4 mt-md-0">
                            <h6>Quick Links</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Erectile Dysfunction</a>
                                </li>
                                <li>
                                    <a href="#">Weight Loss</a>
                                </li>
                                <li>
                                    <a href="#">Men’s Hair Loss</a>
                                </li>
                                <p>
                                    Contact:{" "}
                                    <a href="mailto:hello@rizzpharma.com">hello@rizzpharma.com</a>
                                </p>
                            </ul>
                        </div>
                        {/* Company Links */}
                        <div className="col-md-4 text-center text-md-left mt-4 mt-md-0">
                            <h6>Our Company</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">HIPAA Notice</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Return &amp; Refund Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="#">CCPA Opt-Out</a>
                                </li>
                            </ul>
                            <div className="social-icons mt-5">
                                <a href="#">
                                    <i className="fab fa-facebook" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                            <div>
                                <p>
                                    Copyright © 2024 Rizz Pharma. All Rights Reserved - Built by
                                    Business Web Social
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <hr className="my-4" />
                    <div className="text-center">
                        <div className="footer-logo">Rizz </div>
                        <div className="footer-logo2">- Pharma - </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer