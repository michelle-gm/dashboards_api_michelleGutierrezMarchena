import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

function Layout() {
    return (
        <div className="app">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="main-body">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
