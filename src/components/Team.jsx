import React from 'react'

// Импортируем фото команды
import ekaterinaPhoto from '../assets/images/team/ekaterina.jpg'
import nikolayPhoto from '../assets/images/team/nikolay.jpg'

const Team = () => {
    const teamMembers = [
        {
            photo: ekaterinaPhoto,
            name: "Иванова Екатерина",
            role: "Team Lead / Developer",
            experience: "4+ лет опыта",
            skills: ["MBI", "Анализ", "Сотрудничество", "Бизнес-идеи", "C#", "React", "Angular", "Python", "C"],
            achievements: "Эксперт в сфере выявлений и решений проблем заказчиков",
            previous: "Myrtex, MBI, Мама-предприниматель, Акселератор"
        },
        {
            photo: nikolayPhoto,
            name: "Иванов Николай",
            role: "Tech Lead / Senior FullStack Developer",
            experience: "8+ лет опыта",
            skills: ["C#", "GO", "Python", "C", "Microservices", "Architecture", "Highload", "Databases", "React", "Angular"],
            achievements: "Ведущий разработчик в большинстве проектов, эксперт в сложных системах",
            previous: "Ozon Tech, Alfa Bank, Myrtex"
        },
    ]

    const achievements = [
        {
            text: "Победители хакатона ЛЦТ 2024"
        },
        {
            text: "Призеры Аэротон 2024"
        },
        {
            text: "Призеры XMASHACK 2023"
        },
        {
            text: "Призеры TenderHack 2022 и 2023"
        },
        {
            text: "Спикеры на конференциях React Conf, HolyJS"
        },
        {
            text: "Партнёрство с интересными людьми в разных странах"
        }
    ]

    return (
        <section id="team" className="section section-light">
            <div className="container">
                <h2 className="section-title">Наша публичная команда</h2>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <div className="member-photo">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '50%'
                                    }}
                                />
                            </div>
                            <h3>{member.name}</h3>
                            <p style={{ fontWeight: 'bold', color: '#667eea', marginBottom: '0.5rem' }}>
                                {member.role}
                            </p>
                            <p style={{ color: '#666', marginBottom: '1rem' }}>{member.experience}</p>

                            <div style={{ margin: '1rem 0' }}>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#333' }}>
                                    Навыки:
                                </h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {member.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            style={{
                                                background: '#f1f3f4',
                                                padding: '0.3rem 0.8rem',
                                                borderRadius: '20px',
                                                fontSize: '0.85rem',
                                                color: '#555'
                                            }}
                                        >
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <p style={{ fontStyle: 'italic', opacity: 0.8, margin: '1rem 0' }}>
                                {member.achievements}
                            </p>

                            <p style={{ fontSize: '0.9rem', color: '#888' }}>
                                <strong>Ранее:</strong> {member.previous}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Секция достижений */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '3rem', fontSize: '2rem' }}>Наши достижения</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}>
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '15px',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    textAlign: 'left'
                                }}
                            >
                                <p style={{
                                    margin: 0,
                                    fontSize: '1.1rem',
                                    fontWeight: '500'
                                }}>
                                    {achievement.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Дополнительная статистика */}
                <div style={{
                    marginTop: '4rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '3rem 2rem',
                    borderRadius: '20px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>
                        В цифрах
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                10+
                            </div>
                            <div>Реализованных проектов</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                8 лет
                            </div>
                            <div>Средний опыт в IT</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                95%
                            </div>
                            <div>Успешных проектов</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                24/7
                            </div>
                            <div>Поддержка клиентов</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team