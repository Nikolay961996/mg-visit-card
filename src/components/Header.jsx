import { useEffect, useState } from 'react'

const NAV = [
    { id: 'services', label: 'Услуги' },
    { id: 'cases', label: 'Кейсы' },
    { id: 'team', label: 'Команда' },
    { id: 'contact', label: 'Контакты' },
]

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
            <div className="container header-inner">
                <button className="logo" onClick={() => scrollToSection('hero')}>
                    MadGeeks<span className="logo-accent">.</span>
                </button>
                <nav className="nav" aria-label="Основная навигация">
                    {NAV.map((item) => (
                        <button
                            key={item.id}
                            className="nav-link"
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
                <button className="cta-button header-cta" onClick={() => scrollToSection('contact')}>
                    Связаться
                </button>
            </div>
        </header>
    )
}

export default Header
