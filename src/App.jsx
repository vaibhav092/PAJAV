import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About.jsx';
import Team from './components/Team.jsx';
import Layout from './Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />  
                    <Route path="about" element={<About />} />
                    <Route path="team" element={<Team />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
