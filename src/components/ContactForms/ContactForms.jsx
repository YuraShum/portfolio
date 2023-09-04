import { useRef } from "react";
import emailjs from '@emailjs/browser';

import './ContactForms.scss'


export default function ContactForms() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs.sendForm('service_j7lqwtg', 'template_m0sq6z9', form.current, 'slFtcRYzAA1hxMwAc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='email-form'>
            <form ref={form} onSubmit={sendEmail} >
                <h2>Send me an email</h2>
                <div className="box-form">
                    <div className="box-form-left">
                        <div className="input-section">
                            <label>Name</label>
                            <input type="text" name="user_name" />
                        </div>
                        <div className="input-section">
                            <label>Email</label>
                            <input type="email" name="user_email" />
                        </div>
                    </div>
                    <div className="box-form-right">
                        <label>Message</label>
                        <textarea name="message" />
                    </div>
                </div>
                <div className="submit-button">
                    <input type="submit" value="Send email" />
                </div>
            </form>
        </div>
    );
}