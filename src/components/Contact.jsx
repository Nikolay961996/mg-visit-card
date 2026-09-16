import { Mail, MapPin, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'

const CONTACTS = [
    {
        icon: Send,
        label: 'Telegram',
        value: '@aphilome',
        href: 'https://t.me/aphilome',
    },
    {
        icon: Mail,
        label: 'Email',
        value: '1.katrin.1@mail.ru',
        href: 'mailto:1.katrin.1@mail.ru',
    },
    {
        icon: Phone,
        label: 'Телефон',
        value: '+7 (952) 029-34-54',
        href: 'tel:+79520293454',
    },
    {
        icon: MapPin,
        label: 'Город',
        value: 'Чебоксары, Россия',
        href: null,
    },
]

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <Reveal as="h2" className="contact-title">
                    Обсудим ваш проект?
                </Reveal>
                <Reveal as="p" className="contact-lead" delay={0.08}>
                    Опишите задачу — предложим решение и смету. Отвечаем быстро.
                </Reveal>

                <Reveal as="div" className="contact-rows" delay={0.16}>
                    {CONTACTS.map((contact) => {
                        const inner = (
                            <>
                                <contact.icon strokeWidth={1.8} />
                                <span className="contact-row-label">{contact.label}</span>
                                <span>{contact.value}</span>
                            </>
                        )
                        return contact.href ? (
                            <a className="contact-row" key={contact.label} href={contact.href}>
                                {inner}
                            </a>
                        ) : (
                            <div className="contact-row" key={contact.label}>
                                {inner}
                            </div>
                        )
                    })}
                </Reveal>

                <Reveal as="div" className="contact-actions" delay={0.24}>
                    <a className="cta-button" href="https://t.me/aphilome" target="_blank" rel="noreferrer">
                        Написать в Telegram
                    </a>
                    <a className="cta-button-ghost" href="mailto:1.katrin.1@mail.ru">
                        Написать на почту
                    </a>
                </Reveal>
            </div>
        </section>
    )
}

export default Contact
