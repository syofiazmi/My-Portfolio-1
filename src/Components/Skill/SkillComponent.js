import React from 'react';
import './SkillComponent.css'
import FrontendImg from '../../Assets/Images/frontend.png'
import BackendImg from '../../Assets/Images/backend.png'
import ToolImg from '../../Assets/Images/tool.png'

const SkillComponent = () => {
    return (
        <section id='skills' className='skill'>
            <div className='skill-box flex box'>
                <div className='section-title'>
                    <h1>My Skills</h1>
                </div>
                <div className='skill-stacks flex'>
                    <div className='skill-group'>
                        <div className='skill-image'>
                            <img src={FrontendImg} alt='Frontend PNG' />
                        </div>
                        <div className='skill-header'>
                            <h2>FrontEnd</h2>
                        </div>
                        <div>
                            <ul className='skill-list'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>ReactJs</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                    <div className='skill-group'>
                        <div className='skill-image'>
                            <img src={BackendImg} alt='Backend PNG' />
                        </div>
                        <div className='skill-header'>
                            <h2>BackEnd</h2>
                        </div>
                        <div>
                            <ul className='skill-list'>
                                <li>NodeJs</li>
                                <li>Express</li>
                                <li>MySQL</li>
                                <li>AWS</li>
                            </ul>
                        </div>
                    </div>
                    <div className='skill-group'>
                        <div className='skill-image'>
                            <img src={ToolImg} alt='Tool PNG' />
                        </div>
                        <div className='skill-header'>
                            <h2>Others</h2>
                        </div>
                        <div>
                            <ul className='skill-list'>
                                <li>Git</li>
                                <li>Github</li>
                                <li>Gitlab</li>
                                <li>Postman</li>
                                <li>VSCode</li>
                                <li>Netlify</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillComponent;
