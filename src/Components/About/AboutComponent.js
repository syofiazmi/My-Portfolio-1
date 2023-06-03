import React from 'react';
import './AboutComponent.css'
import profileImage from '../../Assets/Images/my-profile.jpg'

const AboutComponent = () => {
    return (
        <div id='about' className='about flex'>
            <div className='about-box flex'>
                <div className='about-title'>
                    <h1>About Me</h1>
                </div>
                <div className='about-detail flex'>
                    <img className='about-image' src={profileImage} alt='My Profile JPG'></img>
                    <div className='about-desc'>
                        <p>
                            My name is Syofi, I am a computer graduate. In my free time, I like to watch movies, play soccer games and practice using new tools or technologies in web development.
                        </p><br />
                        <p>
                            Since 2018, I have been interested in software development. I tried trying several Web and Android stacks. Currently I work in Web development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
