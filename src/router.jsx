import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Profilefun } from "./pages/profile";
import {App, Head2, Poster,Findyourdrive,BrowserSlider,Roundslider,Citiesslider,Fueldream,BrowseExperience,Bookorbecome,
Accordian,Footer} from '../src/App'
import { useState } from "react";
function Routing () {
    const [yuui, setyuui]=useState(true)
    return(
        <BrowserRouter>
        <Routes>
            <Route
            path="/profile"
            element={
               
                <Profilefun/>
               
            }
            />
        </Routes>
        </BrowserRouter>
    )
}