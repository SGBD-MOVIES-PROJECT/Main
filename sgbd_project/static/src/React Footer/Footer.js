import React from 'react'
import Footer from '../components/footer'
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import '../components/footer/styles/footer.css';


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Link href="#">About Us</Footer.Link>
                
                </Footer.Column>
                <Footer.Column>
                <Footer.Link href="#">Services</Footer.Link>
                
                </Footer.Column>
                <Footer.Column>
                <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Link href="#">Social</Footer.Link>
                </Footer.Column>
                <Footer.Link href="https://ca-es.facebook.com/UdG.universitat/"><FaFacebook className='icon'/>Facebook</Footer.Link>
                <Footer.Link href="https://www.instagram.com/oscarruscalleda1/"><FaInstagram className='icon'/>Instagram</Footer.Link>
                <Footer.Link href="https://www.youtube.com/shorts/16uJ-jxcKHo"><FaYoutube className='icon'/>Youtube</Footer.Link>
                <Footer.Link href="https://twitter.com/oscarruscalleda"><FaTwitter className='icon'/>Twitter</Footer.Link>
            </Footer.Row>

            </Footer.Wrapper>
        </Footer>
    )
}