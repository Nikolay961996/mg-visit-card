import React from 'react'

const Hero = () => {
    return (
        <section id="hero" className="hero hero-with-bg">
            <div className="container">
                <div className="hero-content">
                    <h1>Мы — команда MadGeeks</h1>
                    <p>
                        Участники команды имеют общий опыт больше 8 лет в сферах фуллстек
                        веб-разработки, разработки ПО (озон тех), проектирования архитектуры.
                        Вместе мы реализовали больше 10+ IT-проектов!
                    </p>
                    <a href="#services" className="cta-button">
                        НАШИ УСЛУГИ
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero