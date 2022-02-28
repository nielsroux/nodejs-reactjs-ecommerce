import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from "./screens/HomeScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="logo" href="/">
                            Slein
                        </a>
                    </div>
                    <div>
                        <a href="/panier">Panier</a>
                        <a href="/connexion">Connexion</a>
                    </div>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomeScreen/>} exact></Route>
                        <Route path="/product/:id" element={<ProductScreen/>}></Route>
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Routes>
                </main>
                <footer className="row center">Tous droits réservés</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
