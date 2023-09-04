import {BsTelegram} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

import {ImLocation2} from 'react-icons/im'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

import './Contact.scss'
import ContactForms from '../../components/ContactForms/ContactForms'


export default function Contact() {

    const iconInfoStyle = {
        fontSize: 30,
        padding: 20,
        backgroundColor: '#E3E3E3 ',
        borderRadius: '50%',
        boxShadow: '3px 3px 2px rgb(199, 197, 197)'

    }
    return(
        <>
        <div className='contact'>
            <div className="contact-section">
            <div className="contact-link">
                <h1>contact.</h1>
                <p>Get in touch with me via social media or email.</p>
                <div className='social-networks'>
                    <a href="https://t.me/shumel234" target='_blank' className='telegram'><BsTelegram style={{color: '#00bfff', fontSize: 48}}/> Telegram</a>
                    <a href='https://instagram.com/yura_shumell?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' className='instagram'><FaInstagramSquare style={{color: '#E1306C', fontSize: 48}}/>Instagram</a>
                </div>
            </div>
            <div className="contact-info">
                <div className='box'>
                        <ImLocation2 style = {iconInfoStyle}/>
                        <div className='text'>
                            <h3>Address</h3>
                            <p> Mlyniv, Rivne region</p>
                    </div>
                    
                </div>
                <div className='box'>
                        <BsFillTelephoneFill style = {iconInfoStyle}/>
                        <div className='text'>
                            <h3>Phone</h3>
                            <p> 095-466-4465</p>
                    </div>
                    
                </div>
                <div className='box' >
                        <HiOutlineMail style = {iconInfoStyle}/>
                        <div className='text'>
                            <h3>Email</h3>
                            <p> yura.shumel@gmail.com</p>
                    </div>
                </div>
            </div>
            
        </div>
        
        </div>
        <span className='line'></span>
            <ContactForms/>
        </>
        // Додати посилання на соціальні мережі, також анімацію на данні розташування
    )
}