import React from 'react'
import logo from "../images/krstack.jpg"

const Footer = () => {
  return (
    <>
     <footer className="bg-dark text-white pt-5 pb-5 footer-custom mt-5 " id="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img src={logo} alt="Logo" width="120" height="40" className="d-inline-block align-text-top"/>
                </div>
                <div className="col-md-2">
                    <div className="footer-section">
                        <ul>
                            <li><strong>Get to Know Us</strong></li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="footer-section">
                        <ul>
                            <li><strong>Connect with Us</strong></li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>WhatsApp</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-section">
                        <ul>
                            <li><strong>Java FSD</strong></li>
                            <li>Corejava</li>
                            <li>Jdbc</li>
                            <li>Servlets</li>
                            <li>Hibernate/jpa</li>
                            <li>Spring</li>
                            <li>Springboot</li>
                            <li>Frontend</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="footer-section">
                        <ul>
                            <li><strong>Content Developer</strong></li>
                            <li>Rafi</li>
                            <li>8247733016</li>
                            <li>9553816279</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="developer-custom text-center fs-">Copyright &copy; 2025 KR Fullstack. All Rights Reserved.</div>
            <div className="column"></div>
            <div className="row-md-2">
                    <img src={logo} alt="Logo" width="120" height="40" className="d-inline-block align-text-middle"/>
                </div>
                <div className="col-md-2"></div>
        </div>
    </footer>
    </>
  )
}

export default Footer