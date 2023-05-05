import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Description from "./components/description/Description";
import Main from "./components/main/Main";


function App() {
    return (
        <div className="App container-xl d-flex flex-column h-100">
            <Header/>
            <Routes>
                <Route path="/description" element={<Description/>}/>
                <Route path="/" element={<Main/>}/>
                <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
