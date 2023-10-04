import React from 'react';
import './AboutComponent.css'
import profileImage from '../../Assets/Images/my-profile.png'

const AboutComponent = () => {
    return (
        <section id='about' className='about flex'>
            <div className='about-box flex box'>
                <div className='section-title'>
                    <h1>About Me</h1>
                </div>
                <div className='about-detail flex'>
                    <img className='about-image' src={profileImage} alt='My Profile JPG'></img>
                    <div className='about-desc'>
                        <p>Hi, my name is Syofi. Currently I am active as a teacher and as a Front-end Developer. I have attended several web development courses and bootcamps to gain more experience in the world of web developments.</p> <br />

                        <p>The technology I currently use is Javascript for the front-end on the web platform and the Flutter framework for the front-end on the mobile platform.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutComponent;
