import { Gauge, ShieldCheck, Workflow, Boxes } from 'lucide-react'
import Reveal from './Reveal'

const ADVANTAGES = [
    {
        icon: ShieldCheck,
        title: 'Стабильность при больших объёмах',
        description:
            'Наши системы работают стабильно даже при обработке миллионов запросов и терабайтов данных.',
    },
    {
        icon: Gauge,
        title: 'Критические нагрузки',
        description:
            'Архитектура выдерживает пиковые нагрузки без потери производительности.',
    },
    {
        icon: Workflow,
        title: 'Автоматизация процессов',
        description:
            'Оптимизируем и автоматизируем сложные производственные и бизнес-процессы.',
    },
    {
        icon: Boxes,
        title: 'Сложные системы',
        description:
            'Берёмся за проекты любой сложности — от IoT до высоконагруженных SaaS-платформ.',
    },
]

const Advantages = () => {
    return (
        <section id="advantages" className="section">
            <div className="container">
                <Reveal as="h2" className="section-title">
                    Почему мы
                </Reveal>
                <div className="advantages-list">
                    {ADVANTAGES.map((advantage, index) => (
                        <Reveal as="div" className="advantage-item" key={index} delay={(index % 2) * 0.1}>
                            <div className="advantage-icon">
                                <advantage.icon strokeWidth={1.8} />
                            </div>
                            <div>
                                <h3>{advantage.title}</h3>
                                <p>{advantage.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Advantages
