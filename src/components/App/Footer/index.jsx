import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai";
import './footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_inner">
                    <p>
                        <AiOutlineCopyright />
                        TFPrime (2025)
                    </p>
                </div>
            </div>
        </footer>
    );
}
