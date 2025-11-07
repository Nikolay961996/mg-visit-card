import React, { useState } from 'react'

const Services = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        budget: '',
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Здесь будет логика отправки формы
        console.log('Form submitted:', formData)
        alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="section-title">Наши услуги</h2>

                <div className="services-grid">
                    <div className="service-card">
                        <h3>Сложные web-сайты</h3>
                        <p>Разработка высоконагруженных веб-приложений и сложных интерфейсов</p>
                    </div>

                    <div className="service-card">
                        <h3>Кастомное ПО под железо</h3>
                        <p>Программное обеспечение для специализированного оборудования</p>
                    </div>

                    <div className="service-card">
                        <h3>Десктопное ПО</h3>
                        <p>Кроссплатформенные desktop приложения (не 1С)</p>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h3 style={{ marginBottom: '2rem' }}>Форматы сотрудничества:</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px', minWidth: '200px' }}>
                            <h4>Разработка «под ключ»</h4>
                        </div>
                        <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px', minWidth: '200px' }}>
                            <h4>Поддержка и развитие</h4>
                        </div>
                        <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '10px', minWidth: '200px' }}>
                            <h4>Аутсорс услуги</h4>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Цены обсуждаются индивидуально. Кратко опишите свою проблему:
                    </p>

                    <form onSubmit={handleSubmit} className="contact-form">
                        {/*<div className="form-group">*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        name="name"*/}
                        {/*        placeholder="Ваше имя"*/}
                        {/*        value={formData.name}*/}
                        {/*        onChange={handleChange}*/}
                        {/*        required*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*<div className="form-group">*/}
                        {/*    <input*/}
                        {/*        type="email"*/}
                        {/*        name="email"*/}
                        {/*        placeholder="Email"*/}
                        {/*        value={formData.email}*/}
                        {/*        onChange={handleChange}*/}
                        {/*        required*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*<div className="form-group">*/}
                        {/*    <input*/}
                        {/*        type="tel"*/}
                        {/*        name="phone"*/}
                        {/*        placeholder="Телефон"*/}
                        {/*        value={formData.phone}*/}
                        {/*        onChange={handleChange}*/}
                        {/*        required*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*<div className="form-group">*/}
                        {/*    <input*/}
                        {/*        type="text"*/}
                        {/*        name="budget"*/}
                        {/*        placeholder="Примерный бюджет"*/}
                        {/*        value={formData.budget}*/}
                        {/*        onChange={handleChange}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div className="form-group">
              {/*<textarea*/}
              {/*    name="description"*/}
              {/*    placeholder="Опишите вашу задачу..."*/}
              {/*    value={formData.description}*/}
              {/*    onChange={handleChange}*/}
              {/*    required*/}
              {/*/>*/}
                        </div>
                        {/*<button type="submit" className="cta-button">*/}
                        {/*    ОСТАВИТЬ ЗАЯВКУ*/}
                        {/*</button>*/}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Services