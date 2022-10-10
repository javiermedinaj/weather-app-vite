import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            {/* Site footer */}
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">
                                Aplicacion creada con la API de <a href="https://openweathermap.org/current">Open weather</a>
                            </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Links</h6>
                            <ul className="footer-links">
                                <li>
                                    <a href="https://github.com/javiermedinaj/weather-app-vite" target="_blank">Project repository</a>
                                </li>

                                <li>
                                    <a href="http://scanfcode.com/contribute-at-scanfcode/" target="_blank">
                                        Linkedin
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/javiermedinaj?tab=repositories" target="_blank">Github</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>

            </footer>
        </>

    )
}

export default Footer