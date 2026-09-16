---
name: MadGeeks — визитка
description: «Живой инженерный терминал»: тёмная инженерная витрина команды со световым canvas-полем, typewriter-hero и одним электрическим голубым акцентом.
colors:
  bg: "#070b14"
  bg-deep: "#05080f"
  bg-panel: "#0a1020"
  line: "rgba(148, 163, 184, 0.14)"
  line-strong: "rgba(148, 163, 184, 0.28)"
  text: "#e7ecf5"
  text-dim: "#9aa7bd"
  accent: "#4d6bfe"
  accent-bright: "#6d86ff"
  accent-soft: "rgba(77, 107, 254, 0.14)"
typography:
  display:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.9rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.35rem, 2.6vw, 1.8rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, 'Cascadia Code', monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "14px"
  full: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "15px 38px"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "{colors.accent-bright}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "15px 38px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "14px 36px"
  button-ghost-hover:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "14px 36px"
  chip-mono:
    backgroundColor: "rgba(10, 16, 32, 0.55)"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: "0.7rem 1.3rem"
    typography: "{typography.label}"
  card:
    backgroundColor: "{colors.bg-panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
---

<!-- impeccable:design-schema 1 -->

# Design System: MadGeeks

## Overview

**Creative North Star: "Живой инженерный терминал"**

Это тёмная инженерная витрина, а не светлая карточная лендинг-страница. Сложная разработка показана как спокойная, точная работа машины: глубокий индиго-чёрный фон, над которым дрейфует «дышащее» световое поле из мягких орбов и тонкой точечной сетки. Поверх поля — печатающийся заголовок с мигающим курсором: сайт «печатает» то, что команда делает. Настроение заимствовано у deepseek.com/platform, но визуальный язык собственный.

Плотность средняя, ритм — широкие секции (120px вертикальных отступов) с редкими карточками в тонких 1px-рамках. Материал — матовая тёмная панель, глубина достигается не тенями, а слоением фоновых тонов и свечением только у акцента. Изображения — только реальные ассеты владельцев: иллюстрации собственных кейсов и фотографии команды; стоковая графика запрещена.

Интерфейс сдержанно отзывчивый: состояния наведения — сдвиги на 4–6px, смена рамки на акцентную, растворение blur при появлении блоков. Никаких резких движений и декоративных эффектов ради эффекта — каждое движение либо несёт смысл (привлекает взгляд к CTA), либо повторяет механику терминала.

