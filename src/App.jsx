import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Services from './components/Services'
import Advantages from './components/Advantages'
import Cases from './components/Cases'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/next"

function App() {
    return (
        <div className="App">
            <Analytics/>
            <Header />
            <Hero />
            <PainPoints />
            <Services />
            <Advantages />
            <Cases />
            <Team />
            <Contact />
            <Footer />
        </div>
    )
}

export default App