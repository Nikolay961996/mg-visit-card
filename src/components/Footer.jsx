const Footer = () => {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-logo">
                    MadGeeks<span className="logo-accent">.</span>
                </div>
                <p className="footer-tagline">
                    Разработка простых и сложных IT-решений для бизнеса и производства
                </p>
                <nav className="footer-nav" aria-label="Навигация в подвале">
                    <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Услуги</a>
                    <a href="#cases" onClick={(e) => { e.preventDefault(); scrollToSection('cases') }}>Кейсы</a>
                    <a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team') }}>Команда</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Контакты</a>
                </nav>
                <p className="footer-copy">© 2026 MadGeeks</p>
            </div>
        </footer>
    )
}

export default Footer
