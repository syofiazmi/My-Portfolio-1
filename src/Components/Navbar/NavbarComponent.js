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
        <section className='navBar flex'>
            <div className='navBar-box flex'>
                <div className='nav-logo flex'>
                    <a className='logo flex' href='#hero'>
                        <SiSemanticweb className='icon' />
                        <h2 className='logo-title'>Syofi</h2>
                    </a>
                </div>
                <div className={active}>
                    <ul className='nav-list flex'>
                        <a href='#about'><li className='nav-item'>About</li></a>
                        <a href='#skills'><li className='nav-item'>Skills</li></a>
                        <a href='#projects'><li className='nav-item'>Projects</li></a>
                        <a href='#contact' className='nav-button'>Contact Me</a>
                    </ul>
                    <div className='nav-close' onClick={closeNavModal}>
                        <AiOutlineClose />
                    </div>
                </div>
                <div className='nav-show' onClick={showNavModal}><RxHamburgerMenu /></div>
            </div>
        </section>
    );
}

export default NavbarComponent;
