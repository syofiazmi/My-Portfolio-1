import React, { useState } from 'react'
import './NavbarComponent.css'
import { SiSemanticweb } from 'react-icons/si'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

const NavbarComponent = () => {
    const [active, setActive] = useState('navBarModal')

    //Fungsi untuk menampilkan modal navBar
    const showNavModal = () => {
        setActive('navBarModal navBarPosition')
    }

    //Fungsi untuk menghilangkan modal navBar
    const closeNavModal = () => {
        setActive('navBarModal')
    }

    return (
        <section className='navBar'>
            <div className='nav-logo'>
                <div className='nav-icon'><SiSemanticweb /></div>
                <h3>Syofi</h3>
            </div>
            <div className={active}>
                <div className='nav-close' onClick={closeNavModal}>
                    <AiOutlineClose />
                </div>  
                <ul className='nav-list'>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Blog</li>
                    <button className='nav-button'>Contact</button>
                </ul>
                 
            </div>
            <div className='nav-show' onClick={showNavModal}><RxHamburgerMenu /></div>
        </section>
    );
}

export default NavbarComponent;
