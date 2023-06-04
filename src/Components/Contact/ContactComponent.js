import React from 'react';
import './ContactComponent.css'
import { MdEmail } from 'react-icons/md'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const ContactComponent = () => {
    return (
        <section id='contact' className='contact flex'>
            <div className='contact-box flex'>
                <div className='section-title'>
                    <h1>Contact Me</h1>
                </div>
                <div className='contact-list flex'>

                    <a className='contact-card flex' href='mailto:muhammadsyofiazmi@gmail.com' >
                        <div className='card-box flex'>
                            <div className='card-header flex'>
                                <div className='card-logo'>
                                    <MdEmail />
                                </div>
                                <div >
                                    <h5 className='card-title'>Email</h5>
                                </div>
                            </div>
                            <div className='card-subtitle'>
                                <p>Let's get in touch. </p>
                            </div>
                        </div>
                    </a>

                    <a className='contact-card flex' href='https://www.linkedin.com/in/msyofiazmi/' target='_blank' rel="noreferrer">
                        <div className='card-box flex'>
                            <div className='card-header flex'>
                                <div className='card-logo'>
                                    <BsLinkedin />
                                </div>
                                <div className='card-title'>
                                    <h5>LinkedIn</h5>
                                </div>
                            </div>
                            <div className='card-subtitle'>
                                <p>Let's connect.  </p>
                            </div>
                        </div>
                    </a>

                    <a className='contact-card flex' href='https://github.com/syofiazmi?tab=repositories' target='_blank' rel="noreferrer">
                        <div className='card-box flex'>
                            <div className='card-header flex'>
                                <div className='card-logo'>
                                    <BsGithub />
                                </div>
                                <div className='card-title'>
                                    <h5>Github</h5>
                                </div>
                            </div>
                            <div className='card-subtitle'>
                                <p>Check out my repos. </p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>

        </section>
    );
}

export default ContactComponent;
