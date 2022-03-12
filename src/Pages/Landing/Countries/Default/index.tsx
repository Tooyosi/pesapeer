import Footer from "components/common/Footer";
import Header from "components/common/Header";
import BorderlessComponent from "./Components/BorderlessComponent";
import FeaturesComponent from "./Components/FeaturesComponent";
import GetStarted from "./Components/GetStarted";
import { TopComponent } from "./Components/TopComponent";
import TrustedComponent from "./Components/TrustedComponent";


import React from 'react'

const DefaultLanding:React.FC<any> = () => {
    return (
        <div id="landing">
            <Header />
            <TopComponent />
            <FeaturesComponent />
            <BorderlessComponent />
            <GetStarted />
            <TrustedComponent />
            <Footer />
        </div>
    )
}

export default DefaultLanding
