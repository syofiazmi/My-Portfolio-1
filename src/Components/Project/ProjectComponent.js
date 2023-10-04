import React from 'react';
import './ProjectComponent.css'
import prImageSuwit from '../../Assets/Images/Project/game-suwit-jawa.png'
import prImageAz from '../../Assets/Images/Project/movie-az.png'
import prImageKasir from '../../Assets/Images/Project/kasir-app.png'

const ProjectComponent = () => {
    return (
        <section id='projects' className='project flex'>
            <div className='project-box flex'>
                <div className='section-title'>
                    <h1>Projects</h1>
                </div>
                <div className='project-list flex'>

                    <div className='project-card'>
                        <div className='project-image'>
                            <img className='img' src={prImageSuwit} alt='Game Suwit PNG' />
                        </div>
                        <div className='project-desc'>
                            <div className='card-title'>
                                <h1>Suwit Jawa V2</h1>
                            </div>
                            <div className='card-subtitle'>
                                <h3>Game</h3>
                            </div>
                            <div className='card-desc'>
                                <p>Suwit Jawa is a game using the hands with the choice of the thumb representing an elephant, the index finger representing a human, and the little finger representing an ant.</p>
                            </div>
                            {/* <div className='card-account'>
                                <p>loremipsum</p>
                            </div> */}
                            <div className='card-tech'>
                                <h3 className='card-tech-title'>Technologies:</h3>
                                <ul className='tech-list flex'>
                                    <li className='tech-item'>HTML</li>
                                    <li className='tech-item'>CSS</li>
                                    <li className='tech-item'>Javacript</li>
                                    <li className='tech-item'>Github Page</li>
                                </ul>
                            </div>
                            <div className='card-button flex'>
                                <a className='button-item' href='https://syofiazmi.github.io/game-suwit-jawa-sederhana/' target='_blank' rel="noreferrer">Live Demo</a>
                                <a className='button-item btn-code' href='https://github.com/syofiazmi/game-suwit-jawa-sederhana' target='_blank' rel="noreferrer">Source Code</a>
                            </div>
                        </div>
                    </div>

                    <div className='project-card'>
                        <div className='project-image'>
                            <img className='img' src={prImageAz} alt='Movie AZ PNG' />
                        </div>
                        <div className='project-desc'>
                            <div className='card-title'>
                                <h1>AZ Movie</h1>
                            </div>
                            <div className='card-subtitle'>
                                <h3>Find Movie App</h3>
                            </div>
                            <div className='card-desc'>
                                <p>AZ Movie is a web database to find about movie informations. The Movie database is fetched from The Movie Database API.</p>
                            </div>
                            {/* <div className='card-account'>
                                <p>loremipsum</p>
                            </div> */}
                            <div className='card-tech'>
                                <h3 className='card-tech-title'>Technologies:</h3>
                                <ul className='tech-list flex'>
                                    <li className='tech-item'>React Js</li>
                                    <li className='tech-item'>TMDB API</li>
                                    <li className='tech-item'>Netlify</li>
                                </ul>
                            </div>
                            <div className='card-button flex'>
                                <a className='button-item' href='https://azet-movie.netlify.app/' target='_blank' rel="noreferrer">Live Demo</a>
                                <a className='button-item btn-code' href='https://github.com/syofiazmi/AzMovie' target='_blank' rel="noreferrer">Source Code</a>
                            </div>
                        </div>
                    </div>

                    {/* <div className='project-card'>
                        <div className='project-image'>
                            <img className='img' src={prImageKasir} alt='Kasir App PNG' />
                        </div>
                        <div className='project-desc'>
                            <div className='card-title'>
                                <h1>Kasir</h1>
                            </div>
                            <div className='card-subtitle'>
                                <h3>Cashier App</h3>
                            </div>
                            <div className='card-desc'>
                                <p>Kasir app is an online cashier app to do list foods, drinks or snacks that costumer order.</p>
                            </div> */}
                    {/* <div className='card-account'>
                                <p>loremipsum</p>
                            </div> */}
                    {/* <div className='card-tech'>
                                <h3 className='card-tech-title'>Technologies:</h3>
                                <ul className='tech-list flex'>
                                    <li className='tech-item'>React Js</li>
                                    <li className='tech-item'>JSON Server</li>
                                    <li className='tech-item'>Netlify</li>
                                    <li className='tech-item'>Cyclic</li>
                                </ul>
                            </div> */}
                    {/* <div className='card-button flex'>
                                <a className='button-item' href='https://kasir-cafe.netlify.app/' target='_blank' rel="noreferrer">Live Demo</a>
                                <a className='button-item btn-code' href='https://github.com/syofiazmi/kasir-app-frontend' target='_blank' rel="noreferrer">Source Code</a>
                            </div> */}
                    {/* </div>
                    </div> */}

                </div>
            </div>
        </section>
    );
}

export default ProjectComponent;
