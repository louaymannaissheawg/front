import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div >
                    <h4 className="kool">Kool</h4>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Kool Restaurant. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
