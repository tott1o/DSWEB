import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Syllabus from './pages/Syllabus';
import Cycle1 from './pages/Cycle1';
import Cycle2 from './pages/Cycle2';
import Cycle3 from './pages/Cycle3';
import './styles/App.css';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/syllabus" element={<Syllabus />} />
                    <Route path="/cycle1" element={<Cycle1 />} />
                    <Route path="/cycle2" element={<Cycle2 />} />
                    <Route path="/cycle3" element={<Cycle3 />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
