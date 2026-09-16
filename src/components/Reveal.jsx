import { motion, useReducedMotion } from 'framer-motion'

/**
 * Единый язык появления: мягкий подъём с blur-растворением.
 * Все reveal-эффекты страницы проходят через этот компонент.
 * При prefers-reduced-motion контент показывается без анимации.
 */
const Reveal = ({ children, delay = 0, y = 28, as = 'div', ...rest }) => {
    const Tag = motion[as] || motion.div
    const reduce = useReducedMotion()

    if (reduce) {
        const StaticTag = Tag === motion.div ? 'div' : as
        return <StaticTag {...rest}>{children}</StaticTag>
    }

    return (
        <Tag
            className="reveal"
            initial={{ opacity: 0, y, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
            {...rest}
        >
            {children}
        </Tag>
    )
}

export default Reveal
