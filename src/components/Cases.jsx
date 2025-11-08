import React from 'react'

// Импортируем изображения кейсов
import crawlerImage from '../assets/images/cases/crawler.jpg'
import fuelImage from '../assets/images/cases/fuel-system.jpg'
import messengerImage from '../assets/images/cases/messenger.jpg'
import radiotechImage from '../assets/images/cases/radiotech.jpg'
import wifiImage from '../assets/images/cases/wifi-sniffer.jpg'
import biImage from '../assets/images/cases/bi-platform.jpg'

const Cases = () => {
    const cases = [
        {
            image: crawlerImage,
            title: "Программа-краулер для обновления цен на автомобили",
            description: "Автоматизированная система парсинга и обновления цен на автомобили с 50+ источников в реальном времени"
        },
        {
            image: fuelImage,
            title: "Система контроля топлива для морского порта",
            description: "Программный комплекс для учёта и контроля расхода топлива в морском порту Санкт-Петербурга"
        },
        {
            image: messengerImage,
            title: "Корпоративный мессенджер для тендерной биржи",
            description: "Secure messaging platform для оперативного согласования документации в режиме реального времени"
        },
        {
            image: radiotechImage,
            title: "Радиотехнический комплекс «Аэротон»",
            description: "Разработка программного обеспечения для управления радиотехническим оборудованием"
        },
        {
            image: wifiImage,
            title: "Wi-Fi-снифферы для управления трафиком",
            description: "Система анализа Wi-Fi сигналов для управления транспортными потоками в умном городе"
        },
        {
            image: biImage,
            title: "BI-платформа для ритейла",
            description: "Business Intelligence система для анализа продаж и прогнозирования спуска"
        }
    ]

    return (
        <section id="cases" className="section">
            <div className="container">
                <h2 className="section-title">Наши кейсы</h2>
                <div className="cases-grid">
                    {cases.map((caseItem, index) => (
                        <div key={index} className="case-card">
                            <div style={{
                                width: '100%',
                                height: '200px',
                                marginBottom: '1.5rem',
                                borderRadius: '10px',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src={caseItem.image}
                                    alt={caseItem.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <h3>{caseItem.title}</h3>
                            <p>{caseItem.description}</p>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
                        И многие другие решения для бизнеса и производства
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Cases