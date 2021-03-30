import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-row">
                <div className="terms"
                data-aos="fade-right"
                data-aos-easing="ease">
                    <h1>Terms & Conditions</h1>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Refund Poicy</li>
                        <Link to="/login"><li>Login</li></Link>    
                    </ul>
                </div>
                <div className="proof"
                data-aos="fade-up"
                data-aos-easing="ease">
                    <h1>Customer Proof</h1>
                    <ul>
                        <li>Trade Name</li>
                        <li>Nature Service</li>
                        <li>Pan Card</li>
                        <li>Aadhaar Card</li>
                        <li>Passport Size photo</li>
                        <li>Proof Business agreement</li>
                        <li>Paper, electriciy bill,Tax paper</li>
                        <li>Cancelled Cheque(savings or current a/c)</li>
                    </ul>
                </div>
                <div className="address"
                data-aos="fade-left"
                data-aos-easing="ease">
                    <h1>Get in touch</h1>
                    <ul>
                        <li>Sardapally(Phansidewa More),Opp. St. Joseph More,</li>
                        <li>P.O-Kadamtala,Siliguri,P.S-Matigara,</li>
                        <li>Dist: Darjeeling, PIN: 734011,W.B</li>
                        <li>Telephone : <a href="tel:+918695510051">+918695510051</a></li>
                        <li>Telephone : <a href="tel:+919733347999">+919733347999</a></li>
                        <li>Telephone : <a href="mailto:bws@bluewebsurfer.com">bws@bluewebsurfer.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="copyrights"
                data-aos="fade-right">
                    &copy; <a href="https://www.bluewebsurfer.com">Blueweb Surfer</a>. All rights reserved.
                </div>
                <div className="social"
                data-aos="fade-right">
                    <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
