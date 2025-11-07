import React from 'react'

// Импортируем иконки
import stabilityIcon from '../assets/images/advantages/stability.svg'
import performanceIcon from '../assets/images/advantages/performance.svg'
import automationIcon from '../assets/images/advantages/automation.svg'
import complexIcon from '../assets/images/advantages/complex.svg'

const Advantages = () => {
    const advantages = [
        {
            icon: stabilityIcon,
            title: 'Стабильность при больших объёмах',
            description: 'Наши системы работают стабильно даже при обработке миллионов запросов и терабайтов данных'
        },
        {
            icon: performanceIcon,
            title: 'Критические нагрузки',
            description: 'Архитектура выдерживает пиковые нагрузки без потери производительности'
        },
        {
            icon: automationIcon,
            title: 'Автоматизация процессов',
            description: 'Оптимизируем и автоматизируем сложные производственные и бизнес-процессы'
        },
        {
            icon: complexIcon,
            title: 'Сложные системы',
            description: 'Берёмся за проекты любой сложности - от IoT до высоконагруженных SaaS платформ'
        }
    ]

    return (
        <section id="advantages" className="section section-light">
            <div className="container">
                <h2 className="section-title">Наши преимущества</h2>
                <div className="advantages-grid">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="advantage-card">
                            <div style={{
                                width: '80px',
                                height: '80px',
                                margin: '0 auto 1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img
                                    src={advantage.icon}
                                    alt={advantage.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                            <h3>{advantage.title}</h3>
                            <p>{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Advantages