import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div className="App">
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
