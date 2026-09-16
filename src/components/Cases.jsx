import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

import crawlerImage from '../assets/images/cases/crawler.svg'
import fuelImage from '../assets/images/cases/fuel-system.svg'
import messengerImage from '../assets/images/cases/messenger.svg'
import radiotechImage from '../assets/images/cases/radiotech.svg'
import wifiImage from '../assets/images/cases/wifi-sniffer.svg'
import biImage from '../assets/images/cases/bi-platform.svg'
import portfolioImage from '../assets/images/cases/portfolio.svg'
import kcentrImage from '../assets/images/cases/kcentr.svg'

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
    {
        image: portfolioImage,
        tag: 'веб / портфолио',
        title: 'Сайт-портфолио для художницы',
        description:
            'Авторский сайт с портфолио работ, выполненный на заказ: aliyashagieva.art.',
        link: 'https://aliyashagieva.art',
    },
    {
        image: kcentrImage,
        tag: 'платформа / fullstack',
        title: 'Платформа для психологов kcentru.ru',
        description:
            'Сложный сайт с CMS-админкой: ролевая модель и авторизация, динамический контент, интеграция почтового сервиса, PostgreSQL, бэкенд на C#, генерация отчётов в PDF.',
        link: 'https://kcentru.ru',
    },
]

const CaseCard = ({ caseItem }) => {
    const body = (
        <>
            <div className="case-media">
                <img src={caseItem.image} alt={caseItem.title} loading="lazy" />
            </div>
            <div className="case-body">
                <span className="case-tag">
                    {caseItem.tag}
                    {caseItem.link && <ArrowUpRight size={13} strokeWidth={2} style={{ verticalAlign: '-2px', marginLeft: '4px' }} />}
                </span>
                <h3>{caseItem.title}</h3>
                <p>{caseItem.description}</p>
            </div>
        </>
    )

    return caseItem.link ? (
        <a className="case-card case-card-link" href={caseItem.link} target="_blank" rel="noreferrer">
            {body}
        </a>
    ) : (
        <div className="case-card">{body}</div>
    )
}

const Cases = () => {
    return (
        <section id="cases" className="section section-panel">
            <div className="container">
                <Reveal as="h2" className="section-title">
                    Кейсы
                </Reveal>
                <div className="cases-grid">
                    {CASES.map((caseItem, index) => (
                        <Reveal as="div" className="case-card-wrap" key={index} delay={(index % 2) * 0.1}>
                            <CaseCard caseItem={caseItem} />
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
