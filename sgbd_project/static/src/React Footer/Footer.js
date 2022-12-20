import React from 'react'
import Footer from '../components/footer'
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import '../components/footer/styles/footer.css';


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Link href="/about">About Us</Footer.Link>
    
                <Footer.Link href="/services">Services</Footer.Link>
                <Footer.Link href="/help">Contact Us</Footer.Link>
            </Footer.Row>
            <Footer.Row>
            <Footer.Title href="#">__________________________________________________________________________________________________________</Footer.Title>
            </Footer.Row>
            <Footer.Row>
                <Footer.Link href="https://ca-es.facebook.com/UdG.universitat/"><FaFacebook className='icon1'/>Facebook</Footer.Link>
                <Footer.Link href="https://www.instagram.com/oscarruscalleda1/"><FaInstagram className='icon1'/>Instagram</Footer.Link>
                <Footer.Link href="https://www.youtube.com/@imdb"><FaYoutube className='icon1'/>Youtube</Footer.Link>
                </Footer.Row>

            </Footer.Wrapper>
            <div className='footerdiv'>
                <h1>-- Copyrights to CineTube --</h1>
            </div>
        </Footer>
    )
}