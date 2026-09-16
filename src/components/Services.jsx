import { ArrowRight, AppWindow, Cpu, Globe } from 'lucide-react'
import Reveal from './Reveal'

const SERVICES = [
    {
        icon: Globe,
        title: 'Сложные web-сайты',
        description:
            'Высоконагруженные веб-приложения и сложные интерфейсы, которые не падают под пиковым трафиком.',
    },
    {
        icon: Cpu,
        title: 'Кастомное ПО под железо',
        description:
            'Программное обеспечение для специализированного оборудования: от прошивки до панелей управления.',
    },
    {
        icon: AppWindow,
        title: 'Десктопное ПО',
        description:
            'Кроссплатформенные desktop-приложения, заточенные под рабочие процессы вашей команды.',
    },
]

const FORMATS = ['Разработка «под ключ»', 'Поддержка и развитие', 'Аутсорс-услуги']

const Services = () => {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="services" className="section section-panel">
            <div className="container">
                <Reveal as="h2" className="section-title">
                    Что мы делаем
                </Reveal>

                <div className="services-list">
                    {SERVICES.map((service, index) => (
                        <Reveal as="div" className="service-row" key={index} delay={index * 0.1}>
                            <div className="service-icon">
                                <service.icon strokeWidth={1.8} />
                            </div>
                            <div className="service-text">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                            <ArrowRight className="service-arrow" size={26} strokeWidth={1.8} />
                        </Reveal>
                    ))}
                </div>

                <Reveal as="div" className="service-formats">
                    <p className="service-formats-title">Форматы сотрудничества</p>
                    <div className="format-chips">
                        {FORMATS.map((format) => (
                            <span className="format-chip" key={format}>
                                {format}
                            </span>
                        ))}
                    </div>
                    <p className="service-note">
                        Цены обсуждаются индивидуально — кратко опишите свою задачу.
                    </p>
                    <button className="cta-button" onClick={() => scrollTo('contact')}>
                        Описать задачу
                    </button>
                </Reveal>
            </div>
        </section>
    )
}

export default Services
