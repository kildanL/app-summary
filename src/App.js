import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Main />
                <About />
                <Skills />
                <Services />
                <Contact />
            </main>
        </>
    );
}

export default App;
