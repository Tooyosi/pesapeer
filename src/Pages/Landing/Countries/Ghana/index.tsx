import Footer from "components/common/Footer";
import Header from "components/common/Header";
import {TopComponent} from "./Components/TopComponent";


import React from 'react'

const GhanaLanding:React.FC<any> = () => {
    return (
        <div id="ghana-landing">
            <Header />
            <TopComponent />
            <Footer />
        </div>
    )
}

export default GhanaLanding
