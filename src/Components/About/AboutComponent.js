import React from 'react';
import './AboutComponent.css'
import profileImage from '../../Assets/Images/my-profile.jpg'

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
                        <p>
                            My name is Syofi, I am a fullstack web developer. In my free time, I like to watch movies, play PES 2019 on my laptop, or doing practice such as jogging, futsal and badminton.
                        </p>
                        <br />
                        <p>
                            Mostly when I getting interested with some new tools or technologies I spend my time to read and try them. I found it help me to grow my skill.
                        </p>
                        <br />
                        <p>
                            When I getting stack of bugs I prefer to go far away from laptop for a while, or take a leisurly walk out of house. When I getting back, I am miraculously able to handle the bugs. Thanks God.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutComponent;
