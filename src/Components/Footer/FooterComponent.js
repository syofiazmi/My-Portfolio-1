import React from 'react';
import './FooterComponent.css'

const FooterComponent = () => {
    return (
        <section className='footer flex'>
              <div className='footer-box flex'>
                <div className='footer-copyright'>
                    <p>&copy; Copyright 2023 Syofi. All rights reserved.</p>
                </div>
              </div>
        </section>
    );
}

export default FooterComponent;
