import { useEffect, useState } from 'react'

const PHRASES = [
    'сложное ПО под железо',
    'высоконагруженные веб-платформы',
    'десктопные приложения',
    'автоматизацию производства',
]

const TYPE_MS = 55
const DELETE_MS = 26
const HOLD_MS = 2100

/**
 * Печатающаяся строка: печать фразы → пауза → стирание → следующая.
 * Скринридерам заголовок доступен целиком через aria-label на h1.
 */
const Typewriter = () => {
    const [index, setIndex] = useState(0)
    const [text, setText] = useState('')
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const phrase = PHRASES[index]

        if (!deleting && text === phrase) {
            const t = setTimeout(() => setDeleting(true), HOLD_MS)
            return () => clearTimeout(t)
        }

        if (deleting && text === '') {
            const t = setTimeout(() => {
                setDeleting(false)
                setIndex((i) => (i + 1) % PHRASES.length)
            }, 350)
            return () => clearTimeout(t)
        }

        const step = deleting ? DELETE_MS : TYPE_MS + Math.random() * 40
        const t = setTimeout(() => {
            setText(phrase.slice(0, text.length + (deleting ? -1 : 1)))
        }, step)
        return () => clearTimeout(t)
    }, [text, deleting, index])

    return (
        <span className="hero-type" aria-hidden="true">
            Делаем {text}
            <span className="caret" />
        </span>
    )
}

const Hero = () => {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="hero" className="hero">
            <div className="container hero-inner">
                <h1 aria-label="MadGeeks — инженерная команда. Делаем сложное ПО под железо, высоконагруженные веб-платформы, десктопные приложения, автоматизацию производства">
                    MadGeeks — инженерная команда
                    <Typewriter />
                </h1>
                <p className="hero-sub">
                    8+ лет опыта в фулстек-разработке, архитектуре и высоких нагрузках.
                    10+ реализованных проектов — от IoT до корпоративных платформ.
                    Берёмся за задачи, от которых отказываются другие.
                </p>
                <div className="hero-actions">
                    <button className="cta-button" onClick={() => scrollTo('contact')}>
                        Обсудить проект
                    </button>
                    <button className="cta-button-ghost" onClick={() => scrollTo('cases')}>
                        Смотреть кейсы
                    </button>
                </div>
            </div>
            <div className="scroll-hint" aria-hidden="true">
                scroll
                <span className="scroll-hint-line" />
            </div>
        </section>
    )
}

export default Hero
