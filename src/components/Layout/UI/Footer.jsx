import React from "react";
import footerContact from "../../../api/footerApi.json"; 
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footers = () => {
    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />,
    };

    return (
        <footer className="footer-section">
            <div className="footer-container grid grid-three-cols">
                {/* Footer Contacts */}
                {footerContact.map((curData, index) => {
                    const { icon, title, details } = curData;
                    return (
                        <div className="footer-contact" key={index}>
                            <div className="icon">{footerIcon[icon]}</div>
                            <div className="footer-contact-text">
                                <p className="footer-contact-title">{title}</p>
                                <p className="footer-contact-details">{details}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Copyright Area */}
            <div className="footer-copyright-area">
                <div className="footer-container">
                    <div className="footer-grid grid-two-cols">
                        <div className="footer-copyright-text">
                            <p>
                                Copyright &copy; 2024, All Rights Reserved. 
                                <span className="name"> Niranjan Kumar Vishu</span>
                            </p>
                        </div>

                        <div className="footer-menu">
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/safety">Safety</NavLink></li>
                                <li><NavLink to="/careers">Careers</NavLink></li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                                <li><NavLink to="/press">Press</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="https://www.instagram.com" target="_blank">Social</NavLink></li>
                                <li><NavLink to="https://www.google.com/maps" target="_blank">Map</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footers;