**Key Characteristics:**
- Глубокий тёмный индиго-чёрный фон (#070b14) с живым canvas-полем света за всем контентом
- Ровно один акцент — электрический голубой (#4d6bfe); свечение только у него
- Manrope (самохостинг, 400–800) для интерфейса, JetBrains Mono для «терминальных» подписей, тегов и печатающегося текста
- Тонкие 1px-рамки на едином радиусе 14px; никаких тяжёлых теней и градиентных кнопок
- Единый язык появления: Reveal (подъём + blur-растворение) + typewriter + медленный дрейф орбов
- Доказательства вместо обещаний: реальные кейсы и реальные фото команды

## Colors

Палитра — глубокая нейтральная тёмная гамма с холодным подтоном и единственным синим акцентом; оттенки тёплых цветов и второй акцент отсутствуют.

### Primary
- **Electric Blue** ({colors.accent}): единственный акцент системы. Заливка основных CTA, маркеры списков, иконки, подчёркивание навигации, каретка typewriter, орбы canvas-поля. Его редкость — смысл: на любом экране акцент занимает мало площади.
- **Bright Electric Blue** ({colors.accent-bright}): состояние hover/свечения акцента и «терминальный» текст (печатаемая строка, теги кейсов, роли в команде, иконки контактов). Всегда производное от Electric Blue, никогда самостоятельный акцент.
- **Soft Accent Wash** ({colors.accent-soft}): полупрозрачная заливка (rgba(77, 107, 254, 0.14)) для иконочных подложек, hover-подсветки строк и заливки ghost-кнопки.

### Neutral
- **Terminal Ink** ({colors.bg}): базовый фон страницы. Именно этот цвет «чернее неба» и держит терминальное настроение.
- **Deep Terminal** ({colors.bg-deep}): самый тёмный слой — трек скроллбара, низ радиального градиента фона, подложка футера.
- **Panel Ink** ({colors.bg-panel}): фон карточек (кейсы, члены команды) и панельных секций; на ступень светлее фона.
- **Frost Text** ({colors.text}): основной текст (#e7ecf5) — почти белый с холодным оттенком.
- **Dim Frost** ({colors.text-dim}): вторичный текст, подписи, подзаголовки (#9aa7bd).
- **Hairline** ({colors.line}): 1px-рамки и разделители — slate с 14% непрозрачности.
- **Hairline Strong** ({colors.line-strong}): усиленная рамка для ghost-кнопок, аватаров, скролл-подсказки — slate с 28% непрозрачности.

### Named Rules
**The One Voice Rule.** В системе ровно один акцентный цвет. Не вводить второй акцент, не переключать акцент по секциям, не использовать тёплые акцентные цвета. Если элемент «хочет» новый цвет — ему нужна другая роль (текст, рамка, заливка панели), а не другой цвет.

**The Accent Rarity Rule.** Электрический голубой — на малой площади: кнопки, маркеры, иконки, каретка. Фоны секций и тексты остаются нейтральными. Акцент, заливший пол-экрана, — ошибка.

## Typography

**Display Font:** Manrope (самохостинговый woff2, подмножества cyrillic+latin, font-display: swap; фолбэк: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)
**Body Font:** Manrope (те же начертания 400/600)
**Label/Mono Font:** JetBrains Mono (самохостинговый woff2, 400/500, подмножества cyrillic+latin)

**Character:** Manrope — плотный, уверенный гротеск с выразительной жирностью 800 и плотным трекингом (−0.02…−0.03em): голос инженерной уверенности. JetBrains Mono — моноширинный «терминальный» голос: всё, что печатается, помечается или является данными (теги, роли, подписи контактов, маркеры списков, копирайт). Пары хватает на всё; третий шрифт не нужен.

### Hierarchy
- **Display** (800, clamp(2.6rem, 6vw, 4.6rem), lh 1.05, ls −0.03em): заголовок hero. Единственный уровень такого размера.
- **Headline** (800, clamp(2rem, 4vw, 2.9rem), lh 1.1, ls −0.025em): заголовки секций и контактного блока (contact-title до 3.4rem — вариация display для финала).
- **Title** (800, clamp(1.35rem, 2.6vw, 1.8rem), lh 1.2): названия услуг, карточек кейсов, имён.
- **Body** (400/600, 0.95–1.2rem, lh 1.6): описания, подзаголовки hero, тексты карточек. Длина строки — до ~46em (сервисы), hero-sub — до 34em.
- **Label** (JetBrains Mono 500/400, 0.78–0.95rem, ls 0.02em, регистр как есть): typewriter-строка hero (до clamp(1.9rem)), теги кейсов, форматные и скилл-чипы, подписи контактов, маркеры «»/«+», «scroll»-подсказка, копирайт.

### Named Rules
**The Mono Is Data Rule.** JetBrains Mono — только за «терминальный» контент: данные, метки, маркеры, печатаемый текст. Обычные предложения и заголовки — всегда Manrope.

**The Self-Host Rule.** Оба шрифта подключены локально из src/assets/fonts/*.woff2 в unicode-подмножествах cyrillic+latin с font-display: swap. Не подключать Google Fonts/CDN и не добавлять начертания вне 400/600/700/800 (Manrope) и 400/500 (JetBrains Mono).

## Layout

Контентный контейнер — max-width 1180px, горизонтальные отступы 24px, по центру. Секции — вертикальные отступы 120px (88px на ≤900px). Фиксированный header высотой 72px поверх всего; hero занимает 100vh с padding-top под header.

Сетки: кейсы и команда — 2 колонки (gap 28px); преимущества — 2×2 с hairline-разделителями (правая рамка у нечётных, нижняя у всех); список услуг — вертикальный, строки на grid `64px 1fr auto` со стрелкой; боли и контакты — узкая центральная колонка (780px / 460px); достижения — 2-колоночный список в рамке. Ритм внутри карточек — 16–32px.

Брейкпоинты: 900px (все 2-колоночные сетки схлопываются в одну, секции 88px, стрелка услуг скрывается) и 640px (навигация в header скрывается, CTA в hero на всю ширину, scroll-hint скрывается, member-head вертикально). Промежуточных брейкпоинтов нет; плавность масштаба — через clamp() в типографике.

## Elevation & Depth

Теней в системе почти нет — это плоский, тонально слоеный мир. Глубина строится тремя способами: (1) слоением фоновых тонов Deep Terminal → Terminal Ink → Panel Ink; (2) фиксированным canvas-полем света, горячие зоны которого визуально «далеко» от панелей; (3) свечением акцента.

Единственная реальная тень — отклик интерактива, а не структура:

### Shadow Vocabulary
- **Accent Lift** (`box-shadow: 0 12px 32px rgba(77, 107, 254, 0.35)`): только hover основной кнопки, вместе с подъёмом на 2px.

### Named Rules
**The Flat-By-Default Rule.** Поверхности плоские в покое. Тени появляются только как отклик состояния (hover кнопки) и никогда как оформление карточки. Подъём карточек при hover — через transform (translateY(−4px)) и смену рамки, без тени.

## Shapes

Форм-язык — «панель прибора»: прямоугольные формы с мягкими углами и тонкой 1px-рамкой. Базовый радиус — 14px (`--radius`): кнопки, карточки, строки контактов, строки болей, блок достижений. Внутри него: 12px для иконочных подложек преимуществ, 8px для скилл-чипов и радиуса focus-outline. Чипы форматов — полностью скруглённые капсулы (999px). Аватары — круг (50%) в рамке Hairline Strong.

Рамки — всегда 1px, цвет Hairline по умолчанию; hover переводит рамку в полупрозрачный акцент (`rgba(109, 134, 255, 0.5)`). Никаких двойных рамок, outset-рамок и скруглений больше 14px (капсулы — исключение для чипов). Никаких наклонов, маскотов и декоративной геометрии.

## Components

### Buttons
- **Shape:** мягкие углы панели (14px), единый размер в паре с ghost.
- **Primary:** заливка Electric Blue, белый текст, Manrope 700, 15px 38px. Единственная кнопка с тенью — и только в hover (Accent Lift + translateY(−2px), active возвращает translateY(0)).
- **Hover / Focus:** фон → Bright Electric Blue; переходы 0.25s ease. Focus-visible — глобальное кольцо: outline 2px Bright Electric Blue, offset 3px.
- **Ghost:** прозрачный фон, рамка Hairline Strong, текст Frost Text, 14px 36px; hover — рамка Bright Electric Blue + заливка Soft Accent Wash, без подъёма.

### Chips
- **Style:** JetBrains Mono. Форматные чипы — капсулы (999px) с рамкой Hairline Strong и полупрозрачной панелью; скилл-чипы — 8px радиус, заливка rgba(148,163,184,0.08), рамка Hairline, текст Dim Frost.
- **State:** статичные, не интерактивные; hover-эффекты не предусмотрены.

### Cards / Containers
- **Corner Style:** 14px; аватар — круг.
- **Background:** Panel Ink (кейсы, команда) либо полупрозрачная панель rgba(10, 16, 32, 0.55) (боли, контакты, достижения) поверх светового поля.
- **Shadow Strategy:** плоские; см. The Flat-By-Default Rule.
- **Border:** 1px Hairline; hover → rgba(109, 134, 255, 0.5).
- **Internal Padding:** 24–40px (case-body 1.5rem 1.6rem 1.75rem, team-member 2rem, достижения 2.25rem 2.5rem).
- **Особое поведение кейсов:** медиа 220px с object-fit: cover; в покое фото приглушено (saturate(0.85)), при hover — лёгкий зум scale(1.05) и полная насыщенность (переход 0.5s). Фото команды в покое — grayscale(0.6), при hover — цвет (0.4s). Эти фильтры — часть языка, не настройка по вкусу.

### Inputs / Fields
- Формы ввода на сайте нет (форма заявки — неотправляющаяся заглушка). Поле ввода не документируется; если появится — наследовать рамку Hairline, радиус 14px, focus-кольцо Bright Electric Blue.

### Navigation
- **Header:** фиксированный, 72px, прозрачный до скролла; после скролла — фон rgba(5, 8, 15, 0.82) + нижняя рамка Hairline (переход 0.35s). Логотип — Manrope 800 с акцентным фрагментом (logo-accent — Bright Electric Blue), клик скроллит наверх.
- **Ссылки:** Manrope 600, 0.95rem, Dim Frost; hover — Frost Text + подчёркивание 2px Electric Blue, выезжающее слева (0.3s). Активного состояния нет (якоря, одна страница).
- **Mobile (≤640px):** навигация скрыта, остаются логотип и CTA.

### Signature: Typewriter Hero
Печатающаяся строка в hero («Делаем сложное ПО под железо / высоконагруженные веб-платформы / …»): JetBrains Mono 500, Bright Electric Blue, мигающая каретка (caret-blink, 1.05s steps(1)). Тайминги: печать 55ms/символ (+случайность до 40ms), стирание 26ms/символ, пауза 2100ms. Доступность: строка aria-hidden, полный текст для скринридеров — в aria-label заголовка h1. При prefers-reduced-motion анимация каретки отключается.

### Signature: Световое поле (Background)
Фиксированный фоновый слой (z-index −1, pointer-events: none): canvas с пятью медленно дрейфующими орбами (hue 77,107,254 / 124,92,255 / 14,165,233 / 37,99,235 / 99,102,241; composite 'lighter'; dpr ≤ 1.5) + точечная сетка 34px с радиальной маской. Рисуется на requestAnimationFrame, останавливается при скрытии вкладки; при prefers-reduced-motion — один статичный кадр. Это единственный фоновый слой сайта.

### Signature: Reveal
Единый компонент появления: initial {opacity 0, translateY 28, blur 6px} → whileInView, duration 0.7s, ease [0.16, 1, 0.3, 1], viewport once с margin −80px, каскадные delay 0.08–0.24. Любой новый блок страницы появляется через Reveal, а не через собственную анимацию.

## Do's and Don'ts

### Do:
- **Do** держать фон Terminal Ink (#070b14) и строить глубину слоями тонов Panel Ink / Deep Terminal, а не тенями и не overlay-градиентами поверх контента.
- **Do** использовать единственный акцент Electric Blue (#4d6bfe) и его производные (bright/soft) для всех интерактивных откликов.
- **Do** писать метки, теги, данные и маркеры JetBrains Mono, а интерфейсный текст — Manrope.
- **Do** рамки 1px Hairline и радиус 14px для всех новых карточек, строк и кнопок; hover — смена рамки на rgba(109, 134, 255, 0.5) плюс микросдвиг.
- **Do** появление новых блоков через Reveal (подъём 28px + blur 6px → 0.7s, ease [0.16, 1, 0.3, 1]) и соблюдать prefers-reduced-motion: статичный кадр поля, отключённые анимации каретки/подсказки/переходов.
- **Do** тёмные браузерные поверхности в тон миру: скроллбар (трек Deep Terminal, ползунок #1c2740, hover #2a3a5e), selection — rgba(77, 107, 254, 0.35) с белым текстом, focus-visible — outline 2px #6d86ff, offset 3px.
- **Do** использовать для кейсов и команды только реальные ассеты владельцев (src/assets/images/cases, src/assets/images/team) и сохранять provenance: иллюстрации кейсов нарисованы командой, фото — реальные фотографии членов команды; каждый новый растр — с зафиксированным источником.
- **Do** проверять контраст: Dim Frost на Terminal Ink держится для вторичного текста, основной текст — только Frost Text; акцентный текст Bright Electric Blue — только крупным шрифтом или в элементах с запасом по контрасту.

### Don't:
- **Don't** вводить светлую тему, светлые секции или «карточную витрину»: мир строго тёмный, светлое разрешено только тексту и каретке.
- **Don't** добавлять второй акцентный цвет, градиентные заливки кнопок, тёплые оттенки и цветные иконки вне акцентной пары.
- **Don't** оставлять тени на карточках в покое и добавлять новые тени — Accent Lift существует только у hover основной кнопки.
- **Don't** подключать шрифты с CDN или добавлять начертания/шрифты вне заявленных (Manrope 400–800, JetBrains Mono 400/500, самохостинг woff2).
- **Don't** заменять реальные кейсы/фото стоковыми изображениями или сгенерированными людьми/продуктами; provenance растров нельзя обесценивать.
- **Don't** изобретать новые анимации появления в обход Reveal и плодить постоянные (не откликающиеся) анимации: движение — либо механика терминала, либо отклик на hover.
- **Don't** пренебрегать prefers-reduced-motion: typewriter, поле, Reveal и hover-переходы обязаны иметь статичное поведение.
