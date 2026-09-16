import Reveal from './Reveal'

import crawlerImage from '../assets/images/cases/crawler.jpg'
import fuelImage from '../assets/images/cases/fuel-system.jpg'
import messengerImage from '../assets/images/cases/messenger.jpg'
import radiotechImage from '../assets/images/cases/radiotech.jpg'
import wifiImage from '../assets/images/cases/wifi-sniffer.jpg'
import biImage from '../assets/images/cases/bi-platform.jpg'

const CASES = [
    {
        image: crawlerImage,
        tag: 'автоматизация',
        title: 'Программа-краулер для обновления цен на автомобили',
        description:
            'Автоматизированная система парсинга и обновления цен с 50+ источников в реальном времени.',
    },
    {
        image: fuelImage,
        tag: 'под железо',
        title: 'Система контроля топлива для морского порта',
        description:
            'Программный комплекс для учёта и контроля расхода топлива в морском порту Санкт-Петербурга.',
    },
    {
        image: messengerImage,
        tag: 'веб-платформа',
        title: 'Корпоративный мессенджер для тендерной биржи',
        description:
            'Защищённая платформа обмена сообщениями для оперативного согласования документации в реальном времени.',
    },
    {
        image: radiotechImage,
        tag: 'под железо',
        title: 'Радиотехнический комплекс «Аэротон»',
        description:
            'Программное обеспечение для управления радиотехническим оборудованием.',
    },
    {
        image: wifiImage,
        tag: 'IoT / сети',
        title: 'Wi-Fi-снифферы для управления трафиком',
        description:
            'Система анализа Wi-Fi-сигналов для управления транспортными потоками в умном городе.',
    },
    {
        image: biImage,
        tag: 'аналитика',
        title: 'BI-платформа для ритейла',
        description:
            'Система бизнес-аналитики для анализа продаж и прогнозирования спроса.',
    },
]

const Cases = () => {
    return (
        <section id="cases" className="section section-panel">
            <div className="container">
                <Reveal as="h2" className="section-title">
                    Кейсы
                </Reveal>
                <div className="cases-grid">
                    {CASES.map((caseItem, index) => (
                        <Reveal as="div" className="case-card" key={index} delay={(index % 2) * 0.1}>
                            <div className="case-media">
                                <img src={caseItem.image} alt={caseItem.title} loading="lazy" />
                            </div>
                            <div className="case-body">
                                <span className="case-tag">{caseItem.tag}</span>
                                <h3>{caseItem.title}</h3>
                                <p>{caseItem.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <Reveal as="p" className="cases-footer">
                    И многие другие решения для бизнеса и производства.
                </Reveal>
            </div>
        </section>
    )
}

export default Cases
