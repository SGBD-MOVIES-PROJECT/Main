import React from 'react'
import Footer from '../components/footer'
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import '../components/footer/styles/footer.css';


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Link href="#">About Us</Footer.Link>
    
                <Footer.Link href="#">Services</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.Row>
            <Footer.Row>
            <Footer.Title href="#">__________________________________________________________________________________________________________</Footer.Title>
            </Footer.Row>
            <Footer.Row>
                <Footer.Link href="https://ca-es.facebook.com/UdG.universitat/"><FaFacebook className='icon'/>Facebook</Footer.Link>
                <Footer.Link href="https://www.instagram.com/oscarruscalleda1/"><FaInstagram className='icon'/>Instagram</Footer.Link>
                <Footer.Link href="https://www.youtube.com/@imdb"><FaYoutube className='icon'/>Youtube</Footer.Link>
                </Footer.Row>

            </Footer.Wrapper>
            <div className='footerdiv'>
                <h1>-- Copyrights to CineTube --</h1>
            </div>
        </Footer>
    )
}