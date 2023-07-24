import "./App.scss";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Main />
                <About />
            </main>
        </>
    );
}

export default App;
