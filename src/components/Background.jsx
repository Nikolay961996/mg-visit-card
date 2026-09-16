import { useEffect, useRef } from 'react'

/**
 * «Световое поле» — медленно движущийся фон в духе deepseek.com/platform:
 * дрейфующие орбы + два широких авроральных потока, перетекающих через экран,
 * и едва заметный дрейф точечной сетки (см. .bg-field-grid в App.css).
 * Рисуется на requestAnimationFrame, останавливается вне вьюпорта
 * и при prefers-reduced-motion отдаёт статичный кадр.
 */
const Background = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

        // Орбы: мягкие световые пятна на длинных синусоидных орбитах
        const orbs = [
            { hue: [77, 107, 254], r: 0.6, x: 0.22, y: 0.3, ax: 0.16, ay: 0.12, sx: 0.00135, sy: 0.0011, phase: 0.0 },
            { hue: [124, 92, 255], r: 0.52, x: 0.78, y: 0.22, ax: 0.14, ay: 0.16, sx: 0.0011, sy: 0.00135, phase: 1.8 },
            { hue: [14, 165, 233], r: 0.55, x: 0.62, y: 0.78, ax: 0.18, ay: 0.13, sx: 0.0009, sy: 0.0011, phase: 3.4 },
            { hue: [37, 99, 235], r: 0.46, x: 0.18, y: 0.85, ax: 0.13, ay: 0.11, sx: 0.00125, sy: 0.001, phase: 4.6 },
        ]

        // Авроральные потоки: вытянутые световые ленты, медленно
        // перетекающие через экран с лёгким покачиванием наклона
        const bands = [
            { hue: [77, 107, 254], x: 0.5, y: 0.32, ax: 0.22, ay: 0.1, sx: 0.00065, sy: 0.00085, phase: 0.9, angle: -0.42, sway: 0.14, swaySpeed: 0.0008, len: 0.95, thick: 0.16, alpha: 0.10 },
            { hue: [124, 92, 255], x: 0.45, y: 0.68, ax: 0.24, ay: 0.12, sx: 0.00055, sy: 0.00075, phase: 3.1, angle: 0.5, sway: 0.12, swaySpeed: 0.0007, len: 1.0, thick: 0.13, alpha: 0.07 },
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

            for (const band of bands) {
                const px = (band.x + Math.sin(time * band.sx + band.phase) * band.ax) * width
                const py = (band.y + Math.cos(time * band.sy + band.phase) * band.ay) * height
                const angle = band.angle + Math.sin(time * band.swaySpeed + band.phase * 2) * band.sway
                const radius = band.len * base
                const [r, g, b] = band.hue

                ctx.save()
                ctx.translate(px, py)
                ctx.rotate(angle)
                ctx.scale(1, band.thick / band.len)
                const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius)
                gradient.addColorStop(0, `rgba(${r},${g},${b},${band.alpha})`)
                gradient.addColorStop(0.6, `rgba(${r},${g},${b},${band.alpha * 0.4})`)
                gradient.addColorStop(1, `rgba(${r},${g},${b},0)`)
                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(0, 0, radius, 0, Math.PI * 2)
                ctx.fill()
                ctx.restore()
            }

            for (const orb of orbs) {
                const px = (orb.x + Math.sin(time * orb.sx + orb.phase) * orb.ax) * width
                const py = (orb.y + Math.cos(time * orb.sy + orb.phase) * orb.ay) * height
                const radius = orb.r * base
                const [r, g, b] = orb.hue
                const gradient = ctx.createRadialGradient(px, py, 0, px, py, radius)
                gradient.addColorStop(0, `rgba(${r},${g},${b},0.15)`)
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
