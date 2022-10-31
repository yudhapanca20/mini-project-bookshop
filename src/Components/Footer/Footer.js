import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className='footer-container'>
            <ul className='footer-list'>
                <li><h2>YudhaBookShop</h2></li>
                <li><p>Our shop focuses on the world of books and always updates the latest books</p></li>
            </ul>
            <ul className='footer-list'>
                <li><h2>NOTICES</h2></li>
                <li><p>Copyright @<a href="https://www.facebook.com/yudha.panca.1840/"rel="noreferrer" target="_blank">YudhaPancaP</a>2022</p></li>
            </ul>
            <ul className='footer-list'>
                <li><h2>SOCIALS</h2></li>
                <li>
                    <a href="https://www.linkedin.com/in/yudha-panca-pranata-230433254/" rel="noreferrer" target="_blank">
                        <p>Linkedin</p>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/yudhapanca20" rel="noreferrer" target="_blank">
                        <p>Github</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/yudha.panca.1840/" rel="noreferrer" target="_blank">
                        <p>Facebook</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/yudhapancapranata/?hl=id" rel="noreferrer" target="_blank">
                        <p>Instagram</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export { Footer } 