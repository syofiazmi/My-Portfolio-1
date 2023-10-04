import React from 'react';
import './HeroComponent.css'
import heroSVG from '../../Assets/Images/developer_activity.svg'

const HeroComponent = () => {
    return (
        <section id='hero' className='hero'>
            <div className='hero-box flex'>
                <div className='hero-headline'>
                    <h1 className='hero-greeting'>Hello, I'm <span className='hero-name'>Syofi</span></h1>
                    <h2 className='hero-desc'>I'm Front-end Developer based in Indonesia</h2>
                    <a href='#about' className='hero-button'>About Me</a>
                </div>
                <div className='img'>
                    <img src={heroSVG} className='hero-image' alt='Developer Activity SVG' />
                </div>
            </div>
        </section>
    );
}

export default HeroComponent;
