import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Контакты</h2>
                <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                    <div className="contact-info">
                        <p><strong>Телеграм:</strong> @aphilome</p>
                        <p><strong>Email:</strong> 1.katrin.1@mail.ru</p>
                        <p><strong>Телефон:</strong> +7 (952) 029-34-54</p>
                        <p><strong>Адрес:</strong> Чебоксары, Россия</p>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                            Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом!
                        </p>
                        <a href="mailto:contact@madgeeks.ru" className="cta-button">
                            Написать нам
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact