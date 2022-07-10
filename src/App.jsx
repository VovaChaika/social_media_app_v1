import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import Users from "./components/users/Users";
import About from "./components/about/About";
import Games from "./components/games/Games";

function App() {
    return (
        <div className="content">

            <Header/>

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/dialogs'} element={<Dialogs/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/games'} element={<Games/>}/>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
            </BrowserRouter>

            <Footer/>

        </div>
    );
}

export default App;
