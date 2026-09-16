import Reveal from './Reveal'

const PAIN_POINTS = [
    'Сложно объяснить разработчикам, что именно вам нужно?',
    'Никто не берётся за вашу нестандартную задачу?',
    'Боитесь потратить бюджет и время впустую?',
]

const PainPoints = () => {
    return (
        <section id="pain" className="section">
            <div className="container">
                <Reveal as="h2" className="section-title section-title-center">
                    Знакомо?
                </Reveal>
                <div className="pain-list">
                    {PAIN_POINTS.map((point, index) => (
                        <Reveal as="div" className="pain-point" key={index} delay={index * 0.12}>
                            <span className="pain-mark">&gt;</span>
                            <span>{point}</span>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PainPoints
