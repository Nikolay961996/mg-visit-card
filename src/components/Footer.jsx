import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '1rem', fontSize: '2rem' }}>MadGeeks</h3>
                    <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
                        Разработка простых и сложных IT-решений для бизнеса и производства
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        marginBottom: '2rem',
                        flexWrap: 'wrap'
                    }}>
                        <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Услуги</a>
                        <a href="#cases" style={{ color: 'white', textDecoration: 'none' }}>Кейсы</a>
                        <a href="#team" style={{ color: 'white', textDecoration: 'none' }}>Команда</a>
                        <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Контакты</a>
                    </div>
                    <p style={{ opacity: 0.6 }}>
                        © 2025 MadGeeks. Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer