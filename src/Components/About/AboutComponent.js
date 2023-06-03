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
                            My name is Syofi, I am a computer graduate. In my free time, I like to watch movies, play soccer games, doing practice and practice web development.
                        </p><br />
                        <p>
                            Since 2018, I have been interested in software development. I tried trying several web and android stacks. After that I chose to work on Web development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutComponent;
