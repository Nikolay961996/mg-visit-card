import { Trophy } from 'lucide-react'
import Reveal from './Reveal'

import ekaterinaPhoto from '../assets/images/team/ekaterina.jpg'
import nikolayPhoto from '../assets/images/team/nikolay.jpg'

const TEAM = [
    {
        photo: ekaterinaPhoto,
        name: 'Иванова Екатерина',
        role: 'Team Lead / Developer',
        experience: '4+ лет опыта',
        skills: ['C#', 'React', 'Angular', 'Python', 'Аналитика', 'Работа с заказчиками'],
        achievements: 'Эксперт в выявлении и решении проблем заказчиков',
        previous: 'Myrtex, MBI',
    },
    {
        photo: nikolayPhoto,
        name: 'Иванов Николай',
        role: 'Tech Lead / Senior FullStack Developer',
        experience: '8+ лет опыта',
        skills: ['C#', 'Go', 'Python', 'C', 'Микросервисы', 'Архитектура', 'Highload', 'React'],
        achievements: 'Ведущий разработчик в большинстве проектов, эксперт в сложных системах',
        previous: 'Ozon Tech, Alfa Bank, Myrtex',
    },
]

const ACHIEVEMENTS = [
    'Победители хакатона ЛЦТ 2024',
    'Призёры Аэротон 2024',
    'Призёры XMASHACK 2023',
    'Призёры TenderHack 2022 и 2023',
    'Спикеры на конференциях React Conf и HolyJS',
    'Партнёрства с командами в разных странах',
]

const Team = () => {
    return (
        <section id="team" className="section">
            <div className="container">
                <Reveal as="h2" className="section-title">
                    Команда
                </Reveal>

                <div className="team-grid">
                    {TEAM.map((member, index) => (
                        <Reveal as="div" className="team-member" key={index} delay={index * 0.12}>
                            <div className="member-head">
                                <div className="member-photo">
                                    <img src={member.photo} alt={member.name} loading="lazy" />
                                </div>
                                <div>
                                    <div className="member-name">{member.name}</div>
                                    <div className="member-role">{member.role}</div>
                                    <div className="member-exp">{member.experience}</div>
                                </div>
                            </div>
                            <div className="member-skills">
                                {member.skills.map((skill) => (
                                    <span className="skill-chip" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <p className="member-achievements">{member.achievements}</p>
                            <p className="member-previous">
                                <span>Опыт:</span> {member.previous}
                            </p>
                        </Reveal>
                    ))}
                </div>

                <Reveal as="div" className="achievements">
                    <h3>
                        <Trophy size={20} strokeWidth={1.8} style={{ verticalAlign: '-4px', marginRight: '10px', color: 'var(--accent-bright)' }} />
                        Достижения
                    </h3>
                    <ul className="achievements-list">
                        {ACHIEVEMENTS.map((item, index) => (
                            <li key={index}>
                                <span className="achievement-mark">*</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    )
}

export default Team
