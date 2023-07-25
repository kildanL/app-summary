import "./App.scss";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Main />
                <About />
                <Skills />
            </main>
        </>
    );
}

export default App;
