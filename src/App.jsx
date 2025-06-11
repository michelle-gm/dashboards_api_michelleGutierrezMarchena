import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Overview from "./pages/Overview";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="overview" element={<Overview />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
