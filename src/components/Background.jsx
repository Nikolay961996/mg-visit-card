import { useEffect, useRef } from 'react'

/**
 * «Световое поле» — медленно дрейфующие световые орбы на глубоком тёмном фоне.
 * Единственный «фоновый» слой сайта: canvas + лёгкая точечная сетка поверх.
 * Рисуется один раз на requestAnimationFrame, останавливается вне вьюпорта
 * и при prefers-reduced-motion отдаёт статичный кадр.
 */
const Background = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

        const orbs = [
            { hue: [77, 107, 254], r: 0.55, x: 0.22, y: 0.3, ax: 0.09, ay: 0.07, sx: 0.00011, sy: 0.00008, phase: 0.0 },
            { hue: [124, 92, 255], r: 0.48, x: 0.78, y: 0.22, ax: 0.08, ay: 0.1, sx: 0.00009, sy: 0.00012, phase: 1.8 },
            { hue: [14, 165, 233], r: 0.5, x: 0.62, y: 0.78, ax: 0.11, ay: 0.08, sx: 0.00007, sy: 0.0001, phase: 3.4 },
            { hue: [37, 99, 235], r: 0.42, x: 0.18, y: 0.85, ax: 0.07, ay: 0.06, sx: 0.00012, sy: 0.00009, phase: 4.6 },
            { hue: [99, 102, 241], r: 0.38, x: 0.5, y: 0.5, ax: 0.13, ay: 0.11, sx: 0.00006, sy: 0.00007, phase: 2.5 },
        ]

        let width = 0
        let height = 0
        let raf = 0
        let running = true

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
            width = canvas.clientWidth
            height = canvas.clientHeight
            canvas.width = Math.round(width * dpr)
            canvas.height = Math.round(height * dpr)
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }

        const draw = (time) => {
            ctx.clearRect(0, 0, width, height)
            ctx.globalCompositeOperation = 'lighter'

            const base = Math.min(width, height)
            for (const orb of orbs) {
                const px = (orb.x + Math.sin(time * orb.sx + orb.phase) * orb.ax) * width
                const py = (orb.y + Math.cos(time * orb.sy + orb.phase) * orb.ay) * height
                const radius = orb.r * base
                const [r, g, b] = orb.hue
                const gradient = ctx.createRadialGradient(px, py, 0, px, py, radius)
                gradient.addColorStop(0, `rgba(${r},${g},${b},0.16)`)
                gradient.addColorStop(0.55, `rgba(${r},${g},${b},0.05)`)
                gradient.addColorStop(1, `rgba(${r},${g},${b},0)`)
                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(px, py, radius, 0, Math.PI * 2)
                ctx.fill()
            }
            ctx.globalCompositeOperation = 'source-over'
        }

        const loop = (time) => {
            if (!running) return
            draw(time)
            raf = requestAnimationFrame(loop)
        }

        const start = () => {
            cancelAnimationFrame(raf)
            if (reduceMotion.matches) {
                draw(1200) // один спокойный статичный кадр
                return
            }
            raf = requestAnimationFrame(loop)
        }

        const onVisibility = () => {
            running = !document.hidden
            if (running) start()
        }

        resize()
        start()

        window.addEventListener('resize', resize)
        document.addEventListener('visibilitychange', onVisibility)
        reduceMotion.addEventListener('change', start)

        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', resize)
            document.removeEventListener('visibilitychange', onVisibility)
            reduceMotion.removeEventListener('change', start)
        }
    }, [])

    return (
        <div className="bg-field" aria-hidden="true">
            <canvas ref={canvasRef} className="bg-field-canvas" />
            <div className="bg-field-grid" />
        </div>
    )
}

export default Background
