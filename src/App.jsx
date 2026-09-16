import Header from './components/Header'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Services from './components/Services'
import Advantages from './components/Advantages'
import Cases from './components/Cases'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'

function App() {
    return (
        <div className="App">
            <Background />
            <Header />
            <main>
                <Hero />
                <PainPoints />
                <Services />
                <Advantages />
                <Cases />
                <Team />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
