import React from 'react'

const Header = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            padding: '1rem 0',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        }}>
            <div className="container">
                <nav style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#333',
                        cursor: 'pointer'
                    }} onClick={() => scrollToSection('hero')}>
                        MadGeeks
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <button
                            onClick={() => scrollToSection('services')}
                            style={{
                                border: 'none',
                                background: 'none',
                                color: '#333',
                                fontWeight: '500',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            Услуги
                        </button>
                        <button
                            onClick={() => scrollToSection('cases')}
                            style={{
                                border: 'none',
                                background: 'none',
                                color: '#333',
                                fontWeight: '500',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            Кейсы
                        </button>
                        <button
                            onClick={() => scrollToSection('team')}
                            style={{
                                border: 'none',
                                background: 'none',
                                color: '#333',
                                fontWeight: '500',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            Команда
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            style={{
                                border: 'none',
                                background: 'none',
                                color: '#333',
                                fontWeight: '500',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            Контакты
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header